function Ticker({item}){
    return (
    <div>
      <p>{item.symbol} {item.price} {item.changes}</p>
    </div>
    )
    }

export default Ticker;