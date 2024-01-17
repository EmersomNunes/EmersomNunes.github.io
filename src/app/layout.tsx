import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CartProvider from '@/providers/CartProvider';
import { Toaster } from 'react-hot-toast';
import { FavoriteContextProvider } from '@/hooks/useFavorite';
import Provider from '@/providers/Provider';
import RatingProvider from '@/providers/RatingProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flipmark',
  description: 'Ecommerce App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Provider>
          <main>
            <Toaster toastOptions={{
              style: {
                background: "rgb(51 65 85)",
                color: '#fff'
              }
            }} />
            <CartProvider>
              <RatingProvider>
                <FavoriteContextProvider>
                  <main>{children}</main>
                </FavoriteContextProvider>
              </RatingProvider>
            </CartProvider>

            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <link
              href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Dancing+Script&family=Prompt:wght@800&display=swap" rel="stylesheet">
            </link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link
              href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@1,500&display=swap" rel="stylesheet">
            </link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <script
              type="text/javascript"
              src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js">
            </script>
          </main>
        </Provider>
      </body>
    </html>
  )
}
