import React, { Component } from "react";
import NavItem from "../../components/nav-item/nav-item";
import "./nav-footer.css";

class NavFooter extends Component {
  state = {
    navItems: [
      {
        badge: '',
        icon: "home",
        // title: 'Home',
        selected: true
      },
      {
        badge: '',
        icon: "shopping_cart",
        // title: 'Cart',
        selected: false
      },
      {
        badge: '',
        icon: "add_circle",
        // title: 'Add',
        selected: false,
        focus: true
      },
      {
        badge: '',
        icon: "signal_cellular_alt",
        // title: 'Trade',
        selected: false
      },
      {
        badge: '',
        icon: "person_outline",
        // title: 'Profile',
        selected: false
      },
    ],
  };

  render() {
    return (
      <div className="NavContainer">
        {this.state.navItems.map((navItem) => (
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

export default NavFooter;
