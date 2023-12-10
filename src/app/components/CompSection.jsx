"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


const CompSection = () => {
    return (
        <section className="text-white mt-12 mb-12 h-[50vh] md:h-[20vh]">
            <div className="w-full h-full flex flex-wrap justify-evenly items-center bg-[#917FB3] rounded-2xl">
                <Image src="/images/html.png" alt="Icons8" width={100} height={100} className="aspect-[3/2] object-contain md:aspect-square"/>
                <Image src="/images/css.png" alt="Icons8" width={120} height={120} className="aspect-[3/2] object-contain md:aspect-square"/>
                <Image src="/images/tailwind.png" alt="Icons8" width={120} height={120} className="aspect-[3/2] object-contain md:aspect-square"/>
                <Image src="/images/wordpress.png" alt="Icons8" width={100} height={100} className="aspect-[3/2] object-contain md:aspect-square"/>
                <Image src="/images/php.png" alt="Icons8" width={120} height={120} className="aspect-[3/2] object-contain md:aspect-square"/>
                <Image src="/images/symfony.png" alt="Icons8" width={120} height={120} className="aspect-[3/2] object-contain md:aspect-square"/>
            </div>
        </section>
    );
};

export default CompSection;