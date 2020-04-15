import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const menus = [
  {
    name : 'Trang chủ',
    to : '/',
    exact : true
  },
  {
    name : 'Quản lý sản phẩm',
    to : '/product-list',
    exact : false
  }
]

const MenuLink = ({label, to, activeOnlyExact}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyExact}
      children={({match})=> {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }} 
    />
  );
}

class Menu extends Component {
    render() {
        return (
            <div>
              <div className="navbar navbar-default">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                  {this.showMenu(menus)}
                </ul>
              </div>
            </div>
            
        );
    }

    showMenu = (menus) => {
      var reuslt = null;

      if(menus.length > 0) {
        reuslt = menus.map((menu, index) => {
          return (
            <MenuLink
               key = {index}
               label = {menu.name}
               to = {menu.to}
               activeOnlyExact = {menu.exact}
            />
          );
        }) 
      }
      return reuslt;
    }
  
}

export default Menu;
