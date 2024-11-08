import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getCheckCard, setLikeCard } from '../Script/AddToCard';
import { getCheckWishlistItems } from '../Script/Wishlist';
import logo from '../../assets/assets/Gadget-Heaven-favicon.png';

const NavbarHandelClick = (
  <div className="flex gap-4 lg:gap-8 text-md">
    <button>
      <NavLink to="/">Home</NavLink>
    </button>
    <button>
      <NavLink to="/Statistics">Dashboard</NavLink>
    </button>
    <button>
      <NavLink to="/Dashboard">Statistics</NavLink>
    </button>
    <button>
      <NavLink to="/About">About</NavLink>
    </button>
  </div>
);

const Navbar = () => {
  const [Items, setItems] = useState(0);
  const [wishlistItems, setWishlistItems] = useState(0);

  useEffect(() => {
    const CardLength = getCheckCard();
    setItems(CardLength.length);

    const WishlistLength = getCheckWishlistItems();
    setWishlistItems(WishlistLength.length);
  }, []);

  // Home BG Color:
  const location = useLocation();
  const isActiveLocation = location.pathname === '/';

  return (
    <div className="pt-4">
      <nav
        className={`${
          isActiveLocation && 'bg-[#9538E2] rounded-t-xl text-white'
        }`}
      >
        <div className=" py-3 w-11/12 mx-auto flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1  py-2 px-5 shadow text-black"
              >
                {NavbarHandelClick}
              </ul>
            </div>
            <div className="w-7 h-7">
              <img className="w-full h-full" src={logo} alt="" />
            </div>
            <a className="text-sm md:text-2xl font-bold">Gadget Heaven</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{NavbarHandelClick}</ul>
          </div>

          <div className="flex gap-3 md:gap-5 items-center ">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={Items}
                role="button"
                className="btn btn-sm md:btn-ghost btn-circle btn-outline "
              >
                <div className="indicator">
                  <i class="fa-solid fa-cart-shopping text-lg"></i>
                  <span className="badge badge-sm bg-purple-300 indicator-item">
                    {Items}
                  </span>
                </div>
              </div>
              <div
                tabIndex={Items}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-1 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold text-purple-500">
                    Total Items : {Items}
                  </span>
                  <span className="text-info"></span>
                  <div className="card-actions">
                    <button className="btn btn-outline btn-sm text-purple-600 btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-sm md:btn-ghost btn-circle btn-outline "
              >
                <div className="indicator">
                  <i class="fa-regular fa-heart text-lg"></i>
                  <span className="badge badge-sm bg-purple-300 indicator-item">
                    {wishlistItems}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-1 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold text-purple-600">
                    Total Items : {wishlistItems}
                  </span>
                  <span className="text-info "></span>
                  <div className="card-actions">
                    <button className="btn btn-outline btn-sm text-purple-500 btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
