// function to print api info to the page

import { useEffect, useState } from "react";

function Ticker({item}){

const [colour, setColour] = useState("marquee-item")  

useEffect(() => {
  if (parseInt(item.changes) < 0) {
      setColour("marquee-item red") 
  } else {
      setColour("marquee-item green")
  }},[colour]
  )
    
  return (
    <div className="ticker">
      <p className="marquee-item">{item.symbol}</p> 
      <p className="marquee-item">{item.price}</p> 
      <p className={colour}>{item.changes}</p>
    </div>
    )
    }

// export ticker function    
export default Ticker;