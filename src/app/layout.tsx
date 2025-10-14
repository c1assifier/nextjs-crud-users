import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User CRUD App',
  description: 'Test assignment — CRUD app with Next.js, Ant Design, RHF, Zod',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
}
