import React from "react";
import { AiOutlineLock, AiOutlineCheck, AiOutlineRight } from "react-icons/ai";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

import { Header } from "./views/Header";
import styles from "@/assets/styles/Auth/RegPaymentPicker.module.css";
import { Link } from "react-router-dom";
import { plans } from "@/data";
import { Footer } from "@/components";
export const RegPaymentPicker = () => {
  /* TODO: AUTOMATIC DATA PLAN */
  const planSeleccionado = "premium";
  const planActual = plans[planSeleccionado];

  return (
    <>
      <div className={styles.container}>
        <AiOutlineLock
          color="red"
          size={45}
          style={{ display: "block", marginBottom: "5rem" }}
          className={styles.icon}
        />
        <span>Paso 3 de 3</span>

        <h1>Elige cómo quieres pagar</h1>

        <p>
          Recibirás el plan <span>{planActual[3]}</span>.
        </p>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Películas y series ilimitadas</p>
        </div>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Buena calidad de video ({planActual[2]})</p>
        </div>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Ve contenido en teléfono, tablet, computadora o TV</p>
        </div>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Cancela online fácilmente y cuando lo desees</p>
        </div>

        <Link to="/signup/creditoption" className={styles.payment}>
          <div className={styles.methods}>
            <p>Tarjeta de credito o debito</p>
            <div>
              <RiVisaFill size={30} color="blue" />
              <FaCcMastercard size={30} color="black" />
              <SiAmericanexpress size={30} color="red" />
            </div>
          </div>

          <AiOutlineRight size={30} color="ccc" />
        </Link>
      </div>
    </>
  );
};
