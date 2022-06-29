import "regenerator-runtime/runtime";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import "./assets/scss/global.scss";
import { Routes } from "./Routes";
import { ContextProvider } from "./context/context";
import { Notification } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Notification/>
        <ContextProvider>
          <Routes />
        </ContextProvider>
      </Layout>
    </BrowserRouter>
  );
}
