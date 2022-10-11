import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "@/store";
import { setLogout, setChecking, setLogin } from "@/store/auth";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onCheckToken = () => {
    dispatch(setChecking());
    setTimeout(() => {
      if (!localStorage.token) return dispatch(setLogout());
      navigate("/selectProfile");
      dispatch(setLogin({ email: "dante@gmail.com", name: "Dante" }));
    }, 3000);
  };

  const onLogin = (data: { email: string; password: string }) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/selectProfile");

      localStorage.setItem("token", "1285882883989");

      const user = { name: "Dante", email: "dante@gmail.com" };

      dispatch(setLogin(user));
    }, 3000);
  };

  return {
    isLoading,
    onCheckToken,
    onLogin,
  };
};
