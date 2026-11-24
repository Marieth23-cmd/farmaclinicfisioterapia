import Image from "next/image";
import { FaInstagram, FaWhatsapp} from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  const phone="244938998808";
  const message="Olá, gostaria de obter mais informações.";
  const email = "fisioterapia@farmaclinic.net";
  const subject = "Solicitação de Proposta";



  return (
    <footer className="bg-[#004662] text-white">
      <div className="flex items-center  justify-center max-w-6xl mx-auto px-4 lg:px-4 md:px-8 py-10 lg:py-10">

        <div className="grid w-full grid-cols-1 items-start gap-10 py-8 md:grid-cols-4 md:py-10">

          {/* Logo */}
          <div className="w-fit space-y-6">
            <a href="https://farmaclinic.ao/" aria-label="FarmaClinic - página inicial">
              <Image
                src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1776868935/Logo_branco_cd3dhn.png"
                alt="Logo FarmaClinic"
                width={220}
                height={140}
                className="object-contain"
              />
            </a>

            <div className="flex w-full justify-end gap-4 text-white text-base lg:text-lg">
             

              <a
                  href="https://www.instagram.com/farmaclinic.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da FarmaClinic"
                >
                  <FaInstagram className="cursor-pointer rounded-full hover:text-pink-500" />
                </a>

                <a
                  href="https://www.facebook.com/farmaclinicangola"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da FarmaClinic"
                >
                  <GrFacebookOption className="cursor-pointer hover:text-blue-600" />
                </a>

                <a
                  href="https://www.linkedin.com/company/farmaclinic-angola/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da FarmaClinic"
                >
                <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
              </a>
             
             
            </div>
          </div>

          {/* Áreas de actuação */}
          <div>
            <h3 className="mb-4 text-base font-bold lg:text-lg">
              Áreas de actuação
            </h3>
            <ul className="space-y-3 text-base lg:text-lg">
              <li>
                <a href="#top">
                  Fisioterapia
                </a>
              </li>
              <li>
                <a
                  href="https://centromedico.farmaclinic.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Farmaclinic Centro Médico
                </a>
              </li>
              <li>
                <a
                  href="https://corporate.farmaclinic.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medicina do Trabalho
                </a>
              </li>
              <li>
                <a
                  href="https://farmacia.farmaclinic.ao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Farmácia
                </a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <nav aria-label="Menu da fisioterapia">
            <h3 className="mb-4 text-base font-bold lg:text-lg">
              Menu
            </h3>
            <ul className="space-y-3 text-base lg:text-lg">
              <li><a href="#top">Início</a></li>
              <li><a href="#indicacao">Indicação</a></li>
              <li><a href="#recuperacao">Recuperação</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#convenios">Convênios</a></li>
            </ul>
          </nav>

          {/* Contactos */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4">Contacto</h3>

            <ul className="space-y-4 text-base lg:text-lg">
              <li className="flex items-start gap-2">
                <FaLocationDot
                  className="p-1 bg-[#1b73a0] rounded-full shrink-0"
                  size={24}
                />
                <span>
                  Rua 11 de Novembro, S/N, <br />
                  Bairro 1.º de Viana, Luanda - Angola
                </span>
              </li>

              <li className="flex items-center gap-2 cursor-pointer">
                <FaWhatsapp
                  className="p-1 bg-[#1b73a0] rounded-full shrink-0"
                  size={24}
                />
                <a href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
                  +244 938 998 808
                </a>
              </li>

              <li className="flex items-center gap-2 cursor-pointer">
                <MdAlternateEmail
                  className="p-1 bg-[#0a68a7d8] rounded-full shrink-0"
                  size={24}
                />
                <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} target="_blank" rel="noopener noreferrer">
                  fisioterapia@farmaclinic.net
                </a>
              </li>
            </ul>

          </div>

         
         
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#1b73a0] text-center text-sm py-4 px-4">
        © {new Date().getFullYear()} ITSALL4U. Todos os direitos reservados.
      </div>
    </footer>
  );
}
