import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "@/store";
import { setLogout, setChecking, setLogin, setProfile } from "@/store/auth";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onCheckToken = () => {
    dispatch(setChecking());
    setTimeout(() => {
      if (!localStorage.token) return dispatch(setLogout());

      navigate("/selectProfile");

      const user = {
        name: localStorage.name || "User",
        email: localStorage.email || "user@user.com",
      };

      dispatch(setLogin(user));
    }, 3000);
  };

  const onLogin = (data: { email: string; password: string }) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      localStorage.setItem("token", crypto.randomUUID.toString());

      const user = {
        name: localStorage.name || "User",
        email: localStorage.email || "user@user.com",
      };

      dispatch(setLogin(user));
      navigate("/selectProfile");
    }, 3000);
  };

  const onSetProfile = (profile: string) => {
    dispatch(setProfile(profile));
  };

  return {
    isLoading,
    onCheckToken,
    onLogin,
    onSetProfile,
  };
};
