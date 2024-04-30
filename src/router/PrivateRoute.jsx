import { Navigate } from "react-router-dom";

let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false;

function PrivateRoute({ children }) {
  return isAutenticado ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
