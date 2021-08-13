import React from 'react';

import "../../assets/scss/_sponsors.scss"

const Sponsors = () => {

    function importAll(r) {
        let images = []
        r.keys().map((item, index) => { images[index] = r(item); });
        return images;
      }

    const otherImages = importAll(require.context('../../assets/images/sponsors/other', false, /\.(png|jpe?g|svg)$/));
    const crawlImages = importAll(require.context('../../assets/images/sponsors/crawl', false, /\.(png|jpe?g|svg)$/));
    const majorImages = importAll(require.context('../../assets/images/sponsors/major', false, /\.(png|jpe?g|svg)$/));

    const majorLinks = ["https://www.nbc.ca/", "https://www.prep101.com/", "https://www.oxfordresidential.ca/en-ca/our-apartments/lacite"]

    const crawlLinks = ["https://basharestaurants.com/", "https://www.chefoncalldelivery.com/", "http://www.piranhabar.ca/", "https://www.instagram.com/stbmontreal/?hl=en", "https://www.instagram.com/tipsycowmtl/?hl=en", "https://www.brutopia.net/","https://altorestaurant.ca/en/", "https://www.instagram.com/ofour.montreal/"]

    const otherLinks = ["https://www.stickergiant.com/", "https://www.instagram.com/thesunsetdrip/?hl=en", "https://en.montrealalouettes.com/", "https://www.kamifood.co/", "https://licm.ca/", "https://m4burritos.ca/en/", "https://www.stocate.com/", "https://www.commonroombarbers.com/", "https://universityapartments.ca/montrealrentals/", "https://muziquemontreal.com/", "https://www.zyeu.com/", "https://ca.whiteclaw.com/fr/", "https://dispatchcoffee.ca/", "https://blackoutfitness.net/"]

    return (
        <div className="sponsors">
            <div className="major-sponsors">
                {majorImages.map((image, index) => <a href={majorLinks[index]}><img className="major" src={image} /></a>)}
            </div>
            <div className="crawl-sponsors">
                {crawlImages.map((image, index) => <a href={crawlLinks[index]}><img className="crawl" src={image} /></a>)}
            </div>
            <div className="other-sponsors">
                {otherImages.map((image, index) => <a href={otherLinks[index]}><img className="other" src={image} /></a>)}
            </div>
        </div>
    );
}

export default Sponsors;
