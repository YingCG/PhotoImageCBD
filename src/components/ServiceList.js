import React from "react";
import Service from "./Service";


const ServiceList = () => {
    return (
        <div className="Services">
          <Service type="Passport" text="Passport Photo"  />
          {/* <Service type="Photo" text="Photo Processing" /> */}
          <Service type="Film" text="Photo / Film Processing" />
          <Service type="Restoration" text="Photo restoration / Photo editing" />
          <Service type="Scanning" text="Scanning / Digitisation service" />
          <Service type="VideoConvert" text="Video / Audio Convert" />
          <Service type="Translation" text="Documentation / Translation Service" />
          <Service type="Frames" text="Canvas / Frames / Accessories" />
          <Service type="KeyCutting" text="Key Cutting / Access Card" />
        </div>
    );
};
export default ServiceList;