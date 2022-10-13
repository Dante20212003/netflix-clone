import { AnimatePresence, motion } from "framer-motion";
import styles from "@/assets/styles/Netflix/Mobile/Drawer.module.css";

interface Props2 {
  open: boolean;
  handleDrawer?: () => void;
  color?: string;
  position?: "bottom" | "left";
  children?: any;
}

function Drawer({ open, handleDrawer, children, color, position }: Props2) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              x: position != "bottom" ? "100%" : 0,
              y: position == "bottom" ? "100%" : 0,
            }}
            animate={{
              x: 0,
              y: position == "bottom" ? "70%" : "",
            }}
            exit={{
              x: position == "bottom" ? "0%" : "100%",
              y: position == "bottom" ? "100%" : "0%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={styles.drawer}
            style={{ backgroundColor: color, borderRadius: color && "1rem" }}
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
