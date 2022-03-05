import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./components/Coin";

import "./App.css";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setCoins(response.data.coins);
        setLoading(false);
      }
    );
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      {loading ? (
        <h1>Loading coins...</h1>
      ) : (
        <>
          <div className="crypto-search">
            <input
              type="text"
              autoFocus
              placeholder="Search for a coin..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="crypto-coins">
            {loading && <h1>Loading coins...</h1>}
            {filteredCoins.length === 0 && <h1>No coins match your search!</h1>}
            {filteredCoins.map((coin) => (
              <Coin
                key={coin.id}
                name={coin.name}
                icon={coin.icon}
                symbol={coin.symbol}
                price={coin.price}
                priceBtc={coin.priceBtc}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
