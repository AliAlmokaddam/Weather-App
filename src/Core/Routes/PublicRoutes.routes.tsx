import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
import {cords} from "@/Core/Store/Selectors/app-selectors.ts";

function PublicRoutes() {
  const isAuthenticated = useSelector(cords);

  return isAuthenticated ? (
    <Navigate
      to="/weather"
      replace
    />
  ) : (
    <Outlet />
  );
}

export default PublicRoutes;
