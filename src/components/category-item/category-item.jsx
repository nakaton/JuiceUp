import React from 'react'
import './category-item.css'

export default function CategoryItem(props){

    const divStyle = {
        background: props.bgColor,
        border: `1.5px solid ${props.bgColor}`
    };

    return (
        <div className="categoryItemContainer">
            <div className="categoryItem" style={divStyle}>
                <img src={props.imgUrl} alt="category item" className="categoryImg"/>
            </div>
            <p className="categoryItemName">{props.categoryItemName}</p>
        </div>
    );
}
