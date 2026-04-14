"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Weight, Bell, MapPin, Shield } from 'lucide-react';
import styles from './Hero.module.css';
import HeroScene from './HeroScene';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Background layer */}
      <div className={styles.bgWrapper}>
        <HeroScene />
      </div>

      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={`${styles.badge} ${mounted ? styles.animateUp : ''}`} style={{ transitionDelay: '100ms' }}>
            ⚠ VEHICULAR HEATSTROKE KILLS 38+ CHILDREN EVERY YEAR
          </div>
          
          <h1 className={`${styles.headline} ${mounted ? styles.animateUp : ''}`} style={{ transitionDelay: '200ms' }}>
            NEVER<br/>FORGET<span className={styles.tm}>™</span>
          </h1>
          
          <p className={`${styles.subhead} ${mounted ? styles.animateUp : ''}`} style={{ transitionDelay: '300ms' }}>
            The only system that alerts you — and calls 911 — if your child is left in a hot car.
          </p>
          
          <div className={`${styles.ctaRow} ${mounted ? styles.animateUp : ''}`} style={{ transitionDelay: '400ms' }}>
            <Link href="#buy" className={`${styles.btnPrimary} btn`}>
              ORDER NOW — $299
            </Link>
            <Link href="#how-it-works" className={`${styles.btnSecondary} btn`}>
              LEARN HOW IT WORKS ↓
            </Link>
          </div>
          
          <div className={`${styles.trustBar} ${mounted ? styles.animateUp : ''}`} style={{ transitionDelay: '500ms' }}>
            <span className={styles.trustItem}><span className={styles.check}>✓</span> Automatic 911 Dispatch</span>
            <span className={styles.trustItem}><span className={styles.check}>✓</span> Real-Time GPS</span>
            <span className={styles.trustItem}><span className={styles.check}>✓</span> Works With Any Car Seat</span>
          </div>
        </div>

        <div className={`${styles.rightCol} ${mounted ? styles.animateUp : ''}`} style={{ transitionDelay: '600ms' }}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/images/logo.png" 
              alt="NeverForget™ Logo" 
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
