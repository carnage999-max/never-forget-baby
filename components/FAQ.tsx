"use client";

import type { ReactNode } from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './FAQ.module.css';

type FAQEntry = {
  question: string;
  answer: ReactNode;
};

const generalFaqs: FAQEntry[] = [
  {
    question: "How does NeverForgetBaby™ work?",
    answer: "NeverForgetBaby™ is designed around a child device and mobile app that monitor whether a child may have been left in a vehicle. When the system detects a possible unsafe scenario, it sends escalating alerts to the connected caregiver device so the caregiver can respond quickly.",
  },
  {
    question: "Is NeverForgetBaby™ compatible with all car seats?",
    answer: "The child device is being designed for broad compatibility with common car seat styles. Final fit guidance, installation instructions, and any exceptions will be published before commercial release.",
  },
  {
    question: "Does it work with both Android and iPhone?",
    answer: "Yes. NeverForgetBaby™ is being developed to support both Android and iOS devices.",
  },
  {
    question: "Do I need a smartphone to use NeverForgetBaby™?",
    answer: "A smartphone is required to set up the system, manage authorized caregivers, receive app notifications, and review device status. Additional details about supported phones and operating system versions will be provided before launch.",
  },
];

const caregiverFaqs: FAQEntry[] = [
  {
    question: "Can multiple caregivers be registered?",
    answer: "Yes. The system is designed to support multiple authorized caregivers, allowing parents and other trusted family members or caregivers to use the same child device.",
  },
  {
    question: "How does the system know which caregiver is responsible?",
    answer: "The system is designed to identify the active caregiver based on the connected device or devices present with the child. The goal is to direct alerts to the appropriate caregiver while minimizing unnecessary notifications.",
  },
  {
    question: "What happens if more than one caregiver is nearby?",
    answer: "Multiple-caregiver scenarios are an important part of our testing. We are continuing to refine how the app handles shared drop-offs, handoffs, and family use so alerts remain clear in real-world situations.",
  },
  {
    question: "Is there a limit to the number of smartphones?",
    answer: "The system is intended to support multiple authorized devices for typical family use. Final supported limits may vary by software version and will be documented before launch.",
  },
  {
    question: "What if I get a new phone?",
    answer: "Replacing a phone is designed to be straightforward. After installing the app on the new device, you will be able to securely reconnect it to your NeverForgetBaby™ account without replacing the child device.",
  },
];

const alertsFaqs: FAQEntry[] = [
  {
    question: "How do emergency response features work?",
    answer: "Emergency response features are designed to escalate notifications if a child may have been unintentionally left in a vehicle. Depending on configuration and available services, this may include notifying designated emergency contacts and, where supported, initiating emergency response procedures.",
  },
  {
    question: "Will it contact 911 automatically?",
    answer: "Direct emergency dispatch capabilities may depend on supported services, location, user setup, and product version. We will publish clear details before launch so customers understand exactly what is included.",
  },
  {
    question: "Will it give false alerts?",
    answer: "The system is being designed to reduce unnecessary alerts by evaluating child-device status and caregiver-device presence together. We are continuing to test and refine these scenarios before broad commercial deployment.",
  },
  {
    question: "What information is shared during an alert?",
    answer: "Alert information may include device status, caregiver contact details, configured emergency contacts, and location data when enabled and supported. Exact sharing behavior will be controlled by product configuration and published privacy documentation.",
  },
];

const powerFaqs: FAQEntry[] = [
  {
    question: "How long does the battery last?",
    answer: "The system is designed for extended battery life, with final battery specifications to be published before commercial release. Actual battery performance can vary based on settings, usage, temperature, and connectivity conditions.",
  },
  {
    question: "Will I receive low-battery alerts?",
    answer: "Yes. The system is designed to monitor battery status and send advance notifications through the mobile app when charging or replacement is needed.",
  },
  {
    question: "Does this work without cellular service?",
    answer: "Connectivity options and alert behavior may vary by product version, phone configuration, and coverage in a given area. We will make supported connectivity requirements clear before launch.",
  },
  {
    question: "Is the child device waterproof?",
    answer: "The device is being designed for everyday vehicle use, including common spills and normal wear. Final water-resistance guidance will be included in the product documentation.",
  },
];

const purchaseFaqs: FAQEntry[] = [
  {
    question: "Is there a subscription?",
    answer: "Our goal is to provide the core safety functions without requiring an ongoing subscription. If optional premium features or enhanced services are offered in the future, they will be entirely optional.",
  },
  {
    question: "What are the warranty and return policies?",
    answer: "Warranty and return policies will be clearly published before commercial release so every family can understand coverage before purchasing.",
  },
  {
    question: "Will NeverForgetBaby™ be independently tested?",
    answer: "Safety and reliability are top priorities. As development progresses, we intend to conduct extensive testing and pursue appropriate third-party evaluations before broad commercial deployment.",
  },
  {
    question: "Will there be setup guides and demonstration videos?",
    answer: "Yes. We are developing user guides, setup instructions, frequently asked questions, and demonstration videos that cover everyday use, including multiple caregiver scenarios.",
  },
];

const FAQItem = ({ question, answer }: FAQEntry) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        type="button"
        className={`${styles.questionRow} ${isOpen ? styles.openRow : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className={styles.question}>{question}</h3>
        <ChevronDown 
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} 
          size={24} 
        />
      </button>
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
          <p className={styles.intro}>
            NeverForgetBaby™ is still moving toward commercial launch. These answers reflect the product direction today, and final specifications, service availability, and policies will be published before release.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={`${styles.column} is-visible-target delay-100 ${isInView ? 'is-visible' : ''}`}>
            <h3 className={styles.catTitle}>General</h3>
            {generalFaqs.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}

            <h3 className={styles.catTitle}>Caregivers & Devices</h3>
            {caregiverFaqs.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>

          <div className={`${styles.column} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <h3 className={styles.catTitle}>Safety & Alerts</h3>
            {alertsFaqs.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}

            <h3 className={styles.catTitle}>Battery & Connectivity</h3>
            {powerFaqs.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}

            <h3 className={styles.catTitle}>Launch, Policies & Testing</h3>
            {purchaseFaqs.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
