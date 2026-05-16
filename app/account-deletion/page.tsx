"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../components/AccountDeletion.module.css';

export default function AccountDeletionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className={styles.deletionPage}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>

          <header className={styles.header}>
            <h1 className={styles.title}>Account & Data Deletion</h1>
            <p className={styles.subtitle}>
              We're sorry to see you go. Use this form to request the permanent deletion of your NeverForgetBaby™ account and all associated data.
            </p>
          </header>

          <div className={styles.layout}>
            {/* Info Column */}
            <div className={styles.infoCol}>
              <h2>What happens when you delete your account?</h2>
              <p>
                Once your request is processed, the following actions will be taken:
              </p>
              <ul>
                <li>Your profile and login credentials will be permanently removed.</li>
                <li>All emergency contact information will be deleted.</li>
                <li>History of safety events and alerts will be anonymized or purged.</li>
                <li>Your subscription (if active) will be cancelled immediately.</li>
                <li>Any connected hardware devices will be unlinked.</li>
              </ul>

              <div className={styles.warningBox}>
                <h4>⚠️ Important Notice</h4>
                <p>
                  This action is permanent and cannot be undone. Once your data is deleted, we cannot recover your alert history or account settings. Any safety hardware will need to be re-configured if you choose to return.
                </p>
              </div>

              <p>
                Requests are typically processed within 48 hours. You will receive a final confirmation email once the deletion is complete.
              </p>
            </div>

            {/* Form Column */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                {submitted ? (
                  <div className={styles.successMsg}>
                    <div className={styles.successIcon}>✓</div>
                    <h3 className={styles.successTitle}>Request Received</h3>
                    <p>Your deletion request has been submitted. We will process it within 48 hours and send a confirmation to your email address.</p>
                    <Link href="/" className="btn" style={{ 
                      marginTop: '24px', 
                      display: 'inline-block',
                      padding: '12px 24px',
                      background: 'var(--navy)',
                      color: 'white',
                      border: 'var(--border)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      RETURN HOME
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Account Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="your-email@example.com" 
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="reason">Reason for leaving (Optional)</label>
                      <select id="reason">
                        <option value="">Select a reason...</option>
                        <option value="no-longer-needed">No longer need the service</option>
                        <option value="privacy">Privacy concerns</option>
                        <option value="too-expensive">Pricing/Cost</option>
                        <option value="difficulty">Technical difficulties</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="message">Additional Comments</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        placeholder="Anything else you'd like us to know?"
                      ></textarea>
                    </div>

                    <div className={styles.checkboxGroup}>
                      <input type="checkbox" id="confirm" required />
                      <label htmlFor="confirm">
                        I understand that this action is permanent and all my data, including safety logs and emergency contacts, will be permanently deleted.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className={`${styles.submitBtn} btn`}
                      disabled={loading}
                    >
                      {loading ? 'PROCESSING...' : 'REQUEST DELETION'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
