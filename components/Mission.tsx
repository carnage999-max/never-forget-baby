"use client";

import { Shield, Microscope, Heart, Handshake, Megaphone, Scale } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Mission.module.css';

export default function Mission() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="mission" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`is-visible-target ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.label}>OUR MISSION</div>
          <h2 className={styles.title}>To Make Vehicular Heatstroke Deaths A Thing Of The Past.</h2>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column: Letter */}
          <div className={`${styles.letterCard} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.letterHeader}>
              <div className={`imagePlaceholder ${styles.founderPhoto}`}>[P]</div>
              <div className={styles.founderInfo}>
                <div className={styles.founderName}>Nathan Reardon</div>
                <div className={styles.founderTitle}>Founder & CEO</div>
              </div>
            </div>
            
            <hr className={styles.letterRule} />
            
            <div className={styles.letterBody}>
              <p>My name is Nathan Reardon, and I created NeverForgetBaby™ after hearing one too many tragic stories of children dying in hot cars.</p>
              
              <p>As a father myself, these stories haunted me. What struck me most was that these weren't always negligent parents — they were loving, caring individuals who simply had a momentary lapse in an otherwise normal day. A change in routine. A stressful morning. A sleeping child in the backseat.</p>
              
              <p>I realized that we live in an age where our phones can detect our face, our cars can drive themselves, and we can video call someone on the other side of the world — yet we had no reliable system to prevent these preventable deaths.</p>
              
              <p>That's when I assembled a team of engineers, child safety experts, and emergency response professionals to create NeverForgetBaby™. Our goal was simple: create a foolproof system that would alert parents before tragedy strikes, and automatically summon help if they can't respond.</p>
              
              <p>We spent three years developing and testing the technology, working with emergency services to ensure seamless integration, and tested with families in real-world conditions.</p>
              
              <p>NeverForgetBaby™ is more than a product — it's a mission to save lives.</p>
            </div>
            
            <div className={styles.signature}>
              — Nathan Reardon, Founder & CEO
            </div>
          </div>

          {/* Right Column: Values */}
          <div className={`${styles.valuesGrid} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.valueCard}>
              <Shield className={styles.valueIcon} size={32} />
              <h4 className={styles.valueTitle}>Safety First</h4>
              <p className={styles.valueDesc}>Every decision we make is guided by one question: Will this save lives?</p>
            </div>
            
            <div className={styles.valueCard}>
              <Microscope className={styles.valueIcon} size={32} />
              <h4 className={styles.valueTitle}>Innovation</h4>
              <p className={styles.valueDesc}>We leverage cutting-edge technology to solve age-old problems.</p>
            </div>
            
            <div className={styles.valueCard}>
              <Heart className={styles.valueIcon} size={32} />
              <h4 className={styles.valueTitle}>Compassion</h4>
              <p className={styles.valueDesc}>These tragedies happen to loving parents — and we are here to help.</p>
            </div>
            
            <div className={styles.valueCard}>
              <Handshake className={styles.valueIcon} size={32} />
              <h4 className={styles.valueTitle}>Partnership</h4>
              <p className={styles.valueDesc}>We work closely with emergency services, legislators, and safety advocates.</p>
            </div>
            
            <div className={styles.valueCard}>
              <Megaphone className={styles.valueIcon} size={32} />
              <h4 className={styles.valueTitle}>Awareness</h4>
              <p className={styles.valueDesc}>Education is just as important as technology in preventing deaths.</p>
            </div>
            
            <div className={styles.valueCard}>
              <Scale className={styles.valueIcon} size={32} />
              <h4 className={styles.valueTitle}>Advocacy</h4>
              <p className={styles.valueDesc}>We're committed to making this life-saving technology mandatory in all vehicles.</p>
            </div>
          </div>
        </div>

        <div className={`${styles.journeyStrip} is-visible-target delay-300 ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.journeyScroll}>
            <div className={styles.timelineNode}>
              <div className={styles.year}>2020</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.event}>Concept & Research</div>
            </div>
            
            <div className={styles.timelineNode}>
              <div className={styles.year}>2021</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.event}>Development</div>
            </div>
            
            <div className={styles.timelineNode}>
              <div className={styles.year}>2022</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.event}>Testing</div>
            </div>
            
            <div className={styles.timelineNode}>
              <div className={styles.year}>2023</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.event}>Launch</div>
            </div>
            
            <div className={styles.timelineNode}>
              <div className={styles.year}>2024</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.event}>Expansion (Pet Pad)</div>
            </div>
            
            <div className={`${styles.timelineNode} ${styles.goalNode}`}>
              <div className={styles.goalBadge}>GOAL</div>
              <div className={styles.year}>2027</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.event}>Mandatory in all new vehicles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
