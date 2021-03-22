import { useState } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import Chart from "./components/chart/Chart";
import CurrencySelector from "./components/CurrencySelector/CurrencySelector";
import "./App.css";

function App() {
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="App">
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <CurrencySelector />
        <Chart />
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
