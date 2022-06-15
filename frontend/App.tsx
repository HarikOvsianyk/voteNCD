import "regenerator-runtime/runtime";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  login,
  logout,
  get_greeting,
  set_greeting,
} from "./assets/js/near/utils";
import getConfig from "./assets/js/near/config";
import { Main } from "./pages/main/main";
import { SignUp } from "./pages/signup/signup";
import { Layout } from "./components";
import "./assets/css/global.scss";
import { Routes } from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}