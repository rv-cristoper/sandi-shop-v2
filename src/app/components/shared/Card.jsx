import React from 'react'
import { Link } from 'react-router-dom'
import './scss/card.scss'

const Card = ({ name, image, url }) => {
    return (
        <div className="card_2">
            <Link to={url}>
                <img src={image} alt={name} />
                <p>{name}</p>
            </Link>
        </div>
    )
}

export default Card