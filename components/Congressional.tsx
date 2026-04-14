"use client";

import { Stethoscope, Shield, Users, Car } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Congressional.module.css';

export default function Congressional() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="congressional" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          <div className={`${styles.leftCol} is-visible-target ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.label}>CONGRESSIONAL ACTION</div>
            <h2 className={styles.title}>Help Us Make This<br/>Technology The Law.</h2>
            
            <p className={styles.body}>
              We are working with legislators to introduce federal legislation that would require all new passenger vehicles to be equipped with child detection and alert systems by 2027.
            </p>

            <ul className={styles.list}>
              <li><span className={styles.bullet}></span> Mandatory pressure-sensitive detection systems in rear passenger seats</li>
              <li><span className={styles.bullet}></span> Automatic alerts to caregivers via smartphone or vehicle systems</li>
              <li><span className={styles.bullet}></span> Integration with emergency services for automatic dispatch</li>
              <li><span className={styles.bullet}></span> GPS tracking capabilities for emergency response</li>
              <li><span className={styles.bullet}></span> Retrofit programs for older vehicles</li>
            </ul>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <div className={styles.statNum}>1,050+</div>
                <div className={styles.statDesc}>Children lost since 1998</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>100%</div>
                <div className={styles.statDesc}>Of these deaths were preventable</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>2027</div>
                <div className={styles.statDesc}>Our target year for legislation</div>
              </div>
            </div>

            <h3 className={styles.supportersTitle}>Who Supports This Initiative</h3>
            <div className={styles.supportersGrid}>
              <div className={styles.supporterBadge}>
                <Stethoscope size={24} className={styles.sIcon} />
                <div className={styles.sInfo}>
                  <strong>Medical Professionals</strong>
                  <span>Pediatricians and emergency medicine doctors</span>
                </div>
              </div>
              
              <div className={styles.supporterBadge}>
                <Shield size={24} className={styles.sIcon} />
                <div className={styles.sInfo}>
                  <strong>Law Enforcement</strong>
                  <span>Police departments and first responders</span>
                </div>
              </div>
              
              <div className={styles.supporterBadge}>
                <Users size={24} className={styles.sIcon} />
                <div className={styles.sInfo}>
                  <strong>Parent Groups</strong>
                  <span>National parent safety organizations</span>
                </div>
              </div>
              
              <div className={styles.supporterBadge}>
                <Car size={24} className={styles.sIcon} />
                <div className={styles.sInfo}>
                  <strong>Auto Industry</strong>
                  <span>Forward-thinking manufacturers</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.rightCol} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.proposalCard}>
              <div className={styles.cardHeader}></div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>PROPOSED FEDERAL LEGISLATION</h3>
                <div className={styles.cardSub}>Child Detection System Mandate Act — Target: 2027</div>
                <button className={`${styles.supportBtn} btn`}>SUPPORT THIS INITIATIVE</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
