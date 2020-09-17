import * as React from "react";
import ProductContainer from '../components/Product/ProductContainer'
import withLayout from "../HOC/withLayout";

import products from '../json/products.json';

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={
            product:null
        }
    }

    componentDidMount(){
        let url = this.props.location.pathname;
        console.log('url',url)
        const productId = url.split('/')[2]
        products.forEach((product)=>{
            if(product.id === productId){
                this.setState({
                    product:product
                })
            }
        })
    }

    render(){
        console.log('product',this.state.product)
        return (
            <div>
                <ProductContainer product={this.state.product}/>
            </div>
        );
    }
};

export default withLayout(Product);