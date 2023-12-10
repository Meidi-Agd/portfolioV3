"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import CVButton from "@/app/components/CVButton";

const HeadSection = () => {
    return (
        <section className="mb-12 h-[100vh]">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                <div className="h-full w-full col-span-7 place-self-center flex flex-col justify-evenly ">
                    <h1 className="text-white text-center text-5xl lg:text-8xl font-extrabold mb-5 md:mb-0 p-3 text-transparent bg-clip-text bg-gradient-to-r from-[#917FB3] to-[#FDE2F3]">
                        Meidi Augendre
                    </h1>
                    <h2 className="text-white text-center text-3xl font-bold mb-10 md:mb-0 md:text-6xl">
                        Je suis {" "}
                        <br className="md:hidden"/>
                        <TypeAnimation
                            sequence={[
                                "étudiant",
                                1000,
                                "en Bachelor CSI",
                                1000,
                                "développeur web",
                                1000,
                                "fullstack web",
                                1000,
                                "",
                                1000,
                            ]}
                            wrapper="span"
                            speed={1}
                            repeat={Infinity}
                        />
                    </h2>
                    <CVButton />
                </div>
                <Link href="#parcours" className="flex md:hidden w-full h-[70px] justify-center "> <ArrowSmallDownIcon width="70" className="text-white border-[#FDE2F3] border-4 rounded-full"/> </Link>
                <div className="col-span-5 place-self-center hidden md:block">
                    <div className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
                        <motion.div
                            className="rounded-full bg-[#917FB3] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] absolute left-24 top-24"
                            animate={{
                                scale: [1.2, 1.5, 1.5, 1, 1.2],
                                rotate: [0, 0, 180, 180, 360],
                                borderRadius: ["48%", "50%", "45%", "50%", "48%"]
                            }}
                            transition={{
                                duration: 10,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        />
                        <Image
                            id="animImgHead"
                            src="/images/head-img.svg"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={350}
                            height={350}

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeadSection