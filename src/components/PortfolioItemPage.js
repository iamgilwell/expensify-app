import React from 'react';
import { Link } from 'react-router-dom'

const PortfolioItemPage = (props) => {

    return (
        <div>
            <h1>My Work</h1>
            <p>Checkout the following things I've done {props.match.params.id}</p>

        </div>
    )

}

export default PortfolioItemPage;