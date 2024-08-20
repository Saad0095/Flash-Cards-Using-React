import React from "react";

const Cards = ({ flashCards,handleShowAnswer }) => {
  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-3">
      {flashCards.map((card) => {
        return (
          <div
            key={card.id}
            className="flex flex-col justify-between border-[1px] border-gray-600 rounded w-80 h-80"
          >
            <div className="flex justify-center items-center h-3/4">
              <h1>{card.showAns ? card.back : card.front}</h1>
            </div>
            <div>
              <button
                className="bg-orange-500 text-white flex justify-center items-center w-full p-2 hover:bg-orange-600"
                onClick={() => handleShowAnswer(card.id)}
              >
                Flip Card
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
