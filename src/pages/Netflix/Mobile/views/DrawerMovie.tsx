import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Drawer from "../../components/Drawer";
import styles from "@/assets/styles/Netflix/Mobile/DrawerMovie.module.css";
import {
  AiFillPlayCircle,
  AiOutlineClose,
  AiOutlineDownload,
  AiOutlineInfoCircle,
  AiOutlinePlayCircle,
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { useNetflix } from "@/hooks/useNetflix";

export const DrawerMovie = () => {
  const {
    drawerItem,
    item: { title, synopsis, img },
  } = useSelector((state: RootState) => state.netflix);
  const { onToggleItem } = useNetflix();
  return (
    <Drawer open={drawerItem} color="#313131" position="bottom">
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <div className={styles.containerImg}>
            <img src={img} alt="" className={styles.img} />
          </div>

          <div>
            <div className={styles.descriptionHeader}>
              <div>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.descriptionMovieTime}>
                  <span>2022</span>
                  <span>16+</span>
                  <span>10 episodios</span>
                </div>
              </div>

              <AiOutlineClose
                size={25}
                color="FFF"
                className={styles.closeButton}
                onClick={() => onToggleItem()}
              />
            </div>

            <p className={styles.descriptionText}>{synopsis}</p>
          </div>
        </div>

        <div className={styles.menu}>
          <div className={styles.icon}>
            <AiFillPlayCircle size={25} color="FFF" />
            <span>Ver</span>
          </div>
          <div className={styles.icon}>
            <AiOutlineDownload size={25} color="FFF" />
            <span>Descargar</span>
          </div>
          <div className={styles.icon}>
            <AiOutlinePlus size={25} color="FFF" />
            <span>Mi lista</span>
          </div>
          <div className={styles.icon}>
            <AiOutlineShareAlt size={25} color="FFF" />
            <span>Compartir</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <AiOutlineInfoCircle size={25} color="FFF" />

        <p className={styles.flex1}>Episodios e info</p>

        <AiOutlineRight size={20} color="FFF" />
      </div>
    </Drawer>
  );
};
