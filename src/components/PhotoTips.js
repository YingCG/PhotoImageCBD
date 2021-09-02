import React from 'react';
import Search from './Search';
import TipCards from './TipCards';

class PhotoTips extends React.Component {
   render() {
      return (
        <div className ="main">
        <div className="darkSearch"><Search mode="dark" /></div>
            <div className="content">
                <div className= "grid-container">
                    <TipCards />
                </div>

        </div>
        </div>
    

      );
   }
};
export default PhotoTips;