import React, { useCallback, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsCollectionPlay, BsEmojiLaughing } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
import styles from "@/assets/styles/Netflix/Mobile/NetflixLayout.module.css";
import { Modal } from "@/pages/Netflix/components/Modal";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const NetflixLayout = () => {
  const [y, setY] = useState(window.scrollY);
  const [inScroll, setInScroll] = useState(false);
  const { open: sidebar } = useSelector((state: RootState) => state.netflix);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setInScroll(false);
      } else if (y < window.scrollY) {
        setInScroll(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    console.log(inScroll);
  }, [inScroll]);

  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebar]);

  return (
    <>
      {sidebar && <Modal />}

      <Outlet />

      <svg width="1em" height="1em">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#FC466B" offset="0%" />
          <stop stopColor="#3F5EFB" offset="100%" />
        </linearGradient>
      </svg>

      <div className={styles.btnRandom}>
        <FaRandom
          size={20}
          className={styles.iconRan}
          style={{ fill: "url(#blue-gradient)" }}
        />

        <p className={`${inScroll ? styles.anim : styles.animExit}`}>
          Quiero algo sorpresa
        </p>
      </div>

      <div className={styles.menuBottom}>
        <div className={styles.item}>
          <AiFillHome size={25} />
          <span>Inicio</span>
        </div>
        <div className={styles.item}>
          <IoGameControllerOutline size={25} />
          <span>Juegos</span>
        </div>
        <div className={styles.item}>
          <BsCollectionPlay size={25} />
          <span>Nuevo y Popular</span>
        </div>
        <div className={styles.item}>
          <BsEmojiLaughing size={25} />
          <span>Para reir</span>
        </div>
      </div>
    </>
  );
};
