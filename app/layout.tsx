import './globals.css';
import type { Metadata } from 'next';
import { Inter, Archivo } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const archivo = Archivo({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'AKHI DETAILS | Premium Mobile Detailing',
  description: 'Luxury mobile car detailing in Las Vegas. Premium interior, exterior, and full detail packages delivered to your door.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${archivo.variable}`}>
        <div className="min-h-screen bg-[#040507] text-white">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
