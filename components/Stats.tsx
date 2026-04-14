"use client";

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Stats.module.css';

// Custom easing function
const easeOutQuart = (t: number) => 1 - (--t) * t * t * t;

const Counter = ({ target, duration = 1500, suffix = '', animate = false }: { target: number, duration?: number, suffix?: string, animate: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easedProgress = easeOutQuart(progress);
      setCount(Math.floor(easedProgress * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [animate, target, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

export default function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="lives-lost" className={styles.section} ref={ref}>
      <div className={styles.watermark}>1,050</div>

      <div className={styles.container}>
        <div className={`is-visible-target ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.label}>THE COST OF FORGETTING</div>
          <h2 className={styles.title}>
            Every Number Is<br/>
            A Child. A Family.<br/>
            A Life.
          </h2>
        </div>

        <div className={styles.statsGrid}>
          {/* Stat 1 */}
          <div className={`${styles.statCard} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.statNum} style={{ color: 'var(--danger)' }}>
              <Counter target={1050} suffix="+" animate={isInView} />
            </div>
            <div className={styles.statLabel}>Children lost to vehicular heatstroke since 1998</div>
          </div>

          {/* Stat 2 */}
          <div className={`${styles.statCard} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.statNum} style={{ color: 'var(--navy)' }}>
              <Counter target={54} suffix="%" animate={isInView} />
            </div>
            <div className={styles.statLabel}>Were forgotten by their caregiver — a momentary lapse</div>
          </div>

          {/* Stat 3 */}
          <div className={`${styles.statCard} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.statNum} style={{ color: 'var(--orange)' }}>
              <Counter target={10} suffix=" MIN" animate={isInView} />
            </div>
            <div className={styles.statLabel}>Time for a car to reach dangerous temperatures on a 90°F day</div>
          </div>

          {/* Stat 4 */}
          <div className={`${styles.statCard} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.statNum} style={{ color: 'var(--danger)' }}>
              <Counter target={104} suffix="°F" animate={isInView} />
            </div>
            <div className={styles.statLabel}>Body temperature at which heatstroke begins</div>
          </div>
        </div>

        <div className={styles.storiesGrid}>
          {/* Story 1 */}
          <div className={`${styles.storyCard} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <Heart size={24} className={styles.storyIcon} />
            <h3 className={styles.storyTitle}>The Loving Parent</h3>
            <p className={styles.storyBody}>
              A devoted mother of two, exhausted from working double shifts, thought she had dropped her 6-month-old at daycare and drove straight to work. These incidents happen to loving, attentive parents who simply have a momentary lapse in routine.
            </p>
          </div>

          {/* Story 2 */}
          <div className={`${styles.storyCard} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>
            <Heart size={24} className={styles.storyIcon} />
            <h3 className={styles.storyTitle}>The Changed Routine</h3>
            <p className={styles.storyBody}>
              A father who never did daycare dropoff had to cover for his ill wife. Unfamiliar with the routine, he drove to work as always, forgetting his daughter was in the back seat. Routine changes are a leading cause of these tragedies.
            </p>
          </div>

          {/* Story 3 */}
          <div className={`${styles.storyCard} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
            <Heart size={24} className={styles.storyIcon} />
            <h3 className={styles.storyTitle}>The Sleeping Child</h3>
            <p className={styles.storyBody}>
              A toddler fell asleep during a quick errand. The parent, not hearing a sound, forgot the child was in the car. By the time they returned, it was too late. Even the most experienced parents can make this fatal mistake.
            </p>
          </div>
        </div>

        <div className={`${styles.timelineBox} is-visible-target delay-400 ${isInView ? 'is-visible' : ''}`}>
          <h3 className={styles.timelineTitle}>How Quickly It Happens</h3>
          <div className={styles.timelineRow}>
            <div className={styles.timeCard}>
              <div className={styles.timeLabel}>10 MIN</div>
              <div className={styles.timeDesc}>On a 90°F day, a car's interior can reach 110°F</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeLabel}>20 MIN</div>
              <div className={styles.timeDesc}>Temperature can exceed 130°F</div>
            </div>
            <div className={styles.timeCard}>
              <div className={styles.timeLabel}>30 MIN</div>
              <div className={styles.timeDesc}>Fatal heatstroke can occur</div>
            </div>
          </div>
          <div className={styles.warningBanner}>
            Even "mild" days are dangerous. Heatstroke deaths have occurred on days as cool as 60°F. Children's bodies heat up 3–5× faster than adults.
          </div>
        </div>
      </div>
    </section>
  );
}
