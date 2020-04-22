import React, { Component } from "react";
import "./cart.css";
import NavTop from "../../components/nav-top/nav-top";
import CartItem from "../../components/cart-item/cart-item";

export default class Cart extends Component {
  render() {
    const cartItems = this.props.cartItems;
    return (
      <div className="cart">
        <NavTop />

        <div className="cartItems">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.name}
              bgColor={cartItem.color}
              imgUrl={cartItem.imgUrl}
              name={cartItem.name}
              price={cartItem.price}
              desc={cartItem.desc}
              qty={cartItem.qty}
              addQty={this.props.addQty}
              subtractQty={this.props.subtractQty}
            />
          ))}
        </div>
        <div className="summary">
          <span>Total: ${this.props.total}</span>
          <p>PAY</p>
        </div>
      </div>
    );
  }
}
