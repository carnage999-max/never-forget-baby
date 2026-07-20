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
          <h2 className={styles.title}>Everything You Need. Nothing Extra.</h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <Weight size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>Pressure Pad Sensor</h3>
            <p className={styles.cardBody}>Weight detection technology designed to recognize when a child or pet may be present in the seat.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Ultra-sensitive pressure detection</li>
              <li><span className={styles.check}>✓</span> Anti-slip material</li>
              <li><span className={styles.check}>✓</span> Works with any car seat</li>
              <li><span className={styles.check}>✓</span> Extended battery design</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <BellRing size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>Mobile App Alerts</h3>
            <p className={styles.cardBody}>Instant notifications to your smartphone when the system detects occupancy and you have left the vehicle.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Multi-level alert system</li>
              <li><span className={styles.check}>✓</span> Connected-device support</li>
              <li><span className={styles.check}>✓</span> Customizable notification settings</li>
              <li><span className={styles.check}>✓</span> iOS & Android</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>
            <MapPin size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>Location-Aware Alerts</h3>
            <p className={styles.cardBody}>Location information is designed to support alert escalation when enabled and available.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Location support where enabled</li>
              <li><span className={styles.check}>✓</span> Incident context for caregivers</li>
              <li><span className={styles.check}>✓</span> Emergency-contact sharing options</li>
              <li><span className={styles.check}>✓</span> Privacy controls in development</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
            <ShieldAlert size={48} className={styles.icon} />
            <h3 className={styles.cardTitle}>Emergency Escalation</h3>
            <p className={styles.cardBody}>If alerts are not acknowledged, the system is designed to escalate according to your configured safety settings.</p>
            <ul className={styles.list}>
              <li><span className={styles.check}>✓</span> Designated emergency contacts</li>
              <li><span className={styles.check}>✓</span> Escalating notification workflow</li>
              <li><span className={styles.check}>✓</span> Supported response procedures</li>
              <li><span className={styles.check}>✓</span> Configurable safety settings</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.specsStrip} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
        <div className={styles.specsContainer}>
          <div className={styles.specCol}>
            <h4 className={styles.specTitle}>Connectivity</h4>
            <ul>
              <li>Bluetooth pairing</li>
              <li>Mobile app alerts</li>
              <li>Location support</li>
              <li>Multi-device pairing</li>
              <li>Final specs before launch</li>
            </ul>
          </div>
          
          <div className={styles.specCol}>
            <h4 className={styles.specTitle}>Power</h4>
            <ul>
              <li>Extended battery design</li>
              <li>USB-C charging</li>
              <li>Low battery alerts</li>
              <li>Auto power management</li>
            </ul>
          </div>
          
          <div className={styles.specCol}>
            <h4 className={styles.specTitle}>Compatibility</h4>
            <ul>
              <li>All car seats</li>
              <li>iOS and Android planned</li>
              <li>Universal vehicle fit</li>
              <li>Multi-device pairing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
