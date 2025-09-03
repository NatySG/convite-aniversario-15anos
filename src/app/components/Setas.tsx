import { ChevronDown } from "lucide-react";

interface SetasProps {
  quantidade?: number;
  tamanho?: number;
  cor?: string;
  espaco?: number;
}

export default function Setas({
  quantidade = 4,
  tamanho = 32,
  cor = "#1A237E",
  espaco = 1,
}: SetasProps) {
  return (
    <div className="flex flex-col items-center mt-4" style={{ gap: espaco }}>
      {Array.from({ length: quantidade }).map((_, index) => (
        <ChevronDown
          key={index}
          size={tamanho}
          strokeWidth={3}   
          fill="none"        
          style={{ color: cor }}
        />
      ))}
    </div>
  );
}
