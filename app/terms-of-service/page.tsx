import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: `Terms of Service and Conditions for using ${SITE_CONFIG.name}.`,
};

export default function TermsOfService() {
  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '24px' }}>Terms of Service</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Last updated: March 1, 2026</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-primary)', lineHeight: '1.7' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>1. Agreement to Terms</h2>
          <p>
            By accessing and using {SITE_CONFIG.name} (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>2. Description of Service</h2>
          <p>
            {SITE_CONFIG.name} provides users with access to a rich collection of resources, including various online tools such as text manipulation, calculators, data converters, and generators (the "Service"). You understand and agree that the Service is provided "AS-IS" and that {SITE_CONFIG.name} assumes no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>3. User Conduct</h2>
          <p>
            As a condition of use, you promise not to use the Service for any purpose that is unlawful or prohibited by these Terms, or any other purpose not reasonably intended by {SITE_CONFIG.name}. By way of example, and not as a limitation, you agree not to use the Service:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
            <li>To abuse, harass, threaten, impersonate, or intimidate any person.</li>
            <li>To post or transmit, or cause to be posted or transmitted, any content that is libelous, defamatory, obscene, pornographic, abusive, offensive, profane, or that infringes any copyright or other right of any person.</li>
            <li>To communicate with {SITE_CONFIG.name} representatives or other users in an abusive or offensive manner.</li>
            <li>For any purpose (including posting or viewing content) that is not permitted under the laws of the jurisdiction where you use the Service.</li>
            <li>To use any robot, spider, scraper, or other automated means to access the Service for any purpose without our express written permission.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>4. Intellectual Property</h2>
          <p>
            The Site and its original content, features, and functionality are owned by {SITE_CONFIG.name} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>5. Advertisements and Promotions</h2>
          <p>
            {SITE_CONFIG.name} runs advertisements and promotions from third parties (such as Google AdSense) on the Site. Your business dealings or correspondence with, or participation in promotions of, advertisers other than {SITE_CONFIG.name}, and any terms, conditions, warranties, or representations associated with such dealings, are solely between you and such third party. {SITE_CONFIG.name} is not responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of third-party advertisers on the Site.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>6. Disclaimer of Warranties</h2>
          <p>
            Your use of the site is at your sole risk. The site is provided on an "as is" and "as available" basis. The site is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>
          <p style={{ marginTop: '12px' }}>
            {SITE_CONFIG.name} does not warrant that the tools and calculators provided will yield 100% accurate results. While we strive for accuracy, bugs and errors may occur. You should always verify critical outcomes independently.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>7. Limitation of Liability</h2>
          <p>
            In no event shall {SITE_CONFIG.name}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>
      </div>
    </div>
  );
}
