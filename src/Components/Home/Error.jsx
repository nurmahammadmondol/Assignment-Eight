import React from 'react';
import { toast } from 'react-toastify';

const Error = () => {
  toast.error(' Application Error 404!');
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3 text-center">
        <h3 className="text-xl">This page are not found</h3>
        <h1 className="text-6xl font-bold">404</h1>
        <h3 className="text-2xl ">Unexpected Application Error!</h3>
      </div>
    </div>
  );
};

export default Error;
