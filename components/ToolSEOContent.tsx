import { Tool } from '@/config/site';

interface ToolSEOContentProps {
  tool: Tool;
}

export default function ToolSEOContent({ tool }: ToolSEOContentProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="seo-section">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="seo-header">
        <h2>{tool.name} – Free Online Tool</h2>
        <p>{tool.description}</p>
      </div>

      <div className="seo-blocks">
        {tool.seoBlocks.map((block, index) => (
          <div
            key={index}
            className={`seo-block ${index === 2 ? 'full-width' : ''}`}
          >
            <h3>{block.h2}</h3>
            <p>{block.content}</p>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about the {tool.name}.</p>
        </div>

        <div className="faq-list">
          {tool.faqs.map((faq, index) => (
             <div key={index} className="faq-item">
              <h3 className="faq-q">
                <span className="faq-icon-q">Q:</span>
                {faq.question}
              </h3>
              <p className="faq-a">
                <span className="faq-icon-a">A:</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
