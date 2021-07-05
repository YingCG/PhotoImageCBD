import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./Heading";
import OurService from "./OurService";
import Contact from "./Contact";
import Home from "./Home";
import OrderOnline from "./OrderOnline";
import PhotoAssistance from "./PhotoAssistance";
import Passport from "./Passport";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";


const App = () => {
  return (
    <Router>
      <Heading />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/OurService" component={OurService} />
        <Route path="/PhotoAssistance" component={PhotoAssistance} />
        <Route path="/OrderOnline" component={OrderOnline} />
        <Route path={"/Service/Passport"} component={Passport} />  
      </Switch>
      <footer>
        <a href="#copyright"> Copyright © 2021 Photo Image CBD </a>
        <a href="Privacy Policy"> Privacy Policy</a>
      </footer>
    </Router>
  );
};
export default App;
