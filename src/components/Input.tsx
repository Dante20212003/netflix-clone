import { UseControllerProps, useController, Control } from "react-hook-form";
import styles from "@/assets/styles/Input.module.css";
import { InputStyled } from "@/styled-components";

type FormValues = {
  email: string;
  password: string;
};

interface Props {
  control: Control<FormValues, any>;
  name: "email" | "password";
  rules: any;
  label: string;
  homePage?: boolean;
  color?: string;
  type?: string;
}

export const Input = ({
  rules,
  control,
  name,
  label,
  type,
  color,
  homePage,
}: Props) => {
  const {
    field,
    fieldState: { error },
    formState: { errors },
  } = useController({ control, rules, name });

  return (
    <div className={!!error ? styles.error : ""}>
      <div className={styles.form_group}>
        <InputStyled
          homePage={homePage}
          bgColor={color}
          className={styles.input}
          {...field}
          type={type || "text"}
          required
          autoComplete="off"
        />
        {/*  <input
            className={styles.input}
            {...field}
            type={type || "text"}
            required
            autoComplete="off"
          /> */}
        <label className={styles.label}>{label}</label>
      </div>
      {!!error && <p className={styles.error_input}>{error.message}</p>}
    </div>
  );
};
