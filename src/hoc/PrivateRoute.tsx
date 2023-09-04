import React, { ReactNode } from 'react';
import { RouteProps, Navigate, Route } from 'react-router-dom';

type PrivateRouteProps = {
  children: ReactNode;
} & RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  let isAuth = true; // Замініть це на вашу перевірку автентифікації

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;