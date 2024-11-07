import React from 'react'
function Exchange() {
  return (
    <div className="bg-[#00C4F44D] w-[80%] mx-auto text-white  rounded-lg p-8 flex flex-col lg:flex-row items-center lg:items-start">
  <div className="lg:w-2/3">
    <p className="text-sm uppercase font-semibold text-gray-300 mb-2">Crypto Exchange</p>
    <h1 className="text-3xl font-bold mb-4">Low fees and deep liquidity</h1>
    <p className="text-gray-300 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      consequat. Duis aute mollit anim id est laborum.
    </p>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition">
      Go To Exchanges
    </button>
  </div>
  <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
    <div className="relative">
      <img
        src="/path/to/crypto-coins.png" // Replace this with the actual path to the image of coins
        alt="Crypto Coins"
        className="w-28 lg:w-40"
      />
    </div>
  </div>
</div>

  )
}

export default Exchange