import { AnimatePresence, motion } from "framer-motion";
import styles from "@/assets/styles/Netflix/Mobile/Drawer.module.css";

interface Props2 {
  open: boolean;
  handleDrawer?: () => void;
  children?: any;
}

function Drawer({ open, handleDrawer, children }: Props2) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={styles.drawer}
          >
            <div className={styles.drawer_container}>
              <div className={styles.drawer_body}>{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
