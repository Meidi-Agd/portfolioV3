import Image from 'next/image'
import HeadSection from "@/app/components/HeadSection";
import NavBar from "@/app/components/NavBar";
import ParcourSection from "@/app/components/ParcourSection";
import CompSection from "@/app/components/CompSection";
import ProjetSection from "@/app/components/ProjetSection";
import ContactSection from "@/app/components/ContactSection";
import FooterSection from "@/app/components/FooterSection";
import { motion} from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#2A2F4F]">
        <NavBar />
        <div className="container mt-10 mx-auto px-12 pt-12">
            <HeadSection />
            <ParcourSection />
            <CompSection />
            <ProjetSection />
            <ContactSection />
            <FooterSection />
        </div>
    </main>
  )
}
