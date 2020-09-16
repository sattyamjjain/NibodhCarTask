import * as React from "react";
import ProductsContainer from '../components/Products/ProductsContainer'
import withLayout from "../HOC/withLayout";

class Products extends React.Component{
  render(){
    return (
      <div>
        <ProductsContainer/>
      </div>
    );
  }
};

export default withLayout(Products);