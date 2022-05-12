import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  outlet: React.ReactElement;
};

export const PrivateRoute = ({ outlet }: PrivateRouteProps) => {
  let hasUser = localStorage.getItem("usuario");
  if (hasUser) {
    return outlet;
  } else {
    return <Navigate to="/" />;
  }
};

export const LoginRoute = ({ outlet }: PrivateRouteProps) => {
  let hasUser = localStorage.getItem("usuario");
  if (!hasUser) {
    return outlet;
  } else {
    return <Navigate to="/organizador" />;
  }
};
