import Head from "next/head";
import Convite from "./components/Convite";

export default function Page() {
  return (
    <>
      <Head>
        <title>Convite Sofia Esther 15 anos</title>
        <meta name="description" content="Convite de 15 anos da Sofia Esther" />
        <meta property="og:title" content="Convite Sofia Esther" />
        <meta property="og:description" content="Você está convidado para a celebração!" />
        <meta property="og:image" content="/imagetop.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sofiaesther15anos.netlify.app/" />
      </Head>

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
    </>
  );
}
