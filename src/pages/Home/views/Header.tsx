import { useNavigate } from "react-router-dom";
import { SuscriptionHomePage } from "../components/SuscriptionHomePage";
import { Select } from "@/components/Select";
import NetflixLogo from "@/assets/img/netflix.svg";
import styles from "@/assets/styles/Home/HomePage.module.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.netflix_banner}>
      <header className={`${styles.header} container`}>
        <img
          src={NetflixLogo}
          className={styles.netlix_logo}
          alt="logo"
          onClick={() => navigate("/")}
        />

        <div className={styles.header_actions}>
          <Select />

          <button className={styles.button} onClick={() => navigate("login")}>
            Iniciar sesion
          </button>
        </div>
      </header>

      <div className={`${styles.info} ${styles.container_info}`}>
        <div className={styles.info_content}>
          <SuscriptionHomePage />
        </div>
      </div>
    </div>
  );
};
