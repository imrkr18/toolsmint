import { SITE_CONFIG } from '@/config/site';

export const metadata = {
  title: `Contact Us | ${SITE_CONFIG.name}`,
  description: `Get in touch with the team at ${SITE_CONFIG.name}.`,
};

export default function Contact() {
  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '16px' }}>Contact Us</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
        Have a question, feedback, or a tool request? We'd love to hear from you.
      </p>

      <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Email Support</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          For any inquiries or support requests, please reach out to us via email at:
        </p>
        <a 
          href="mailto:hello.toolsmint@gmail.com" 
          style={{ 
            display: 'inline-block',
            fontSize: '1.25rem', 
            color: 'var(--brand)', 
            fontWeight: '600',
            textDecoration: 'none',
            padding: '12px 24px',
            background: 'var(--brand-glow)',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(0, 200, 150, 0.2)'
          }}
        >
          hello.toolsmint@gmail.com
        </a>

        <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)' }}>Social Media</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Follow us for the latest updates and new tool announcements.
          </p>
          <a 
            href={`https://twitter.com/${SITE_CONFIG.twitter.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-primary)', textDecoration: 'underline', fontWeight: '500' }}
          >
            {SITE_CONFIG.twitter}
          </a>
        </div>
      </div>
    </div>
  );
}
