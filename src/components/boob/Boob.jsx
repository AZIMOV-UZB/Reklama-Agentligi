"use client";
import Copya from "@/components/copya/Copya"
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { LuInstagram } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import { FaHeadphones } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";




const Boob = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Biz bilan bog'lanish
              </Button>
      <Drawer  title="FATH PRINT" onClose={onClose} open={open}>
    
        <div className="flex gap-1 items-center my-1">
        <FaHeadphones  className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="tel:+998977776668">Telefon raqamimiz : +998</a></p>
        </div>
        <div className="flex gap-1 items-center my-1">
        <IoMdMegaphone className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="tel:+998 976042504">2-Telefon raqamimiz : +998</a></p>
        </div>
        <div className="flex gap-1 items-center my-1">
        <ImTelegram className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://t.me/VOKZALREKLAMA" >Telegram akauntimiz</a></p>
        </div>
        <div className="flex gap-1 items-center my-1">
        <LuInstagram className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://www.instagram.com/print.fath?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram profilimiz</a></p>
        </div>
        <div className="flex gap-1 items-center my-1">
        <FaMapMarkerAlt className="text-2xl"/>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://maps.app.goo.gl/RjrWBUSDirUuyVhC6">Bizning manzilizmiz</a></p>
        </div>

        <div className="flex gap-2 items-center">
        <IoCardOutline className="text-2xl"/>
          <p className="text-[18px] font-[700]">
            Bizning carta raqamimiz
          </p>
        </div>
        <Copya/>
        <p className="text-2xl font-bold text-red-600">MIRZAKARIMOVA SAODAT</p>
      </Drawer>
    </>
  );
};

export default Boob;
