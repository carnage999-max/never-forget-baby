"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div 
        className={`${styles.questionRow} ${isOpen ? styles.openRow : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        <h3 className={styles.question}>{question}</h3>
        <ChevronDown 
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} 
          size={24} 
        />
      </div>
      <div 
        className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.answer}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="faq" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={`is-visible-target ${isInView ? 'is-visible' : ''}`}>
          <div className={styles.label}>FREQUENTLY ASKED QUESTIONS</div>
          <h2 className={styles.title}>Everything You Need To Know</h2>
        </div>

        <div className={styles.layout}>
          <div className={`${styles.column} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <h3 className={styles.catTitle}>General</h3>
            <FAQItem 
              question="How does NeverForgetBaby™ work?" 
              answer="NeverForgetBaby™ consists of a pressure-sensitive pad placed under your child's car seat, connected to a mobile app via Bluetooth and cellular networks. When the pad detects weight and you subsequently leave the vehicle, the system triggers an escalating alert sequence. If you don't respond within 5 minutes, emergency services are automatically dispatched to your GPS coordinates."
            />
            <FAQItem 
              question="Is NeverForget™ compatible with all car seats?" 
              answer="Yes. The pressure pad is designed to work under any car seat regardless of brand, size, or style. It features anti-slip material to stay securely in place."
            />
            <FAQItem 
              question="Do I need a smartphone to use NeverForget™?" 
              answer="A smartphone is required to receive alerts and configure the system. The app is available on iOS 13+ and Android 8+. Emergency dispatch functions will still operate via cellular even if your phone is unavailable, as the device connects independently."
            />

            <h3 className={styles.catTitle}>Technical</h3>
            <FAQItem 
              question="What if my phone battery dies?" 
              answer="The NeverForget™ device operates independently with its own 72-hour battery backup. Emergency services can still be dispatched automatically even if your phone is dead, as the device communicates directly via cellular networks."
            />
            <FAQItem 
              question="Does this work without cellular service?" 
              answer="The device uses Bluetooth, 5G, satellite connectivity, and Wi-Fi. In areas with limited cellular coverage, satellite backup ensures the system remains operational."
            />
            <FAQItem 
              question="How long does the battery last?" 
              answer="The built-in battery lasts up to 72 hours on a single charge. Low battery alerts are sent to your phone well in advance. Charging is via standard USB-C."
            />
            <FAQItem 
              question="Is the pad waterproof?" 
              answer="Yes. The pressure pad is water-resistant and designed to withstand spills, condensation, and normal vehicle use."
            />
          </div>

          <div className={`${styles.column} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <h3 className={styles.catTitle}>Safety & Alerts</h3>
            <FAQItem 
              question="Will it give false alerts?" 
              answer="The system is designed to minimize false positives. It requires both weight detection AND vehicle departure to trigger. Customizable sensitivity settings are available in the app."
            />
            <FAQItem 
              question="How loud are the alerts?" 
              answer="Phone alerts use your maximum ringtone volume and override silent mode. The pad itself emits an audible alarm that escalates at the 2-minute mark."
            />
            <FAQItem 
              question="What information is sent to emergency services?" 
              answer="Emergency services receive your real-time GPS coordinates, vehicle registration information (entered during setup), and a description of the situation. Two-way communication is enabled."
            />
            <FAQItem 
              question="Can I disable the emergency dispatch feature?" 
              answer="You can disable automatic dispatch in the app settings, though we strongly advise against it. The system will still alert you without auto-dispatching if you prefer."
            />

            <h3 className={styles.catTitle}>Subscription & Costs</h3>
            <FAQItem 
              question="Are there monthly fees?" 
              answer="No subscriptions. Your $299 purchase includes lifetime software updates. Cellular service is bundled — there are no additional carrier fees."
            />
            <FAQItem 
              question="What's covered in the warranty?" 
              answer="Hardware is covered for 1 year (2 years with the Bundle) against defects. Lifetime software updates are included for all purchases."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
