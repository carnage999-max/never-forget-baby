"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './Contact.module.css';

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          {/* Left Column */}
          <div className={`${styles.leftCol} is-visible-target ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.label}>GET IN TOUCH</div>
            <h2 className={styles.title}>We're Here To Help.</h2>
            
            <p className={styles.body}>
              Our customer support team is here to help. Reach out with any questions, bulk order inquiries, or press requests.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Phone size={24} className={styles.icon} />
                <span>207 947-1999</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={24} className={styles.icon} />
                <span>info@neverforget.com</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={24} className={styles.icon} />
                <span>PO Box 52, Detroit, ME 04929</span>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className={`${styles.rightCol} is-visible-target delay-200 ${isInView ? 'is-visible' : ''}`}>
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Message sent!</h3>
                  <p>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required placeholder="John Doe" />
                  </div>
                  
                  <div className={styles.row}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" required placeholder="john@example.com" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Phone (Optional)</label>
                      <input type="tel" id="phone" placeholder="555-0199" />
                    </div>
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="inquiry">Inquiry Type</label>
                    <select id="inquiry" required>
                      <option value="">Select an option...</option>
                      <option value="general">General Question</option>
                      <option value="support">Order Support</option>
                      <option value="bulk">Bulk/Fleet Order</option>
                      <option value="press">Press Inquiry</option>
                      <option value="legislation">Legislation Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={5} required placeholder="How can we help?"></textarea>
                  </div>
                  
                  <button type="submit" className={`${styles.submitBtn} btn`}>SEND MESSAGE</button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
