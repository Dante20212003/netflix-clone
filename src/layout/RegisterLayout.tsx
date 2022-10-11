import { Footer } from "@/components";
import { Header } from "@/pages/Auth/Register/views/Header";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

const variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: { delay: 0, duration: 0.2 },
  },
  exit: {
    opacity: 0,
    x: -70,
    transition: { delay: 0, duration: 0.2 },
  },
};

export const RegisterLayout = () => {
  return (
    <>
      <Header />

      <motion.div
        animate="enter"
        className="fallback"
        exit="exit"
        initial="initial"
        variants={variants}
      >
        <Outlet />
      </motion.div>

      <Footer register />
    </>
  );
};
