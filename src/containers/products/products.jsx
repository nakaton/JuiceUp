import React, { Component } from "react";
import ProductItem from "../../components/product-item/product-item";
import "./products.css";

import avocado from "../../assets/category/avocado.svg";
import mango from "../../assets/category/mango.svg";
import grapes from "../../assets/category/grapes.svg";
import apple from "../../assets/category/apple.svg";
import orange from "../../assets/category/orange.svg";
import pear from "../../assets/category/pear.svg";

class Products extends Component {
  state = {
    productItems: [
      {
        imgUrl: grapes,
        name: "Grapes Juice",
        color: "#ECE2FA",
        price: 2.50
      },
      {
        imgUrl: apple,
        name: "Apple Juice",
        color: "#FFE2E0",
        price: 3.50
      },
      {
        imgUrl: pear,
        name: "Pear Juice",
        color: "#AFCD61",
        price: 9.50
      },
      {
        imgUrl: mango,
        name: "Mango Juice",
        color: "#FFF2E1",
        price: 10.5
      },
      {
        imgUrl: avocado,
        name: "Avocado Juice",
        color: "#E0F0E4",
        price: 8.65
      },
      {
        imgUrl: orange,
        name: "Orange Juice",
        color: "#FFEEDB",
        price: 5.50
      },
    ],
  };
  render() {
    return (
      <div className="ProductsContainer">
        <div className="TopTitle">
          <p>Most Popular</p>
        </div>
        <div className="Products">
          {this.state.productItems.map(productItem => (
          <ProductItem
            key={productItem.name}
            bgColor={productItem.color}
            imgUrl={productItem.imgUrl}
            productItemName={productItem.name}
            productItemPrice={productItem.price}
          />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
