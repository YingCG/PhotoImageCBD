import React from 'react';
import Search from './Search';


class PhotoAssistanse extends React.Component {
   render() {
      return (
        <div className ="main">
            <Search mode="dark" />
            <div className="content">
                <div className= "grid-container">
                    <div className="item">
                        <a href="#filmtype">
                            <h3 id="filmTypes">Diffrent type of film</h3>
                            <img src="/images/photo-1480815239937-f284b0e4645f_scanService.jpeg" alt="Slide" />
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
                        <button id ="readMore" a href="/SlideFilm">Read more</button>
                    </div>
      
                    <div className="item">
                        <a href="#PhotoTimeline">
                            <h3 id="PhotoTimeline">Photography timeline</h3>
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