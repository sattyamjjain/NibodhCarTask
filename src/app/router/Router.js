import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage  from "../pages/HomePage";

export default function Router (){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
}
