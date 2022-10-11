import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRegister } from "@/hooks";
import { Input } from "@/components";
import styles from "@/assets/styles/Home/SuscriptionHomePage.module.css";

type FormValues = {
  email: string;
  password: string;
};

export const SuscriptionHomePage = ({ small }: { small?: boolean }) => {
  const navigate = useNavigate();

  const { isLoading, onSetEmail } = useRegister();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: localStorage.email || "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    onSetEmail(data.email);
  };

  return (
    <div className={`${styles.info_content} ${small ? styles.small : ""}`}>
      {small ?? (
        <>
          <h1>Películas y series ilimitadas y mucho más</h1>
          <p>Disfruta donde quieras. Cancela cuando quieras.</p>
        </>
      )}
      <p>
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.info_actions}>
          <div className={styles.info_input}>
            <Input
              homePage
              color="fff"
              control={control}
              name="email"
              rules={{
                required: "El email es obligatorio.",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Escribe una dirección de email válida.",
                },
              }}
              label="Email"
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className={styles.info_button}
          >
            <span>Comenzar</span>
          </button>
        </div>
      </form>
    </div>
  );
};
