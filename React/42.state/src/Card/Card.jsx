/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import "./Card.css"
import { useState } from 'react'

const Card = ({ title, description, initial_data, increase, decrease }) => {
    const [data, setData] = useState(initial_data);
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{data}</p>
            <button onClick={() => setData(data + increase)}>Increase</button>
            <button onClick={() => setData(data - decrease)}>Decrease</button>
        </div>
    )
}

export default Card
