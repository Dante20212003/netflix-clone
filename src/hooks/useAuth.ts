import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "@/store";
import { setEmail, setEmailPassword, setPlan } from "@/store/auth/authSlice";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const onSetPlan = (plan: "basico" | "estandar" | "premium") => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      localStorage.setItem("plan", plan);
      dispatch(setPlan(plan));
      navigate("/signup/paymentPicker");
    }, 2000);
  };

  const onPayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      navigate("/signup/creditoption");
    }, 2000);
  };

  const onCompleteRegister = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      navigate("/login");
    }, 2000);
  };

  const onSetEmailPassword = (data: { email: string; password: string }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      localStorage.setItem("email", data.email);
      dispatch(setEmailPassword(data));
      navigate("/signup");
    }, 200);
  };

  const onSetEmail = (email: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      localStorage.setItem("email", email);
      dispatch(setEmail);
      navigate("/signup/registration");
    }, 2000);
  };

  const onLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return {
    isLoading,
    onSetPlan,
    onPayment,
    onCompleteRegister,
    onSetEmail,
    onSetEmailPassword,
    onLogin,
  };
};
