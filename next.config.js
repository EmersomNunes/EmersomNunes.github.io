/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/products/cart',
            destination: '/cart', // ou qualquer caminho relativo à sua estrutura de pastas
          },
        ];
      },
}

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/guia-frontend" : "";

module.exports = {
  nextConfig,
  basePath: prefix,
  assetPrefix: prefix,

}
