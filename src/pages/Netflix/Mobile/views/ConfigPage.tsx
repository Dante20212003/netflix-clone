import React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Drawer from "../../components/Drawer";
import { useNetflix } from "@/hooks/useNetflix";
import styles from "@/assets/styles/Netflix/Mobile/Config.module.css";
import {
  AiOutlineArrowLeft,
  AiOutlineRight,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { Profile } from "../../components/Profile";
import { FaPen } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { useAuth } from "@/hooks";

export const ConfigPage = () => {
  const { config } = useSelector((state: RootState) => state.netflix);
  const {
    user: { name },
  } = useSelector((state: RootState) => state.auth);
  const { onToggleConfig, onResetLogout } = useNetflix();
  const { onLogout } = useAuth();

  return (
    <Drawer open={config}>
      <div className={styles.container}>
        <div className={styles.top_drawer}>
          <AiOutlineArrowLeft
            onClick={() => onToggleConfig()}
            size={28}
            color="FFF"
          />
          <p>Perfiles y mas</p>
        </div>

        <div className={styles.profiles}>
          {[1, 2, 3, 4, 5].map((profile, i) => (
            <div key={`profile_${i}`}>
              <Profile img={`${profile}`} name={`${name} ${i + 1}`} />
            </div>
          ))}
        </div>

        <div className={styles.administrar}>
          <FaPen size={20} color="gray" />
          <p>Administrar perfiles</p>
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <IoNotifications color="FFF" size={20} />
            <span>Notificaciones</span>
          </div>

          <AiOutlineRight color="gray" size={20} />
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <MdOutlinePlaylistAddCheck color="FFF" size={25} />
            <span>Mi Lista</span>
          </div>

          <AiOutlineRight color="gray" size={20} />
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <AiOutlineSetting color="FFF" size={20} />
            <span>Configuracion de App</span>
          </div>

          <AiOutlineRight color="gray" size={20} />
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <AiOutlineUser color="FFF" size={20} />
            <span>Cuenta</span>
          </div>

          <AiOutlineRight color="gray" size={20} />
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <FiHelpCircle color="FFF" size={20} />
            <span>Ayuda</span>
          </div>

          <AiOutlineRight color="gray" size={20} />
        </div>

        <button
          className={styles.logout}
          onClick={() => {
            onLogout();
            onResetLogout();
          }}
        >
          Cerrar sesion
        </button>
      </div>
    </Drawer>
  );
};
