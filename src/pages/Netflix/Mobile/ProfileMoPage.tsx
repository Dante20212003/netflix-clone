import React, { useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import NetflixLogo from "@/assets/img/netflix.svg";
import styles from "@/assets/styles/Netflix/Mobile/ProfileMoPage.module.css";
import { Profile } from "../components/Profile";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useItem } from "@/hooks";
import { useNetflix } from "@/hooks/useNetflix";

const ProfileMoPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { getCategories } = useItem();
  const { onSetCategories } = useNetflix();

  useEffect(() => {
    const getData = async () => {
      const data = await getCategories();
      onSetCategories(data);
    };

    getData();
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div></div>

          <img src={NetflixLogo} alt="logo" className={styles.logo} />

          <AiOutlineEdit size={25} color="FFF" />
        </header>

        <div>
          <p className={styles.title}>¿Quién está viendo ahora?</p>

          <div className={styles.profiles}>
            {[1, 2, 3, 4, 5].map((profile, i) => (
              <Profile
                key={`profile_${i}`}
                img={`${profile}`}
                name={`${user.name} ${i + 1}`}
              />
            ))}

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMoPage;
