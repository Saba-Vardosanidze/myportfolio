"use client";
import {motion} from "framer-motion";
import {useState} from "react";
import Image from "next/image";
import Saba from "@/public/saba.png";
import Saba2 from "@/public/saba2.png";

const ProfileFrame = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showFirst, setShowFirst] = useState(true);

  return (
    <div className="min-h-[480px]">
      <div className="flex w-full  items-center flex-col gap-[25px]">
        <div className="max-w-[200px] w-full h-[1px] bg-white"></div>
        <div className="flex justify-between w-full items-center">
          <motion.div
            className="w-[20px] h-[20px] border border-white rounded-full flex justify-center items-center"
            animate={{background: ["#D10000", "#00D10095"]}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 3,
            }}
          ></motion.div>
          <div className="max-w-[300px] w-full h-[1px] bg-white"></div>
          <motion.div
            className="w-[20px] h-[20px] border border-white rounded-full flex justify-center items-center"
            animate={{background: ["#D10000", "#00D10095"]}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 3,
            }}
          ></motion.div>
        </div>
        <motion.div
          className="border relative  border-white max-w-[300px] overflow-hidden w-full"
          initial={{height: 0}}
          animate={{height: 350}}
          transition={{duration: 1}}
        >
          {isVisible && (
            <motion.div
              className="absolute w-full h-full border-6 border-dashed border-green-500"
              initial={{clipPath: "inset(100% 0% 0% 0%)"}}
              animate={{clipPath: "inset(0% 0% 0% 0%)"}}
              transition={{duration: 2, ease: "easeInOut", delay: 1}}
              onAnimationComplete={() => setIsVisible(false)}
            />
          )}
          {showFirst ? (
            <motion.div
              initial={{opacity: 1}}
              animate={{display: "none"}}
              transition={{duration: 3}}
              onAnimationComplete={() => setShowFirst(false)}
            >
              <Image src={Saba2} alt="saba2" />
            </motion.div>
          ) : (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
              <Image src={Saba} alt="saba" />
            </motion.div>
          )}
        </motion.div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="max-w-[250px] w-full h-[1px] bg-white"></div>
      </div>
    </div>
  );
};

export default ProfileFrame;
