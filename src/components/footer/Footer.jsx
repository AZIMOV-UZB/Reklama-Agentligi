"use client";
import { FaTelegram , FaInstagram } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" bg-blue-700 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-white">FATH PRINT</h2>
            <p className="my-2 text-xl text-white">
            TASHQI REKLAMA AGENTLGI </p>
            <p className="text-white">SHAXSIY BIZNESINGIZNI REKLAMA ORQALI RIVOJLANTIRING</p>

          </div>

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

          <div>
            <h3 className="text-lg font-semibold text-white">Biz bilan bog‘laning</h3>
            <div className="flex mt-3 space-x-4">
              <a target="_blank" href="https://t.me/VOKZALREKLAMA" className="hover:text-black text-xl"><FaTelegram className="text-4xl font-bold" />
              </a>
              <a target="_blank" href="https://www.instagram.com/print.fath?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-pink-500 text-xl"><FaInstagram  className="text-4xl font-bold"/></a>
              <a target="_blank" href="tel:+998977776668" className="hover:text-green-500 text-xl"> 
                <PiPhoneFill  className="text-4xl font-bold"/></a>
            </div>
            <div className="my-2">
            <h3 className="text-lg font-semibold text-whitZ">Biz manzil</h3>
            <a target="_blank" href="https://maps.app.goo.gl/RjrWBUSDirUuyVhC6" className="hover:text-red-600 text-xl"> 
            <FaMapMarkerAlt  className="text-4xl font-bold ml-14 "/></a>              
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm flex flex-wrap justify-between gap-6">
          <p className="text-white">SAYT MUOLIF AZIMOV ABDUVORIS  <a target="_blank" href="tel:+998997872900">99-787-29-00</a></p>
          <p>© 21.02.2025 FATH PRINT. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
