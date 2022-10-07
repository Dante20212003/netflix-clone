import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/routes/AppRouter";

const NetflixApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default NetflixApp;
