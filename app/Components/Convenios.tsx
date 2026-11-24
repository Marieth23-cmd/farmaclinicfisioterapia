import Image from "next/image";

const convenios = [
  "UNISA\u0442\u0425\u0434\u2568\u0422\u0442\u0425\u0438\u2568\u2524\u0442\u0425\u0438\u2568\u255D\u2564\u0412\u2568\u0435\u2568\u2555\u0442\u0425\u0438\u0442\u0425\u0421DE.svg",
  "3.svg",
  "saudemais.svg",
  "5.svg",
  "7.svg",
  "8.svg",
  "fidelidade.svg",
  "SOL SEGUROS.svg",
  "11.svg",
  "10.svg",
  "Mediplus.png",
  "trevo.png",
   "allianz-logo.svg",
   "confianca.png",
   "super.png",
   "tranquilidade.png",
   "STA.png",
   "fortaleza.svg",
   "mundialseguros.png",
    "GIANT.png",
    "protteja.png",
    "viva.svg",
    "12.svg",
    "ensa.svg"
  
];

export default function Convenios() {
  return (
    <div id="convenios" className="scroll-mt-20 bg-[#ebf0f2]">
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:px-8 md:py-16">
        <h1 className="mb-8 text-2xl  leading-tight text-[#1b73a0] sm:text-3xl lg:text-5xl">
          Os Nossos <span className="font-bold">Convênios</span>
        </h1>

        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          {convenios.map((file, index) => (
            <div
              key={file}
              className="flex h-24 items-center justify-center"
            >
              <Image
                src={`/images/convenios/${encodeURIComponent(file)}`}
                alt={`Logótipo de convénio ${index + 1}`}
                width={160}
                height={90}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
