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

const variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: { delay: 0, duration: 0.2 },
  },
  exit: {
    opacity: 0,
    x: -70,
    transition: { delay: 0, duration: 0.2 },
  },
};

export const HeaderCategory = () => {
  const params = useParams();
  const { ref, inView } = useInView();

  console.log(params);
  return (
    <div className={styles.netflix_banner}>
      <header ref={ref} className={`${styles.header} container`}>
        <div className={styles.iconArrow}>
          <AiOutlineArrowLeft size={25} color="FFF" />
          <p>{params.category}</p>
        </div>

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
        {params.category == "Series" ? (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            exit={{ x: 100, opacity: 0 }}
            initial={{ x: 100, opacity: 0 }}
          >
            <Link to="/category/Series" className={styles.enlace}>
              Series
            </Link>
          </motion.div>
        ) : (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.2 }}
            exit={{ x: 100, opacity: 0 }}
            initial={{ x: 100, opacity: 0 }}
          >
            <Link to="/category/Peliculas" className={styles.enlace}>
              Peliculas
            </Link>
          </motion.div>
        )}

        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.6 }}
          initial={{ opacity: 0 }}
        >
          <Link to="/category/Categorias" className={styles.enlace}>
            Categorias
          </Link>
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
