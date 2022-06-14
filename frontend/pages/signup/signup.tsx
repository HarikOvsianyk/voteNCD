import { FunctionComponent } from 'react';
import './signup.scss';

export const SignUp: FunctionComponent = () => {
    return (
        <main>
            <h1 className='signup__header'>
                vote! Democracy in the blockchain
            </h1>
            <p className='signup'>
                Your contract is storing a greeting message in the NEAR blockchain. To
                change it you need to sign in using the NEAR Wallet. It is very simple,
                just use the button below.
            </p>
            <p className='signup'>
                Do not worry, this app runs in the test network ("testnet"). It works
                just like the main network ("mainnet"), but using NEAR Tokens that are
                only for testing!
            </p>
            <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
                <button className='signup__button'>Sign in</button>
            </p>
        </main>
    )
}