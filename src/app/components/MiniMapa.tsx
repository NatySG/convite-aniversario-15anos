interface MiniMapaProps {
  endereco: string;
  altura?: string;
  largura?: string;
}

export default function MiniMapa({
  endereco,
  altura = "200px",
  largura = "100%",
}: MiniMapaProps) {
  const enderecoEncoded = encodeURIComponent(endereco);
  const embedSrc = `https://www.google.com/maps?q=${enderecoEncoded}&output=embed`;

  // 🔗 Seu link fixo do Google Maps
  const linkSrc = "https://maps.app.goo.gl/bMoYb2yKdo45pGpKA";

  return (
    <a href={linkSrc} target="_blank" rel="noopener noreferrer">
      <div
        className="rounded-lg overflow-hidden shadow-md cursor-pointer"
        style={{ width: largura, height: altura }}
      >
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={embedSrc}
          className="border-0 pointer-events-none"
        ></iframe>
      </div>
    </a>
  );
}
