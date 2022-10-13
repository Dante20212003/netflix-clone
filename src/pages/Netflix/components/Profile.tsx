import React from "react";
import { GiPadlockOpen } from "react-icons/gi";
import styles from "@/assets/styles/Netflix/Profile.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  img: string;
  name: string;
  browser?: boolean;
}
export const Profile = ({ img, name, browser }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img
        onClick={() => navigate("/")}
        src={`/img/profile/${img}.png`}
        alt=""
        className={styles.img}
      />
      <p className={styles.name} style={{ color: browser ? "gray" : "" }}>
        {name}
      </p>
      <GiPadlockOpen size={browser ? 20 : 10} color="8c8c8c" />
    </div>
  );
};
