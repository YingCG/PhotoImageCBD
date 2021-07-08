import React from "react";
import ServiceList from "./ServiceList";
import Search from "./Search";

class Home extends React.Component {

  render() {
    return (
      <div id="container">
        <div className="hero">
        <div className="heroSearch"><Search /></div>
          <div className="hero-picture"></div>
        </div>
        
      <div className="ContainerMenu">
         <ServiceList />
      </div>
      </div>
    );
  }
}

export default Home;
