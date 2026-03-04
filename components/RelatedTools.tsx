import Link from 'next/link';
import { Tool, TOOLS } from '@/config/site';

interface RelatedToolsProps {
  currentTool: Tool;
}

export default function RelatedTools({ currentTool }: RelatedToolsProps) {
  // Find up to 3 tools in the same category that are NOT the current tool
  const relatedTools = TOOLS.filter(
    (tool) => tool.category === currentTool.category && tool.id !== currentTool.id
  ).slice(0, 3);

  // If there are less than 3 in the same category, fill with random tools to map link juice
  if (relatedTools.length < 3) {
    const additionalTools =   TOOLS.filter(
        (tool) =>
          tool.id !== currentTool.id &&
          !relatedTools.some((rTool) => rTool.id === tool.id)
      )
      .sort(() => 0.5 - Math.random()) // Simple shuffle
      .slice(0, 3 - relatedTools.length);

    relatedTools.push(...additionalTools);
  }

  return (
    <section className="related-tools-section">
      <div className="related-header">
        <h2>Related Tools</h2>
        <p>Explore other helpful utilities you might need.</p>
      </div>

      <div className="tools-grid">
        {relatedTools.map((tool) => (
          <Link
            href={`/${tool.slug}`}
            key={tool.id}
            className="card tool-card"
          >
            <div className="tool-icon" aria-hidden="true">{tool.icon}</div>
            <h3 className="tool-name">{tool.name}</h3>
            <p className="tool-desc">{tool.description}</p>
            <div className="tool-arrow" aria-hidden="true">→</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
