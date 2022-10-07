import { Routes, Route, Navigate } from "react-router-dom";
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

const AppRouter = () => {
  const authenticated = false;

  return (
    <>
      <Routes>
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
              <Route path="" element={<RegPage />} />
              <Route path="planform" element={<RegPlanPage />} />
              <Route path="paymentPicker" element={<RegPaymentPicker />} />
              <Route path="creditoption" element={<RegCreditoPage />} />
            </Route>

            {/*  <Route path="signup/paymentPicker" element={<RegPlan />} /> */}
          </>
        )}

        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
