import React, { Component } from 'react'
import { Route, NavLink } from "react-router-dom";

const menus = [
    { to: '/', exact: true, name: 'Home' },
    { to: '/about', exact: true, name: 'About' },
    { to: '/blog', exact: true, name: 'Blog' },
    { to: '/login', exact: true, name: 'Login' },
]
const MenuLink = (menu) => {
    // console.log("url:")
    // let url = menu.menu.to;
    // console.log(url)

    // return 0;
    return (
        <Route
            path={menu.menu.to}
            exact={menu.menu.exact}
            children={
                (match) => {
                    let active = (match !== null) ? 'active' : '';
                    return (
                        <li className={`nav-item px-lg-4 ${active}`}>
                            <NavLink  to={menu.menu.to} className="nav-link text-uppercase text-expanded">{menu.menu.name}</NavLink>
                        </li>
                    )
                }
            }
        />
    )
}

class Navigation extends Component {

    showMenu = (menus) => {
        if (menus.length) {
            return menus.map((menu, index) => {
                return (
                    <MenuLink key={index} menu={menu} />
                )
            })
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" to="/">Business Casual</NavLink>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            {this.showMenu(menus)}
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                {/* /.container */}
            </nav>

        );
    }
}


export default Navigation;
