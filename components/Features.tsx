"use client";

import { Weight, BellRing, MapPin, ShieldAlert } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Features.module.css';

export default function Features() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="features" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`is-visible-target ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.label}>THE COMPLETE SYSTEM</div>
          <h2 className={styles.title}>Everything You Need. Nothing You Don't.</h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <Weight size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>Pressure Pad Sensor</h3>
            <p className={styles.cardBody}>Advanced weight detection technology that automatically activates when a child or pet is placed in the seat.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Ultra-sensitive pressure detection</li>
              <li><span className={styles.check}>✓</span> Anti-slip material</li>
              <li><span className={styles.check}>✓</span> Works with any car seat</li>
              <li><span className={styles.check}>✓</span> 72-hour battery backup included</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <BellRing size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>Mobile App Alerts</h3>
            <p className={styles.cardBody}>Instant notifications to your smartphone when the system detects occupancy and you've left the vehicle.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Multi-level alert system</li>
              <li><span className={styles.check}>✓</span> Bluetooth & cellular connectivity</li>
              <li><span className={styles.check}>✓</span> Customizable notification settings</li>
              <li><span className={styles.check}>✓</span> iOS & Android</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>
            <MapPin size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>GPS Tracking</h3>
            <p className={styles.cardBody}>Real-time location tracking ensures emergency services can find your vehicle immediately.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Precise GPS coordinates</li>
              <li><span className={styles.check}>✓</span> Real-time location updates</li>
              <li><span className={styles.check}>✓</span> Automatic sharing with authorities</li>
              <li><span className={styles.check}>✓</span> Full location history</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
            <ShieldAlert size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>Emergency Auto-Dispatch</h3>
            <p className={styles.cardBody}>If you don't respond to alerts, the system automatically contacts emergency services with your vehicle's location.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Automatic 911 notification</li>
              <li><span className={styles.check}>✓</span> GPS coordinates transmitted</li>
              <li><span className={styles.check}>✓</span> Two-way communication</li>
              <li><span className={styles.check}>✓</span> Police priority dispatch</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.specsStrip} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
        <div className={styles.specsContainer}>
          <div className={styles.specCol}>
            <h4 className={styles.specTitle}>Connectivity</h4>
            <ul>
              <li>Bluetooth 5.0</li>
              <li>Cellular Network</li>
              <li>5G + SAT</li>
              <li>GPS + GLONASS</li>
              <li>Wi-Fi 802.11 b/g/n</li>
            </ul>
          </div>
          
          <div className={styles.specCol}>
            <h4 className={styles.specTitle}>Power</h4>
            <ul>
              <li>72-hour battery backup</li>
              <li>USB-C charging</li>
              <li>Low battery alerts</li>
              <li>Auto power management</li>
            </ul>
          </div>
          
          <div className={styles.specCol}>
            <h4 className={styles.specTitle}>Compatibility</h4>
            <ul>
              <li>All car seats</li>
              <li>iOS 13+ / Android 8+</li>
              <li>Universal vehicle fit</li>
              <li>Multi-device pairing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
