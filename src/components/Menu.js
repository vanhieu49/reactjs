import React, { Component } from 'react'
import {
  NavLink
} from "react-router-dom";

const menus = [
  { to: '/', exact: true, name: 'Home' },
  { to: '/about', exact: true, name: 'About' },
  { to: '/course', exact: false, name: 'Course' },
  { to: '/leave-me', exact: true, name: 'Leave Me' },
  { to: '/admin/1', exact: true, name: 'Admin 1' },
  { to: '/admin/2', exact: true, name: 'Admin 2' }
]

class Menu extends Component {
  showMenus = (menus) => {
    if (menus.length) {
      return menus.map((menu, index) => {
        return (
          <NavLink key={index} exact={menu.exact} to={menu.to}
            activeClassName="active" className="list-group-item">{menu.name}
          </NavLink>
        )
      })
    }
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="list-group">
          {this.showMenus(menus)}
        </div>
      </div>

    );
  }
}

export default Menu;
