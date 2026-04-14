"use client";

import { Dog, Layers, Thermometer, Zap, Battery, Bell } from 'lucide-react';
import Image from 'next/image';
import { useInView } from '../hooks/useInView';
import styles from './PetPad.module.css';

export default function PetPad() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="pet-pad" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          <div className={`${styles.leftCol} is-visible-target ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.badge}>PET PAD</div>
            <h2 className={styles.title}>
              Not Just Kids.<br/>
              Your Pet Too.
            </h2>
            <p className={styles.body}>
              On a 90° day, the temperature inside a vehicle can reach 110°F in just 10 minutes. A pet can suffer heatstroke and die in as little as 15 minutes. Even with windows cracked, the temperature inside a car can become deadly for your furry family member.
            </p>

            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <Dog className={styles.featureIcon} size={28} />
                <div className={styles.featureTextWrap}>
                  <h4 className={styles.featureTitle}>Universal Pet Size</h4>
                  <p className={styles.featureDesc}>Works with dogs and cats of all sizes, from small breeds to large</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <Layers className={styles.featureIcon} size={28} />
                <div className={styles.featureTextWrap}>
                  <h4 className={styles.featureTitle}>Anti-Slip Material</h4>
                  <p className={styles.featureDesc}>Stays securely in place even with active pets moving around</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <Thermometer className={styles.featureIcon} size={28} />
                <div className={styles.featureTextWrap}>
                  <h4 className={styles.featureTitle}>Temperature Monitoring</h4>
                  <p className={styles.featureDesc}>Tracks vehicle temperature and alerts you before danger levels</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <Zap className={styles.featureIcon} size={28} />
                <div className={styles.featureTextWrap}>
                  <h4 className={styles.featureTitle}>Easy Installation</h4>
                  <p className={styles.featureDesc}>Place in back seat, cargo area, or crate — works anywhere</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <Battery className={styles.featureIcon} size={28} />
                <div className={styles.featureTextWrap}>
                  <h4 className={styles.featureTitle}>Battery Powered</h4>
                  <p className={styles.featureDesc}>Long-lasting battery with low-power alerts via the app</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <Bell className={styles.featureIcon} size={28} />
                <div className={styles.featureTextWrap}>
                  <h4 className={styles.featureTitle}>Same Alert System</h4>
                  <p className={styles.featureDesc}>Uses the same proven notification and emergency dispatch system</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.rightCol} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.imageWrap}>
              <Image 
                src="/images/pet-hero.jpeg" 
                alt="NeverForget Baby and Pet" 
                width={800} 
                height={533}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.stepsStrip} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <div className={styles.stepWrap}>
              <h4 className={styles.stepTitle}>Place & Connect</h4>
              <p className={styles.stepDesc}>Place the Pet Pad where your pet normally sits. Connect via Bluetooth to the NeverForget™ app.</p>
            </div>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <div className={styles.stepWrap}>
              <h4 className={styles.stepTitle}>Automatic Detection</h4>
              <p className={styles.stepDesc}>The pad detects when your pet is present and continuously monitors their safety status.</p>
            </div>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <div className={styles.stepWrap}>
              <h4 className={styles.stepTitle}>Instant Alerts</h4>
              <p className={styles.stepDesc}>Receive immediate alerts with the same escalating system as the baby version if you leave with your pet inside.</p>
            </div>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>4</span>
            <div className={styles.stepWrap}>
              <h4 className={styles.stepTitle}>Emergency Response</h4>
              <p className={styles.stepDesc}>If you don't respond, emergency services are contacted automatically with your vehicle's GPS location.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
