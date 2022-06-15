import { FunctionComponent } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import "./header.scss";

export const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <Toolbar>
        <p className='header__title'>
          vote!
        </p>
        <button className="header__button">Login</button>
      </Toolbar>
    </div>
  );
};
