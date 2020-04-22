import React from "react";
import "./stepper.css";

export default function Stepper(props) {
  return (
    <div className="stepper">
      <span
        className="material-icons"
        role="button"
        onClick={() => props.subtractQty(props.name)}
      >
        remove_circle_outline
      </span>
      <p className="productItemQty">{props.qty}</p>
      <span
        className="material-icons"
        role="button"
        onClick={() => props.addQty(props.name)}
      >
        add_circle_outline
      </span>
    </div>
  );
}
