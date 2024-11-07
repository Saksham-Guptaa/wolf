import React from "react";

function Footer() {
  return (
    <footer className="bg-[#00C4F44D] text-white py-10 pl-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-28 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Coinary</h2>
          <p className="text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            consequat. Duis aute mollit anim id est laborum.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Crypto Earn</a></li>
            <li><a href="#" className="hover:underline">Exchanges</a></li>
            <li><a href="#" className="hover:underline">DeFi Wallet</a></li>
            <li><a href="#" className="hover:underline">Converter</a></li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our App</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Token Safe</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <i className="fas fa-phone"></i>
              <span>(205) 555-0100</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-clock"></i>
              <span>Mon - Fri: 9 am - 11 pm</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>Email@Coinreel.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
