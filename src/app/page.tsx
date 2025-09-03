import Convite from "./components/Convite";

export default function Page() {
  return (
    <Convite
      nome="Sofia Esther"
      idade={15}
      data="11/11/2025"
      hora="21:00"
      local="Espaço Diamond"
      endereco="Av. Coletora Artur Trindade, 766 - Sra. de Fátima, Betim - MG, CEP: 32672-230"
      fotoTopo="/fotos/fotoTopo.jpg"
      fotoRodape="/fotos/fotoRodape.jpg"
    />
  );
}
