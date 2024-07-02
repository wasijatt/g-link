'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
    const handleSelect = () => {
      setIsOpen(false);
    };
    return(
<div className="flex justify-between items-center px-[8%] py-3">    
    <div className="flex items-center">
        <Image alt="main logo" src={"/Link Logo.jpg"} width={100} height={100}/>
        <Link className="ml-7 font-medium text-xl" href={""}>Contact Us</Link> 
    </div>
    <motion.div
      className="relative flex items-center justify-center  cursor-pointer "
      onClick={toggleOpen}
     
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image
      alt="language Selector"
        className="w-10 h-10 rounded-full ml-2"
        src="/Language.jpg"
        width={40}
        height={40}
      />
      {isOpen && (
        <motion.div
          className="absolute top-0 right-full flex space-x-2 "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-10 h-10 right-2 cursor-pointer " onClick={handleSelect}>
            <Image
            alt="language Selector"
              className="w-10 h-10 rounded-full"
              src="/Language.jpg"
              width={40}
              height={40}
            />
          </div>
          <div className="w-10 h-10  right-2 cursor-pointer" onClick={handleSelect}>
            <Image
            alt="language Selector"

              className="w-10 h-10 rounded-full"
              src="/Language.jpg"
              width={40}
              height={40}
            />
          </div>
         
        </motion.div>
      )}
    </motion.div>
</div>
    )
}
export default Header