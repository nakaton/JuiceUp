import React from 'react'
import './product-item.css'
import shoppingCart from '../../assets/product/shopping_cart.svg'

export default function ProductItem(props){

    const divStyle = {
        background: props.bgColor,
        border: `1.5px solid ${props.bgColor}`
    };

    return (
        <div className="productItemContainer" style={divStyle}>
            <div className="productItem" >
                <img src={props.imgUrl} alt="product item" className="productImg"/>
            </div>
            <div className="productItemInfo">
                <div className="productItemInfo-Left">
                    <p className="productItemName">{props.productItemName}</p>
                    <p className="productItemPrice">$ {props.productItemPrice}</p>
                </div>
                <div className="productItemInfo-Right" role="button" onClick={() => props.onPress(props.productItemName)}>
                    <img src={shoppingCart} alt="shopping cart" className="cartImg"/>
                </div>
            </div>
        </div>
    );
}
