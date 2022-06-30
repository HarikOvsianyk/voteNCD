import { FunctionComponent } from "react";
import { Routes as RoutesComponent, Route, Navigate } from "react-router-dom";
import { PAGES } from "./constants";

export const Routes: FunctionComponent = () => (
  <RoutesComponent>
    {PAGES.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
    <Route path="*" element={<Navigate to="/error" replace />} />
  </RoutesComponent>
);
