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
import {FadeUp, Fade, FadeInOnView, ScaleOnHover} from './animations.js'

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
        <HeaderNavButton
          buttonText={"ABOUT"}
          link={"#about-section"}
        />
        <HeaderNavButton
          buttonText={"FEATURES"}
          link={"#features-section"}
        />
        <HeaderNavButton
          buttonText={"SOCIALS"}
          link={"#socials-section"}
        />
      </nav>
    </header>
  );
}

function HeaderNavButton({buttonText, link}) {
  const styles = headerStyles;
  return (
    <ScaleOnHover>
      <Link 
        className={styles.navButton} 
        href={link}
      >
        {buttonText}
      </Link>
    </ScaleOnHover>
  );
}

function HeroImage() {
  const styles = heroStyles
  return (
    <div className={styles.heroParent}>
      <div className={styles.heroContent}>
        <Fade>
          <Image
            className={styles.heroImage}
            src="/StaticMag_Hero.png"
            alt='hero image'
            width={1920}
            height={650}
          />
        </Fade>
        <div className={styles.heroOverlay}>
          <div className={styles.heroHeader}>
            <FadeUp delay={0.15}>
              <h1>
                AN FPS WITHOUT RELOADING
              </h1>
            </FadeUp>
          </div>
          <div className={styles.steamWishlistOverlay}>
            <FadeUp delay={0.3}>
              <motion.a 
                className={styles.wishListButton}
                whileHover={{ scale: 1.05 }}
                href={"https://store.steampowered.com/app/2275370/Static_Mag/"}
              >
                Wishlist Now   
              </motion.a>
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
      </div>
    </div>
  );
}

function About() {
  const styles = aboutStyles
  return (
    <div 
      id="about-section" 
      className={styles.mainDiv}
    >
      <div className={styles.grid}>
        <h3 className={styles.aboutHeader}>
          About
        </h3>
        <div className={styles.aboutBody}>
          Static Mag is a first-person shooter set in the near future within a dystopian city overrun by a ruthless drug cartel that oppresses its citizens.
          You play as an oppressed civilian who invents a magnetic device to steal weapons from cartel members and purge the skyscrapers of their control.
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
    <div 
      id="features-section" 
      className={styles.mainDiv}
    >
      <FeatureDiv
        imgSrc={"/Steal_Feature.png"}
        imgAlt={"steal feature"}
        header={"Magnet"}
        paragraph={"Steal weapons from your enemies and turn their firepower against them, using your ingenuity to outsmart and overpower those who stand in your way. Adapt to every situation, turning the tools of oppression into instruments of liberation as you fight to reclaim the city from the grip of tyranny."}
      />
      <FeatureDiv
        imgSrc={"/Dodge_Feature.png"}
        imgAlt={"dodge feature"}
        header={"Movement"}
        paragraph={"Slide beneath a hail of enemy bullets, wall-run across the gaps between towering buildings, scale walls with agility, or grab a zipline to crash through a window in a daring entrance. Use every trick in your arsenal to navigate the chaotic urban battlefield and outmaneuver your enemies in style."} 
      />
      <FeatureDiv
        imgSrc={"/Punch_Feature.png"}
        imgAlt={"punch feature"}
        header={"No Reloading"}
        paragraph={"You don’t carry extra ammo, so every shot must count. When your weapon runs empty, throw it at enemies to stun them. Sometimes, hand-to-hand combat is your best option, and your fists can be just as deadly as your gun."}
      />
    </div>
  );
}

function FeatureDiv({imgSrc, imgAlt, header, paragraph}) {
  const styles = featuresStyles
  return(
      <FadeInOnView className={styles.singleFeatureDiv}>
        <Image
          className={styles.img}
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
      </FadeInOnView>
  );
}

function Socials() {
  const styles = socialsStyles
  return (
    <div 
      id="socials-section"
      className={styles.mainDiv}
    >
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
      <motion.a 
        whileHover={{scale: 1.05}}
        className={styles.cellButton}
        href={link}
      >
        {buttonText}
      </motion.a>
    </div>
  );
}

function Footer() {
  const styles = footerStyles
  return (
    <div className={styles.mainDiv}/>
  );
}