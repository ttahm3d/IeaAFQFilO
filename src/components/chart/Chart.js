import React, { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { useQuery } from "react-query";
import axios from "axios";
import LineChart from "./LineChart/LineChart";

const getCurrencyByType = async ({ queryKey }) => {
  const API = {
    base: `https://api.coindesk.com/v1/bpi/historical/close.json?currency=`,
    startdate: `&start=2021-01-21&`,
    enddate: `end=2021-03-23`,
  };

  const [_key, { currency }] = queryKey;
  const response = await axios.get(
    `${API.base}${currency}${API.startdate}${API.enddate}`
  );
  return response.data;
};

const Chart = (props) => {
  const { currency } = useContext(CurrencyContext);

  const { data, error, isLoading } = useQuery(
    ["bitcoinData", { currency }],
    getCurrencyByType
  );

  return (
    <div className="chart-container">
      {error && <p>Error</p>}
      {isLoading && <p>Loading</p>}
      {data && <LineChart data={data} />}
    </div>
  );
};

export default Chart;
