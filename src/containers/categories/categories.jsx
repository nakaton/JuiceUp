import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoryItem from "../../components/category-item/category-item";
import "./categories.css";

class Categories extends Component {
  static propTypes = {
    categoryItems: PropTypes.array.isRequired,
  };

  render() {
    const categoryItems = this.props.categoryItems;

    return (
      <div className="categoriesContainer">
        {categoryItems.map((categoryItem) => (
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
