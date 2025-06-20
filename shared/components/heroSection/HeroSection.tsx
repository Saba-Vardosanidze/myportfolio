"use client";
import Image from "next/image";
import Saba from "@/public/saba.png";
import {useTranslations} from "next-intl";
import {
  Mail,
  PhoneCall,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "@/shared/assets/icons";
import Link from "next/link";
import {motion} from "framer-motion";
import {useState} from "react";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="m-auto max-w-[1440px] w-full px-[20px]">
      <div className="flex justify-between">
        <div className="flex gap-[77px]">
          <div className="flex flex-col">
            <div className="max-w-[300px] w-full min-h-[400px] rounded-[30px] flex border border-dashed border-[#3F48CC] p-[20px]">
              <div className="rounded-[20px] flex max-w-[260px] w-full min-h-[287px] overflow-hidden">
                <Image src={Saba} alt="saba" />
              </div>
            </div>
            <div className="flex flex-col gap-[20px] m-auto">
              <div className="mt-[24px] flex items-center gap-[12px] hover:text-[#3F48CC] transition-all duration-300 ease-in-out cursor-pointer">
                <PhoneCall className="w-[24px] h-[24px]" />
                <a href="tel:+995571963180" className="text-[20px]">
                  +995 571 96 31 80
                </a>
              </div>
              <div className="flex items-center gap-[12px] hover:text-[#3F48CC] transition-all duration-300 ease-in-out cursor-pointer">
                <Mail className="w-[24px] h-[24px]" />
                <a href="mailto:sabavardo674@gmail.com" className="text-[20px]">
                  sabavardo674@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-[15px] mt-[15px]">
              <p className="text-[#3F48CC] text-[24px] font-semibold">
                {t("Name")}
              </p>
              <p className="text-[#3F48CC] font-semibold text-[18px]">
                {t("Profesion")}
              </p>
            </div>
            <div className="mt-[60px] flex flex-col gap-[20px] max-w-[579px] w-full">
              <p>{t("Greeting")}</p>
              <p>{t("Description")}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="relative min-h-[280px] w-[60px] rounded-[5px] p-[2px]"
            style={{
              background:
                "linear-gradient(0deg, rgba(63, 72, 204, 0.53) 0%, rgba(31, 31, 31, 0.79) 40%)",
            }}
          >
            <div
              className="bg-[#0F0F0F] w-full h-full rounded-[3px] relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute w-[30px] h-[30px] bg-black rounded-full left-1/2 -translate-x-1/2 -translate-y-1/2 transform"></div>
              <motion.div
                className="absolute w-[20px] h-[20px] rounded-full border border-white left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                animate={{
                  background: isHovered ? ["#00D100", "#00D10095"] : "#D10000",
                }}
                transition={{
                  duration: 0.5,
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <div className="w-full h-full flex items-center justify-center">
                <ul className="flex flex-col items-center justify-center gap-[20px]">
                  <Link href="https://www.facebook.com/shako.vardosanidze.1/">
                    <li>
                      <Facebook className="w-[30px] h-[30px] hover:text-[#3F48CC] transition-all duration-300 ease-in-out" />
                    </li>
                  </Link>
                  <Link href="https://www.instagram.com/_vardosanidzesaba_/">
                    <li>
                      <Instagram className="w-[25px] h-[25px] hover:text-[#3F48CC] transition-all duration-300 ease-in-out" />
                    </li>
                  </Link>
                  <Link href="https://github.com/Saba-Vardosanidze">
                    <li>
                      <Github className="w-[25px] h-[25px] hover:text-[#3F48CC] transition-all duration-300 ease-in-out" />
                    </li>
                  </Link>
                  <Link href="https://www.linkedin.com/in/saba-vardosanidze-76839434b/">
                    <li>
                      <Linkedin className="w-[25px] h-[25px] hover:text-[#3F48CC] transition-all duration-300 ease-in-out" />
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[2px] h-full bg-[linear-gradient(180deg,rgba(63,72,204,0.97)_0%,rgba(63,72,204,0)_90%)]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
