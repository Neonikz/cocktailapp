import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { LoginScreen } from "../pages/Auth/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
            <PublicRoute exact isAuthenticated={false} path="/login"  component={ LoginScreen }/>
            <PrivateRoute  isAuthenticated={ false } path="/" component={ DashboardRoutes }/>
            <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
};
