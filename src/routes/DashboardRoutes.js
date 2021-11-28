import React from "react";
import { Route, Router, Switch } from "react-router";
import { Home } from "../pages/Home";

export const DashboardRoutes = () => {
  return (
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
  );
};
