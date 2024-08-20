import React from "react";

const Cards = ({ flashCards,handleShowAnswer }) => {
  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-3">
      {flashCards.map((card) => {
        return (
          <div
            key={card.id}
            className={card.showAns ? `flex flex-col justify-between border-[1px] border-gray-600 rounded w-80 h-80 bg-yellow-500 text-white` :`flex flex-col justify-between border-[1px] border-gray-600 rounded w-80 h-80 bg-gray-50`}
          >
            <div className="flex justify-center items-center h-3/4">
              <h1 className="text-2xl font-bold">{card.showAns ? card.back : card.front}</h1>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white flex justify-center items-center w-full p-2 hover:bg-blue-600"
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
