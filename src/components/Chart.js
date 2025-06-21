import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data }) => {
  console.log("📊 Chart received data:", data); 

  if (!data || data.length === 0) return <p></p>;

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>📈 Price Chart</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="lastUpdatedAt"
            tickFormatter={(tick) => {
              try {
                return tick.split("T")[1].slice(0, 5); // show only HH:MM
              } catch {
                return tick;
              }
            }}
          />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
