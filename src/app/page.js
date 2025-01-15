import styles from './page.module.css'
import Image from 'next/image'
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
      <Image className={styles.headerImage} 
        src="/Starfield_Logo.png"
        alt='logo'
        width={300}
        height={206}
      />
      <nav className={styles.nav}>
        <Link className={styles.navButton} href="">
          FEATURES
        </Link>
        <Link className={styles.navButton} href="">
          NEWS 
        </Link>
        <Link className={styles.navButton} href="">
          MEDIA 
        </Link>
      </nav>
    </header>
  );
}

function HeroImage() {
  return (
    <div>
      <Image
        className={styles.responsiveImage}
        src="/Starfield_Hero.webp"
        alt='hero image'
        width={1920}
        height={650}
      />
      <div className={styles.imageOverlay}>
        <button>
          Wishlist Now   
        </button>
      </div>
    </div>
  );
}
