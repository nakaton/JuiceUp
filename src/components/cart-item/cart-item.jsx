import React from 'react'
import './cart-item.css'
import Stepper from '../stepper/stepper';

export default function CartItem(props){

    const divStyle = {
        background: props.bgColor,
        border: `1.5px solid ${props.bgColor}`
    };

    return (
        <div className="cartItemContainer">
            <div className="productItem" style={divStyle}>
                <img src={props.imgUrl} alt="product item" className="productImg"/>
            </div>
            <div className="productItemInfo">
                <p className="productItemName">{props.name}</p>
                <p className="productItemDesc">{props.desc}</p>
                <p className="productItemPrice">$ {props.price}</p>
                <Stepper name={props.name} qty={props.qty} addQty={props.addQty} subtractQty={props.subtractQty}/>
            </div>
        </div>
    );
}
