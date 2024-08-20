import { useState, useEffect } from "react";
import "./App.css";
import AddCard from "./components/AddCard";
import Cards from "./components/Cards";

function App() {
  const [flashCards, setFlashCards] = useState([]);
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  // const [showAns, setShowAns] = useState(false);

  const handleAddCard = () => {
    if (front.trim() && back.trim()) {
      setFlashCards([
        ...flashCards,
        { id: flashCards.length + 1, front, back, showAns: false },
      ]);
      setFront("");
      setBack("");
    }
  };

  useEffect(() => {
    console.log(flashCards);
  }, [flashCards]);

  const handleShowAnswer = (id) => {
    setFlashCards(
      flashCards.map((card) =>
        card.id === id ? { ...card, showAns: !card.showAns } : card
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen my-20 space-y-20">
      <AddCard
        front={front}
        back={back}
        setFront={setFront}
        setBack={setBack}
        handleAddCard={handleAddCard}
      />
      {flashCards && <Cards flashCards={flashCards} handleShowAnswer={handleShowAnswer}/>}
    </div>
  );
}

export default App;
