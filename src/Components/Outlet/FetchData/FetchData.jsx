import React from 'react';
import { Link } from 'react-router-dom';

const FetchData = ({ Product }) => {
  const { product_id, product_title, product_image, category, price } = Product;
  return (
    <div className=" rounded-lg p-4 flex flex-col bg-white">
      <div className="h-1/2 w-full">
        <img
          className="h-full w-full mx-auto border rounded-lg"
          src={product_image}
          alt=""
        />
      </div>

      <div className="flex-grow mt-5">
        <h3 className="text-xl font-bold">{product_title}</h3>
        <p className="text-gray-600 my-2">
          <i class="fa-brands fa-android"></i> Category : {category}
        </p>
        <p className="text-gray-500 font-bold mb-4">
          <i className="fa-solid fa-money-check-dollar"></i> Price : ${price}
        </p>
      </div>

      <Link to={`/ViewDetails/${product_id}`}>
        <button className="btn text-[#9538E2] btn-outline w-full mt-auto">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FetchData;
