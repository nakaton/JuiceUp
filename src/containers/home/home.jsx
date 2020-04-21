import React, {Component} from 'react'
import './home.css';

import TopMenu from '../top-menu/top-menu'
import Categories from '../categories/categories'
import Products from '../products/products'

export default class Home extends Component{
    render(){
        const {categoryItems, productItems} = this.props

        return (
            <div className="Home">
                <div className="TopSection">
                    <TopMenu/>
                    <Categories categoryItems={categoryItems}/>
                </div>
                <Products productItems={productItems}/>
            </div>
          );
    }
}