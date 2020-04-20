import React, {Component} from 'react';
import Logo from '../../components/logo/logo';
import UserIcon from '../../components/user-icon/user-icon';
import './top-menu.css'

class TopMenu extends Component {
    state = {
        userName: "Salar Jane",
        imgUrl: "https://randomuser.me/api/portraits/women/82.jpg"
    }

    render(){
        return(
            <div className="TopMenuContainer">
                <Logo/>
                <UserIcon imgUrl={this.state.imgUrl} userName={this.state.userName}/>
            </div>
        )
    }
}

export default TopMenu