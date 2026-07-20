"use client";

import { Armchair, Smartphone, MapPin, Siren } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Pricing.module.css';

export default function Pricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="buy" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`is-visible-target ${isInView ? 'is-visible' : ''} ${styles.headerAlign}`}>
          <div className={styles.label}>PLANNED OPTIONS</div>
          <h2 className={styles.title}>Choose Your Protection</h2>
        </div>

        <div className={styles.cardGrid}>
          {/* Card 1 */}
          <div className={`${styles.card} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.badge}>INDIVIDUAL</div>
            <div className={styles.price}>$299</div>
            <p className={styles.subtitle}>Planned NeverForgetBaby™ system for one vehicle</p>
            <ul className={styles.featuresList}>
              <li>✓ Pressure pad sensor</li>
              <li>✓ Mobile app access (iOS & Android)</li>
              <li>✓ Location-aware alerts</li>
              <li>✓ Emergency escalation settings</li>
              <li>✓ Core safety updates planned</li>
              <li>✓ Warranty details before launch</li>
              <li>✓ Free shipping</li>
            </ul>
            <button className={`${styles.btnBuy} btn`}>JOIN LAUNCH LIST</button>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.cardPopular} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.badgePopular}>MOST POPULAR</div>
            <div className={styles.badgePopTxt}>BUNDLE</div>
            <div className={styles.pricePop}>$499</div>
            <p className={styles.subtitlePop}>Planned protection for children and pets</p>
            <ul className={styles.featuresListPop}>
              <li><span className={styles.checkPop}>✓</span> Baby pressure pad sensor</li>
              <li><span className={styles.checkPop}>✓</span> Pet pressure pad sensor</li>
              <li><span className={styles.checkPop}>✓</span> Mobile app for both</li>
              <li><span className={styles.checkPop}>✓</span> Location-aware alerts for both</li>
              <li><span className={styles.checkPop}>✓</span> Emergency escalation settings</li>
              <li><span className={styles.checkPop}>✓</span> Core safety updates planned</li>
              <li><span className={styles.checkPop}>✓</span> Warranty details before launch</li>
              <li><span className={styles.checkPop}>✓</span> Free shipping</li>
            </ul>
            <button className={`${styles.btnBuy} btn`}>JOIN LAUNCH LIST</button>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.badge}>PET ONLY</div>
            <div className={styles.price}>$199</div>
            <p className={styles.subtitle}>Planned pet-specific system</p>
            <ul className={styles.featuresList}>
              <li>✓ Pet pressure pad sensor</li>
              <li>✓ Mobile app access</li>
              <li>✓ Location-aware alerts</li>
              <li>✓ Temperature monitoring</li>
              <li>✓ Emergency escalation settings</li>
              <li>✓ Core safety updates planned</li>
              <li>✓ Warranty details before launch</li>
              <li>✓ Free shipping</li>
            </ul>
            <button className={`${styles.btnBuy} btn`}>JOIN LAUNCH LIST</button>
          </div>
        </div>

        <div className={`${styles.includedStrip} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.incItem}>
            <Armchair className={styles.incIcon} size={32} />
            <span>Pressure Pad</span>
          </div>
          <div className={styles.incItem}>
            <Smartphone className={styles.incIcon} size={32} />
            <span>Mobile App</span>
          </div>
          <div className={styles.incItem}>
            <MapPin className={styles.incIcon} size={32} />
            <span>Location Alerts</span>
          </div>
          <div className={styles.incItem}>
            <Siren className={styles.incIcon} size={32} />
            <span>Escalation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
