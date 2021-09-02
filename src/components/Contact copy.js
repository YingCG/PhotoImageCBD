import React from "react";
import ServiceList from "./ServiceList";

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div className="service-main">

      <div className="service-banner">
        <div className="service-form">
          <div className="icon">
            <img src="/service_icon/callWhite_.svg" alt="Icon" />
            <a href="tel: 09-366 3050">09-366 3050 </a>
          </div>
          <div className="icon">
            <img src="/service_icon/locationWhite.svg" alt="Icon" />
            <p>53 Victoria Street West, Auckland CBD</p>
          </div>
          <div className="icon">
            <img src="/service_icon/TimeWhite.svg" alt="Icon" />
            <p>
              {" "}
              {"Monday To Friday : 9am to 6pm"}
              <br />
              {"Saturday : 1pm to 5pm"}
              <br />
              {"Sunday : Closed"}
            </p>
          </div>

          <div className="icon">
            <img src="/service_icon/EmailWhite.svg" alt="Icon" />
            <a href="mailto:ygoh201@mywhitecliffe.com">
              photoimage@hotmail.co.nz
            </a>
            <br />
          </div>
        </div>

          <iframe
            className="google-map-code"
            title="GoogleMap"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=53%20Victoria%20Street%20West%20Auckland+(Photo%20Image%20CBD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <ServiceList />
      </div>
      </div>
    );
  }
}
export default ContactUs;
