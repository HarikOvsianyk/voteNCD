import { FunctionComponent, ReactNode } from "react";
import { Footer, Header } from "../components";
import { LayoutWrapper, LayoutChildren } from "./layoutComponents";

export const Layout: FunctionComponent<{ children: ReactNode }> = ({children}) => {
  return (
    <LayoutWrapper>
      <Header />
      <LayoutChildren>{children}</LayoutChildren>
      <Footer />
    </LayoutWrapper>
  );
};
