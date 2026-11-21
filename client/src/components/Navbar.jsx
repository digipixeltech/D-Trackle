import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-900 text-white p-4">
      <div className="logo">Logo</div>
      <div className='flex justify-around gap-4'>
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
      </div>
      <div>Profile</div>
    </div>
  );
};

export default Navbar;
