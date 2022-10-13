import React from "react";
import styles from "@/assets/styles/Netflix/MovieItem.module.css";
interface Props {
  img?: string;
  number?: number | null;
  browser?: boolean;
}
export const MovieItem = ({ img, number, browser }: Props) => {
  if (!img)
    return (
      <div
        className={styles.skeleton}
        style={{
          width: browser && !number ? "25rem" : "11rem",
          height: browser && !number ? "14rem" : "16rem",
        }}
      ></div>
    );

  return (
    <div className={styles.container}>
      <img
        src={img}
        alt=""
        className={styles.img}
        style={{
          width: browser && !number ? "25rem" : "11rem",
          height: browser && !number ? "14rem" : "16rem",
        }}
      />
      {number ? (
        <span className={browser ? styles.numeroBrowser : styles.number}>
          {number}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
