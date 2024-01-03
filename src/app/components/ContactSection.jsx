"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


const ContactSection = () => {
    return (
        <section className="text-white mt-12 mb-12 h-[50vh] flex flex-col justify-evenly items-center" id="contact">
            <h2 className="text-center text-5xl font-bold text-white md:mt-10">Contact</h2>
            <hr className="w-1/3 rounded-full border-t-4 border-[#FDE2F3] m-5"/>
            <div className="w-full h-full md:w-1/2 md:h-3/4 pl-2 text-[13px] md:text-base flex flex-col md:flex-row flex-wrap justify-evenly items-start md:items-center bg-[#917FB3] rounded-2xl">
                <a href="mailto:augendre.meidi@outlook.fr"
                   className="md:w-1/2 flex justify-center items-center cursor-pointer">
                    <Image src="/images/mail.png" alt="Icons8" width={50} height={50} className="cursor-pointer mr-2"/>
                    augendre.meidi@outlook.fr
                </a>

                <a href="https://github.com/Meidi-Agd"
                   className="md:w-1/2 flex justify-center items-center cursor-pointer">
                    <Image src="/images/github.png" alt="Icons8" width={50} height={50}
                           className="cursor-pointer mr-2"/>
                    Meidi-Agd
                </a>

                <a href="tel:+33634440878"
                   className="md:w-1/2 flex justify-center items-center cursor-pointer">
                    <Image src="/images/phone.png" alt="Icons8" width={50} height={50}
                           className="cursor-pointer mr-2"/>
                    06 34 44 08 78
                </a>

                <a href="https://www.linkedin.com/in/meidi-augendre/"
                   className="md:w-1/2 flex justify-center items-center cursor-pointer">
                    <Image src="/images/linkedin.png" alt="Icons8" width={50} height={50}
                           className="cursor-pointer mr-2"/>
                    meidi-augendre
                </a>
            </div>
        </section>
    );
};

export default ContactSection;