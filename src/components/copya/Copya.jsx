"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";

const CopyButton = () => {
  const textToCopy = "8600120424768094";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 soniyadan keyin "Copied!" yozuvi o'chadi
    } catch (error) {
      console.error("Nusxalashda xatolik:", error);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="flex items-center  p-2 rounded-[5px] bg-blue-500 text-white shadow-lg justify-self-end w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiCopy className="mr-2" />
      {copied ? "Yuklab olindi!" : "Vaqtinchalik Yuklash! "}
    </motion.button>
  );
};
export default CopyButton;
