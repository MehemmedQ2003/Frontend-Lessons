/* eslint-disable react/prop-types */
// import React from "react";
import "./Card.css";


// ? Arrow function

const Card = ({title, description, btnText, btnClick}) => {
    const clickFunc = () => {
        alert({description});
    }

    return (
        <div className="card">
            <h2>{title || "Default title"}</h2>
            <p>{description || "Default description"}</p>
            <button onClick={btnClick || clickFunc}>{btnText}</button>
        </div>
    )
}



// ? Regular function

// function Card() {
//     return (
//         <div className="card">
//             <h2>Card title</h2>
//             <p>Card Description</p>
//             <button>Read more</button>
//         </div>
//     )
// }

export default Card