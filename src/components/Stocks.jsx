import React, { useState } from "react";

function Stocks({ stocks }) {
  const { name, ticker, price, security_type } = stocks;
  const [ isWatched, setIsWatched ] = useState(false)
  return (
    <div className="stockList">
      <h3>{name}</h3>
      <h4>{ticker}</h4>
      <p>{price}</p>
      <p>{security_type}</p>
      <button className={isWatched ? "watching" : null} onClick={() => setIsWatched(!isWatched)}>{ isWatched ?  'Watching...' : 'Add to Watchlist'}</button>
    </div>
  );
}

export default Stocks;

// t.string "name"
// t.string "ticker"
// t.float "price"
// t.string "security_type"
// t.integer "broker_id"
// t.integer "client_id"
