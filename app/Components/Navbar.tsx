"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Header() {
  const email = "fisioterapia@farmaclinic.net";
  const subject = "Solicitação de Proposta";
  const body = "";

  const proposalLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dhpa1juyr/image/upload/v1791555843/WhatsApp_Image_2026-10-09_at_15.19.40_se4jdb.png"
              alt="Logo"
              width={190}
              height={80}
              priority
              className="w-[135px] h-auto sm:w-[160px] lg:w-[190px]"
            />
          </Link>
        </div>

        {/* Mobile call to action */}
        <Link
          href={proposalLink}
          aria-label="Agendar avaliação por email"
          className="lg:hidden bg-[#1b73a0] hover:bg-[#155a80] text-white px-3 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md transition-colors"
        >
          Agendar avaliação
        </Link>

        {/* Desktop call to action and social links */}
        <div className="hidden lg:flex items-center gap-8 text-lg text-[#1b73a0]">
          <Link
            href={proposalLink}
            aria-label="Solicitar Proposta por Email"
            className="bg-[#eb9003] hover:bg-[#d47d00] text-white px-4 py-1 rounded-full font-medium shadow-lg"
          >
            Agendar Avaliação
          </Link>

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
    </header>
  );
}