"use client";
import { X } from "lucide-react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (text: string) => void;
}

import { Great_Vibes, Montserrat } from "next/font/google";

export default function Modal({ isOpen, onClose, onSubmit }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-6 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative justify-center items-center flex flex-col">
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <span
            className={`${greatVibes.className} text-center text-7xl tracking-wider text-[#676eb2]`}
          >
            Sugestão de Presente
          </span>

          
        </div>

        <ul className="mt-10 text-center font-extrabold">
          <li
            className={`${montserrat.className} text-base md:text-lg text-[#4e5861]`}
          >
            Tênis 36
          </li>

          <li
            className={`${montserrat.className} text-base md:text-lg text-[#4e5861]`}
          >
            Maquiagem
          </li>

          <li
            className={`${montserrat.className} text-base md:text-lg text-[#4e5861]`}
          >
            Blusa M
          </li>

          <li
            className={`${montserrat.className} text-base md:text-lg text-[#4e5861]`}
          >
            Hidratante
          </li>
        </ul>

        <p
          className={`${montserrat.className} mt-10 text-xl md:text-lg tracking-wider text-[#4e5861]`}
        >
          Ou se preferir, minha chave pix é:
        </p>

        <div className="bg-[#676eb2] mt-2 w-50 flex justify-center items-center p-4 rounded-lg text-center">
          <p className={`${montserrat.className} text-white`}>
           CPF -  175.326.926-12
          </p>
        </div>

           <p
          className={`${montserrat.className} font-extrabold mt-2 md:text-md tracking-wider text-[#4e5861]`}
        >
          Sofia Esther Evangelista de Souza
        </p>
      </div>
    </div>
  );
}
