"use client";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-blue-700 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">UL Library</h2>
            <p className="mt-2 text-sm">
              Kitob do‘koni – eng yaxshi kitoblarni toping va o‘qing.
            </p>
          </div>

          {/* 2-qism: Foydali havolalar */}
          <div>
            <h3 className="text-lg font-semibold text-white">Foydali havolalar</h3>
            <ul className="mt-1 space-y-2">
              <li><a href="banner" className="hover:text-white">Banner</a></li>
              <li><a href="shtendir" className="hover:text-white">Shtendir</a></li>
              <li><a href="arakal" className="hover:text-white">Arakal</a></li>
              <li><a href="vizitka" className="hover:text-white">Vizitka</a></li>
              <li><a href="flaer" className="hover:text-white">Flaer</a></li>
              <li><a href="setka" className="hover:text-white">Setka</a></li>
              <li><a href="menu" className="hover:text-white">Menu</a></li>
              <li><a href="bilboard" className="hover:text-white">Bilboard</a></li>
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
