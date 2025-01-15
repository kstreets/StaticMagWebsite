import "./global.css"
import { Sono } from 'next/font/google';

const oxygen = Sono({
  display: 'swap',
  variable: '--font-oxygen',
  subsets: ['latin'],
  weight: ['400'] 
})

export const metadata = {
  title: "Static Mag",
  description: "Official website for Static Mag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxygen.variable}`}>
        {children}
      </body>
    </html>
  );
}
