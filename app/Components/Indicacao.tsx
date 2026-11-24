"use client";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";



export default function Contactos() {
  return (
    <div >

        <section id="indicacao" className="scroll-mt-20 max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16 "
            >
        
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        
                {/* Lado esquerdo */}
                <div className="flex flex-col justify-center max-w-96 md:max-w-none">
                  
        
                  <p className="text-[#eb9003]  mb-2 sm:mb-6 leading-relaxed text-2xl sm:text-3xl lg:text-5xl ">
                     Para quem
                     <br />
                     <span className="font-bold">é indicado?</span>
                   </p>
        
                 
        
                  {/* indicação */}
                  <div className="sm:mt-4 px-3 sm:px-4 py-3 sm:py-4">
                    
                    <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg text-gray-600">
                      <FaCheck className="mt-1 h-4 w-4 shrink-0 text-[#1b73a0] lg:h-[18px] lg:w-[18px]" />
                      Utentes em recuperação de lesões
                    </p>
        
                    <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg text-gray-600">
                      <FaCheck className="mt-1 h-4 w-4 shrink-0 text-[#1b73a0] lg:h-[18px] lg:w-[18px]" />
                      Pós-operatório
                    </p>
        
                    <p className="flex gap-2 mb-2 sm:mb-3 text-base lg:text-lg text-gray-600">
                      <FaCheck className="mt-1 h-4 w-4 shrink-0 text-[#1b73a0] lg:h-[18px] lg:w-[18px]" />
                      Problemas de mobilidade
                    </p>
        
                    <p className="flex gap-2 text-base lg:text-lg text-gray-600">
                      <FaCheck className="mt-1 h-4 w-4 shrink-0 text-[#1b73a0] lg:h-[18px] lg:w-[18px]" />
                      Dores crónicas 
                    </p>

                     <p className="flex gap-2 text-base lg:text-lg text-gray-600">
                      <FaCheck className="mt-1 h-4 w-4 shrink-0 text-[#1b73a0] lg:h-[18px] lg:w-[18px]" />
                      Reabilitação neurológica e respiratória
                    </p>
                  </div>
                </div>
        
                {/* Lado direito - Imagem */}
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px]">
                  <Image
                    src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548654/img_para_quem_akorfe.webp"
                    alt="Saúde ocupacional"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw "
                  />
                </div>
        
              </div>
            </section>
        


    
    </div>
  );
}