import React from "react";
import Service from "./Service";
import Search from "./Search";
import Cards from "./Cards";


class Passport extends React.Component {
  render() {
    return (
        <div className="service-main">

          <div className="service-banner">
            <div className="service-form">
            <div className="iconList">
      
                <Service type="Passport" text="Passport Photo" mode="white"/>
                <Service type="ID" text="ID photo" mode="white"/>
                <Service type="Visa" text="Residents photo" mode="white"/>
                <Service type="Citizen" text="Citizen photo" mode="white"/>
                <Service type="CV_Profile" text="CV / Job profile photo" mode="white"/>
                <Service type="Ecommerce" text="E-commerce catalogue" mode="white"/>
                <Service type="BabyID" text="Baby ID" mode="white"/>
                <Service type="Store" text="Coming In Now" mode="white"/>
                <Service type="EditOnly" text="Edit Only" mode="white"/>
</div>
            </div>

            <div className="service-picture service-picture-passport">
            <div className="heroSearch"><Search /></div>
            </div>
          </div>

          <div className="card-container ">
              <div className="informations"><Cards /></div>
        </div>
        </div>

        
    );
  }
}

export default Passport;
