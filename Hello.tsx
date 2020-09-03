import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const random0to60 = () => random.number({ min: 0, max: 60 });

const data = [
  {
    name: '1', uv: random0to60(), pv: random0to60(), amt: random0to60(),
  },
  {
    name: '2', uv: random0to60(), pv: random0to60(), amt: random0to60(),
  },
  {
    name: '3', uv: random0to60(), pv: random0to60(), amt: random0to60(),
  }
];

export const Hello = () => {
  return (
    <AreaChart
      width={500}
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
      <Area type="monotone" fillOpacity="0.8" dataKey="uv" stackId="1" stroke="#1C0D31" fill="#45227B" />
      <Area type="monotone" fillOpacity="0.8" dataKey="pv" stackId="1" stroke="#1C0D31" fill="#6E36C5" />
      <Area type="monotone" fillOpacity="0.8" dataKey="amt" stackId="1" stroke="#1C0D31" fill="#8A43F6" />
    </AreaChart>
  )
};
