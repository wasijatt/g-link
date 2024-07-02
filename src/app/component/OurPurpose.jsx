'use client'
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { createContext } from 'react';


const OurPurpose = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const divRefs = useRef([]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentSectionRef = sectionRef.current; // Capture ref in local variable

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [controls]);

  return (
    <div ref={sectionRef} className="flex flex-col justify-center items-center text-center mt-10">
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#01236b] text-[42px] font-extrabold cursor-pointer"
      >
        Our Purpose
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="font-light text-[16px] cursor-text"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
      </motion.p>
      <motion.button
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="gradientbg text-white text-[22px] font-bold px-10 py-3 rounded-full my-10 cursor-pointer"
      >
        Fair Market Value
      </motion.button>
      <p className="cursor-default">Automate your compliance with AI-powered CV tiering and fair market valuation.</p>
      <div className="flex mt-14">
        <motion.div
          ref={(el) => (divRefs.current[0] = el)}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          className="w-[1/3] mx-11 cursor-pointer"
        >
          <Image
            src="/ai-powered-content-creation-isometric-concept-with-chatbot-laptop-screen-3d-vector-illustration 1.jpg" width={300} height={300} alt="AI powered content creation" />
          <p className="mt-6 text-lg font-semibold">
            AI extracts and tiers CV <br /> information
          </p>
        </motion.div>
        <motion.div
          ref={(el) => (divRefs.current[1] = el)}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
          className="w-[1/3] mx-11 mt-11 cursor-pointer"
        >
          <Image
            src="/accounting-concept-illustration 1.jpg" width={300} height={300} alt="Accounting concept" />
          <p className="text-lg font-semibold text-center">
            Adapts to your tiering <br /> methodology
          </p>
        </motion.div>
        <motion.div
          ref={(el) => (divRefs.current[2] = el)}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut", delay: 2.1 }}
          className="w-[1/3] mx-11 cursor-pointer"
        >
          <Image
            src="/business-enterprise-strategy-market-analysis-niche-selection-conquering-marketplace-studying-market-segmentation-planning-company-development 1.jpg" width={300} height={300} alt="Business enterprise strategy" />
          <p className="text-lg font-semibold">
            Provides fair market <br /> valuations and justifications
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPurpose;
