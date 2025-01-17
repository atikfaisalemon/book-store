import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
