import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button } from "@/styled-components";
import styles from "@/assets/styles/Auth/RegRegistrationPage.module.css";
import { RootState } from "@/store";
import { useAuth } from "@/hooks";

const formValidate = {
  email: {
    required: "El email es obligatoria",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Escribe una dirección de email válida.",
    },
    minLength: {
      value: 5,
      message: "El email debe tener entre 5 y 50 caracteres.",
    },
    maxLength: {
      value: 50,
      message: "El email debe tener entre 5 y 50 caracteres.",
    },
  },
  password: {
    required: "La contrasesa es obligatoria",
    minLength: {
      value: 4,
      message: "La contraseña debe tener entre 4 y 60 caracteres.",
    },
    maxLength: {
      value: 60,
      message: "La contraseña debe tener entre 4 y 60 caracteres.",
    },
  },
};

export const RegFormPage = () => {
  const navigate = useNavigate();

  const { isLoading, onSetEmailPassword } = useAuth();
  const { email } = useSelector((state: RootState) => state.auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string }>({
    defaultValues: {
      email: email || localStorage.email || "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: { email: string; password: string }) => {
    onSetEmailPassword(data);
  };

  return (
    <>
      <div className={styles.container}>
        <span>Paso 1 de 3</span>
        <h1>Crea una contraseña para que comiences tu membresía</h1>
        <p>¡Unos pasos más y listo!</p>
        <p style={{ marginTop: ".5rem" }}>Tampoco nos gustan los trámites.</p>

        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "2rem" }}>
          <div
            className={!!errors.email ? styles.error : ""}
            style={{ marginBottom: "1.5rem" }}
          >
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="text"
                required
                autoComplete="off"
                {...register("email", formValidate.email)}
              />
              <label className={styles.label}>Email</label>
            </div>
            {!!errors.email && (
              <p className={styles.error_input}>{errors.email.message}</p>
            )}
          </div>

          <div className={!!errors.password ? styles.error : ""}>
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="password"
                required
                autoComplete="off"
                {...register("password", formValidate.password)}
              />
              <label className={styles.label}>Agrega una contrasena</label>
            </div>
            {!!errors.password && (
              <p className={styles.error_input}>{errors.password.message}</p>
            )}
          </div>

          <Button disabled={isLoading} type="submit">
            Siguiente
          </Button>
        </form>
      </div>
    </>
  );
};
