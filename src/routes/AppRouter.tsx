import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  NetflixHomePage,
  RegCreditoPage,
  RegFormPage,
  RegPage,
  RegPaymentPicker,
  RegPlanPage,
  RegRegistrationPage,
} from "@/pages";
import { RegisterLayout } from "@/layout/RegisterLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const AppRouter = () => {
  const authenticated = false;
  const location = useLocation();

  const { email, password } = useSelector((state: RootState) => state.auth);

  const existEmail = () => {
    if (!email && !localStorage.email) return false;
    return true;
  };
  /* if (!email && !localStorage.email) return <Navigate to="/signup/regform" />; */

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {authenticated ? (
            <>
              <Route index element={<NetflixHomePage />} />
            </>
          ) : (
            <>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />

              <Route path="signup" element={<RegisterLayout />}>
                <Route path="registration" element={<RegRegistrationPage />} />
                <Route path="regform" element={<RegFormPage />} />

                {existEmail() && password.length != 0 && (
                  <>
                    <Route path="" element={<RegPage />} />
                    <Route path="planform" element={<RegPlanPage />} />
                    <Route
                      path="paymentPicker"
                      element={<RegPaymentPicker />}
                    />
                    <Route path="creditoption" element={<RegCreditoPage />} />
                  </>
                )}

                <Route
                  path=""
                  element={<Navigate to="/signup/registration" />}
                />

                <Route
                  path="*"
                  element={<Navigate to="/signup/registration" />}
                />
              </Route>

              {/*  <Route path="signup/paymentPicker" element={<RegPlan />} /> */}
            </>
          )}

          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRouter;
