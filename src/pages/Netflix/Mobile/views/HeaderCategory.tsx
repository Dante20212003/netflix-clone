import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSearch } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import {
  AiOutlinePlus,
  AiOutlineInfoCircle,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import styles from "@/assets/styles/Netflix/Mobile/HeaderCategory.module.css";
import { useNetflix } from "@/hooks/useNetflix";
import { IoMdArrowDropdown } from "react-icons/io";

export const HeaderCategory = () => {
  const params = useParams();
  const { ref, inView } = useInView({ initialInView: true });

  const { onSetCategory, onToggleConfig } = useNetflix();

  return (
    <div
      className={`${styles.netflix_banner} ${styles.item} ${
        params.category == "Peliculas" && styles.pelicula
      } ${params.category == "Series" && styles.serie}`}
    >
      <header ref={ref} className={`${styles.header} container`}>
        <div className={styles.iconArrow}>
          <Link to="/">
            <AiOutlineArrowLeft size={25} color="FFF" />
          </Link>
          <p>{params.category}</p>
        </div>

        <div className={styles.header_actions}>
          <FiSearch size={25} color="FFF" />

          <img
            src="/img/profile/1.png"
            alt=""
            className={styles.profile}
            onClick={() => onToggleConfig()}
          />
        </div>
      </header>

      <nav
        className={`${styles.nav} ${
          !inView ? styles.opacity : styles.normalBg
        }`}
      >
        {params.category == "Series" ? (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            exit={{ x: 100, opacity: 0 }}
            initial={{ x: 100, opacity: 0 }}
          >
            <Link
              to="/category/Series"
              className={styles.enlace}
              onClick={() => onSetCategory("Series")}
            >
              Series
              <IoMdArrowDropdown
                className={styles.enlaceArrow}
                size={20}
                color="FFF"
              />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            exit={{ x: 100, opacity: 0 }}
            initial={{ x: 100, opacity: 0.5 }}
          >
            <Link
              to="/category/Peliculas"
              className={styles.enlace}
              onClick={() => onSetCategory("Peliculas")}
            >
              Peliculas
              <IoMdArrowDropdown
                className={styles.enlaceArrow}
                size={20}
                color="FFF"
              />
            </Link>
          </motion.div>
        )}

        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.6 }}
          initial={{ opacity: 0 }}
        >
          <a className={styles.enlace} onClick={() => onSetCategory("")}>
            Categorias
            <IoMdArrowDropdown
              className={styles.enlaceArrow}
              size={20}
              color="FFF"
            />
          </a>
        </motion.div>
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

            <p>
              {params.category == "Series"
                ? "N.° 5 en series hoy"
                : "N.° 8 en peliculas hoy"}
            </p>
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
