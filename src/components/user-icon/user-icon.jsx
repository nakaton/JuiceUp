import React from 'react'
import './user-icon.css'

export default function UserIcon(props) {
    return(
        <div>
            {/* <p>{props.userName}</p> */}
            <img src={props.imgUrl} alt="user icon" className="userIcon"/>
        </div>
    );
}