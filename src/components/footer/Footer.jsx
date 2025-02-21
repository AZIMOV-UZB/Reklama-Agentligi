"use client";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-blue-700 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1-qism: Logo va tavsif */}
          <div>
            <h2 className="text-2xl font-bold text-white">UL Library</h2>
            <p className="mt-2 text-sm">
              Kitob do‘koni – eng yaxshi kitoblarni toping va o‘qing.
            </p>
          </div>

          {/* 2-qism: Foydali havolalar */}
          <div>
            <h3 className="text-lg font-semibold text-white">Foydali havolalar</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Bosh sahifa</a></li>
              <li><a href="#" className="hover:text-white">Yangiliklar</a></li>
              <li><a href="#" className="hover:text-white">Kitoblar</a></li>
              <li><a href="#" className="hover:text-white">Biz haqimizda</a></li>
            </ul>
          </div>

          {/* 3-qism: Ijtimoiy tarmoqlar */}
          <div>
            <h3 className="text-lg font-semibold text-white">Biz bilan bog‘laning</h3>
            <div className="flex mt-3 space-x-4">
              <a href="#" className="hover:text-blue-500 text-xl"><FaFacebook /></a>
              <a href="#" className="hover:text-pink-500 text-xl"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-400 text-xl"><FaTwitter /></a>
              <a href="#" className="hover:text-red-500 text-xl"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Pastki qism: Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© 2025 UL Library. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
