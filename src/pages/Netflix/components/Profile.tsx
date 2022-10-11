import React from "react";
import { GiPadlockOpen } from "react-icons/gi";
import styles from "@/assets/styles/Netflix/Profile.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  img: string;
  name: string;
}
export const Profile = ({ img, name }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        onClick={() => navigate("/")}
        src={`/img/profile/${img}.png`}
        alt=""
        className={styles.img}
      />
      <p className={styles.name}>{name}</p>
      <GiPadlockOpen size={10} color="8c8c8c" />
    </div>
  );
};
