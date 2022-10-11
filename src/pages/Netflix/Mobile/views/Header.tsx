import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import styles from "@/assets/styles/Netflix/Mobile/Header.module.css";
import { Link } from "react-router-dom";
import { useNetflix } from "@/hooks/useNetflix";

export const Header = () => {
  const { ref, inView } = useInView({ initialInView: true });
  const { onToggleModal } = useNetflix();

  return (
    <div className={styles.netflix_banner}>
      <header ref={ref} className={`${styles.header} container`}>
        <img src="/netflix.svg" className={styles.netlix_logo} alt="logo" />

        <div className={styles.header_actions}>
          <FiSearch size={25} color="FFF" />

          <img src="/img/profile/1.png" alt="" className={styles.profile} />
        </div>
      </header>

      <nav
        className={`${styles.nav} ${
          !inView ? styles.opacity : styles.normalBg
        }`}
      >
        <Link to="/category/Series" className={styles.enlace}>
          Series
        </Link>
        <Link to="/category/Peliculas" className={styles.enlace}>
          Peliculas
        </Link>
        <a className={styles.enlace} onClick={() => onToggleModal()}>
          Categorias
        </a>
      </nav>

      <div className={`${styles.info} ${!inView && styles.fix_navBar}`}>
        <div className={styles.icons}>
          <AiOutlinePlus size={20} color="FFF" />

          <span>Mi lista</span>
        </div>

        <div className={styles.top}>
          <div className={styles.topDiv}>
            <div className={styles.topContent}>
              <small>TOP</small>
              <span>10</span>
            </div>

            <p>N.° 1 en series hoy</p>
          </div>

          <button className={styles.button}>
            <FaPlay size={15} color="000" />
            <span>Reproducir</span>
          </button>
        </div>

        <div className={styles.icons}>
          <AiOutlineInfoCircle size={20} color="FFF" />

          <span>Informacion</span>
        </div>
      </div>
    </div>
  );
};
