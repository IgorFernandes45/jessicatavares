import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Premium Elegante',
  description: 'Landing page personalizável em Next.js.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
