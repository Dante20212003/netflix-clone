import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NetflixLogo from "@/assets/img/netflix.svg";
import styles from "@/assets/styles/Auth/LoginPage.module.css";
import { Button } from "@/styled-components";
import { Footer } from "@/components";
import { useAuth } from "@/hooks/useAuth";

const formValidate = {
  email: {
    required: "El email es obligatorio",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Escribe una dirección de email válida.",
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

export const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoading, onLogin } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string; password: string }>({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    onLogin();
    console.log("logeando");
    /* TODO: REALIZAR LA CREACION DE CUENTA */
    //navigate("/signup");
  };

  return (
    <div className={styles.netflix_bg}>
      <header className={`${styles.header} container`}>
        <img
          src={NetflixLogo}
          className={styles.netlix_logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
      </header>

      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Inicia sesion</h1>

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
                <label className={styles.label}>
                  Email o numero de telefono
                </label>
              </div>
              {!!errors.email && (
                <p className={styles.error_input}>{errors.email.message}</p>
              )}
            </div>

            <div className={!!errors.password ? styles.error : ""}>
              <div className={styles.form_group}>
                <input
                  className={styles.input}
                  type="text"
                  required
                  autoComplete="off"
                  {...register("password", formValidate.password)}
                />
                <label className={styles.label}>Contrasena</label>
              </div>
              {!!errors.password && (
                <p className={styles.error_input}>{errors.password.message}</p>
              )}
            </div>

            <Button
              disabled={isLoading}
              login
              padding={[1, 1]}
              style={{ fontSize: "1.6rem", marginTop: "3.5rem" }}
              type="submit"
            >
              <span>Iniciar sesion</span>
            </Button>
          </form>

          <div className={styles.helpers}>
            <div className={styles.checkbox}>
              <input
                className={styles.checkbox_input}
                type="checkbox"
                name=""
                id=""
              />
              <a className={styles.checkbox_text}>Recuerdame</a>
            </div>

            <a className={styles.helpers_text}>¿Necesitas ayuda?</a>
          </div>

          <div className={styles.footer}>
            <p className={styles.footer_text_1}>
              ¿Primera vez en Netflix?<span> Suscríbete ahora.</span>
            </p>
            <p className={styles.footer_text_2}>
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot. <span>Más info.</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footer_last}>
        <Footer login />
      </div>
    </div>
  );
};
