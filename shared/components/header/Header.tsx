"use client";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import LocaleSwitcher from "@/features/i18n/components/LocaleSwitcher";
import {useTranslations} from "next-intl";
import {motion} from "motion/react";
import {BurgerMenu, Rose} from "@/shared/assets/icons";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className="flex justify-between gap-[60px] ">
      <div className="w-full">
        <div className="my-[25px] h-[28px] flex items-end pl-[25px]">
          <ul className="flex gap-[20px]">
            <li className="hover:text-[#3F48CC] text-[18px] transition-all cursor-pointer duration-300 ease-in-out">
              {t("HeroSection")}
            </li>
            <li className="hover:text-[#3F48CC] text-[18px] transition-all cursor-pointer duration-300 ease-in-out">
              {t("MainPage")}
            </li>
            <li className="hover:text-[#3F48CC] text-[18px] transition-all cursor-pointer duration-300 ease-in-out">
              {t("ContactMe")}
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-full overflow-hidden bg-white relative h-[2px]">
            <motion.div
              className="absolute w-full h-full bg-[#3F48CC]"
              initial={{width: 0}}
              animate={{width: "100%"}}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            ></motion.div>
          </div>
          <div className="w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center">
            <motion.div
              animate={{color: ["#FFFFFF", "#3F48CC"]}}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            >
              <Rose className="w-[18px] h-[18px] cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </div>
      <Image
        src={Logo}
        alt="logo"
        width={190}
        height={190}
        className="cursor-pointer"
      />
      <div className="w-full">
        <div className="flex justify-end items-center gap-[20px] pr-[25px]">
          <div className="my-[25px] flex h-[28px] cursor-pointer ">
            <LocaleSwitcher />
          </div>
          <BurgerMenu className="text-white transition-all duration-300 ease-in-out hover:text-[#3F48CC] w-[40px] h-[40px] cursor-pointer" />
        </div>
        <div className="flex items-center">
          <div className="w-[30px] h-[30px] border border-white rounded-full flex justify-center items-center">
            <motion.div
              animate={{color: ["#FFFFFF", "#3F48CC"]}}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            >
              <Rose className="w-[18px] h-[18px] cursor-pointer" />
            </motion.div>
          </div>
          <div className="w-full overflow-hidden bg-white relative h-[2px]">
            <motion.div
              className="absolute w-full h-full bg-[#3F48CC]"
              initial={{x: "100%"}}
              animate={{x: "0%"}}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
