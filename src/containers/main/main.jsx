import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './main.css';

import Home from '../home/home'
import Cart from '../cart/cart'

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

export default class Main extends Component{
    
    // Data for Categories
    categoryItems = [
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
    ];

    // Data for Products
    productItems = [
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
    ];

    // Data for NavFooter
    navItems= [
        {
          badge: '',
          icon: "home",
          // title: 'Home',
          selected: true
        },
        {
          badge: '',
          icon: "shopping_cart",
          // title: 'Cart',
          selected: false
        },
        {
          badge: '',
          icon: "add_circle",
          // title: 'Add',
          selected: false,
          focus: true
        },
        {
          badge: '',
          icon: "signal_cellular_alt",
          // title: 'Trade',
          selected: false
        },
        {
          badge: '',
          icon: "person_outline",
          // title: 'Profile',
          selected: false
        },
    ];

    render(){
        return (
            <div className="Main">
                <Switch>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/">
                        <Home categoryItems={this.categoryItems} productItems={this.productItems} navItems={this.navItems}/>
                    </Route>
                </Switch>
            </div>
          );
    }
}