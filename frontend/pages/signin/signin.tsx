import { FunctionComponent } from 'react';
import {
    login,
    logout,
    get_greeting,
    set_greeting,
  } from "../../assets/js/near/utils";
  import getConfig from "../../assets/js/near/config";
import './signin.scss';

export const SignIn: FunctionComponent = () => {
    return (
        <main className='signin'>
            <h1 className='signin__header'>
                vote! Democracy in the blockchain
            </h1>
            <p className='signin__description'>
                Your contract is storing a greeting message in the NEAR blockchain. To
                change it you need to sign in using the NEAR Wallet. It is very simple,
                just use the button below.
            </p>
            <p className='signin__description'>
                Do not worry, this app runs in the test network ("testnet"). It works
                just like the main network ("mainnet"), but using NEAR Tokens that are
                only for testing!
            </p>
            <button className='signin__button' onClick={!window.walletConnection.isSignedIn()?login:logout}>Sign in</button>
        </main>
    )
}