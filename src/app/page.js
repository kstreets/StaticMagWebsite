import styles from './page.module.css'
import Image from "next/image"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {Header()}
      {HeroImage()}
    </div>
  ); 
}

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.navButton} href="">
          Features
        </Link>
        <Link className={styles.navButton} href="">
          News 
        </Link>
        <Link className={styles.navButton} href="">
          Media 
        </Link>
      </nav>
    </header>
  );
}

function HeroImage() {
  return (
    <Image
      className={styles.responsiveImage}
      src="/Starfield_Hero.webp"
      alt='hero image'
      width={1920}
      height={650}
    />
  );
}
