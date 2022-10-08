import { Link, Navigate } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineCheck } from "react-icons/ai";
import { Button } from "@/styled-components";
import styles from "@/assets/styles/Auth/RegPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const RegPage = () => {
  const { email } = useSelector((state: RootState) => state.auth);
  if (!email && !localStorage.email) return <Navigate to="/signup/regform" />;

  return (
    <>
      <div className={styles.container}>
        <AiOutlineCheckCircle
          color="red"
          size={59}
          style={{ display: "block", marginBottom: "2rem" }}
          className={styles.icon}
        />
        <span>Paso 2 de 3</span>

        <h1>Selecciona tu plan.</h1>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Sin compromisos, cancela cuando quieras.</p>
        </div>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Todo Netflix a un bajo costo.</p>
        </div>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Disfruta sin límites en todos tus dispositivos.</p>
        </div>

        <Link to="/signup/planform">
          <Button>Siguiente</Button>
        </Link>
      </div>
    </>
  );
};
