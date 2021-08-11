import React from 'react';

import { Button } from '@material-ui/core';

import "../assets/scss/_checkoutTile.scss"


const CheckoutTile = ({title, description, link, buttonTitle}) => {

    const openLink = () => {
        window.open(link);
    }
    
    return (
        <div className="check-it-out-tile">
            <h2 className="check-title">{title}</h2>
            <p className="check-desc">{description}</p>
            <Button variant='contained' color="secondary" className="check-button" onClick={openLink}>{buttonTitle}</Button>
        </div>

    )
}

export default CheckoutTile;