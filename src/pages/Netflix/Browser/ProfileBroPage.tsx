import React, { useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import NetflixLogo from "@/assets/img/netflix.svg";
import { Profile } from "../components/Profile";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useItem, useAuth } from "@/hooks";
import { useNetflix } from "@/hooks/useNetflix";
import styles from "@/assets/styles/Netflix/Browser/ProfileBroPage.module.css";

const ProfileBroPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { getCategories } = useItem();
  const { onSetCategories } = useNetflix();

  const { onSetProfile } = useAuth();

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
        <div>
          <p className={styles.title}>¿Quién está viendo ahora?</p>

          <div className={styles.profiles}>
            {[1, 2, 3, 4, 5].map((profile, i) => (
              <div
                key={`profile_${i}`}
                onClick={() => onSetProfile(`${user.name} ${i}`)}
              >
                <Profile
                  img={`${profile}`}
                  name={`${user.name} ${i + 1}`}
                  browser
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBroPage;
