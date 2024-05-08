import {Route, Routes} from 'react-router-dom';
import PublicRoutes from "@/Core/Routes/PublicRoutes.routes.tsx";
import {lazy} from "react";
import ProtectedRoutes from "@/Core/Routes/ProtectedRoutes.routes.tsx";

const PermissionPrompt = lazy(() => import('@/Pages/PermissionPrompt.tsx'));
const AccessDenied = lazy(() => import('@/Pages/AccessDenied.tsx'));
const Weather = lazy(() => import('@/Pages/Weather.tsx'));

function Router() {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
          <Route path="/give-me-permission" element={<PermissionPrompt />} />
          <Route path="/access-denied" element={<AccessDenied />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
          <Route path="/weather" element={<Weather />} />
      </Route>
    </Routes>
  );
}

export default Router;
