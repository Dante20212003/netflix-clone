import styles from "@/assets/styles/Footer.module.css";
import { Select } from "./Select";

interface Props {
  register?: boolean;
  login?: boolean;
}

export const Footer = ({ register = false, login = false }: Props) => {
  return (
    <div
      className={styles.footer}
      style={{
        backgroundColor: register ? "#F3F3F7" : login ? "rgb(0,0,0,.7)" : "",
      }}
    >
      <p className={styles.footer_header}>
        ¿Preguntas? Llama al +1 (408) 329-9558 (USA)
      </p>
      <div className={styles.footer_grid}>
        <div className={styles.footer_links}>
          <p>Preguntas frecuentes</p>
          <p>Relaciones con inversionistas</p>
          <p>Privacidad</p>
          <p>Prueba de velocidad</p>
        </div>

        <div className={styles.footer_links}>
          <p>Centro de ayuda</p>
          <p>Empleo</p>
          <p>Preferencias de cookies</p>
          <p>Avisos legales</p>
        </div>

        <div className={styles.footer_links}>
          <p>Centro de ayuda</p>
          <p>Empleo</p>
          <p>Preferencias de cookies</p>
          <p>Avisos legales</p>
        </div>

        <div className={styles.footer_links}>
          <p>Cuenta</p>
          <p>Formas de ver</p>
          <p>Información corporativa</p>
          <p>Solo en Netflix</p>
        </div>

        <div className={styles.footer_links}>
          <p>Prensa</p>
          <p>Términos de uso</p>
          <p>Contáctanos</p>
        </div>
      </div>

      <Select register={register} login={login}/>

      <p className={styles.footer_netflix}>Netflix Bolivia</p>
    </div>
  );
};
