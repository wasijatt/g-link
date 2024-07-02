
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { createContext } from 'react';

const cardsArray = [
  {
    numbers: "/1.jpg",
    vector: "/Vector 11.jpg",
    vector2: "/Vector 12.jpg",
    mainImage: "/Uppload cv.jpg",
    heading: "xdfv",
    para: "xfdv"
  },
  {
    numbers: "/1.jpg",
    vector: "/Vector 11.jpg",
    vector2: "/Vector 12.jpg",
    mainImage: '/AI analyze.jpg',
    heading: "xzdfv",
    para: "xdfv"
  },
  {
    numbers: "/1.jpg",
    vector: "/Vector 11.jpg",
    vector2: "/Vector 12.jpg",
    mainImage: '/HCP data.jpg',
    heading: "dvxz",
    para: "dv"
  },
  {
    numbers: "/1.jpg",
    vector: "/Vector 11.jpg",
    vector2: "/Vector 12.jpg",
    mainImage: '/Market  valuation',
    heading: "rgsdr",
    para: "drg"
  },
];

const Cardlist = () => {
  return (
    <div className="flex justify-center flex-wrap mt-10 gap-8">
      {cardsArray.map((card, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center w-64 h-80 p-4 bg-white shadow-lg rounded-lg"
          whileHover={{ scale: 1.1, backgroundColor: '#01236b' }}
          whileTap={{ scale: 1 }}
        >
          <div className="relative">
            <Image
              src={card.numbers}
              alt="Number Image"
              width={100}
              height={100}
              className="absolute -top-6 rounded-full w-14 h-14 object-cover"
            />
            <div className="flex">
              <Image
                src={card.vector}
                alt="Vector Image"
                width={100}
                height={100}
                className="rounded-full w-12 h-full object-cover bg-blend-lighten"
              />
              <Image
                src={card.mainImage}
                alt="Main Image"
                width={100}
                height={100}
                className="rounded-full w-full h-14 object-cover"
              />
              <Image
                src={card.vector2}
                alt="Vector 2 Image"
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover bg-blend-normal"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold mb-2">{card.heading}</h2>
            <p className="text-gray-600">{card.para}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cardlist;
