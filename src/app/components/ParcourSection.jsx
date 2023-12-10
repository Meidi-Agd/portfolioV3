"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabParcours from "@/app/components/TabParcours";
import Link from "next/link";

const TAB_DATA = [
    {
        title: "Diplomes",
        id: "diplome",
        content: (
            <ul className="list-disc pl-2 list-none h-[150px]">
                <li className="ml-4"><h3><b>BACHELOR</b> Concepteur de Systèmes d&apos;Information</h3></li>
                <li className="ml-4"><h3><b>BTS SIO</b> option Solutions Logicielles et Applications Métiers</h3></li>
                <li className="ml-4"><h3 className="text-base"><b>BAC PRO SN</b> option Réseaux Informatiques et Systèmes Communicants</h3></li>
            </ul>
        ),
    },
    {
        title: "Stages",
        id: "stage",
        content: (
            <ul className="list-disc pl-2 list-none h-[150px]">
                <li className="md:ml-4 mb-2">
                    <p className="grid grid-cols-4 text-center">
                        <span>2023</span>
                        <Link href="https://www.agencemycom.fr/" target="_blank">MYCOM</Link>
                        <span>2 mois</span>
                        <span>WEB</span>
                    </p>
                </li>
                <li className="md:ml-4 mb-2">
                    <p className="grid grid-cols-4 text-center">
                        <span>2022</span>
                        <Link href="https://www.dpcdesign.fr/" target="_blank">DPC DESIGN</Link>
                        <span>1 mois</span>
                        <span>WEB</span>
                    </p>
                </li>
                <li className="md:ml-4 mb-2">
                    <p className="grid grid-cols-4 text-center">
                        <span>2021</span>
                        <Link href="https://campus.byccinievre.fr/" target="_blank">CS2I</Link>
                        <span>1 mois</span>
                        <span>Réseau</span>
                    </p>
                </li>
                <li className="md:ml-4 mb-2">
                    <p className="grid grid-cols-4 text-center">
                        <span>2020</span>
                        <Link href="https://www.linkedin.com/company/technicentre-sncf-industriel-nevers-languedoc" target="_blank">SNCF</Link>
                        <span>1 mois</span>
                        <span>Réseau</span>
                    </p>
                </li>
            </ul>
        ),
    },
];

const ParcourSection = () => {
    const [tab, setTab] = useState("diplome");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white mt-12 mb-12" id="parcours">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py16 xl:px-16">
                <div className="rounded-full bg-[#917FB3] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative hidden md:block">
                    <Image
                        src="/images/parcours-img.svg"
                        alt="Web illustrations by Storyset"
                        width={350}
                        height={350}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
                </div>

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-5xl font-bold text-white mb-4 md:underline">Mon Parcours</h2>
                    <p className="text-base text-justify lg:text-lg">
                        Au collège, je rêvais de devenir <b>développeur de jeux vidéo</b>, créateur d’univers virtuels et d’aventures palpitantes. Au lycée, ma vision s’est élargie : j’ai envisagé une carrière en tant que <b>développeur de logiciels</b>, explorant diverses facettes du domaine. <b>Ma curiosité</b> m’a finalement guidé vers le <b>développement Web</b>, une discipline qui allie créativité, technologie et interaction avec les utilisateurs. Mon stage chez DPC Design en première année de <b>BTS</b> a confirmé mon objectif initial. Convaincu que mon parcours me prépare à relever les défis du monde numérique, je poursuis actuellement mon objectif en troisième année de <b>Bachelor CSI</b>.
                    </p>

                    <hr className="rounded-full border-t-4 border-[#FDE2F3] mt-4" />

                    <div className="flex flex-row justify-start mt-8">
                        <TabParcours
                            selectTab={() => handleTabChange("diplome")}
                            active={tab === "diplome"}
                        >
                            {" "}
                            Diplomes{" "}
                        </TabParcours>
                        <TabParcours
                            selectTab={() => handleTabChange("stage")}
                            active={tab === "stage"}
                        >
                            {" "}
                            Stages{" "}
                        </TabParcours>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ParcourSection