import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactUs  from "../pages/ContactUs";
import HomePage  from "../pages/HomePage";
import Products  from "../pages/Products";
import Product  from "../pages/Product";

export default function Router (){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/product/:productId" component={Product} />
          <Route path="/products" component={Products} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
}
