import React from "react";
const defaultStocks = {
  "Apple Inc.": "AAPL",
  "Amazon.com, Inc.": "AMZN",
  "Tesla, Inc.": "TSLA",
  "Microsoft Corporation": "MSFT",
  "Alphabet Inc. Class A": "GOOGL",
  "Meta Platforms, Inc.": "META",
  "Nvidia Corporation": "NVDA",
  "Broadcom Inc.": "AVGO",
  "PayPal Holdings, Inc.": "PYPL",
  "Marvell Technology, Inc.": "MRVL",
};
const StockList = ({ onSelect }) => {
  return (
    <div>
      <h3>Select a Stock:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.entries(defaultStocks).map(([name, symbol]) => (
          <li
            key={symbol}
            onClick={() => onSelect(symbol)}
            style={{
              margin: "5px 0",
              cursor: "pointer",
              color: "#007bff",
              textDecoration: "underline",
            }}
          >
            {name} ({symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StockList;
