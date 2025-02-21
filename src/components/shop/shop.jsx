"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const pulsateVariant = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      repeat: Infinity,
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

const Shop = () => {
  return (
    <div className="relative">
      <div className="fixed bottom-5 right-8 flex flex-col items-end space-y-4">
        <a href="tel:+998977776668">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white text-2xl shadow-lg hover:bg-green-700 transition duration-300"
            variants={pulsateVariant}
            initial="animate"
            animate="animate"
            whileHover="hover"
          >
            <FaPhone />
          </motion.div>
        </a>

        <a target="_blank" href="https://t.me/VOKZALREKLAMA">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0088CC] text-white text-2xl shadow-lg hover:bg-[#0077B5] transition duration-300"
            variants={pulsateVariant}
            initial="animate"
            animate="animate"
            whileHover="hover"
          >
            <RiTelegram2Fill />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Shop;
