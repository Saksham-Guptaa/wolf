import React from 'react'

function StartNow() {
  return (
    <div className="w-[50%] mx-auto text-white rounded-lg p-8 flex flex-col md:flex-row items-center">
  {/* Left Section - Image */}
  <div className="flex justify-center md:justify-start md:w-1/3 mb-6 md:mb-0">
    <img
      src="/globebtch.png" // Replace this with the actual path to the image of the globe with Bitcoin symbol
      alt="Bitcoin Globe"
      className="w-52 h-52"
    />
  </div>

  {/* Right Section - Text and Form */}
  <div className="md:w-2/3 md:pl-8">
    <p className="text-sm uppercase font-semibold ">Start Now</p>
    <h2 className="text-2xl font-bold mb-4">Sign up to learn more</h2>
    <p className="text-gray-400 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      consequat. Duis aute mollit anim id est laborum.
    </p>
    
    {/* Email Signup Form */}
    <form className="flex items-center space-x-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-auto px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-500 outline-none"
      />
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
        Subscribe
      </button>
    </form>
  </div>
</div>

  )
}

export default StartNow