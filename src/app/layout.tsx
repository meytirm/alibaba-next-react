import AppHeader from '@/components/layout/header/AppHeader';
import './globals.css';
import './icon-style.css';
import localFont from 'next/font/local';

const alibaba = localFont({
  src: [
    {
      path: './fonts/alibaba-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/alibaba-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/alibaba-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  fallback: ['sans-serif'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={alibaba.className}>
        <AppHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
