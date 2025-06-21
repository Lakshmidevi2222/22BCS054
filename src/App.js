import React, { useEffect, useState } from "react";
import StockList from "./components/StockList";
import StockChart from "./components/Chart";
import CorrelationHeatmap from "./components/CorrelationHeatmap";
const App = () => {
  const [stocks, setStocks] = useState({});
  const [selectedStock, setSelectedStock] = useState("");
  const [priceData, setPriceData] = useState([]);

  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsYWtzaG1pZGV2aXMuMjJjc0BrY3QuYWMuaW4iLCJleHAiOjE3NTA0ODE0OTUsImlhdCI6MTc1MDQ4MTE5NSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImUyNTI5OTUwLWQyZGQtNDdhMi1hZjI1LTM2ZDY3YzE4Y2QxMCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imxha3NobWkgZGV2aSBzIHMiLCJzdWIiOiJiMWUxZDhkNS1kNGI5LTQ4M2UtYjIwYy04MTZmNzE3NWQzOWIifSwiZW1haWwiOiJsYWtzaG1pZGV2aXMuMjJjc0BrY3QuYWMuaW4iLCJuYW1lIjoibGFrc2htaSBkZXZpIHMgcyIsInJvbGxObyI6IjIyYmNzMDU0IiwiYWNjZXNzQ29kZSI6IldjVFNLdiIsImNsaWVudElEIjoiYjFlMWQ4ZDUtZDRiOS00ODNlLWIyMGMtODE2ZjcxNzVkMzliIiwiY2xpZW50U2VjcmV0IjoiS1FiTmNCeFV6eVRYQWthUyJ9.QOLK5shpwXhYv3ntgHBpKgPW6UWY4Hp_2B9orXRjgp4";
  useEffect(() => {
    fetch("http://20.244.56.144/evaluation-service/stocks", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(" Stock list from API:", data);
        setStocks(data);
      })
      .catch((err) => {
        console.error(" Error fetching stock list:", err);
      });
  }, []);
  const fetchPriceData = (symbol) => {
    setSelectedStock(symbol);
    fetch(`http://20.244.56.144/evaluation-service/stocks/${symbol}?minutes=50`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("📉 Price data for", symbol, data);
        setPriceData(data);
      })
      .catch((err) => {
        console.error(" Error fetching price data:", err);
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1> Stock Tracker</h1>

      <StockList stocks={stocks} onSelect={fetchPriceData} />

      {selectedStock && <StockChart data={priceData} />}

      <CorrelationHeatmap />
    </div>
  );
};

export default App;
