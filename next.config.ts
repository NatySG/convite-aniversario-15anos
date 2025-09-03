import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* outras config options aqui */
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"], // adiciona aqui o domínio da sua imagem externa
  },
};

export default nextConfig;
