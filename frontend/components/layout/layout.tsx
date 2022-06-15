import { FunctionComponent, ReactNode } from "react";
import { Footer, Header } from "../index";
import './layout.scss';

export const Layout: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__children">
      {children}
      </div>
      <Footer />
    </div>
  );
};
