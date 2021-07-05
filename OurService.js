import React from "react";
import Search from "./Search";

class OurService extends React.Component {
  render() {
    return (
      <div>
        <Search mode="dark" />
        <div className="page-title">
        <h2>Our Service</h2>
          <div className="info">
            <p>
              <img
                src="/service_icon/call.svg"
                alt="Phone"
                width="25px"
                height="25px"
              />
              09-366 3050
            </p>
          </div>
          <div className="info">
            <p>
              <img
                src="/service_icon/location.svg"
                alt="Address"
                width="25px"
                height="25px"
              />
              53 Victoria Street West, Auckland CBD
            </p>
          </div>
        </div>

        <div className="Photo_Image_Service">
          <div className="Service_container">
            <a className="button-image" href="/Service/Passport">
              <img
                src="/images/photo-1576737064520-f45d313d17ff_passportService.jpg"
                alt="Passport Service"
              />
              {/* <button className="btn">Passport photo</button> */}
            </a>
            <div className="desc">
              <ul>
                <b>Passport photo</b>
                <li>ID photo</li>
                <li>Residents photo</li>
                <li>Citizen photo</li>
                <li>CV / Job profile photo</li>
              </ul>
            </div>
          </div>

          <div className="Service_container">
            <a className="Service 2" href="#PhotoPrintingService">
              <img
                src="/images/photo-1508004680771-708b02aabdc0_photoService.jpg"
                alt="Passport Service"
              />
            </a>
            <div className="desc">
              <ul>
                <b>Photo Printing</b>
                <li>Printing from old photo</li>
                <li>Film Processing</li>
              </ul>
            </div>
          </div>

          <div className="Service_container">
            <a className="Service 3" href="#PhotoRestoration">
              <img
                src="/images/photo-1453828423292-392a660a502f_restoreService.jpeg"
                alt="Passport Service"
              />
            </a>
            <div className="desc">
              <ul>
                <b>Photo restoration</b>
                <li>Photo Editing </li>
                <li> Old Photo Copy </li>
                <li> Multi-platform Size Customization </li>
                <li> E-commerce Image Editing </li>
                <li> Social Media Strategy</li>
                <li> Wedding Photo Retouching Service</li>
              </ul>
            </div>
          </div>

          <div className="Service_container">
            <a className="Service 4" href="#ScanningService">
              <img
                src="/images/photo-1585313727575-db8012447452_digitalService.jpeg"
                alt="Passport Service"
              />
            </a>

            <div className="desc">
              <ul>
                <b>Scanning/ Digitisation service</b>
                <li>Scanning from film/negative</li>
                <li>Scanning from slides E6</li>
                <li>Scanning from Old photo</li>
                <li>Scanning from document</li>
              </ul>
            </div>
          </div>

          <div className="Service_container">
            <a className="Service 5" href="#videoConvert">
              <img
                src="/images/photo-1589261820052-f9b9075c186c_videoService.jpeg"
                alt="Passport Service"
              />
            </a>
            <div className="desc">
              <ul>
                <b> Video/Audio Converting</b>
                <li> Home video to digital formats or DVD </li>
                <li> Vinyl to CD or mp3 </li>
                <li> Audio cassettes to mp3 </li>
                <li> VHS and VHS-C (Compact)</li>
                <li> MINI DV (digital-video) TAPES </li>
                <li> Video8/Hi8 VIDEO </li>
              </ul>
            </div>
          </div>

          <div className="Service_container">
            <a className="Service 6" href="#DocumentService">
              <img
                src="/images/photo-1555431189-0fabf2667795.jpeg"
                alt="Passport Service"
              />
            </a>
            <div className="desc">
              <ul>
                <b> Certified Translation Service</b>
                <li> Document printing</li>
                <li> Document binding</li>
                <li> Document printing &amp; binding</li>
                <li> Document printing &amp; scanning</li>
              </ul>
            </div>
          </div>

          <div className="Service_container">
            <a className="Service 7" href="#Canvas_Frame">
              <img
                src="/images/photo-1582582494705-f8ce0b0c24f0.jpeg"
                alt="Passport Service"
              />
            </a>
            <div className="desc">
              <ul>
                <b>Canvas &amp; Frames</b>
                <li>Album </li>
                <li>Batteries </li>
                <li>Photography</li>
                <li>Disposal camera</li>
                <li>Instant camera</li>
              </ul>
            </div>
          </div>

          <div className="Service_container">
            <a className="Service 8" href="#KeyCutting">
              <img
                src="/images/photo-1562770584-eaf50b017307_keyService.jpeg"
                alt="Passport Service"
              />
            </a>
            <div className="desc">
              <ul>
                <b>Key &amp; Access Card </b>
                <li> Car key services </li>
                <li> Duplicating RFID access card service</li>
                <li> Household key cutting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OurService;
