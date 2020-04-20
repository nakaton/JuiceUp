import React, { Component } from "react";
import ProductItem from "../../components/product-item/product-item";
import "./products.css";

// import avocado from "../../assets/category/avocado.svg";
// import mango from "../../assets/category/mango.svg";
// import grapes from "../../assets/category/grapes.svg";
// import apple from "../../assets/category/apple.svg";
// import orange from "../../assets/category/orange.svg";
// import pear from "../../assets/category/pear.svg";

import avocado from "../../assets/product/wine/celebratory-cherry.png";
import mango from "../../assets/product/wine/celebratory_glogg.png";
import grapes from "../../assets/product/wine/kosher-grape.png";
import apple from "../../assets/product/wine/celebratory-caramel-apple.png";
import orange from "../../assets/product/wine/celebratory-cranberry.png";
import pear from "../../assets/product/wine/celebratory-organic-pear.png";

class Products extends Component {
  state = {
    productItems: [
      {
        imgUrl: apple,
        name: "Apple Juice",
        color: "#FA818A",
        price: 3.50
      },
      {
        imgUrl: pear,
        name: "Pear Juice",
        color: "#AFCD61",
        price: 9.50
      },
      {
        imgUrl: grapes,
        name: "Grapes Juice",
        color: "#D5AECD",
        price: 2.50
      },
      {
        imgUrl: mango,
        name: "Mango Juice",
        color: "#FEE0B9",
        price: 10.5
      },
      {
        imgUrl: avocado,
        name: "Avocado Juice",
        color: "#ACDAB4",
        price: 8.65
      },
      {
        imgUrl: orange,
        name: "Orange Juice",
        color: "#FCD855",
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
