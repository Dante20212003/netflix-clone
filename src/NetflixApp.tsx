import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/routes/AppRouter";
import { ScrollToTop } from "./components";

const NetflixApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default NetflixApp;
