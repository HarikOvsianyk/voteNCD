import { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    login,
    logout,
  } from "../../assets/js/near/utils";
  import getConfig from "../../assets/js/near/config";
import { SignInWrapper, SignInDescr, SignInTitle } from './signinComponents';
import {Button} from '../../components';

export const SignIn: FunctionComponent = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(window);
        if(window.walletConnection.isSignedIn()) {
            navigate('/main')
        }
    }, []);

    return (
        <main>
            <SignInWrapper>
            <SignInTitle>
                vote! Democracy in the blockchain
            </SignInTitle>
            <SignInDescr>
                Your contract is storing a greeting message in the NEAR blockchain. To
                change it you need to sign in using the NEAR Wallet. It is very simple,
                just use the button below.
            </SignInDescr>
            <SignInDescr>
                Do not worry, this app runs in the test network ("testnet"). It works
                just like the main network ("mainnet"), but using NEAR Tokens that are
                only for testing!
            </SignInDescr>
            <Button onClick={!window.walletConnection.isSignedIn()?login:logout}>Sign in</Button>
            </SignInWrapper>
        </main>
    )
}