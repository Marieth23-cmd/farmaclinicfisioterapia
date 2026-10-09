"use client";
import Image from "next/image";


export default function Servicos() {


   const Servicos = [
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548652/icon_1_rsii73.webp",
      title: "Reabilitação pós-cirúrgica",
     
        },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548649/icon_2_pmkzif.png",
         title: "Tratamento de lesões musculares e articulares",
    
     
    },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548649/icon_3_uhqlvk.png",
     title: "Fisioterapia neurológica",
        },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548652/icon_4_rpr3aw.png",
      title: "Fisioterapia respiratória ",
         },
    {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548653/icon_5_i9pkow.png",
      title: "Recuperação Funcional e mobilidade",
      },
       {
      imageicon: "https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548654/icon_6_gre37r.webp",
      title: "Alívio da dor e redução postural",
      },
    ];




  return (
<div className="bg-[#ebf0f2]">
   <div  className=" max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-16  ">

        <h1 className="text-[#1b73a0] leading-tight mb-4 
          text-2xl sm:text-3xl lg:text-5xl max-w-80"> Serviços de 
            <span className="font-bold"> Fisioterapia </span>
        </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 lg:mt-10">
          {Servicos.map((servico, index) => (
            <div
                key={index}
                className=" p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <Image
                    src={servico.imageicon}
                    alt={servico.title}
                    width={90}
                    height={90}
                    className="mb-4"
                />
                <h3 className="text-[#1b73a0] max-w-[290px] font-semibold text-base sm:text-lg lg:text-xl">
                    {servico.title}
                </h3>
            </div>
          ))}
        </div>
    </div>
</div>
  );
}






       