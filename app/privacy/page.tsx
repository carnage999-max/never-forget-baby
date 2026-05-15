import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../components/Privacy.module.css';

export const metadata = {
  title: 'Privacy Policy | NeverForgetBaby™',
  description: 'Learn how NeverForgetBaby™ protects your data and privacy while providing safety-critical monitoring services.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.privacyPage}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
          
          <header className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <div className={styles.effectiveDate}>Effective Date: May 15, 2026</div>
          </header>

          <div className={styles.content}>
            <p>
              Never Forget Baby (&quot;Never Forget Baby,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides mobile and connected safety products designed to help caregivers monitor whether a child or pet may have been left in a vehicle. This Privacy Policy explains how we collect, use, disclose, and protect information when you use our website, mobile application, hardware device, and related services (collectively, the &quot;Services&quot;).
            </p>
            <p>By using the Services, you agree to this Privacy Policy.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect the following categories of information:</p>

            <h3>A. Information You Provide</h3>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Account credentials</li>
              <li>Emergency contact information</li>
              <li>Support messages and other communications you send to us</li>
            </ul>

            <h3>B. Device and App Information</h3>
            <ul>
              <li>Mobile device type</li>
              <li>Operating system</li>
              <li>App version</li>
              <li>Push notification token</li>
              <li>Diagnostic logs</li>
              <li>Crash data</li>
              <li>Authentication events</li>
              <li>Configuration and settings preferences</li>
            </ul>

            <h3>C. Sensor and Safety Event Information</h3>
            <ul>
              <li>Seat occupancy state</li>
              <li>Device battery status</li>
              <li>Temperature readings</li>
              <li>Bluetooth signal strength (RSSI)</li>
              <li>Connection and disconnection events</li>
              <li>Incident and alert timestamps</li>
              <li>Recovery and acknowledgement actions</li>
            </ul>

            <h3>D. Location Information</h3>
            <p>When enabled or required for emergency features, we may collect:</p>
            <ul>
              <li>Real-time location</li>
              <li>Last known location</li>
              <li>Location accuracy</li>
              <li>Timestamped GPS snapshots associated with safety incidents</li>
            </ul>

            <h3>E. Website and Analytics Data</h3>
            <p>If you use our website, we may collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device identifiers</li>
              <li>Referral pages</li>
              <li>Usage and interaction data</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Provide and operate the Services</li>
              <li>Monitor BLE proximity and safety conditions</li>
              <li>Trigger emergency alerts and escalation workflows</li>
              <li>Notify emergency contacts selected by the user</li>
              <li>Send push notifications, emails, and SMS alerts</li>
              <li>Maintain account security and authentication</li>
              <li>Troubleshoot failures and improve reliability</li>
              <li>Provide customer support</li>
              <li>Comply with legal obligations</li>
              <li>Prevent misuse, fraud, or abuse</li>
            </ul>

            <h2>3. Safety-Critical Use</h2>
            <p>
              Never Forget Baby is designed to support caregivers in responding to potential child or pet endangerment situations. Because the Services include safety-related functionality:
            </p>
            <ul>
              <li>certain alerts, event logs, and escalation data may be processed immediately;</li>
              <li>emergency features may continue operating in the background where supported by the device OS;</li>
              <li>network failure or disabled permissions may reduce system functionality.</li>
            </ul>
            <p>
              The Services are assistive tools and not a guarantee against injury, death, heat exposure, or any emergency outcome.
            </p>

            <h2>4. How Alerts and Escalation Work</h2>
            <p>When configured by the user, the Services may:</p>
            <ul>
              <li>detect occupancy and loss of proximity between phone and seat device;</li>
              <li>capture location associated with an incident;</li>
              <li>send push notifications to the user;</li>
              <li>send SMS or similar messages to emergency contacts;</li>
              <li>log acknowledgement, return, and resolution actions.</li>
            </ul>
            <p>We use only the information reasonably necessary to provide these features.</p>

            <h2>5. Sharing of Information</h2>
            <p>We may share information with:</p>

            <h3>A. Service Providers</h3>
            <p>We may use third-party vendors and infrastructure providers for:</p>
            <ul>
              <li>cloud hosting</li>
              <li>database storage</li>
              <li>authentication</li>
              <li>push notifications</li>
              <li>email delivery</li>
              <li>SMS delivery</li>
              <li>monitoring and diagnostics</li>
            </ul>

            <h3>B. Emergency Contacts</h3>
            <p>If you configure emergency contacts, we may share incident-related data with them, including:</p>
            <ul>
              <li>your name</li>
              <li>alert context</li>
              <li>approximate or precise incident location</li>
              <li>timing and escalation information</li>
            </ul>

            <h3>C. Legal and Safety Disclosures</h3>
            <p>We may disclose information if required to:</p>
            <ul>
              <li>comply with law, regulation, subpoena, or court order;</li>
              <li>protect the rights, property, or safety of users, children, pets, caregivers, or the public;</li>
              <li>investigate fraud, abuse, or violations of our terms.</li>
            </ul>

            <h3>D. Business Transfers</h3>
            <p>If we are involved in a merger, acquisition, financing, reorganization, or sale of assets, information may be transferred as part of that transaction.</p>

            <h2>6. SMS, Push, and Email Communications</h2>
            <p>We may send:</p>
            <ul>
              <li>account emails</li>
              <li>password reset emails</li>
              <li>operational alerts</li>
              <li>push notifications</li>
              <li>incident escalation messages</li>
              <li>SMS notifications to emergency contacts</li>
            </ul>
            <p>Message and data rates may apply based on your carrier or provider.</p>

            <h2>7. Data Retention</h2>
            <p>We retain information for as long as necessary to:</p>
            <ul>
              <li>provide the Services;</li>
              <li>maintain safety event history;</li>
              <li>comply with legal obligations;</li>
              <li>resolve disputes;</li>
              <li>enforce agreements.</li>
            </ul>
            <p>Retention periods may differ by data type. Safety event logs and contact data may be retained for operational, legal, and support purposes.</p>

            <h2>8. Your Choices</h2>
            <p>Depending on your location and applicable law, you may have the right to:</p>
            <ul>
              <li>access your personal information;</li>
              <li>update or correct your information;</li>
              <li>delete your account or certain data;</li>
              <li>request a copy of your data;</li>
              <li>manage notification permissions;</li>
              <li>disable location permissions, understanding that this may impair emergency features.</li>
            </ul>
            <p>You may also edit or remove emergency contacts from within the app.</p>

            <h2>9. Children’s Privacy</h2>
            <p>Our Services are intended for use by adults, parents, guardians, and caregivers. We do not knowingly provide standalone Services directly to children. Any information relating to a child is processed solely in connection with caregiver-directed safety monitoring.</p>

            <h2>10. Data Security</h2>
            <p>We use reasonable administrative, technical, and organizational safeguards designed to protect information. However, no system is completely secure, and we cannot guarantee absolute security.</p>

            <h2>11. International Data Transfers</h2>
            <p>Your information may be processed and stored in countries other than your own, including countries that may have different data protection laws.</p>

            <h2>12. Third-Party Services</h2>
            <p>The Services may rely on third-party platforms or providers such as mobile operating systems, cloud providers, push notification providers, SMS providers, analytics tools, and authentication providers. Their privacy practices are governed by their own policies.</p>

            <h2>13. Do Not Rely on the Service as Emergency Dispatch</h2>
            <p>Never Forget Baby is not a substitute for calling emergency services. Unless explicitly stated otherwise in a live, supported product feature, the Services do not guarantee direct contact with 911 or any emergency dispatcher.</p>

            <h2>14. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. If we make material changes, we will update the effective date and may provide additional notice through the Services or by other appropriate means.</p>

            <div className={styles.contactBox}>
              <h2>15. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, contact:</p>
              <p>
                <strong>Never Forget Baby</strong><br />
                Email: support@neverforgetbaby.com
              </p>
            </div>

            <p className={styles.footerNote}>
              Never Forget Baby™ is a safety-assistive tool. Always double-check your vehicle before exiting.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
