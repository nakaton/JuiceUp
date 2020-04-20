import React, { Component } from "react";
import CategoryItem from "../../components/category-item/category-item";
import "./category.css";

import avocado from "../../assets/avocado.svg";
import mango from "../../assets/mango.svg";
import grapes from "../../assets/grapes.svg";
import apple from "../../assets/apple.svg";
import orange from "../../assets/orange.svg";
import pear from "../../assets/pear.svg";

class Category extends Component {
  state = {
    categoryItems: [
      {
        imgUrl: avocado,
        name: "Avocado",
        color: "#E0F0E4",
      },
      {
        imgUrl: mango,
        name: "Mango",
        color: "#FFF2E1",
      },
      {
        imgUrl: grapes,
        name: "Grapes",
        color: "#ECE2FA",
      },
      {
        imgUrl: apple,
        name: "Apple",
        color: "#FFE2E0",
      },
      {
        imgUrl: orange,
        name: "Orange",
        color: "#FFEEDB",
      },
      {
        imgUrl: pear,
        name: "Pear",
        color: "#AFCD61",
      },
    ],
  };
  render() {
    return (
      <div className="CategoryContainer">
        {this.state.categoryItems.map(categoryItem => (
        <CategoryItem
          key={categoryItem.name}
          bgColor={categoryItem.color}
          imgUrl={categoryItem.imgUrl}
          categoryItemName={categoryItem.name}
        />
        ))}
      </div>
    );
  }
}

export default Category;
