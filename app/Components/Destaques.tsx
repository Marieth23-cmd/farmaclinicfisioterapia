import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Servicos() {
  return (
   <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 ">

  <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">

    {/* Lado esquerdo */}
    <div>

      <h1
        className="leading-tight mb-4 text-[#1b73a0] font-semibold  text-2xl sm:text-3xl lg:text-5xl"
        
      >
        Destaques
        
      </h1>

      

      {/* Caixa benefícios */}
      <div className=" mt-6 sm:mt-8 lg:mt-10">

       

        <div className="space-y-3">

          <p
            className="flex gap-2 text-base lg:text-lg text-gray-600 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Profissionais capacitados
          </p>

          <p
            className="flex gap-2  text-gray-600 text-base lg:text-lg leading-relaxed"
           style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Cuidado especializado
          </p>

          <p
            className="flex gap-2 text-base lg:text-lg text-gray-600 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Reabilitação fisica e funcional
          </p>

          <p
            className="flex gap-2 text-base lg:text-lg text-gray-600 leading-relaxed"
           style={{ fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
          >
            <FaCheck className="text-[#1b73a0] shrink-0 mt-1" />
            Tratamentos personalizados
          </p>

        </div>
      </div>
    </div>

    {/* Lado direito - Imagem */}
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <Image
        src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548654/logo_icon_vua0ek.png"
        alt="Saúde ocupacional"
        fill
        className="object-contain hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>

  </div>
</section>
  );
}
