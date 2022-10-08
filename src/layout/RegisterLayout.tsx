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

      {/* <AnimatePresence initial={false}> */}
      <motion.div
        /* initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1 }} */
        animate="enter"
        className="fallback"
        exit="exit"
        initial="initial"
        variants={variants}
      >
        <Outlet />
      </motion.div>
      {/* </AnimatePresence> */}

      <Footer register />
    </>
  );
};
