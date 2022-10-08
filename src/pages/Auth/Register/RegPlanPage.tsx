import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useAuth } from "@/hooks";
import { Button } from "@/styled-components";
import { plans } from "@/data";
import styles from "@/assets/styles/Auth/RegPlanPage.module.css";

export const RegPlanPage = () => {
  const [plan, setPlan] = useState<"basico" | "estandar" | "premium">(
    localStorage.plan || "basico"
  );
  const { basico, estandar, premium } = plans;

  const { isLoading, onSetPlan } = useAuth();

  const handleSelectPlan = () => {
    onSetPlan(plan);
  };
  return (
    <>
      <div className={styles.container}>
        <span>Paso 1 de 3</span>

        <h1>Selecciona el plan ideal para ti</h1>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Ve todo lo que quieras. Sin anuncios.</p>
        </div>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Recomendaciones exclusivas para ti.</p>
        </div>

        <div className={styles.plans}>
          <AiOutlineCheck size={30} color="red" />
          <p>Puedes cambiar de plan o cancelar cuando quieras.</p>
        </div>

        <div>
          <div className={styles.planHeader}>
            <div className={styles.planOption}>
              <div className={styles.planContainer}>
                <input
                  type="radio"
                  name="plans"
                  value="basico"
                  checked={plan == "basico"}
                  onChange={(e) => console.log(e)}
                />
                <label
                  className={styles.plan}
                  onClick={() => setPlan("basico")}
                  htmlFor="basico"
                >
                  Basico
                </label>
              </div>
              <div className={styles.planContainer}>
                <input
                  type="radio"
                  name="plans"
                  value="estandar"
                  checked={plan == "estandar"}
                  onChange={(e) => console.log(e)}
                />
                <label
                  className={styles.plan}
                  onClick={() => setPlan("estandar")}
                  htmlFor="estandar"
                >
                  Estandar
                </label>
              </div>

              <div className={styles.planContainer}>
                <input
                  type="radio"
                  name="plans"
                  value="premium"
                  checked={plan == "premium"}
                  onChange={(e) => console.log(e)}
                />
                <label
                  className={styles.plan}
                  onClick={() => setPlan("premium")}
                  htmlFor="premium"
                >
                  Premium
                </label>
              </div>
            </div>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Precio Mensual</td>
                <td className={plan == "basico" ? styles.basico : ""}>
                  {basico[0]}
                </td>
                <td className={plan == "estandar" ? styles.basico : ""}>
                  {estandar[0]}
                </td>
                <td className={plan == "premium" ? styles.basico : ""}>
                  {premium[0]}
                </td>
              </tr>

              <tr>
                <td>Calidad de video</td>
                <td className={plan == "basico" ? styles.basico : ""}>
                  {basico[1]}
                </td>
                <td className={plan == "estandar" ? styles.basico : ""}>
                  {estandar[1]}
                </td>
                <td className={plan == "premium" ? styles.basico : ""}>
                  {premium[1]}
                </td>
              </tr>

              <tr>
                <td>Resolucion</td>
                <td className={plan == "basico" ? styles.basico : ""}>
                  {basico[2]}
                </td>
                <td className={plan == "estandar" ? styles.basico : ""}>
                  {estandar[2]}
                </td>
                <td className={plan == "premium" ? styles.basico : ""}>
                  {premium[2]}
                </td>
              </tr>

              <tr>
                <td>Ve Netflix en tu TV, computadora, celular y tablet</td>
                <td>
                  <AiOutlineCheck
                    size={30}
                    color="a6a6a6"
                    className={plan == "basico" ? styles.basico : ""}
                  />
                </td>
                <td>
                  <AiOutlineCheck
                    size={30}
                    color="a6a6a6"
                    className={plan == "estandar" ? styles.basico : ""}
                  />
                </td>
                <td>
                  <AiOutlineCheck
                    size={30}
                    color="a6a6a6"
                    className={plan == "premium" ? styles.basico : ""}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <small>
          La disponibilidad del contenido en HD (720p), Full HD (1080p), Ultra
          HD (4K) y HDR depende de tu servicio de internet y del dispositivo en
          uso. No todo el contenido está disponible en todas las resoluciones.
          Consulta nuestros <span>Términos de uso</span> para obtener más
          información.
        </small>
        <small>
          Solo las personas que vivan contigo pueden usar tu cuenta. Puedes ver
          Netflix en 4 dispositivos distintos al mismo tiempo con el plan
          Premium, en 2 con el plan Estándar y en 1 con el plan Básico.
        </small>

        <Button disabled={isLoading} onClick={handleSelectPlan}>
          Siguiente
        </Button>
      </div>
    </>
  );
};
