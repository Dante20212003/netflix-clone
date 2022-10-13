import { HeaderBrowser } from "@/pages/Netflix/Browser/views/HeaderBrowser";
import React from "react";
import { Outlet } from "react-router-dom";

export const NetflixBrowserLayout = () => {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <HeaderBrowser />

      <Outlet />
    </div>
  );
};
