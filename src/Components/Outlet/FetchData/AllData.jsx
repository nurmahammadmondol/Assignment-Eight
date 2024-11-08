import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FetchData from './FetchData';

const AllData = () => {
  const Data = useLoaderData();

  // console.log(Data);

  const [allData, setAllData] = useState(Data);
  const [laptop, setLaptop] = useState([]);
  const [Tablet, setTablet] = useState([]);
  const [phone, setPhone] = useState([]);
  const [Accessories, setAccessories] = useState([]);
  const [Watches, setWatches] = useState([]);

  const handelAllData = () => {
    setAllData(Data);
    setLaptop([]);
    setTablet([]);
    setPhone([]);
    setAccessories([]);
    setWatches([]);
  };

  const handelLaptopButton = () => {
    const ItemsLaptop = Data?.filter(laptop => laptop?.category === 'Laptops');
    setLaptop(ItemsLaptop);
    setAllData([]);
    setTablet([]);
    setPhone([]);
    setAccessories([]);
    setWatches([]);
  };

  const handelTabletButton = () => {
    const ItemsTable = Data.filter(table => table.category === 'Tablets');
    // console.log(ItemsTable);
    setTablet(ItemsTable);
    setAllData([]);
    setLaptop([]);
    setPhone([]);
    setAccessories([]);
    setWatches([]);
  };

  const handelPhonesButton = () => {
    const ItemsPhones = Data?.filter(
      phone => phone?.category === 'Smartphones'
    );
    setPhone(ItemsPhones);
    setAllData([]);
    setLaptop([]);
    setTablet([]);
    setAccessories([]);
    setWatches([]);
  };

  const handelAccessoriesButton = () => {
    const ItemsAccessories = Data.filter(
      Accessories => Accessories?.category === 'Accessories'
    );
    setAccessories(ItemsAccessories);
    setPhone([]);
    setAllData([]);
    setLaptop([]);
    setTablet([]);
    setWatches([]);
  };

  const handelWatchesButton = () => {
    const ItemsWatches = Data?.filter(watch => watch.category === 'Watches');
    // console.log(ItemsWatches);
    setWatches(ItemsWatches);
    setAllData([]);
    setLaptop([]);
    setTablet([]);
    setPhone([]);
    setAccessories([]);
  };

  return (
    <div className=" py-5 lg:py-10">
      <div className="my-16 w-10/12 mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h3>

        <div className="mt-5 lg:mt-10 md:flex gap-10">
          <div className="lg:w-[300px] h-[400px] bg-white rounded-lg mb-8 lg:mb-0 px-4 py-8">
            <ul className="flex flex-col gap-3 ">
              <li
                onClick={handelAllData}
                className={`btn px-5 py-2 rounded-full text-gray-500 hover:bg-[#9538E2] hover:text-white ${
                  allData.length > 0 && 'bg-[#9538E2] text-white'
                }`}
              >
                All Product
              </li>

              <li
                onClick={handelLaptopButton}
                className={`btn px-5 py-2 rounded-full text-gray-500 hover:bg-[#9538E2] hover:text-white ${
                  laptop.length > 0 && 'bg-[#9538E2] text-white'
                }`}
              >
                Laptops
              </li>

              <li
                onClick={handelTabletButton}
                className={`btn px-5 py-2 rounded-full text-gray-500 hover:bg-[#9538E2] hover:text-white ${
                  Tablet.length > 0 && 'bg-[#9538E2] text-white'
                }`}
              >
                Tablets
              </li>

              <li
                onClick={handelPhonesButton}
                className={`btn px-5 py-2 rounded-full text-gray-500 hover:bg-[#9538E2] hover:text-white ${
                  phone.length > 0 && 'bg-[#9538E2] text-white'
                }`}
              >
                Phones
              </li>

              <li
                onClick={handelAccessoriesButton}
                className={`btn px-5 py-2 rounded-full text-gray-500 hover:bg-[#9538E2] hover:text-white ${
                  Accessories.length > 0 && 'bg-[#9538E2] text-white'
                }`}
              >
                Accessories
              </li>

              <li
                onClick={handelWatchesButton}
                className={`btn px-5 py-2 rounded-full text-gray-500 hover:bg-[#9538E2] hover:text-white ${
                  Watches.length > 0 && 'bg-[#9538E2] text-white'
                }`}
              >
                Watches
              </li>
            </ul>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {allData.map(product => (
              <FetchData
                key={product?.product_id}
                Product={product}
              ></FetchData>
            ))}

            {laptop.map(product => (
              <FetchData
                key={product?.product_id}
                Product={product}
              ></FetchData>
            ))}

            {Tablet.map(product => (
              <FetchData
                key={product?.product_id}
                Product={product}
              ></FetchData>
            ))}

            {phone.map(product => (
              <FetchData
                key={product?.product_id}
                Product={product}
              ></FetchData>
            ))}

            {Accessories.map(product => (
              <FetchData
                key={product?.product_id}
                Product={product}
              ></FetchData>
            ))}
            {Watches.map(product => (
              <FetchData
                key={product?.product_id}
                Product={product}
              ></FetchData>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
