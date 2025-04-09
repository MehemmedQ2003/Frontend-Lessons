import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card/Card";


const cards = [
  {
    title: "First Card",
    description: "Card description",
    btnText: "Read more",
  },
  {
    title: "Second Card",
    description: "Card description",
    btnText: "Read more",
  },
  {
    title: "Third Card",
    description: "Card description",
    btnText: "Read more",
  },
  {
    title: "Fourth Card",
    description: "Card description",
    btnText: "Read more",
  },
];

// const cardElement = [];

// for (let i = 0; i < cards.length; i++) {
//   cardElement.push(
//     <Card
//       title={cards[i].title}
//       description={cards[i].description}
//       btnText={cards[i].btnText}
//     />
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* {cardElement} */}

  {cards.map((card, index) => (
    <Card key={index} title={card.title} description={card.description} btnText={card.btnText} />
  ))}
  </StrictMode>
);
