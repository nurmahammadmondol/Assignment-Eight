import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { getCheckCard, setLikeCard } from '../../Script/AddToCard';
import { setWishlistItem } from '../../Script/Wishlist';

const ViewDetails = () => {
  useEffect(() => {
    document.title = 'Gadget heaven || View Details';
  }, []);

  const { Details } = useParams();
  const DetailsID = parseInt(Details);

  const AllData = useLoaderData();
  const CheckID = AllData.find(data => parseInt(data.product_id) === DetailsID);

  const navigate = useNavigate();

  const AddToCard = product_id => {
    setLikeCard(product_id);
    navigate(0);
  };

  const WishListButton = product_id => {
    setWishlistItem(product_id);
    navigate(0);
  };

  const BackHome = () => {
    navigate(-1);
  };

  const {
    product_id,
    product_title,
    product_image,
    category,
    availability,
    price,
    description,
    specification,
    rating,
  } = CheckID;

  return (
    <div className="mt-2 bg-gray-100 h-[840px] md:h-[680px] ">
      <div className="bg-[#9538E2] text-white h-[300px] text-center pt-8 relative">
        <h3 className="text-2xl md:text-4xl font-bold">Product Details</h3>
        <p className="text-gray-300 my-3 w-11/12 lg:w-5/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="h-full md:h-[450px] w-11/12 md:w-9/12  mx-auto border mt-10 md:flex gap-5 lg:gap-16 bg-white p-5 rounded-lg ">
          <button
            onClick={BackHome}
            className="absolute top-8 left-3 md:top-5 md:left-5 flex items-center gap-1"
          >
            <i class="fa-solid fa-arrow-left text-white md:text-xl font-bold"></i>
            <p className="md:text-lg font-bold">Back</p>
          </button>
          <div className="w-full md:w-4/12 mb-4 md:mb-0">
            <img
              className="h-[230px] md:h-full w-full border rounded-lg"
              src={product_image}
              alt=""
            />
          </div>

          <div className="w-full md:w-8/12  text-black text-start flex flex-col">
            <div className="flex flex-col justify-between flex-grow mb-4">
              <h3 className="text-3xl font-bold">{product_title}</h3>
              <p className="text-gray-600">
                <i class="fa-brands fa-android"></i> Category : {category}
              </p>
              <p className="text-gray-500 font-bold ">
                <i className="fa-solid fa-money-check-dollar"></i> Price : $
                {price}
              </p>

              <p className="w-32 text-center rounded-full bg-green-50 text-green-500 font-semibold border border-green-200">
                {availability ? 'In Stock' : 'Out of stock'}
              </p>

              <p className="text-gray-500">{description}</p>

              <h4 className="font-bold">Specification</h4>
              <ul className="text-gray-400">
                {specification.map((item, index) => (
                  <li key={index}>
                    <i class="fa-brands fa-slack"></i> {item}
                  </li>
                ))}
              </ul>

              <p className="font-bold">Rating : </p>
              <small className="flex items-center gap-3">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div className="px-3 py-0 bg-gray-200 rounded-full">
                  {rating}
                </div>
              </small>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => AddToCard(product_id)}
                className="btn px-8 rounded-full bg-[#9538E2] text-white font-bold"
              >
                Add to Card <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button
                onClick={() => WishListButton(product_id)}
                className="btn btn-outline rounded-full text-[#9538E2]"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
