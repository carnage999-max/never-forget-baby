import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.col}>
            <div className={styles.logoWrap}>
              <Image src="/icon.png" alt="NeverForgetBaby™ Icon" width={64} height={64} className={styles.logoIcon} />
              <span className={styles.logoText}>NEVERFORGETBABY™</span>
            </div>
            <p className={styles.tagline}>Saving Lives Through Technology</p>
          </div>

          {/* Column 2 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Product</h4>
            <div className={styles.links}>
              <Link href="#features">Features</Link>
              <Link href="#how-it-works">How It Works</Link>
              <Link href="#pet-pad">Pet Pad</Link>
              <Link href="#buy">Buy Now</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <div className={styles.links}>
              <Link href="#mission">Our Mission</Link>
              <Link href="#lives-lost">Lives Lost</Link>
              <Link href="#congressional">Congressional Action</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Support</h4>
            <div className={styles.links}>
              <Link href="#faq">FAQ</Link>
              <Link href="#contact">Contact</Link>
              <Link href="#warranty">Warranty</Link>
              <Link href="#privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>© 2026 NeverForgetBaby™. All rights reserved.</div>
          <div className={styles.madeWith}>Made with purpose. Every life matters.</div>
        </div>
      </div>
    </footer>
  );
}
