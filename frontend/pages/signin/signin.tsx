import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../assets/js/near/utils";
import { SignInWrapper, SignInTitle } from "./signinComponents";
import { Button } from "../../components";

export const SignIn: FunctionComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.walletConnection.isSignedIn()) {
      navigate("/main");
    }
  }, []);

  return (
    <main>
      <SignInWrapper>
        <SignInTitle>vote! Democracy in the blockchain</SignInTitle>
        <Button
          onClick={!window.walletConnection.isSignedIn() ? login : logout}
        >
          Sign in
        </Button>
      </SignInWrapper>
    </main>
  );
};
