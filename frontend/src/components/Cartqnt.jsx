import React from 'react'

function Cartqnt({quantity, setDecrease, setIncrease}) {

  return (
    <div>
         <div className="amount">

            <button onClick={() => setDecrease()}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setIncrease()}>+</button>
        </div>
    </div>
  )
}

export default Cartqnt