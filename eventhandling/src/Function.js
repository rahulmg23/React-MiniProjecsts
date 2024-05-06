import React from 'react'

function Function() {
    function clcikHandler(){
        alert("button is clicker")
    }
  return (
    <div>
      <button onClick={clcikHandler}>clicke me</button>
    </div>
  )
}

export default Function
