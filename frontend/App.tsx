import "regenerator-runtime/runtime";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import "./assets/scss/global.scss";
import { Routes } from "./Routes";
import { ContextProvider } from "./context/context";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ContextProvider>
          <Routes />
        </ContextProvider>
      </Layout>
    </BrowserRouter>
  );
}
