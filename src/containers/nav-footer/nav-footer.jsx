import React, { Component } from "react";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

import NavItem from "../../components/nav-item/nav-item";
import "./nav-footer.css";

class NavFooter extends Component {
    static propTypes = {
        navItems: PropTypes.array.isRequired
    }

    render() {
        const navItems = this.props.navItems
        return (
        <div className="NavContainer">
            {navItems.map((navItem) => (
            <NavItem
                key={navItem.icon}
                badge={navItem.badge}
                icon={navItem.icon}
                title={navItem.title}
                selected={navItem.selected}
                focus={navItem.focus}
                onPress={() => this.props.history.replace(navItem.path)}
            />
            ))}
        </div>
        );
    }
}

// User withRouter to render a component with Router api: history/location/math
export default withRouter(NavFooter);
