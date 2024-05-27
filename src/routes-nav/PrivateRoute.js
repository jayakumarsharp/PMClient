import { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, exact, path }) => {
  const { token } = useAuth();

  useEffect(() => {
    console.debug(
      "PrivateRoute",
      "exact=", exact,
      "path=", path,
      "token=", token,
    );
  })

  return (
    <Route exact={exact} path={path} element={(props) => token
      ? <Component {...props} />
      : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
    } />
  )
}

export default PrivateRoute;