import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import {
  ComposedChart,
  CartesianGrid,
  Legend,
  Area,
  XAxis,
  YAxis,
  Bar,
  Line,
  Tooltip,
} from 'recharts';

const Dashboard = () => {
  const data = useLoaderData();
  // console.log(data)

  useEffect(() => {
    document.title = 'Gadget heaven || Statistics';
  }, []);

  return (
    <div className="">
      <div className=" mt-5">
        <div className="bg-[#9538E2] text-white h-[180px] text-center">
          <div className="flex flex-col justify-center items-center py-8">
            <h3 className="text-2xl md:text-4xl font-bold">Statistics</h3>
            <p className="text-gray-300 my-3 w-11/12 lg:w-5/12 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>

        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-10">
          <h3>
            <span className="text-xl font-bold"> Statistics : </span>
            <span className=" text-gray-400">Price list</span>
          </h3>
        </div>
        <div className="w-11/12 md:w-9/12 lg:w-8/12 shadow-xl md:p-5 mx-auto  my-5 rounded-lg">
          <ComposedChart width={800} height={350} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="price"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="rating" stroke="#ff7300" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
