import React from "react";
import ServiceList from "./ServiceList";
import Search from "./Search"


class Home extends React.Component {

  render() {
    return (
      <div id="container">
        <div className="hero">
        <Search />
          <div className="hero-picture"></div>
        </div>
        <ServiceList />
      </div>
    );
  }
}

export default Home;
