import Link from "next/link";


export default function Solucao() {

const email = "fisioterapia@farmaclinic.net";
  const subject="Solicitação de Proposta";
  const body = "";


  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative w-full hidden lg:block"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548650/bg_banner_xbau7q.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          aspectRatio: "1920 / 640",
        }}
      >
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
            <div className="w-[46%] min-w-[280px] md:w-[75%] lg:w-[80%]">
              <h1 className="mb-5 text-2xl leading-tight text-white sm:text-3xl lg:text-5xl">
                
                <span className="font-bold"> Recupere com segurança , confiança </span>
                e acompanhamento profissional.
              </h1>

              

              <Link
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  aria-label="Solicitar Proposta por Email"
                className="bg-[#eb9003] hover:bg-[#d47d00] text-white rounded-full font-medium transition-colors mb-4"
                style={{
                  fontSize: "clamp(0.9rem, 1vw, 1rem)",
                  padding: "2% 4.5%",
                }}
              >
                AGENDAR AVALIAÇÃO
              </Link>
            </div>
          </div>
        </div>
      </div>


{/* ── MOBILE ── */}

<div
  className="relative w-full block lg:hidden min-h-[600px]"
  style={{
    backgroundImage:
     "url('https://res.cloudinary.com/dhpa1juyr/image/upload/v1791548653/bg_banner_mobile_vyt1ec.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  }}
>
  <div className="absolute inset-0 z-10 flex items-start md:items-center">
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
      <div className=" max-w-[350px] md:max-w-[350px] pt-16">

        <h1 className="mb-4 max-w-[300px] text-2xl font-semibold leading-tight text-white sm:max-w-[360px] sm:text-3xl">
          <span className="font-bold">
            Recupere com
            <br />
            segurança e confiança <br />
          </span>
         
          e acompanhamento
          <br />
          profissional.
        </h1>

       

        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          aria-label="Agendar avaliação por email"
          className="bg-[#eb9003] hover:bg-[#d47d00] text-white rounded-full font-medium transition-colors px-6 py-3"
          style={{
            fontSize: "clamp(0.95rem, 1vw, 1rem)",
          }}
        >
          AGENDAR AVALIAÇÃO
        </a>

      </div>
    </div>
  </div>
</div>

    </section>
  );
}