import React from 'react'
import './Login.css'
import logo from '../../img/layout/index1_square_white_96.png'

export default function Login () {
  return (
    <div id="login" style={{ paddingTop: '75px', paddingLeft: '' }}>
      <div className="" style={{ height: '100vh' }}>

        <div class="row">
          <div className="col s6 offset-s3 form-wrapper indigo darken-1 white-text">
            <div className="row">
              <div className="col s12 logo-handler">
                <img src={logo} alt="logo" className="form_logo-img" />
                <h3>BonfireApps</h3>
                <h6>Admin panel</h6>
              </div>
            </div>


            <form class="">
              <div class="row">
                <div class="input-field col s10 offset-s1">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="login" type="text" name="login" />
                  <label for="login">Login</label>
                </div>
              </div>

              <div className="row">
                <div class="input-field col s10 offset-s1">
                  <i class="material-icons prefix">vpn_key</i>
                  <input id="password" type="password" name="password" />
                  <label for="password">Password</label>
                </div>
              </div>

              <div className="form-links">
                <div className="row">
                  <div className="col s6 left">
                    
                  </div>
                </div>
              </div>

              <div className="row">
                <div class="input-field col s10 offset-s1">
                  <a class="waves-effect waves-light btn"><i class="material-icons left">login</i>Sign in</a>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

      

    </div>
  )
}
