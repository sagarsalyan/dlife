import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Offers from './components/Offers'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contactus" component={ContactUs}/>
          <Route path="/offers" component={Offers}/>
        </Switch>
      </React.Fragment>
    );
  }
}
export default App
