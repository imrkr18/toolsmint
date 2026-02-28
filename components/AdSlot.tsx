export default function AdSlot({
  type = 'banner',
  className = '',
  slotId = 'YOUR_AD_SLOT_ID', // Replace with the actual slot ID from Google AdSense
}: {
  type?: 'banner' | 'box';
  className?: string;
  slotId?: string;
}) {
  return (
    <div className={`ad-slot ad-${type} ${className}`} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
