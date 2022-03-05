import React from "react";

const Coin = (props) => {
  const { name, icon, symbol, price, priceBtc } = props;
  return (
    <div className="coin">
      <h1>{name}</h1>
      <img src={icon} alt={name} />
      <h3>{symbol}</h3>
      <hr />
      <h3>Price(USD): {price} </h3>
      <h3>Price(BTC): {priceBtc} </h3>
    </div>
  );
};

export default Coin;
