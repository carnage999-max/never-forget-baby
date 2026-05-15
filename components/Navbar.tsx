"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} data-scrolled={scrolled}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoWrap}>
            <Image src="/icon.png" alt="NeverForgetBaby™ Icon" width={64} height={64} className={styles.logoIcon} />
            <span className={styles.logoText}>NEVERFORGETBABY™</span>
          </Link>
        </div>

        <button 
          className={styles.hamburger} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <div className={`${styles.linksContainer} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link href="/#how-it-works" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Product</Link>
          <Link href="/#features" className={styles.link} onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
          <Link href="/#pet-pad" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Pet Pad</Link>
          <Link href="/#mission" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Our Mission</Link>
          <Link href="/#faq" className={styles.link} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link href="/#contact" className={styles.link} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link href="/#buy" className={`${styles.btnBuy} btn`} onClick={() => setMobileMenuOpen(false)}>
            Buy Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
