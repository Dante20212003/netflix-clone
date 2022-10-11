import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const RegCreditoPage = lazy(
  () => import("@/pages/Auth/Register/RegCreditoPage")
);
const RegFormPage = lazy(() => import("@/pages/Auth/Register/RegFormPage"));
const RegPage = lazy(() => import("@/pages/Auth/Register/RegPage"));
const RegPaymentPicker = lazy(
  () => import("@/pages/Auth/Register/RegPaymentPicker")
);
const RegPlanPage = lazy(() => import("@/pages/Auth/Register/RegPlanPage"));
const RegRegistrationPage = lazy(
  () => import("@/pages/Auth/Register/RegRegistrationPage")
);

const HomeBroPage = lazy(() => import("@/pages/Netflix/Browser/HomeBroPage"));

const HomeMoPage = lazy(() => import("@/pages/Netflix/Mobile/HomeMoPage"));

import { HomePage, LoginPage } from "@/pages";
import { RegisterLayout } from "@/layout/RegisterLayout";

import { RootState } from "@/store";
import { CheckingAuth } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import ProfileMoPage from "@/pages/Netflix/Mobile/ProfileMoPage";
import CategoryItemPage from "@/pages/Netflix/Mobile/CategoryItemPage";
import { NetflixLayout } from "@/layout/NetflixLayout";

const AppRouter = () => {
  const { onCheckToken } = useAuth();
  const { status } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  const { email, password } = useSelector((state: RootState) => state.register);

  const existEmail = () => {
    if (!email && !localStorage.email) return false;
    return true;
  };

  useEffect(() => {
    if (localStorage.token) onCheckToken();
  }, []);

  if (status == "checking") return <CheckingAuth />;

  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            {status == "authenticated" ? (
              <>
                {window.innerWidth > 650 ? (
                  <Route index element={<HomeBroPage />} />
                ) : (
                  <>
                    <Route path="/" element={<NetflixLayout />}>
                      <Route index element={<HomeMoPage />} />
                      <Route
                        path="/category/:category"
                        element={<CategoryItemPage />}
                      />
                    </Route>
                    <Route path="/selectProfile" element={<ProfileMoPage />} />
                  </>
                )}
              </>
            ) : (
              <>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />

                <Route path="signup" element={<RegisterLayout />}>
                  <Route
                    path="registration"
                    element={<RegRegistrationPage />}
                  />
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
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default AppRouter;
