"use client";

import { Baby, Smartphone, AlertTriangle, Siren } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`is-visible-target ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.label}>HOW IT WORKS</div>
          <h2 className={styles.title}>
            Four Steps Between<br/>
            A Forgotten Moment<br/>
            And A Tragedy
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          {/* Step 1 */}
          <div className={`${styles.stepCard} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <span className={styles.stepNum}>1</span>
            <Baby size={40} className={styles.icon} />
            <h3 className={styles.stepTitle}>Weight Detected on Pressure Pad</h3>
            <p className={styles.stepBody}>
              The moment your child is placed in the car seat, the pressure-sensitive pad activates and begins monitoring.
            </p>
          </div>
          <div className={`${styles.arrow} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>→</div>

          {/* Step 2 */}
          <div className={`${styles.stepCard} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <span className={styles.stepNum}>2</span>
            <Smartphone size={40} className={styles.icon} />
            <h3 className={styles.stepTitle}>Phone Notification Triggers</h3>
            <p className={styles.stepBody}>
              When you exit the vehicle and move away, the system detects the separation and sends an immediate alert to your phone.
            </p>
          </div>
          <div className={`${styles.arrow} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>→</div>

          {/* Step 3 */}
          <div className={`${styles.stepCard} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>
            <span className={styles.stepNum}>3</span>
            <AlertTriangle size={40} className={styles.icon} />
            <h3 className={styles.stepTitle}>Second Warning if No Response</h3>
            <p className={styles.stepBody}>
              If you don't acknowledge the first alert within 2 minutes, the system escalates with louder alarms and repeated notifications.
            </p>
          </div>
          <div className={`${styles.arrow} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>→</div>

          {/* Step 4 */}
          <div className={`${styles.stepCard} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
            <span className={styles.stepNum}>4</span>
            <Siren size={40} className={styles.icon} />
            <h3 className={styles.stepTitle}>Police Notified with Live GPS</h3>
            <p className={styles.stepBody}>
              After 5 minutes with no response, emergency services are automatically contacted with your exact GPS coordinates.
            </p>
          </div>
        </div>

        <div className={`${styles.timeline} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.line}></div>
          <div className={styles.milestones}>
            <div className={styles.milestone}>
              <div className={styles.badge}>0–2 MIN</div>
              <div className={styles.milestoneText}>First alert sent to your phone</div>
            </div>
            <div className={styles.milestone}>
              <div className={styles.badge}>2–5 MIN</div>
              <div className={styles.milestoneText}>Escalated warnings with repeated alerts and alarms</div>
            </div>
            <div className={styles.milestone}>
              <div className={styles.badge}>5+ MIN</div>
              <div className={styles.milestoneText}>Emergency services contacted with GPS location</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
