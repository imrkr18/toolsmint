import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // ===========================================
  // 1. 301 REDIRECTS — CRITICAL FIX
  // ===========================================
  // Redirects old /tools/ URLs to new URLs
  // This preserves all SEO value Google has built
  // 301 = permanent redirect (transfers ranking signals)

  async redirects() {
    return [
      // ---- CONVERTER REDIRECTS ----
      // Old: /tools/converter/length/1-in-to-cm
      // New: /converter/length/1-in-to-cm
      {
        source: "/tools/converter/:category/:slug",
        destination: "/converter/:category/:slug",
        permanent: true,
      },
      // Old: /tools/converter/length
      // New: /converter/length
      {
        source: "/tools/converter/:category",
        destination: "/converter/:category",
        permanent: true,
      },
      // Old: /tools/converter
      // New: /converter
      {
        source: "/tools/converter",
        destination: "/converter",
        permanent: true,
      },

      // ---- CATCH-ALL for any other /tools/ pages ----
      // Old: /tools/calculator/bmi
      // New: /calculator/bmi
      {
        source: "/tools/:path*",
        destination: "/:path*",
        permanent: true,
      },

      // ---- TRAILING SLASH NORMALIZATION ----
      // Prevents duplicate content from /converter/length/ vs /converter/length
      // Uncomment the version you prefer:

      // Remove trailing slashes (recommended)
      // {
      //   source: "/:path+/",
      //   destination: "/:path+",
      //   permanent: true,
      // },
    ];
  },

  // ===========================================
  // 2. SEO HEADERS
  // ===========================================

  async headers() {
    return [
      {
        // Security + SEO headers for ALL pages
        source: "/:path*",
        headers: [
          // Security
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // CONVERTER PAGES — content rarely changes (math is constant)
        // Browser: 1 hour | CDN: 24 hours | Serves stale while refreshing
        // Change reflects: within 1 hour for users, 24 hours on CDN
        source: "/converter/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=86400, stale-while-revalidate=3600",
          },
        ],
      },
      {
        // BLOG / DYNAMIC PAGES — content changes often
        // No caching on CDN, browser checks every time
        // Changes reflect: IMMEDIATELY
        source: "/blog/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        // STATIC ASSETS (JS, CSS, images, fonts)
        // Safe to cache forever — Next.js uses unique hashed filenames
        // When you redeploy, filenames change = new file fetched automatically
        // Old filename cached? Doesn't matter, it's never requested again
        source: "/(.*)\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ===========================================
  // 3. IMAGE OPTIMIZATION
  // ===========================================

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
  },

  // ===========================================
  // 4. COMPRESSION
  // ===========================================

  compress: true,

  // ===========================================
  // 5. POWERED BY HEADER (remove for security)
  // ===========================================

  poweredByHeader: false,
};

export default nextConfig;