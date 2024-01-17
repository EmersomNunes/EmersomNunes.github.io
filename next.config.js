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

module.exports = nextConfig
