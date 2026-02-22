export default function AdSlot({
  type = 'banner',
  className = '',
}: {
  type?: 'banner' | 'box';
  className?: string;
}) {
  return (
    <div className={`ad-slot ad-${type} ${className}`} aria-label="Advertisement">
      {/* Google AdSense — replace data-ad-* values after approval */}
      {/* <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"
      /> */}
      Advertisement
    </div>
  );
}
