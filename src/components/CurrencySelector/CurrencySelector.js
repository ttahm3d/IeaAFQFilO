import React, { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { useQuery } from "react-query";
import axios from "axios";

const getCurrentValue = async () => {
  const response = await axios.get(
    `https://api.coindesk.com/v1/bpi/currentprice.json`
  );
  return response.data;
};

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const { data } = useQuery("currentValue", getCurrentValue);

  return (
    <div className="selector">
      {data && (
        <div>
          <p>1 Bitcoin equals</p>
          <form>
            <select
              className="select-options"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option className="options" value="USD">
                United States Dollar
              </option>
              <option className="options" value="GBP">
                British Pound Sterling
              </option>
              <option className="options" value="EUR">
                Euro
              </option>
            </select>
          </form>
          <h3>
            {(data?.bpi[currency].rate_float).toFixed(2)}&nbsp;{" "}
            {data?.bpi[currency].description}
          </h3>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
