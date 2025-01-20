"use client"

import headerStyles   from './header.module.css'
import heroStyles     from './hero.module.css'
import aboutStyles    from './about.module.css'
import featuresStyles from './features.module.css'
import socialsStyles  from './socials.module.css'
import footerStyles   from './footer.module.css'

import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {FadeUp, Fade} from './animations.js'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroImage/>
      <About/>
      <Features/>
      <Socials/>
      <Footer/>
    </div>
  ); 
}

function Header() {
  const styles = headerStyles
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
  const styles = heroStyles
  return (
    <div className={styles.heroParent}>
      <Fade>
        <Image
          className={styles.heroImage}
          src="/StaticMag_Hero.png"
          alt='hero image'
          width={1920}
          height={650}
        />
      </Fade>
      <div className={styles.heroHeader}>
        <FadeUp delay={0.15}>
          <h1>
            AN FPS WITHOUT RELOADING
          </h1>
        </FadeUp>
      </div>
      <div className={styles.steamWishlistOverlay}>
        <FadeUp delay={0.3}>
          <motion.button 
            className={styles.wishListButton}
            whileHover={{ scale: 1.05 }}
          >
            Wishlist Now   
          </motion.button>
        </FadeUp>
        <FadeUp delay={0.6}>
          <Image
            className={styles.steamLogo}
            src="/Steam_Logo.png"
            alt='steam logo'
            width={210}
            height={66}
          />
        </FadeUp>
      </div>
    </div>
  );
}

function About() {
  const styles = aboutStyles
  return (
    <div className={styles.mainDiv}>
      <div className={styles.grid}>
        <h6 className={styles.aboutHeader}>
          About
        </h6>
        <div className={styles.aboutBody}>
          Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery.
        </div>
        <div className={styles.aboutDev}>
          <Image
            className={styles.aboutImg}
            src="/KR_Logo.jpg"
            alt='KR logo'
            width={120}
            height={120}
          />
          <h6>
            Developed by Kyle Rhoads
          </h6>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const styles = featuresStyles
  return (
    <div className={styles.mainDiv}>
      <FeatureDiv
        imgSrc={"/Steal_Feature.png"}
        imgAlt={"steal feature"}
        header={"Explore Space"}
        paragraph={"Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery."}
      />
      <FeatureDiv
        imgSrc={"/Dodge_Feature.png"}
        imgAlt={"steal feature"}
        header={"Explore Space"}
        paragraph={"Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery."}
      />
      <FeatureDiv
        imgSrc={"/Punch_Feature.png"}
        imgAlt={"steal feature"}
        header={"Explore Space"}
        paragraph={"Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery."}
      />
    </div>
  );
}

function FeatureDiv({imgSrc, imgAlt, header, paragraph}) {
  const styles = featuresStyles
  return(
    <div className={styles.singleFeatureDiv}>
      <Image
          src={imgSrc}
          alt={imgAlt}
          width={1920}
          height={650}
      />
      <div className={styles.textDiv}>
        <h1 className={styles.header}>
          {header}
        </h1>
        <p className={styles.paragraph}>
          {paragraph}
        </p>
      </div>
    </div>
  );
}

function Socials() {
  const styles = socialsStyles
  return (
    <div className={styles.mainDiv}>
      <div className={styles.grid}>
        <SocialCell
          imgSrc={"/Youtube_Social.png"}
          imgAlt={"Youtube Logo"}
          buttonText={"Watch the Devlogs"}
          link={"https://www.youtube.com/@KyleRhoadsDev"}
        />
        <div className={styles.divider}/>
        <SocialCell
          imgSrc={"/Discord_Social.png"}
          imgAlt={"Discord Logo"}
          buttonText={"Join the Community"}
          link={"https://discord.com/invite/hN8JDRM5bD"}
        />
        <div className={styles.divider}/>
        <SocialCell
          imgSrc={"/Tiktok_Social.png"}
          imgAlt={"TikTok Logo"}
          buttonText={"Catch the Highlights"}
          link={"https://www.tiktok.com/@kylerhoadsdev"}
        />
      </div>
    </div>
  );
}

function SocialCell({imgSrc, imgAlt, buttonText, link}) {
  const styles = socialsStyles
  return (
    <div className={styles.cell}>
      <Image
        className={styles.cellImg}
        src={imgSrc}
        alt={imgAlt}
        width={75}
        height={75}
      />
      <a 
        className={styles.cellButton}
        href={link}
      >
        {buttonText}
      </a>
    </div>
  );
}

function Footer() {
  const styles = footerStyles
  return (
    <div className={styles.mainDiv}>

    </div>
  );
}