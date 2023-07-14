import TheHeader from '../components/TheHeader';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sergey Shytikov CV page',
  description: 'Sergey Shytikov Frontend Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
