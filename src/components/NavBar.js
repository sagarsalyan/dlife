import React, { Component } from 'react'
import logo from '../images/eagle.png'
import style from './style.module.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



class NavBar extends Component {
  constructor() {
    super();
    this.state = {

    };

  }
  render() {

    return (
      <React.Fragment>
        <div class={style.header}>
          <div class={style.headerFirst}>
            <span><img src={logo} class={style.logoStyle}/></span>
          </div>
          <div class={style.headerMiddle}>
            <div class={style.headerMiddleContent}>
              <div class={style.headerMiddleText}>INTERIORS</div>
              <div class={style.headerMiddleBox}>
                <div class={style.headerSinceText}>SINCE</div>
                <div class={style.headerYearText}>2004</div>
              </div>
            </div>
          </div>
          <div class={style.headerLast}>
            <div class={style.headerLastTop}>
              <span>BLOG</span>
              <span class={style.headerLastTopDivider}>|</span>
              <span>FAQ</span>
              <span class={style.headerLastTopDivider}>|</span>
              <span>JOB WITH US</span>
            </div>
            <div class={style.headerLastBottom}>
              <div>
                <span>Kerala</span>
                <span>8129482811</span>
              </div>
              <div>
                <span>Bangalore</span>
                <span>9544337200</span>
              </div>
              <div>
                <span>Perla</span>
                <span>8129913457</span>
              </div>

            </div>
            <div>

            </div>
          </div>

        </div>
        <div class={style.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default NavBar
