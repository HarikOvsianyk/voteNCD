import React, { useState, useMemo } from "react";

interface IContext {
  spinner: boolean;
  spinnerOn?: () => void;
  spinnerOff?: () => void;
}

const defaultState = {
  spinner: false,
};

export const Context = React.createContext<IContext>(defaultState);

export const ContextProvider = (props) => {
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
      {props.children}
    </Context.Provider>
  );
};
