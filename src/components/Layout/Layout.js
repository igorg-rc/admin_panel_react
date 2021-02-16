import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { NavLink } from 'react-router-dom'

import './Layout.css'
import logo from '../../img/layout/index1_square_white_96.png'

export default function Layout() {

  //   document.addEventListener('DOMContentLoaded', function() {
  //     let elems = document.querySelector('.sidenav');
  //     let instance = M.Sidenav.init(elems, {
  //       edge: 'left', 
  //       menuWidth: 200,
  //       inDuration: 300,
  //       outDuration: 500,
  //       draggable: true
  //     });
  //   });


    return (
      <>
        <div className="has-fixed-sidebar">
          <header>
            <div className="navbar-fixed">
              <nav className="navbar white">
                <div className="nav-wrapper">
                  <ul id="nav-mobile" className="right">
                    <li><a href="#!" data-target="chat-dropdown" className="dropdown-trigger waves-effect"><i className="material-icons">settings</i></a></li>
                    <li><a href="#!" data-target="chat-dropdown" className="dropdown-trigger waves-effect"><i className="material-icons">logout</i></a></li>
                  </ul><a href="#!" data-target="sidenav-left" className="sidenav-trigger left"><i className="material-icons white-text">menu</i></a>
                </div>
              </nav>
            </div>
            <ul id="sidenav-left" className="sidenav sidenav-fixed indigo darken-1 white-text left-align">
              <li className="valign-wrapper">
                <img className="img-logo" src={logo} />
                <h4>Admin panel</h4>
              </li>
              <li><NavLink to="/technologies" activeClassName="active" className="waves-effect white-text">Technologies<i className="material-icons white-text">build</i></NavLink></li>
              <li><NavLink to="/industries" activeClassName="active" className="waves-effect white-text">Industries<i className="material-icons white-text">cases</i></NavLink></li>
              <li><NavLink to="/messages" activeClassName="active" className="waves-effect white-text">Messages<i className="material-icons white-text">email</i></NavLink></li>
            </ul>
          </header>
        </div>
      </>
    )
}






