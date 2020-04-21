import React, {Component} from 'react'
import './home.css';

import TopMenu from '../top-menu/top-menu'
import Categories from '../categories/categories'
import Products from '../products/products'
import NavFooter from '../nav-footer/nav-footer';

export default class Home extends Component{
    render(){
        return (
            <div className="Home">
                <div className="TopSection">
                    <TopMenu/>
                    <Categories/>
                </div>
                <Products/>
                <NavFooter/>
            </div>
          );
    }
}