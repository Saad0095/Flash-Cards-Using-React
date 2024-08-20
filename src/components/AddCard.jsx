import React from 'react'

const AddCard = ({front,back,setFront,setBack,handleAddCard}) => {
  return (
    <div className="w-1/3 mx-auto">
    <div>
      <input
        type="text"
        className="w-full border-2 rounded my-3 p-2 outline-none"
        name="front"
        value={front}
        onChange={(e) => setFront(e.target.value)}
        placeholder="Enter data to display on front"
      />
    </div>
    <div>
      <input
        type="text"
        className="w-full border-2 rounded my-3 p-2 outline-none"
        name="back"
        value={back}
        onChange={(e) => setBack(e.target.value)}
        placeholder="Enter data to display on back"
      />
    </div>
    <button className="bg-orange-500 text-white flex justify-center items-center w-full p-2 rounded hover:bg-orange-600" onClick={handleAddCard}>
      Add Card
    </button>
  </div>
  )
}

export default AddCard
