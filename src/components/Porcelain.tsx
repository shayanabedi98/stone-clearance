"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  clearanceList: {
    porcelain: Item[];
    onyx: Item[];
    marble: Item[];
    quartz: Item[];
  };
};

type Item = {
  img: string;
  alt: string;
  name: string;
  dimension: string;
  thickness: string;
  country: string;
  quantity: number;
  price: number[];
  contact: string;
};

export default function Porcelain({ clearanceList }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(0);
  const [clickedImage, setClickedImage] = useState(false);
  const [img, setImg] = useState("");

  const handleClick = (index: number) => {
    setIsClicked(!isClicked);
    setHoveredItem(index);
  };

  const handleClickImage = (src: string) => {
    setClickedImage(true);
    setImg(src);
  };

  return (
    <div className="grid grid-cols-3 justify-items-center">
      {clickedImage && (
        <div
          onClick={() => setClickedImage(false)}
          className="fixed top-0 h-full w-full flex justify-center bg-[rgba(0,0,0,0.7)]"
        >
          <Image src={img} alt="" width={900} height={900} />
        </div>
      )}
      {clearanceList.porcelain.map((item: Item, index: number) => {
        return (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="cursor-pointer w-[300px] h-[270px] shadow-lg relative"
          >
            <Image src={item.img} alt={item.alt} width={300} height={300} />
            <AnimatePresence>
              {isClicked && hoveredItem === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute h-full w-full top-0 bg-[rgba(0,0,0,0.6)]"
                >
                  <p>Name: {item.name}</p>
                  <p>Dimension: {item.dimension}</p>
                  <p>Thickness: {item.thickness}</p>
                  <p>Country: {item.country}</p>
                  <p>quantity: {item.quantity}</p>
                  <div className="flex gap-4">
                    <p className="flex">
                      {item.price.map((p, inx) => (
                        <span
                          key={inx}
                          className={
                            inx !== item.price.length - 1
                              ? "line-through"
                              : "text-green-700"
                          }
                        >
                          ${p}
                        </span>
                      ))}
                    </p>
                    <p
                      onClick={() => handleClickImage(item.img)}
                      className="cursor-pointer"
                    >
                      View Image
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
