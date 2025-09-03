"use client";

import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import Button from "./Button";
import {
  Allura,
  Montserrat,
  Great_Vibes,
  Playfair_Display,
} from "next/font/google";
import Setas from "./Setas";
import MiniMapa from "./MiniMapa";
import { useState } from "react";
import Modal from "./Modal";
import Head from "next/head";

const allura = Allura({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

interface ConviteProps {
  nome: string;
  idade: number;
  data: string;
  hora: string;
  local: string;
  endereco: string;
  fotoTopo: string;
  fotoRodape: string;
}

export default function Convite({
  nome,
  idade,
  data,
  hora,
  local,
  endereco,
  fotoTopo,
  fotoRodape,
}: ConviteProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalSubmit = (text: string) => {
    console.log("Mensagem enviada:", text);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F4F3EE] ">
      <div className="w-full max-w-2xl bg-[#F4F3EE] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={fotoTopo}
            alt="Imagem do topo"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0  bg-gradient-to-t from-[#f4f3ee] via-transparent to-transparent"></div>
        </div>

        <div className="p-8 mt-10 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl text-[#1A237E] flex flex-col items-center">
            <span
              className={`${playfair.className} uppercase text-8xl md:text-7xl leading-[1.1] font-thin`}
            >
              {nome}
            </span>
            <span
              className={`${allura.className} text-[#8DA0D6] text-[6rem] -mt-7 mb-6 font-light`}
            >
              faz {idade}
            </span>
          </h1>

          <p
            className={`${montserrat.className} text-xl md:text-2xl tracking-wider text-[#4e5861]`}
          >
            CONVIDO VOCÊ PARA A CELEBRAÇÃO DOS MEUS {idade} ANOS!
          </p>

          <div className="relative w-full mt-10">
            <Image
              src="/azul.png"
              alt="Foto para o grande dia"
              width={150}
              height={150}
              className="absolute right-[-40px] -top-5 rounded-2xl object-cover"
            />
          </div>

          <Setas quantidade={3} tamanho={48} cor="#8DA0D6" />

          <p
            className={`${greatVibes.className} m-7 text-3xl md:text-4xl tracking-wider text-[#4e5861]`}
          >
            a realizar-se em ...
          </p>

          <div className="mt-4 space-y-4">
            <div className="flex flex-col items-center justify-center text-[#4e5861]">
              <span className="text-[#8DA0D6] text-4xl">OUTUBRO</span>

              <div className="flex gap-5 text-4xl items-center justify-center">
                <span>SAB</span>|
                <span className="text-[#8DA0D6] text-9xl mb-8">11</span>|
                <span>21 h</span>
              </div>

              <span className="text-[#8DA0D6] text-4xl mb-8">2025</span>
            </div>


          <div className="relative w-full mt-2">
              <Image
                src="/flower.png"
                alt="Foto para o grande dia"
                width={100}
                height={100}
                className="absolute left-[-20px] -top-30 rounded-2xl object-cover"
              />
          </div>


            <div className="flex items-start justify-center text-[#4e5861] m-4">
              <div className="flex flex-col items-center">
                <span className={`${montserrat.className}`}>{local}</span>

                <span className={`${montserrat.className}`}>{endereco}</span>
              </div>
            </div>
          </div>
          

          <div className="mt-6 w-full max-w-md">
            <MiniMapa endereco={endereco} />
          </div>

          <div className="mt-15 mb-10 flex justify-center gap-6">
            <Button
              variant="primary"
              onClick={() => {
                const numero = "5531995745544";

                const mensagem =
                  "Olá! Quero confirmar minha presença no aniversário de 15 anos da Sofia Esther!";

                const url = `https://wa.me/${numero}?text=${encodeURIComponent(
                  mensagem
                )}`;

                window.open(url, "_blank");
              }}
            >
              CONFIRMAR PRESENÇA
            </Button>
          </div>
        </div>

         <div className="relative w-full mt-2">
              <Image
                src="/seta3.png"
                alt="Foto para o grande dia"
                width={40}
                height={40}
                className="absolute right-14 -top-31 rounded-2xl object-cover"
              />
        </div>

         <div className="relative w-full mt-10">
              <Image
                src="/florazul22.png"
                alt="Foto para o grande dia"
                width={300}
                height={300}
                className="absolute mt-8 -top-30 left-1/2 -translate-x-1/2 rounded-2xl object-cover"
              />
        </div>



        <div className="text-center mt-20">
          <span
            className={`${greatVibes.className} text-center text-5xl tracking-wider text-[#1A237E]`}
          >
            Para o grande dia ...
          </span>
        </div>

        <div className="text-left flex flex-col items-center pl-8 pr-8">
         
          <p
            className={`${montserrat.className} mt-7 text-sm md:text-base tracking-wider text-[#4e5861] flex items-center gap-1`}
          ><span className="text-[#3716bc]">🩵</span>
            Confirme sua presença até o dia 25 de setembro.
          </p>

          <p
            className={`${montserrat.className} mt-7 tracking-wider text-[#4e5861] self-center text-2xl mx-auto`}
          >
            CONVIDADO NÃO CONVIDA!
          </p>
        </div>


        <div className="text-center mt-20">
          <span
            className={`${greatVibes.className} text-center text-5xl tracking-wider text-[#1A237E]`}
          ></span>
        </div>

   <div className="relative w-full mt-10">
              <Image
                src="/setaBaixo.png"
                alt="Foto para o grande dia"
                width={30}
                height={30}
                className="absolute mt-12 -top-25 left-1/2 -translate-x-1/2 rounded-2xl object-cover"
              />
        </div>


        <div className="text-center mt-20">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            PARA ME PRESENTAR
          </Button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
        />

        <div className="relative w-full mt-10">
          <Image
            src={fotoRodape}
            alt="Imagem do rodapé"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-b-2xl"
          />

          <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-b from-[#f4f3ee] via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
