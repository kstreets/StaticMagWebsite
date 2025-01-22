import "./global.css"
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  display: 'swap',
  variable: '--font-public-sans',
  subsets: ['latin'],
  weight: ['300', '600', '800'] 
})

export const metadata = {
  title: "Static Mag",
  description: "Official website for Static Mag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
