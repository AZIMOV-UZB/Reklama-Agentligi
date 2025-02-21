"use client";
import Copya from "@/components/copya/Copya"
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

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
        <p className="text-[16px] font-[500]"><a target="_blank" href="tel:+998977776668">Telefon raqamimiz : +998</a></p>
        <p className="text-[16px] font-[500]"><a target="_blank" href="tel:+998 976042504">2-Telefon raqamimiz : +998</a></p>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://t.me/VOKZALREKLAMA" >Telegram akauntimiz</a></p>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://www.instagram.com/print.fath?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram profilimiz</a></p>
        <p className="text-[16px] font-[500]"><a target="_blank" href="https://maps.app.goo.gl/RjrWBUSDirUuyVhC6">Bizning manzilizmiz</a></p>
        <div className="flex gap-2 items-center">
          <p className="text-[18px] font-[700]">
            Bizning carta raqamimiz
          </p>
        <Copya/>
        </div>
        <p className="text-2xl font-bold text-red-600">MIRZAKARIMOVA SAODAT</p>
      </Drawer>
    </>
  );
};

export default Boob;
