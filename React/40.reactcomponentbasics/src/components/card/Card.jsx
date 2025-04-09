import "./Card.css"

const Card = () => {
    let title = "Card components";
    let description = "This is a card components";
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card
