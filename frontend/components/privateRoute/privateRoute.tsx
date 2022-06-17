import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

interface IPrivateRouteProps {
  component: FunctionComponent;
}

export const PrivateRoute: FunctionComponent<IPrivateRouteProps> = ({ component: Component }) => {
    console.log(window.walletConnection.isSignedIn());
  return (window.walletConnection.isSignedIn() ? (
            <Component />
  ) : (
            <Navigate to='/' replace/>
  ));
};
