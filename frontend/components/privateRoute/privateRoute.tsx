import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import { IPrivateRouteProps } from "../../interfaces/interfaces";

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({
  component: Component,
}) => {
  return window.walletConnection.isSignedIn() ? (
    <Component />
  ) : (
    <Navigate to="/" replace />
  );
};
