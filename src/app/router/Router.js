import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactUs  from "../pages/ContactUs";
import HomePage  from "../pages/HomePage";

export default function Router (){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
}
