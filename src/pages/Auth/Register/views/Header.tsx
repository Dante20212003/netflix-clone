import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NetflixLogo from "@/assets/img/netflix.svg";
import styles from "@/assets/styles/Auth/Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img
          src={NetflixLogo}
          className={styles.netlix_logo}
          alt="logo"
          onClick={() => navigate("/")}
        />

        <Link to="/login" className={styles.link}>Iniciar sesion</Link>
      </div>
    </header>
  );
};
