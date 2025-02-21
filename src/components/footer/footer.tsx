import { FC } from "react";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-white py-10 border-t border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Browse */}
        <div className="flex flex-col w-full">
          <h3 className="font-bold text-lg mb-3">Browse</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">All products</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Theme features</a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div className="flex flex-col w-full">
          <h3 className="font-bold text-lg mb-3">Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div className="flex flex-col w-full">
          <h3 className="font-bold text-lg mb-3">About</h3>
          <p className="text-gray-600 flex-1">
            Our story began in 2001 in a small studio in the middle of nowhere.
            With only one desk and next to no free time, our brand was born. Our
            passion for unique design and collaboration brought our vision, and
            products, to life.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col w-full">
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p className="text-gray-600 mb-3">store@email.com</p>
          <div className="flex space-x-3 text-gray-600 text-2xl">
            <FaTiktok />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
