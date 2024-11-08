import React, { useEffect, useState } from 'react';
import WishlistInfo from '../Dashboard/WishlistInfo';
import { getCheckCard, RemoveAddToCard } from '../../Script/AddToCard';
import CardInfo from './CardInfo';
import { getCheckWishlistItems } from '../../Script/Wishlist';
import SuccessImage from '../../../assets/assets/Group.png';
import { useNavigate } from 'react-router-dom';

const Statistics = () => {
  useEffect(() => {
    document.title = 'Gadget heaven || Dashboard';
  }, []);

  const [Data, setData] = useState([]);

  const AddToCardID = getCheckCard();
  const RightData = Data.filter(productID =>
    AddToCardID.includes(productID.product_id)
  );

  // setFirstContext(RightData)

  const WishlistID = getCheckWishlistItems();
  const RightWishlistData = Data.filter(productID =>
    WishlistID.includes(productID.product_id)
  );

  // console.log(RightWishlistData);

  const TotalCost = RightData.map(tk => tk.price);
  const sum = TotalCost.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const TotalCostWishlist = RightWishlistData.map(tk => tk.price);
  const sumWishlist = TotalCostWishlist.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  useEffect(() => {
    fetch('./ProductData.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const [activeTab, setActiveTab] = useState('card');

  const handleCardClick = () => {
    setActiveTab('card');
  };

  const handleWishlistClick = () => {
    setActiveTab('wishlist');
  };

  const navigate = useNavigate();

  const handelPurchase = () => {
    RemoveAddToCard();
    document.getElementById('my_modal_1').showModal();
  };
  const Close = () => {
    navigate(0);
  };

  return (
    <div className="mt-3">
      <div className="bg-[#9538E2] text-white h-[250px] text-center">
        <div className="flex flex-col justify-center items-center py-6">
          <h3 className="text-2xl md:text-4xl font-bold">Dashboard</h3>
          <p className="text-gray-300 my-3 w-11/12 lg:w-5/12 mx-auto">
            Explore a world of innovative gadgets and stylish accessories
            tailored to enhance your digital experience. From the latest tech to
            unique add-ons, find everything you need in one place!
          </p>

          <div className="flex gap-5 justify-center mt-5">
            <button
              onClick={handleCardClick}
              className={`btn btn-outline  px-10 font-bold rounded-full ${
                activeTab === 'card'
                  ? 'text-purple-900 bg-white  font-extrabold'
                  : 'text-white'
              }`}
            >
              Card
            </button>
            <button
              onClick={handleWishlistClick}
              className={`btn btn-outline  px-8 font-bold rounded-full ${
                activeTab === 'wishlist'
                  ? 'text-purple-900 bg-white  font-extrabold'
                  : 'text-white'
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        {activeTab === 'card' && (
          <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-3xl font-bold">Card</h3>
              <div className="flex items-center gap-3 md:gap-5">
                <h5 className=" md:text-lg md:font-bold">
                  Total cost : ${sum}
                </h5>
                <button className="hidden md:flex btn btn-sm btn-outline  text-[#9538E2] rounded-full">
                  Sort by Price <i class="fa-solid fa-sliders rotate-90"></i>
                </button>
                <button
                  onClick={handelPurchase}
                  className="btn btn-sm px-5 py-1  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-full"
                >
                  Purchase
                </button>

                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <div className="">
                      <div className="flex justify-center my-4">
                        <img className="h-12" src={SuccessImage} alt="" />
                      </div>
                      <h3 className="font-bold text-xl md:text-2xl">
                        Payment Successfully
                      </h3>
                      <p className="py-2 text-gray-500 ">
                        Thanks for purchasing.
                      </p>
                      <p className="text-gray-500 font-bold">Total : ${sum}</p>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        <button
                          onClick={Close}
                          className="btn btn-outline px-10 text-purple-600 "
                        >
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <div className="my-10">
              {RightData.map(rightData => (
                <CardInfo
                  key={rightData.product_id}
                  Item={rightData}
                ></CardInfo>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'wishlist' && (
          <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold">Wishlist</h3>
              <div className="flex gap-3 items-center">
                <h5 className="hidden md:flex md:text-lg md:font-bold">
                  Total cost : ${sumWishlist}
                </h5>
                <h6 className="btn btn-sm btn-outline  text-[#9538E2] rounded-full">
                  Sort by Price <i class="fa-solid fa-sliders rotate-90"></i>
                </h6>
              </div>
            </div>
            <div className="my-10">
              {RightWishlistData.map(wishlist => (
                <WishlistInfo
                  key={wishlist.product_id}
                  Item={wishlist}
                ></WishlistInfo>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
