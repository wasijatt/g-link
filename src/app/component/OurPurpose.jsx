"use client"
import {useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const OurPurpose = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const divRefs = useRef([]);

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorColor, setCursorColor] = useState('#01236b');
  const [cursorSize, setCursorSize] = useState('10px');

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);

      const element = document.elementFromPoint(event.clientX, event.clientY);

      if (element) {
        const tagName = element.tagName.toLowerCase();

        switch (tagName) {
          case 'h1':
            setCursorSize('70px');
            setCursorColor('#ffffff');
            break;
          case 'link':
            setCursorSize('70px');
            setCursorColor('#01236b92');
            break;
          case 'p':
            setCursorSize('40px');
            setCursorColor('#01236b92');
            break;
          case 'button':
            setCursorSize('80px');
            setCursorColor('#4b6b01');
            break;
          default:
            setCursorSize('10px');
            setCursorColor('#01236b');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const button = buttonRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      onEnter: () => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
          paragraph,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
        );

        gsap.fromTo(
          button,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 1 }
        );

        divRefs.current.forEach((div, index) => {
          if (div) {
            gsap.fromTo(
              div,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.5 + index * 0.3 }
            );
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col justify-center items-center text-center mt-10">
      <div
        className="fixed  transition-all duration-300 ease-out"
        style={{
          left: `${cursorX}px`,
          top: `${cursorY}px`,
          width: cursorSize,
          height: cursorSize,
          backgroundColor: cursorColor,
          borderRadius: '50%',
          zIndex: '9999',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
        }}
      ></div>
      <h1 ref={headingRef} className="text-[#01236b] text-[42px] font-extrabold cursor-pointer">
        Our Purpose
      </h1>
      <p ref={paragraphRef} className="font-light text-[16px] cursor-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industrys standard dummy text ever since the 1500s
      </p>
      <button ref={buttonRef} className="gradientbg text-white text-[22px] font-bold px-10 py-3 rounded-full my-10 cursor-pointer">
        Fair Market Value
      </button>
      <p className="cursor-default">Automate your compliance with AI-powered CV tiering and fair market valuation.</p>
      <div className="flex mt-14">
        <div ref={(el) => (divRefs.current[0] = el)} className="w-[1/3] mx-11 cursor-pointer">
          <Image 
        
           className="w-[250px]" src="/ai-powered-content-creation-isometric-concept-with-chatbot-laptop-screen-3d-vector-illustration 1.jpg" width={400} height={400} alt="AI powered content creation" />
          <p className="mt-6 text-lg font-semibold">
            AI extracts and tiers CV <br /> information
          </p>
        </div>
        <div ref={(el) => (divRefs.current[1] = el)} className="w-[1/3] mx-11 mt-11 cursor-pointer">
          <Image
         
          className="w-[250px]" src="/accounting-concept-illustration 1.jpg" width={500} height={500} alt="Accounting concept" />
          <p className="text-lg font-semibold text-center">
            Adapts to your tiering <br /> methodology
          </p>
        </div>
        <div ref={(el) => (divRefs.current[2] = el)} className="w-[1/3] mx-11 cursor-pointer">
          <Image 
       
          
          className="w-[250px]" src="/business-enterprise-strategy-market-analysis-niche-selection-conquering-marketplace-studying-market-segmentation-planning-company-development 1.jpg" width={400} height={400} alt="Business enterprise strategy" />
          <p className="text-lg font-semibold">
            Provides fair market <br /> valuations and justifications
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;