import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import NeflixLogo from "@/assets/img/netflix.svg";
import styles from "@/assets/styles/Netflix/Browser/HeaderBrowser.module.scss";
import { IoIosNotifications } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const HeaderBrowser = () => {
  return (
    <div className={styles.netflix_banner}>
      <header className={`${styles.header} container`}>
        <img src={NeflixLogo} className={styles.netlix_logo} alt="logo" />

        <nav className={styles.nav}>
          <Link to="/" className={styles.enlace}>
            Inicio
          </Link>
          <Link to="/" className={styles.enlace}>
            Series
          </Link>
          <Link to="/" className={styles.enlace}>
            Peliculas
          </Link>
          <Link to="/" className={styles.enlace}>
            Novedades populares
          </Link>
          <Link to="/" className={styles.enlace}>
            Mi lista
          </Link>
          <Link to="/" className={styles.enlace}>
            Explorar por idiomas
          </Link>
        </nav>

        <div className={styles.header_actions}>
          <FiSearch
            size={25}
            color="FFF" /* onClick={() => onToggleSearch()} */
          />

          <IoIosNotifications size={25} color="FFF" />
          <img
            src="/img/profile/1.png"
            alt=""
            className={styles.profile}
            /* onClick={() => onToggleConfig()} */
          />
        </div>
      </header>

      <div className={styles.headerMain}>
        <img src="/img/movies/vigilante.png" alt="" />
        <p>
          Bobby Cannavale y Naomi Watts encabezan el elenco estelar de esta
          inquietante serie de intriga psicológica basada en hechos reales
          ocurridos en las afueras de Nueva Jersey.
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>
            <FaPlay size={20} color="000" />
            <span>Reproducir</span>
          </button>

          <button
            className={styles.button}
            style={{ backgroundColor: "#6d6d6d" }}
          >
            <AiOutlineInfoCircle size={20} color="FFF" />

            <span style={{ color: "#fff" }}>Mas informacion</span>
          </button>
        </div>
      </div>
    </div>
  );
};
