'use client';

import { useState } from 'react';
import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools-data";
import { WebSiteSchema } from "@/components/seo/JsonLd";
import AdSlot from "@/components/ui/AdSlot";

export default function HomePage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <>
      <WebSiteSchema />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-surface to-secondary/5 dark:from-primary/10 dark:via-surface-dark dark:to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span>100% Free</span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span>No Signup</span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span>Client-Side</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ color: 'var(--color-text-heading)' }}>
            Free QR Code Generator<br />
            <span style={{ color: 'var(--color-brand)' }}>with Logo & Custom Colors</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Generate QR codes for URLs, text, WiFi, contacts, and more. Customize colors, embed your logo, and download in PNG, SVG, or JPEG. All processing happens in your browser — your data never leaves your device.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/url-qr-code"
              className="text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              style={{ backgroundColor: 'var(--color-brand)', color: '#FFFFFF' }}
            >
              Create QR Code Now
            </Link>
            <Link
              href="/bulk-qr-generator"
              className="text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              style={{ backgroundColor: 'var(--color-bg-card)', color: 'var(--color-brand)', border: '2px solid var(--color-brand)' }}
            >
              Bulk Generator
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdSlot label="Advertisement" />

        {/* Tool Grid */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3" style={{ color: 'var(--color-text-heading)' }}>
            QR Code Generator Tools
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Choose a tool below to get started. All tools include free color customization and logo embedding.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="rounded-xl p-6 transition-all duration-200 group no-underline"
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  border: hoveredSlug === tool.slug ? '2px solid var(--color-brand)' : '2px solid var(--color-border)',
                  boxShadow: hoveredSlug === tool.slug ? 'var(--shadow-lg)' : 'var(--shadow-card)',
                  transform: hoveredSlug === tool.slug ? 'translateY(-2px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredSlug(tool.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold transition-colors mb-2" style={{ color: hoveredSlug === tool.slug ? 'var(--color-brand)' : 'var(--color-text-heading)' }}>
                  {tool.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--color-text-heading)' }}>
            Why Choose {siteConfig.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎨", title: "Free Color Customization", desc: "Change foreground and background colors of your QR codes. Most competitors charge for this feature — we offer it completely free." },
              { icon: "🖼️", title: "Free Logo Embedding", desc: "Upload your logo or brand image and embed it in the center of your QR code. High error correction ensures scannability." },
              { icon: "🔒", title: "100% Private & Secure", desc: "All QR code generation happens in your browser. Your data never touches our servers. No tracking, no data collection." },
              { icon: "📥", title: "Multiple Download Formats", desc: "Download your QR codes as PNG, SVG, or JPEG. Choose the format that works best for print or digital use." },
              { icon: "📦", title: "Bulk Generation", desc: "Generate hundreds of QR codes at once from a CSV file or text list. Download all as a ZIP archive." },
              { icon: "⚡", title: "Instant Live Preview", desc: "See your QR code update in real-time as you type and customize. No waiting, no page reloads." },
            ].map((feature) => (
              <div key={feature.title} className="card text-center">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <AdSlot label="Advertisement" />
        </div>

        {/* SEO Content */}
        <section className="mt-16 card max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>What is a QR Code?</h2>
          <div className="prose prose-sm max-w-none space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              A QR (Quick Response) code is a two-dimensional barcode that can store various types of data including URLs, text, WiFi credentials, and contact information. Originally invented in 1994 by Denso Wave for tracking automotive parts, QR codes have become ubiquitous in modern life — from restaurant menus to payment systems.
            </p>
            <p>
              QR codes work by encoding data into a matrix of black and white squares. When scanned by a smartphone camera or QR reader app, the encoded data is instantly decoded and acted upon. For example, a URL QR code will open the website in your browser, while a WiFi QR code will prompt you to connect to the network.
            </p>
            <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-heading)' }}>How QR Code Error Correction Works</h3>
            <p>
              QR codes include built-in error correction using Reed-Solomon algorithms. This means even if part of the QR code is damaged or obscured (for example, by a logo in the center), it can still be scanned successfully. There are four error correction levels: Low (7%), Medium (15%), Quartile (25%), and High (30%). When embedding a logo, we recommend using High error correction to ensure reliable scanning.
            </p>
            <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-heading)' }}>Common QR Code Use Cases</h3>
            <p>
              Businesses use QR codes for marketing campaigns, product packaging, business cards, event tickets, and contactless payments. Restaurants use them for digital menus, while retailers use them for product information and reviews. WiFi QR codes are popular in hotels, cafes, and offices to simplify network access for guests.
            </p>
            <p>
              Our free QR code generator supports all these use cases and more. With custom colors and logo embedding — features that most competitors lock behind paywalls — you can create professional, branded QR codes at no cost.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
