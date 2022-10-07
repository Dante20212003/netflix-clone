import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Footer, Input } from "@/components";
import { Header } from "./views/Header";
import styles from "@/assets/styles/Auth/RegCreditoPage.module.css";
import { formatCard } from "@/utilities";
import { plans } from "@/data";
import { Button } from "@/styled-components";

const formValidate = {
  nombre: {
    required: "Ingresa un nombre.",
  },
  apellido: {
    required: "Ingresa un nombre.",
  },
  nroTarjeta: {
    required: "Ingresa un numero de tarjeta.",
    minLength: {
      value: 14,
      message: "Ingresa un número de tarjeta de crédito válido.",
    },
  },
  fechaVencimiento: {
    required: "Ingresa un mes de vencimiento.",
  },
  cvv: {
    required: "Ingresa un código de seguridad (CVV).",
    minLength: {
      value: 3,
      message: "Ingresa un código CVV válido.",
    },
  },
};

interface FormValues {
  nombre: string;
  apellido: string;
  nroTarjeta: string;
  fechaVencimiento: string;
  cvv: string;
}
export const RegCreditoPage = () => {
  const navigate = useNavigate();

  const planSeleccionado = "premium";
  const planActual = plans[planSeleccionado];

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data);
    /* TODO: REALIZAR LA CREACION DE CUENTA */
    navigate("/signup");
  };

  useEffect(() => {
    setValue("nroTarjeta", formatCard(watch().nroTarjeta));
  }, [watch().nroTarjeta]);

  return (
    <>
      <div className={styles.container}>
        <span>Paso 1 de 3</span>
        <h1>Configura tu tarjeta de crédito o débito</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={!!errors.nombre ? styles.error : ""}
            style={{ marginBottom: "1.5rem" }}
          >
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="text"
                required
                autoComplete="off"
                {...register("nombre", formValidate.nombre)}
              />
              <label className={styles.label}>Nombre</label>
            </div>
            {!!errors.nombre && (
              <p className={styles.error_input}>{errors.nombre.message}</p>
            )}
          </div>

          <div
            className={!!errors.apellido ? styles.error : ""}
            style={{ marginBottom: "1.5rem" }}
          >
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="text"
                required
                autoComplete="off"
                {...register("apellido", formValidate.apellido)}
              />
              <label className={styles.label}>Apellido</label>
            </div>
            {!!errors.apellido && (
              <p className={styles.error_input}>{errors.apellido.message}</p>
            )}
          </div>

          <div
            className={!!errors.nroTarjeta ? styles.error : ""}
            style={{ marginBottom: "1.5rem" }}
          >
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="text"
                required
                autoComplete="off"
                {...register("nroTarjeta", formValidate.nroTarjeta)}
              />
              <label className={styles.label}>Numero de tarjeta</label>
            </div>
            {!!errors.nroTarjeta && (
              <p className={styles.error_input}>{errors.nroTarjeta.message}</p>
            )}
          </div>

          <div
            className={!!errors.fechaVencimiento ? styles.error : ""}
            style={{ marginBottom: "1.5rem" }}
          >
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="text"
                required
                autoComplete="off"
                {...register("fechaVencimiento", formValidate.fechaVencimiento)}
              />
              <label className={styles.label}>Fecha de vencimiento</label>
            </div>
            {!!errors.fechaVencimiento && (
              <p className={styles.error_input}>
                {errors.fechaVencimiento.message}
              </p>
            )}
          </div>

          <div
            className={!!errors.cvv ? styles.error : ""}
            style={{ marginBottom: "1.5rem" }}
          >
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="text"
                required
                autoComplete="off"
                {...register("cvv", formValidate.cvv)}
              />
              <label className={styles.label}>Codigo de seguridad (CVV)</label>
            </div>
            {!!errors.cvv && (
              <p className={styles.error_input}>{errors.cvv.message}</p>
            )}
          </div>

          <div className={styles.payment}>
            <div>
              <p>{planActual[0]} al mes</p>
              <p>Plan {planActual[3]}</p>
            </div>

            <Link to="/signup/planform">Cambiar</Link>
          </div>

          <small>
            Los pagos se procesarán internacionalmente. Es posible que se
            apliquen comisiones bancarias adicionales.
          </small>

          <small>
            Al hacer clic en el botón Iniciar membresía, aceptas nuestros{" "}
            <span>Términos de uso</span> y nuestra{" "}
            <span>Declaración de privacidad</span>, declaras que tienes más de
            18 años y aceptas que{" "}
            <span>
              Netflix continuará tu membresía de manera automática y, hasta que
              la canceles, te facturará la cuota de membresía (actualmente de{" "}
              {planActual[0]} al mes) a través de la forma de pago elegida.
              Puedes cancelarla en cualquier momento para evitar cargos en el
              futuro.
            </span>{" "}
            Para hacerlo, ve a Cuenta y haz clic en Cancelar membresía.
          </small>

          <Button type="submit">Iniciar membresia</Button>
        </form>
      </div>
    </>
  );
};
