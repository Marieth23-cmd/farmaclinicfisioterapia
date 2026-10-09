"use client";
import Image from "next/image";
import {motion} from "framer-motion";

import Link from "next/link"

export default function Hero() {

   const email = "fisioterapia@farmaclinic.net";
  const subject = "Solicitação de Proposta";
  const body = "";


  return (
    <section className="relative w-full overflow-hidden">

      {/* ── DESKTOP ──GKIFUNSUNI */}
      <div className="relative w-full md:pt-20  lg:py-10 hidden md:block">
        <Image
          src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548655/bg_hero_rjyszu.png"
          alt="Hero"
          width={1600}
          height={560}
          priority
          className="w-full h-auto block"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-5xl mx-auto px-6 py-16 sm:px-4 md:px-8 w-full">
            <motion.h1
              className="text-white leading-tight max-w-lg font-bold "
              style={{ fontSize: "clamp(0.9rem, 2.6vw, 4rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Farmaclinic Fisioterapia 
              
              
          </motion.h1>
           <motion.h1
              className="text-white leading-tight max-w-xl mb-[2%]"
              style={{ fontSize: "clamp(0.9rem, 2.6vw, 4rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            Um novo espaço dedicado à sua recuperação
              
              
          </motion.h1>
            <motion.p
              className="text-gray-200 mb-[3%] leading-relaxed max-w-xl"
              style={{ fontSize: "clamp(1rem, 2vw, 1.05rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Conte com um serviço especializado de fisioterapia, focado na sua reabilitação, mobilidade e bem-estar.
            </motion.p>
            <Link  href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  aria-label="Solicitar Proposta por Email"

              className="bg-[#1b73a0]  hover:bg-[#165474] text-white rounded-full font-medium transition-colors"
              style={{
                fontSize: "clamp(0.5rem, 0.9vw, 1rem)",
                padding: "1% 4%",
              }}
            >
              AGENDAR AVALIAÇÃO
            </Link>
          </div>
        </div>
      </div>


              {/* ── Mobile ──GKIFUNSUNI */}
      <div className="relative w-full   block md:hidden">
        <Image
          src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548650/bg_hero_mobile_ynvln5.webp"
          alt="Hero"
          width={1600}
          height={560}
          priority
          className="w-full h-auto block"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-6xl mx-auto  py-16 px-4 sm:px-6 md:px-8 w-full">
            <motion.h1
              className="text-white text-2xl sm:text-2xl leading-tight max-w-xl mb-3"
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            Farmaclinic Fisioterapia 
              
            </motion.h1>
               <motion.h1
              className="text-white text-2xl sm:text-2xl leading-tight max-w-xl mb-3"
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
           
             Um novo espaço dedicado à sua recuperação
            </motion.h1>

            <motion.p
              className="text-gray-200 mb-4 sm:text-base  leading-relaxed max-w-xl text-sm"
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
             conte com um serviço especializado de fisioterapia, focado na sua reabilitação ,mobilidade e bem-estar
            </motion.p>
            <Link
             href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
              aria-label="Solicitar Proposta por Email"

              className="
              bg-[#1b73a0]
              hover:bg-[#155a80]
              text-white
              rounded-full
              font-medium
              transition-colors
              px-6
              py-3
              text-sm
              sm:text-base
            
              "
              
            >
                AGENDAR AVALIAÇÃO
            </Link>
          </div>
        </div>
      </div>
 


    </section>
  );
}