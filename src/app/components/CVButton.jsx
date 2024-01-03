import React from "react";
import { motion } from "framer-motion";

const CVButton = () => {
    const openPdf = () => {
        // Remplacez le chemin ci-dessous par le chemin de votre fichier PDF
        window.open('/docs/CV_Meidi_Augendre.pdf', '_blank');
    };

    return(
        <motion.button
            className="text-white text-2xl font-bold px-10 py-4 mb-10 rounded-full w-full place-self-center bg-gradient-to-br from-[#917FB3] to-[#FDE2F3] sm:w-fit"
            onClick={openPdf}
            whileHover={{ scale: 1.1 }} // Animation au survol
            whileTap={{ scale: 0.9 }} // Animation au clic
            transition={{
                duration: "0.35",
                ease: "easeInOut",
            }}

        >
            Voir CV
        </motion.button>
    )};

export default CVButton;