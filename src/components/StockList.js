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
      <h3 style={styles.title}>Select a Stock:</h3>
      <ul style={styles.list}>
        {Object.entries(defaultStocks).map(([name, symbol]) => (
          <li key={symbol} style={styles.item} onClick={() => onSelect(symbol)}>
            <span>{name}</span>
            <span style={styles.symbol}>({symbol})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  title: {
    color: "#444",
    fontSize: "18px",
    marginBottom: "10px",
  },
  list: {
    padding: 0,
    margin: 0,
    listStyle: "none",
  },
  item: {
    padding: "10px 15px",
    margin: "5px 0",
    backgroundColor: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#0077cc",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    transition: "background 0.3s, transform 0.2s",
  },
  symbol: {
    fontWeight: "bold",
    color: "#555",
  },
};

export default StockList;
