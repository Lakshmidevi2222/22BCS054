// App.js
import React, { useEffect, useState } from "react";
import StockList from "./components/StockList";
import StockChart from "./components/Chart";
import CorrelationHeatmap from "./components/CorrelationHeatmap";

const App = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [priceData, setPriceData] = useState([]);

  const fetchPriceData = (symbol) => {
    setSelectedStock(symbol);
    fetch(`http://20.244.56.144/evaluation-service/stocks/${symbol}?minutes=50`, {
      headers: {
        Authorization: "Bearer YOUR_TOKEN_HERE",
      },
    })
      .then((res) => res.json())
      .then((data) => setPriceData(data))
      .catch((err) => console.error("Error fetching price data:", err));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📈 Stock Tracker</h1>
      <StockList onSelect={fetchPriceData} />
      {selectedStock && <StockChart data={priceData} />}
      <CorrelationHeatmap />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
};

export default App;
