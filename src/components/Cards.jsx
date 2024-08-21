import React from "react";

const Cards = ({ flashCards,handleShowAnswer }) => {
  return (
    <div className="w-full mx-auto flex flex-wrap justify-center gap-6">
      {flashCards.map((card) => {
        return (
          <div
            key={card.id}
            className={`flex flex-col justify-between border-[1px] border-gray-300 rounded-lg w-80 h-80 transition-transform transform hover:scale-105 ${card.showAns ? "bg-yellow-500 text-white" : "bg-gray-50"}`}
          >
            <div className="flex justify-center items-center h-3/4 p-4">
              <h1 className="text-3xl font-bold">{card.showAns ? card.back : card.front}</h1>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white flex justify-center items-center rounded-b-lg w-full p-2 transition-colors hover:bg-blue-600"
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
