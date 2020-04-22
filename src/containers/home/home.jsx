import React, {Component} from 'react'
import './home.css';

import TopMenu from '../top-menu/top-menu'
import Categories from '../categories/categories'
import Products from '../products/products'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.onPress = this.onPress.bind(this);
        this.dispear = this.dispear.bind(this);
        this.state = {
            popUpStyle : {
                display : "none"
            },
            intervalId : ""
        }
    }
    
    onPress = () => {
        const popUpStyle = {
            display : "block"
        }
        this.setState({ popUpStyle: popUpStyle });
        const intervalId = setInterval(this.dispear, 3000);
        this.setState({ intervalId: intervalId });
    }

    dispear = () => {
        const popUpStyle = {
            display : "none"
        }
        this.setState({ popUpStyle: popUpStyle });
        clearInterval(this.state.intervalId)
    }

    render(){
        const {categoryItems, productItems} = this.props

        return (
            <div className="Home">
                <div className="TopSection">
                    <TopMenu/>
                    <Categories categoryItems={categoryItems}/>
                </div>
                <Products productItems={productItems} onPress={this.onPress}/>
                <div className="popUp fade-out" style={this.state.popUpStyle}>
                    <p>Add to cart successfully!</p>
                </div>
            </div>
          );
    }
}