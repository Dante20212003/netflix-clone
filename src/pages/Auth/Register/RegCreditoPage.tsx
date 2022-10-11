import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRegister } from "@/hooks";
import { Button } from "@/styled-components";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { RootState } from "@/store";
import { plans } from "@/data";
import { formatCard } from "@/utilities";
import styles from "@/assets/styles/Auth/RegCreditoPage.module.css";

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
    pattern: {
      value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      message: "Ingresa un mes de vencimiento.",
    },
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

  const { isLoading, onCompleteRegister } = useRegister();

  const { plan } = useSelector((state: RootState) => state.register);
  const planActual = plans[plan];

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
    onCompleteRegister(data);
  };

  useEffect(() => {
    setValue("nroTarjeta", formatCard(watch().nroTarjeta));
  }, [watch().nroTarjeta]);

  return (
    <>
      <div className={styles.container}>
        <span>Paso 1 de 3</span>
        <h1>Configura tu tarjeta de crédito o débito</h1>

        <div className={styles.methodsPay}>
          <RiVisaFill size={30} color="blue" />
          <FaCcMastercard size={30} color="black" />
          <SiAmericanexpress size={30} color="red" />
        </div>

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
                {...register("fechaVencimiento", {
                  ...formValidate.fechaVencimiento,
                  onChange: (e) => {
                    const cleanValue = e.target.value
                      .replace(/^([1-9]\/|[2-9])$/g, "0$1/")
                      .replace(/^(0[1-9]{1}|1[0-2]{1})$/g, "$1/")
                      .replace(/^([0-1]{1})([3-9]{1})$/g, "0$1/$2")
                      .replace(/^(\d)\/(\d\d)$/g, "0$1/$2")
                      .replace(/^(0?[1-9]{1}|1[0-2]{1})([0-9]{2})$/g, "$1/$2")
                      .replace(/^([0]{1,})\/|[0]{1,}$/g, "0")
                      .replace(/[^\d\/]|^[\/]{0,}$/g, "")
                      .replace(/\/\//g, "/");

                    setValue("fechaVencimiento", cleanValue);

                    if (e.target.value.length >= 5) {
                      setValue(
                        "fechaVencimiento",
                        e.target.value.substring(0, 5)
                      );
                    }
                  },
                })}
              />
              <label className={styles.label}>
                Fecha de vencimiento (MM/YY)
              </label>
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
                {...register("cvv", {
                  ...formValidate.cvv,
                  onChange: (e) => {
                    if (e.target.value.length <= 3) {
                      setValue("cvv", e.target.value);
                    } else {
                      setValue("cvv", watch().cvv.substring(0, 3));
                    }
                  },
                })}
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

          <div className={styles.containerSmall}>
            <small className={styles.small}>
              Los pagos se procesarán internacionalmente. Es posible que se
              apliquen comisiones bancarias adicionales.
            </small>

            <small className={styles.small}>
              Al hacer clic en el botón Iniciar membresía, aceptas nuestros{" "}
              <span>Términos de uso</span> y nuestra{" "}
              <span>Declaración de privacidad</span>, declaras que tienes más de
              18 años y aceptas que{" "}
              <span>
                Netflix continuará tu membresía de manera automática y, hasta
                que la canceles, te facturará la cuota de membresía (actualmente
                de {planActual[0]} al mes) a través de la forma de pago elegida.
                Puedes cancelarla en cualquier momento para evitar cargos en el
                futuro.
              </span>{" "}
              Para hacerlo, ve a Cuenta y haz clic en Cancelar membresía.
            </small>
          </div>

          <Button disabled={isLoading} type="submit">
            Iniciar membresia
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegCreditoPage;
