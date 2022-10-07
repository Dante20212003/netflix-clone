import { Header } from "./views/Header";
import styles from "@/assets/styles/Auth/RegRegistrationPage.module.css";
import { Link } from "react-router-dom";
import { Button } from "@/styled-components";

export const RegRegistrationPage = () => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src="/img/devicesReg.png" alt="" />
        <span>Paso 1 de 3</span>

        <h1>Completa la configuración de tu cuenta</h1>

        <p>
          Netflix está personalizado para ti. Crea una contraseña para ver
          Netflix en cualquier dispositivo, cuando quieras.
        </p>

        <Link to="/signup/planform">
          <Button>Siguiente</Button>
        </Link>
      </div>
    </>
  );
};
