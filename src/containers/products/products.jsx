import React, { Component } from "react";
import PropTypes from 'prop-types';
import ProductItem from "../../components/product-item/product-item";
import "./products.css";


class Products extends Component {
  static propTypes = {
    productItems: PropTypes.array.isRequired
  
  }
  render() {
    const productItems = this.props.productItems;

    return (
      <div className="ProductsContainer">
        <div className="TopTitle">
          <p>Most Popular</p>
        </div>
        <div className="Products">
          {productItems.map(productItem => (
          <ProductItem
            key={productItem.name}
            bgColor={productItem.color}
            imgUrl={productItem.imgUrl}
            productItemName={productItem.name}
            productItemPrice={productItem.price}
            onPress={this.props.onPress}
          />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
