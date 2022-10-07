import { Footer } from "@/components";
import { Header } from "@/pages/Auth/Register/views/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export const RegisterLayout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer register />
    </>
  );
};
