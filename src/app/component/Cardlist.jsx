'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
const Cardlist = () => {
  const cardsarray = [
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
      mainImage:'/AI analyze.jpg',
      heading: "xzdfv",
      para: "xdfv"
    },
    {
      numbers: "/1.jpg",
      vector: "/Vector 11.jpg",
      vector2: "/Vector 12.jpg",
      mainImage:'/HCP data.jpg',
      heading: "dvxz",
      para: "dv"
    },
    {
      numbers: "/1.jpg",
      vector: "/Vector 11.jpg",
      vector2: "/Vector 12.jpg",
      mainImage:'/Market  valuation',
      heading: "rgsdr",
      para: "drg"
    },
  ];

  useEffect(() => {
    cardsarray.forEach((_, index) => {
      const card = document.querySelector(`#card-${index}`);

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, backgroundColor: '#01236b', duration: 0.5 });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, backgroundColor: '#fffff', duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className="flex  w-full items-center justify-center relative  ">
      {cardsarray.map((card, index) => (
        <div
          id={`card-${index}`}
          key={index}
          className="flex flex-col w-[18%] items-center h-80 mt-14 p-4 mx-8 bg-[white] shadow-lg rounded-lg "
        >
          <Image
          width={100}
          height={100}
            src={`${card.numbers}`}
            alt="Number Image"
            className=" absolute -top-6 rounded-full w-14 h-14 object-cover "
          />
          <div className='flex '> 
          <Image
          width={100}
          height={100}
          
            src={`${card.vector}`}
            alt="Number Image"
            className="  rounded-full w-12 h-full object-cover bg-blend-lighten "
          />
           <Image
           width={100}
           height={100}
          
          src={`${card.mainImage}`}
          alt="Number Image"
          className="  rounded-full w-full  h-14 object-cover "
        />
          <Image
          width={100}
          height={100}
          
          src={`${card.vector2}`}
          alt="Number Image"
          className=" rounded-full w-full h-full object-cover  bg-transparent bg-blend-normal"
        />
             </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">{card.heading}</h2>
            <p className="text-gray-600">{card.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardlist;
