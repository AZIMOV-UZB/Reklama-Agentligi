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
      <Drawer title="FATH PRINT" onClose={onClose} open={open}>
        <p><a href="tel:+998977776668">Telefon raqamimiz : +998</a></p>
        <p><a href="tel:+998 976042504">2-Telefon raqamimiz : +998</a></p>
        <p><a href="https://t.me/VOKZALREKLAMA" target='_blank'>Telegram akauntimiz</a></p>
        <p><a href="https://www.instagram.com/print.fath" target='_blank'>Instagram profilimiz</a></p>
        <p><a href="https://maps.app.goo.gl/RjrWBUSDirUuyVhC6">Bizning manzilizmiz</a></p>
        <div className="flex gap-2 items-center">
  Bizning carta raqamimiz
        <Copya/>
        </div>
        <p className="text-2xl text-red-600">MIRZAKARIMOVA SAODAT</p>
      </Drawer>
    </>
  );
};

export default Boob;
