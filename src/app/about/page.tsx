import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "About QR Code Generator One",
  description: "Learn about QR Code Generator One — a free, privacy-first QR code generator with custom colors and logo embedding. No signup, no data collection.",
  alternates: { canonical: "https://qrcodegenerator.one/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-6">About {siteConfig.name}</h1>

      <div className="card space-y-6 text-muted dark:text-text-dark-muted leading-relaxed">
        <p>
          {siteConfig.name} is a free, privacy-first QR code generator suite. We believe that essential QR code features like color customization and logo embedding should be available to everyone — not locked behind paywalls or signup walls.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Our Mission</h2>
        <p>
          Our mission is simple: provide the best free QR code generator on the web. We offer features that competitors charge for — custom colors, logo embedding, multiple download formats, and bulk generation — completely free, with no account required.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Privacy First</h2>
        <p>
          All QR code generation happens entirely in your browser using JavaScript. Your data — whether it is a URL, WiFi password, contact information, or any text — never leaves your device. We have no servers processing your data, no databases storing your information, and no tracking of what you encode.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Our Tools</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><Link href="/url-qr-code" className="text-primary hover:underline">URL QR Code Generator</Link> — Create QR codes for any website link</li>
          <li><Link href="/text-qr-code" className="text-primary hover:underline">Text QR Code Generator</Link> — Encode any plain text into a QR code</li>
          <li><Link href="/wifi-qr-code" className="text-primary hover:underline">WiFi QR Code Generator</Link> — Share WiFi credentials with a scannable code</li>
          <li><Link href="/vcard-qr-code" className="text-primary hover:underline">vCard QR Code Generator</Link> — Create digital business card QR codes</li>
          <li><Link href="/bulk-qr-generator" className="text-primary hover:underline">Bulk QR Generator</Link> — Generate multiple QR codes at once</li>
        </ul>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Custom foreground and background colors</li>
          <li>Logo and image embedding in QR codes</li>
          <li>Multiple download formats (PNG, SVG, JPEG)</li>
          <li>Adjustable size and error correction levels</li>
          <li>Bulk generation with ZIP download</li>
          <li>Real-time live preview</li>
          <li>100% client-side processing</li>
          <li>No signup or account required</li>
        </ul>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Technology</h2>
        <p>
          Built with modern web technologies including Next.js, TypeScript, and Tailwind CSS. QR code generation is powered by the open-source qrcode library. All processing runs in your browser using HTML5 Canvas for rendering and customization.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Contact</h2>
        <p>
          Have questions, feedback, or feature requests? We would love to hear from you. Reach out to us at <span className="text-primary">hello@qrcodegenerator.one</span>.
        </p>
      </div>
    </div>
  );
}
