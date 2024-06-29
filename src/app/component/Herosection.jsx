"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Herosection = () => {
    useEffect(() => {
        gsap.fromTo(".hero-heading", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(".hero-paragraph", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
        gsap.fromTo(".hero-buttons button", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 1, stagger: 0.2 });
    }, []);

    return (
        <div className="bg-cover bg-center w-full h-[70vh] justify-center items-center flex flex-col text-white"
            style={{ backgroundImage: "url('/Herosection bg.jpg')" }}>
            <motion.h1 className="hero-heading text-[50px] font-bold text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                Revolutionizing Pharma Compliance<br /> - Healthcare Professional <br /> Interactions
            </motion.h1>
            <motion.p className="hero-paragraph mt-5 text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}>
                AI-driven solutions for tiering and fair market valuation
            </motion.p>
            <div className="hero-buttons flex mt-8">
                <motion.button className="border-white border-2 px-8 py-2 rounded-3xl text-[20px] font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}>
                    Get Started
                </motion.button>
                <motion.button className="px-8 py-2 rounded-3xl text-[20px] font-medium bg-white text-[#01236B] ml-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}>
                    Get a demo
                </motion.button>
            </div>
        </div>
    );
};

export default Herosection;
