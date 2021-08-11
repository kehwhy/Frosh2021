import React from 'react';

import "../assets/scss/_sponsors.scss"

const Sponsors = () => {

    function importAll(r) {
        let images = {}
        r.keys().map((item, index) => { images[index] = r(item); });
        return images;
      }

      const scuntimages = importAll(require.context('../assets/images/sponsors', false, /\.(png|jpe?g|svg)$/));
      const crawlImages = importAll(require.context('../assets/images/sponsors', false, /\.(png|jpe?g|svg)$/));


    return (
        <div className="sponsors">
            {crawlImages.map(image => <img className="small" src={image} />)}
            {scuntimages.map(image => <img className="small" src={image} />)}
            
            

        </div>
    );
}

export default Sponsors;
