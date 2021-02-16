import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'

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
            <nav className="navbar teal darken-3">
              <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                  <li><a href="#!" data-target="chat-dropdown" className="dropdown-trigger waves-effect"><i className="material-icons">settings</i></a></li>
                  <li><a href="#!" data-target="chat-dropdown" className="dropdown-trigger waves-effect"><i className="material-icons">logout</i></a></li>
                </ul><a href="#!" data-target="sidenav-left" className="sidenav-trigger left"><i className="material-icons white-text">menu</i></a>
              </div>
            </nav>
          </div>
          <ul id="sidenav-left" className="sidenav sidenav-fixed teal darken-3 darken-3 white-text">
            <li className="valign-wrapper">
              <img className="img-logo" src={logo} />
              <h4>Admin panel</h4>
            </li>
            <li><Link to="/technologies" className="waves-effect white-text">Technologies<i className="material-icons white-text">build</i></Link></li>
            <li><Link to="/industries" className="waves-effect white-text">Industries<i className="material-icons white-text">cases</i></Link></li>
            <li><Link to="/messages" className="waves-effect white-text">Messages<i className="material-icons white-text">email</i></Link></li>
          </ul>
        </header>
      </div>
      </>
    )
}






