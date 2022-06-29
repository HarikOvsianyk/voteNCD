import React, { useState, ReactNode, FunctionComponent } from "react";
import { IContext } from "../interfaces/interfaces";

const defaultState = {
  spinner: false,
};

export const Context = React.createContext<IContext>(defaultState);

export const ContextProvider: FunctionComponent<{children: ReactNode}> = ({ children }) => {
  const [spinner, setSpinner] = useState(defaultState.spinner);

  const spinnerOn = () => {
    setSpinner(true);
  };
  const spinnerOff = () => {
    setSpinner(false);
  };
  return (
    <Context.Provider
      value={{
        spinner,
        spinnerOn,
        spinnerOff,
      }}
    >
      {children}
    </Context.Provider>
  );
};
