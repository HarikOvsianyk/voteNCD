import { FunctionComponent } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import {
  login,
  logout
} from "../../assets/js/near/utils";
import { HeaderWrapper, HeaderTitle, HeaderTitleAcc, HeaderBTN } from './headerComponents';

export const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <Toolbar>
        <HeaderTitle>
          vote!
        </HeaderTitle>
        {!window.walletConnection.isSignedIn()
        ?''
        :
        <HeaderTitleAcc>Hi, {window.accountId}</HeaderTitleAcc>
        }
        <HeaderBTN onClick={!window.walletConnection.isSignedIn()?login:logout}>{!window.walletConnection.isSignedIn()?"Log In":"Log Out"}</HeaderBTN>
      </Toolbar>
    </HeaderWrapper>
  );
};
