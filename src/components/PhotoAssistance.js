import React from 'react';
import Search from './Search';

class PhotoAssistanse extends React.Component {
   render() {
      return (
        <div className ="main">
        <div className="darkSearch"><Search mode="dark" /></div>

            <div className="content">
                <div className= "grid-container">
                    <div className="item">
                        <a href="#filmtype">
                            <h3 id="filmTypes">Diffrent type of film</h3>
                            <img src="/images/photo-1563459171618-9f684daece51_filmService.jpeg" alt="Slide" />
                        </a>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                    </div>

                    <div className="item">
                        <a href="https://nzhistory.govt.nz/culture/nz-photography/timeline">
                            <h3 id="PhotoTimeline">Photography timeline</h3>
                            <img src="/images/001_a01_camera_obscura_abrazolas.jpg" alt="Slide" />
                        </a>    
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                
                    <div className="item">
                        <a href="/SlideFilm">
                            <h3 id="slideFilm">Slide film</h3>
                            <img src="/images/photo-1480815239937-f284b0e4645f_scanService.jpeg" alt="Slide" />
                        </a>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
      

                    <div className="item">
                        <a href="#todo">
                            <h3 id="E6 film types">Manual Guideline</h3>
                            <img src="/images/photography-chart-web.png" alt="Slide" />
                        </a>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="item">
                        <a href="#todo">
                            <h3 id="E6 film types">Lorem ipsum</h3>
                        <img src="/images/photo-1480815239937-f284b0e4645f_scanService.jpeg" alt="Slide" />
                        </a>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                       
                    </div>

                    <div className="item">
                    <a href="#todo">
                        <h3 id="E6 film types">Lorem ipsum</h3>
                        <img src="/images/photo-1480815239937-f284b0e4645f_scanService.jpeg" alt="Slide" />
                    </a>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    </div>
                    <div className="item">
                    <a href="#todo">
                        <h3 id="E6 film types">Lorem ipsum</h3>
                        <img src="/images/photo-1480815239937-f284b0e4645f_scanService.jpeg" alt="Slide" />
                    </a>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    </div>

                    <div className="item">
                    <a href="#todo">
                        <h3 id="E6 film types">Lorem ipsum</h3>
                        <img src="/images/photo-1480815239937-f284b0e4645f_scanService.jpeg" alt="Slide" />
                    </a>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    </div>
                    
                </div> 
            </div>

        </div>

      );
   }
};
export default PhotoAssistanse;