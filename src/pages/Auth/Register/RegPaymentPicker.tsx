import { useSelector } from "react-redux";
import { AiOutlineLock, AiOutlineCheck, AiOutlineRight } from "react-icons/ai";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { RootState } from "@/store";
import { plans } from "@/data";
import styles from "@/assets/styles/Auth/RegPaymentPicker.module.css";
import { useAuth } from "@/hooks";

export const RegPaymentPicker = () => {
  const { isLoading, onPayment } = useAuth();
  const { plan } = useSelector((state: RootState) => state.auth);
  const planActual = plans[plan];

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

        <button
          disabled={isLoading}
          className={styles.payment}
          onClick={() => onPayment()}
        >
          <p className={styles.textHelp}>Encriptado de extremo a extremo. 🔒</p>
          <div className={styles.methods}>
            <p>Tarjeta de credito o debito</p>
            <div>
              <RiVisaFill size={30} color="blue" />
              <FaCcMastercard size={30} color="black" />
              <SiAmericanexpress size={30} color="red" />
            </div>
          </div>

          <AiOutlineRight size={30} color="ccc" />
        </button>
      </div>
    </>
  );
};
