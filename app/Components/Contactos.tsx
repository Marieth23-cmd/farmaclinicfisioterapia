import {FaWhatsapp } from "react-icons/fa";


export default function Contactos() {
  const phone = "244938998808";
  const message = "Olá, gostaria de obter mais informações.";

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <h1 className="mb-4 font-bold leading-tight text-[#1b73a0] text-2xl sm:text-3xl lg:text-5xl">
          Contactos
        </h1>

        <h2 className="mb-6 lg:max-w-sm text-xl font-bold  text-[#eb9003] sm:text-2xl md:max-w-md  lg:text-3xl">
          Marque já a sua avaliação e dê o primeiro passo para a sua recuperação
        </h2>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-5 sm:gap-x-8 lg:gap-x-12">
          <div className="space-y-4">
            <p className="text-base lg:text-lg">
              <span>Telefones : </span>
              <a href="tel:+244938998808">
                +244 938 998 808
              </a>
            </p>
            <p className="text-base lg:text-lg">
              <span>E-mail : </span>
              <a href="mailto:fisioterapia@farmaclinic.net">
                fisioterapia@farmaclinic.net
              </a>
            </p>
          </div>

         <div className="inline-flex items-center gap-3 rounded-xl bg-[#08799B] px-6 py-3">
  <FaWhatsapp
    size={42}
    className="shrink-0 text-[#44C553]"
    style={{
      filter: "drop-shadow(0 0 1.5px white)",
    }}
  />

  <div className="flex flex-col">
    <p className="text-lg font-bold leading-tight text-white">
      FALE AGORA
    </p>

    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1 whitespace-nowrap text-lg font-bold leading-tight text-white"
    >
      +244 938 998 808
    </a>
  </div>
</div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 md:px-8 md:pb-16">
        <h2 className="mb-5 font-bold leading-tight text-[#1b73a0] text-2xl sm:text-3xl lg:text-5xl">
          Localização
        </h2>

       
<div className="grid grid-cols-1 gap-6 md:grid-cols-[250px_minmax(0,1fr)]">
  <div className="flex flex-col justify-center gap-8 max-w-[250px]">
    <div>
      <p className="text-base font-bold sm:text-lg">
        Farmaclinic - Centro Médico
      </p>
      <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
        Rua 11 de Novembro, S/N, Bairro 1.º de Viana, Luanda - Angola
      </p>
    </div>

    <div>
      <p className="mb-1 text-base font-bold text-[#eb9003] sm:text-lg">
        Como Chegar
      </p>
      <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
        Estamos localizados numa das principais vias de Luanda, com fácil
        acesso para toda zona de Luanda Sul.
      </p>
    </div>
  </div>

  <iframe
    title="Mapa da localização da FarmaClinic"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.567756791385!2d13.363646176069674!3d-8.919713691586741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f823b9724561%3A0x6f5d0146fdfae64c!2sFARMACLINIC!5e0!3m2!1spt-PT!2sus!4v1781606143307!5m2!1spt-PT!2sus"
    className="h-[300px] w-full min-w-0 rounded-lg sm:h-[350px] md:h-full md:min-h-[300px]"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

      </section>
    </>
  );
}