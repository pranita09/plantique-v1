import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const RequiresAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiresAuth;
