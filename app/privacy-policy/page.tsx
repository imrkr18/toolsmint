import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your data.`,
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '24px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last updated: March 1, 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-primary)', lineHeight: '1.7' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>1. Introduction</h2>
          <p>
            Welcome to {SITE_CONFIG.name} ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </p>
          <p style={{ marginTop: '12px' }}>
            When you visit our website {SITE_CONFIG.url}, you trust us with your privacy. We take your privacy very seriously. In this notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>2. Information We Collect</h2>
          <p><strong>Personal Information Provided by You:</strong> We do not ask you to register or provide personal information to use our standard suite of tools. Our tools are designed to operate locally in your browser whenever possible, minimizing the data sent to our servers.</p>
          <p style={{ marginTop: '12px' }}><strong>Automatically Collected Information:</strong> We automatically collect certain information when you visit, use, or navigate the Site. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Site, and other technical information. This information is primarily needed to maintain the security and operation of our Site, and for our internal analytics and reporting purposes.</p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>3. Cookies and Web Beacons</h2>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>Third-Party Advertisers:</strong> We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our Website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
            <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Ads Settings</a>.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>4. Analytics</h2>
          <p>
            We use analytics platforms (such as Vercel Analytics) to measure traffic and usage trends for the Service. These tools collect information sent by your device or our Service, including the web pages you visit, add-ons, and other information that assists us in improving the Service. This analytics data is aggregated and does not personally identify any individual user.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>5. How We Use Your Information</h2>
          <p>We use the information we collect or receive:</p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
            <li>To deliver and facilitate the delivery of services to the user.</li>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>For data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Website, products, marketing, and your experience.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>6. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Site is at your own risk. You should only access the services within a secure environment.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>7. Policy Updates</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>
        </section>
      </div>
    </div>
  );
}
