import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

interface IPrivateRouteProps {
  component: FunctionComponent;
}

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({ component: Component }) => {
  return (window.walletConnection.isSignedIn() ? (
            <Component />
  ) : (
            <Navigate to='/' replace/>
  ));
};
