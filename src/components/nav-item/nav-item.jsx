import React from "react";
import "./nav-item.css";

export default function NavItem(props) {
    // change style when Nav Item is selected
    let iconStyle = props.selected
        ? "material-icons activeColor md-32"
        : "material-icons inActiveColor md-32";

    iconStyle = props.focus ? "material-icons focusColor md-40" : iconStyle;

    return (
        <a href={props.path} onClick={props.onPress}>
            <div className="navItem">
                <span>{props.badge}</span>
                <span className={iconStyle}>{props.icon}</span>
                {/* <p>{props.title}</p> */}
            </div>
        </a>
    );
}
