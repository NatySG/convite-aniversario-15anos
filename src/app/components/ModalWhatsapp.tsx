import { Great_Vibes, Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (nome: string, quantidade: number) => void;
}

export default function ModalWhatsapp({
  isOpen,
  onClose,
  onSubmit,
}: ModalProps) {
  const [nome, setNome] = useState("");

  const [quantidade, setQuantidade] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-6 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative justify-center items-center flex flex-col">
        <span
          className={`${greatVibes.className} text-center text-7xl tracking-wider text-[#676eb2]`}
        >
          Confirme sua presença
        </span>

        <div className="flex flex-col gap-4 mt-10">
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={`${montserrat.className} border text-[14px] text-gray-800 p-2 rounded-full w-full`}
          />

          <input
            type="number"
            placeholder="Quantidade de pessoas"
            value={quantidade}
            min={1}
            onChange={(e) => setQuantidade(e.target.value)}
            className={`${montserrat.className} border text-[14px] text-gray-800 p-2 rounded-full w-full`}
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              className={`${montserrat.className} px-4 py-2 bg-gray-300 text-black rounded-lg`}
              onClick={onClose}
            >
              Cancelar
            </button>

            <button
              className={`${montserrat.className} px-4 py-2 bg-[#676eb2] text-white rounded-lg cursor-pointer`}
              onClick={() => {
                onSubmit(nome, Number(quantidade));

                onClose();
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
