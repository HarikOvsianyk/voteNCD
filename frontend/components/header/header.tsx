import { FunctionComponent } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import {
  login,
  logout
} from "../../assets/js/near/utils";
import "./header.scss";

export const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <Toolbar>
        <p className='header__title'>
          vote!
        </p>
        <button className="header__button" onClick={!window.walletConnection.isSignedIn()?login:logout}>{!window.walletConnection.isSignedIn()?"Log In":"Log Out"}</button>
      </Toolbar>
    </div>
  );
};
