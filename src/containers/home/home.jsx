import React, {Component} from 'react'
import './home.css';

import TopMenu from '../top-menu/top-menu'
import Categories from '../categories/categories'
import Products from '../products/products'

export default class Home extends Component{

    render(){
        const {categoryItems, productItems, onPress, popUpStyle} = this.props

        return (
            <div className="Home">
                <div className="TopSection">
                    <TopMenu/>
                    <Categories categoryItems={categoryItems}/>
                </div>
                <Products productItems={productItems} onPress={onPress}/>
                <div className="popUp fade-out" style={popUpStyle}>
                    <p>Add to cart successfully!</p>
                </div>
            </div>
          );
    }
}