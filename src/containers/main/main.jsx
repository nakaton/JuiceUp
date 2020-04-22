import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./main.css";

import Home from "../home/home";
import Cart from "../cart/cart";
import NavFooter from "../nav-footer/nav-footer";

import category_avocado from "../../assets/category/avocado.svg";
import category_mango from "../../assets/category/mango.svg";
import category_grapes from "../../assets/category/grapes.svg";
import category_apple from "../../assets/category/apple.svg";
import category_orange from "../../assets/category/orange.svg";
import category_pear from "../../assets/category/pear.svg";

import avocado from "../../assets/product/wine/celebratory-cherry.png";
import mango from "../../assets/product/wine/celebratory_glogg.png";
import grapes from "../../assets/product/wine/kosher-grape.png";
import apple from "../../assets/product/wine/celebratory-caramel-apple.png";
import orange from "../../assets/product/wine/celebratory-cranberry.png";
import pear from "../../assets/product/wine/celebratory-organic-pear.png";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.addQty = this.addQty.bind(this);
    this.subtractQty = this.subtractQty.bind(this);
    this.state = {
      // Data for Categories
      categoryItems: [
        {
          // This is another way to bring in static img in React
          // imgUrl: require(`../../assets/category/${this.name}.svg`),
          imgUrl: category_avocado,
          name: "Avocado",
          color: "#E0F0E4",
        },
        {
          imgUrl: category_mango,
          name: "Mango",
          color: "#FFF2E1",
        },
        {
          imgUrl: category_grapes,
          name: "Grapes",
          color: "#ECE2FA",
        },
        {
          imgUrl: category_apple,
          name: "Apple",
          color: "#FFE2E0",
        },
        {
          imgUrl: category_orange,
          name: "Orange",
          color: "#FFEEDB",
        },
        {
          imgUrl: category_pear,
          name: "Pear",
          color: "#AFCD61",
        },
      ],

      // Data for Products
      productItems: [
        {
          imgUrl: apple,
          name: "Apple Juice",
          color: "#FA818A",
          price: 3.5,
        },
        {
          imgUrl: pear,
          name: "Pear Juice",
          color: "#AFCD61",
          price: 9.5,
        },
        {
          imgUrl: grapes,
          name: "Grapes Juice",
          color: "#D5AECD",
          price: 2.5,
        },
        {
          imgUrl: mango,
          name: "Mango Juice",
          color: "#FEE0B9",
          price: 10.5,
        },
        {
          imgUrl: avocado,
          name: "Avocado Juice",
          color: "#ACDAB4",
          price: 8.65,
        },
        {
          imgUrl: orange,
          name: "Orange Juice",
          color: "#FCD855",
          price: 5.5,
        },
      ],

      // Data for NavFooter
      navItems: [
        {
          badge: "",
          icon: "home",
          // title: 'Home',
          path: "/",
          selected: true,
        },
        {
          badge: "",
          icon: "shopping_cart",
          // title: 'Cart',
          path: "/cart",
          selected: false,
        },
        {
          badge: "",
          icon: "add_circle",
          // title: 'Add',
          selected: false,
          path: "/add",
          focus: true,
        },
        {
          badge: "",
          icon: "signal_cellular_alt",
          // title: 'Trade',
          path: "/trade",
          selected: false,
        },
        {
          badge: "",
          icon: "person_outline",
          // title: 'Profile',
          path: "/profile",
          selected: false,
        },
      ],

      // Data for Cart Items
      cartItems: [
        {
          imgUrl: apple,
          name: "Apple Juice",
          color: "#FA818A",
          price: 3.5,
          desc: "Popular juice with sparkle",
          qty: 1,
        },
        {
          imgUrl: pear,
          name: "Pear Juice",
          color: "#AFCD61",
          price: 9.5,
          desc: "Popular juice with sparkle",
          qty: 2,
        },
        {
          imgUrl: grapes,
          name: "Grapes Juice",
          color: "#D5AECD",
          price: 2.5,
          desc: "Popular juice with sparkle",
          qty: 1,
        },
        {
          imgUrl: mango,
          name: "Mango Juice",
          color: "#FEE0B9",
          price: 10.5,
          desc: "Popular juice with sparkle",
          qty: 1,
        },
        {
          imgUrl: avocado,
          name: "Avocado Juice",
          color: "#ACDAB4",
          price: 8.65,
          desc: "Popular juice with sparkle",
          qty: 1,
        },
        {
          imgUrl: orange,
          name: "Orange Juice",
          color: "#FCD855",
          price: 5.5,
          desc: "Popular juice with sparkle",
          qty: 1,
        },
      ],
    };
  }

  // Add order qty in Cart
  addQty(e) {
    console.log("start to add qty!!");
    let cartItems = this.state.cartItems;
    let currentCartItem = cartItems.find((cartItem) => cartItem.name === e); // Find current cartItem
    currentCartItem.qty += 1;
    this.setState({ cartItems: cartItems });
    console.log("add qty finish!");
  }

  // Subtract order qty in Cart
  subtractQty(e) {
    console.log("start to subtract qty!!");
    let cartItems = this.state.cartItems;
    let currentCartItem = cartItems.find((cartItem) => cartItem.name === e); // Find current cartItem
    currentCartItem.qty -= 1;
    
    if(currentCartItem.qty <= 0){
      currentCartItem.qty = 0
    }
    this.setState({ cartItems: cartItems });
    console.log("subtract qty finish!");
  }

  render() {
    const { navItems } = this.state;
    const path = this.props.location.pathname; // Get reqeust path
    let lastNav = navItems.find((navItem) => navItem.selected === true); // Find last selected NavItem
    lastNav.selected = false;
    let currentNav = navItems.find((navItem) => navItem.path === path); // Find current selected NavItem
    currentNav.selected = true;

    return (
      <div className="Main">
        <Switch>
          <Route path="/cart">
            <Cart
              cartItems={this.state.cartItems}
              addQty={this.addQty}
              subtractQty={this.subtractQty}
            />
          </Route>
          <Route path="/">
            <Home
              categoryItems={this.state.categoryItems}
              productItems={this.state.productItems}
            />
          </Route>
        </Switch>
        <NavFooter navItems={this.state.navItems} />
      </div>
    );
  }
}
