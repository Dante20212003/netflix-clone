import React from "react";
import styles from "@/assets/styles/Netflix/MovieItem.module.css";
interface Props {
  img?: string;
  number?: number | null;
}
export const MovieItem = ({ img, number }: Props) => {
  if (!img) return <div className={styles.skeleton}></div>;

  return (
    <div className={styles.container}>
      <img src={img} alt="" className={styles.img} />
      {number ? <span className={styles.number}>{number}</span> : ""}
    </div>
  );
};
