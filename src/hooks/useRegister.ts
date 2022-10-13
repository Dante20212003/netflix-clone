import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "@/store";
import {
  setEmail,
  setEmailPassword,
  setPlan,
} from "@/store/auth/registerSlice";
import { setLogin } from "@/store/auth";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { email } = useSelector((state: RootState) => state.register);
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

  const onCompleteRegister = (data: any) => {
    setIsLoading(true);
    localStorage.setItem("name", data.nombre);
    console.log(crypto.randomUUID());
    localStorage.setItem("token", "abcdefghijklmnopqrst");

    setTimeout(() => {
      setIsLoading(false);

      dispatch(setLogin({ name: data.nombre, email }));
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
      dispatch(setEmail(email));
      navigate("/signup/registration");
    }, 2000);
  };

  const onLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      /*   navigate() */
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
