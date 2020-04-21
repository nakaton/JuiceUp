import React, { Component } from "react";
import CategoryItem from "../../components/category-item/category-item";
import "./categories.css";

import avocado from "../../assets/category/avocado.svg";
import mango from "../../assets/category/mango.svg";
import grapes from "../../assets/category/grapes.svg";
import apple from "../../assets/category/apple.svg";
import orange from "../../assets/category/orange.svg";
import pear from "../../assets/category/pear.svg";

class Categories extends Component {
  // name = "avocado";
  state = {
    categoryItems: [
      {
        // This is another way to bring in static img in React
        // imgUrl: require(`../../assets/category/${this.name}.svg`),
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
      <div className="CategoriesContainer">
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

export default Categories;
