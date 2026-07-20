"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import HeroScene from './HeroScene';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background layer */}
      <div className={styles.bgWrapper}>
        <HeroScene />
      </div>

      <div className={styles.container}>
        <div className={styles.leftCol}>

          
          <h1 className={`${styles.headline} ${styles.animateUp}`} style={{ transitionDelay: '200ms' }}>
            NEVER<br/>FORGET<span className={styles.tm}>™</span>
          </h1>
          
          <p className={`${styles.subhead} ${styles.animateUp}`} style={{ transitionDelay: '300ms' }}>
            A connected safety system designed to alert caregivers if a child may have been left behind in a vehicle.
          </p>
          
          <div className={`${styles.ctaRow} ${styles.animateUp}`} style={{ transitionDelay: '400ms' }}>
            <Link href="#buy" className={`${styles.btnPrimary} btn`}>
              JOIN LAUNCH LIST
            </Link>
            <Link href="#how-it-works" className={`${styles.btnSecondary} btn`}>
              LEARN HOW IT WORKS ↓
            </Link>
          </div>
          
          <div className={`${styles.trustBar} ${styles.animateUp}`} style={{ transitionDelay: '500ms' }}>
            <span className={styles.trustItem}><span className={styles.check}>✓</span> Emergency Escalation</span>
            <span className={styles.trustItem}><span className={styles.check}>✓</span> Location-Aware Alerts</span>
            <span className={styles.trustItem}><span className={styles.check}>✓</span> Works With Any Car Seat</span>
          </div>
        </div>

        <div className={`${styles.rightCol} ${styles.animateUp}`} style={{ transitionDelay: '600ms' }}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/images/logo.png" 
              alt="NeverForgetBaby™ Logo" 
              width={600} 
              height={600} 
              style={{ objectFit: 'contain', width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))', borderRadius: '24px' }}  
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
