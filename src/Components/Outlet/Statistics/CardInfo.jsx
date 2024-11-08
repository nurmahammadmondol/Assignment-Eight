import React from 'react';

const CardInfo = ({ Item }) => {
  // console.log(Item);
  const { product_title, product_image, price, description } = Item;

  return (
    <div>
      <div className="h-full md:h-[180px] shadow-lg rounded-lg border my-7 flex  gap-5 md:gap-10 p-2 md:p-4 relative">
        <div className="h-full w-2/6 md:w-1/5">
          <img
            className="w-full h-full border rounded-lg"
            src={product_image}
            alt=""
          />
        </div>
        <div className="text-start space-y-2 md:space-y-3">
          <h3 className="text-lg md:text-2xl font-bold">{product_title}</h3>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-500 font-bold ">
            <i className="fa-solid fa-money-check-dollar"></i> Price : ${price}
          </p>
          <div className="absolute bottom-2 md:top-0 right-5 text-xl md:text-2xl">
            <button className="btn btn-circle  text-black text-xl font-bold">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;