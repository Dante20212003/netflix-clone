import React from "react";
import { GrClose } from "react-icons/gr";
import styles from "@/assets/styles/Netflix/Modal.module.css";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useNetflix } from "@/hooks/useNetflix";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Modal = () => {
  const { category, allCategories } = useSelector(
    (state: RootState) => state.netflix
  );
  const { onToggleModal } = useNetflix();
  const navigate = useNavigate();

  const handleNavigate = (type: string) => {
    if (category == type) return;

    navigate(`/category/${type}`);

    onToggleModal();
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.overlay}>
        <div className={styles.overlay_container}>
          <div
            className={`${styles.overlay_body} ${
              category.length > 0 && styles.center
            }`}
          >
            <p className={`${category == "" && styles.padding}`}>Inicio</p>

            {category == "" ? (
              <>
                {allCategories.map((category) => (
                  <p key={category._id}>{category.genre}</p>
                ))}
              </>
            ) : (
              <>
                <p
                  className={`${category == "Peliculas" && styles.active}`}
                  onClick={() => handleNavigate("Peliculas")}
                >
                  Peliculas
                </p>
                <p
                  className={`${category == "Series" && styles.active}`}
                  onClick={() => handleNavigate("Series")}
                >
                  Series
                </p>
              </>
            )}
          </div>
        </div>

        <div className={styles.btnClose} onClick={() => onToggleModal()}>
          <GrClose size={20} />
        </div>
      </div>
    </motion.div>
  );
};
