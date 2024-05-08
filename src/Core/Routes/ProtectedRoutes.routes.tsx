import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {cords} from "@/Core/Store/Selectors/app-selectors.ts";

function ProtectedRoutes() {
  const location = useLocation();
  const isAuthenticated = useSelector(cords);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/give-me-permission" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes;
