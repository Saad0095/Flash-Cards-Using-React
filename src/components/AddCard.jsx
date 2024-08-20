import React from 'react'

const AddCard = ({front,back,setFront,setBack,handleAddCard}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 w-full mx-auto">
      <input
        type="text"
        className="w-72 border-2 rounded my-3 p-2 outline-none"
        name="front"
        value={front}
        onChange={(e) => setFront(e.target.value)}
        placeholder="Enter data to display on front"
      />
      <input
        type="text"
        className="w-72  border-2 rounded my-3 p-2 outline-none"
        name="back"
        value={back}
        onChange={(e) => setBack(e.target.value)}
        placeholder="Enter data to display on back"
      />
    <button className="w-72 bg-orange-500 text-white p-2 rounded hover:bg-orange-600" onClick={handleAddCard}>
      Add Card
    </button>
  </div>
  )
}

export default AddCard
