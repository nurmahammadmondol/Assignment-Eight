import React from 'react';
import BannerPhoto from '../../assets/assets/banner.jpg';

// h-[650px] bg-[#9538E2] rounded-lg text-white
const Banner = () => {
  return (
    <div className="h-[400px] lg:h-[630px] mx-5 lg:mx-10 px-3 lg:px-0 text-center bg-[#9538E2] rounded-b-xl  pt-8 mb-28 lg:mb-60 text-white">
      <div className="space-y-4 lg:space-y-8">
        <h2 className="text-2xl md:text-5xl font-bold w-full md:w-9/12 mx-auto">
          Enhance Your Tech with Gadget Heaven’s Finest Accessories
        </h2>
        <p className="text-sm lg:text-lg lg:w-6/12 mx-auto">
          Discover cutting-edge gadgets and accessories designed to elevate your
          digital life. From smart devices to stylish accessories, we have
          everything you need!
        </p>
        <button className="btn rounded-full px-7 text-[#9538E2] font-bold">
          Shop Now
        </button>
      </div>

      <div className="h-[200px] lg:h-[420px] w-10/12 lg:w-8/12 bg-slate-50 bg-opacity-25 mx-auto rounded-xl border mt-16 lg:mt-20">
        <img
          className="h-full w-full p-4 rounded-xl"
          src={BannerPhoto}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
