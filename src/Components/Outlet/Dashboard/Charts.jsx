import React, { useEffect, useState } from 'react';
import { LineChart, Line } from 'recharts';

const [Data, setData] = useState([]);
useEffect(() => {
  fetch('./ProductData.json')
    .then(res => res.json())
    .then(data => setData(data));
}, []);

const Charts = () => {
  return (
    // <LineChart>
    //   <Line></Line>
    // </LineChart>

    <div>
      <h3>nur</h3>
    </div>
  );
};

export default Charts;
