import React, {useState} from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { random } from 'faker';

const random0to60 = () => random.number({ min: 0, max: 60 });
const generateData = (num = 12) => {
  const d = [...Array(num)].fill(1).map((_, i) => ({
      name: `${i+1}`, uv: random0to60(), pv: random0to60(), amt: random0to60(),
  }))
  return d;
};

export const Chart = () => {
  const [data, setData] = useState(generateData());
  const [stacked, setStacked] = useState(true);

  return (
    <div>
      <h1>Recharts</h1>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setStacked((val) => !val);
        }}
      >
        Stacked? ({stacked ? "true": "false"})
      </button>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setData(generateData(12));
        }}
      >
        12 points (for months)
      </button>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setData(generateData(24));
        }}
      >
        24 points (for day)
      </button>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setData(generateData(31));
        }}
      >
        31 points (for month)
      </button>
      <AreaChart
        width={900}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area animationDuration={400} fillOpacity="1" dataKey="uv" stackId={stacked ? "1": "1"} stroke="#25227B" strokeWidth={2} fill="#45227B" />
        <Area animationDuration={400} fillOpacity="1" dataKey="pv" stackId={stacked ? "1": "2"} stroke="#4E36C5" strokeWidth={2} fill="#6E36C5" />
        <Area animationDuration={400} fillOpacity="1" dataKey="amt" stackId={stacked ? "1": "3"} stroke="#6A43F6" strokeWidth={2} fill="#8A43F6" />
        <Area animationDuration={400} fillOpacity="1" dataKey="amt" stackId={stacked ? "1": "4"} stroke="#806DEE" strokeWidth={2} fill="#A06DEE" />
      </AreaChart>
    </div>
  );
};
