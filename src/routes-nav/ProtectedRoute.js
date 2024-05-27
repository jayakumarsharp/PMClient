// import React, { useEffect } from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import SignupForm from "../components/user/SignupForm";

// const ProtectedRoute = ({ ...rest }) => {
//   debugger;
//   const { token } = useAuth();

//   // useEffect(() => {
//   //   console.debug(
//   //     "ProtectedRoute",
//   //     // "exact=", exact,
//   //     // "path=", path,
//   //     "token=",
//   //     token
//   //   );
//   // });

//   return (

//     //   <Route
//     //   {...rest}
//     //   element={token ? <components /> : <Navigate to="/login" />}
//     // />
//     // <Route exact={exact} path={path} render={(props) => token === null
//     //   ? <components {...props} />
//     //   : <Navigate to={{ pathname: '/', state: { from: props.location } }} />
//     // } />
//   );
// };

// export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
  debugger;
  const { token } = useAuth();
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

// export const ProtectedRoute = ({ children }) => {
//   //const { user, is2FAVerified } = useAuth();
//   const { token } = useAuth();
//   if (token) {
//     return <Navigate to="/login" />;
//   } else {
//     return <Navigate to="/home" />;//   }

// };