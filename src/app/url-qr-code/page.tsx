import type { Metadata } from "next";
import UrlQRGenerator from "@/components/tools/UrlQRGenerator";
import { WebAppSchema } from "@/components/seo/JsonLd";
import FaqSchema from "@/components/seo/FaqSchema";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "URL QR Code Generator - Create QR Codes for Any Website Link",
  description: "Generate QR codes for any URL with custom colors, logo embedding, and multiple download formats (PNG, SVG, JPEG). Free, no signup required. 100% client-side.",
  alternates: { canonical: "https://qrcodegenerator.one/url-qr-code" },
  openGraph: {
    title: "URL QR Code Generator - Free with Custom Colors & Logo",
    description: "Generate QR codes for any URL with custom colors and logo embedding. Download as PNG, SVG, or JPEG.",
    url: "https://qrcodegenerator.one/url-qr-code",
  },
};

const faqItems = [
  { question: "How do I create a QR code for a URL?", answer: "Simply paste your URL into the input field and a QR code will be generated instantly. You can customize colors, add a logo, adjust the size, and download in PNG, SVG, or JPEG format." },
  { question: "Can I customize the colors of my URL QR code?", answer: "Yes! You can change both the foreground (dark modules) and background colors using the color pickers. This feature is completely free — no signup or payment required." },
  { question: "Can I add my logo to the QR code?", answer: "Absolutely. Upload any image file and it will be embedded in the center of your QR code. The error correction level is automatically set to High to ensure the QR code remains scannable." },
  { question: "What URL formats are supported?", answer: "Any valid URL is supported, including HTTP, HTTPS, and deep links. For best compatibility, include the full URL with the protocol (https://)." },
  { question: "Is my URL data stored on your servers?", answer: "No. All QR code generation happens entirely in your browser using JavaScript. Your URL data never leaves your device. We have no servers processing your data." },
];

export default function UrlQRCodePage() {
  return (
    <>
      <WebAppSchema name="URL QR Code Generator" description="Generate QR codes for any URL with custom colors and logo embedding." url="/url-qr-code" />
      <FaqSchema items={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-3">
            URL QR Code Generator
          </h1>
          <p className="text-lg text-muted dark:text-text-dark-muted">
            Generate a QR code for any website URL. Customize colors, embed your logo, and download in multiple formats — all for free.
          </p>
        </div>

        <AdSlot label="Advertisement" />

        <div className="mt-8">
          <UrlQRGenerator />
        </div>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        {/* How-to Guide */}
        <section className="mt-12 card max-w-4xl">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">How to Generate a QR Code for a URL</h2>
          <div className="text-muted dark:text-text-dark-muted space-y-4 leading-relaxed">
            <p>
              Creating a QR code for a website URL is one of the most common uses of QR technology. Whether you want to share a link on a business card, flyer, poster, or product packaging, a URL QR code makes it easy for anyone with a smartphone to access your website instantly.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 1: Enter Your URL</h3>
            <p>
              Start by typing or pasting your website URL into the input field above. The QR code will generate automatically as you type, giving you a live preview. Make sure to include the full URL with the protocol (https://) for maximum compatibility across all QR code readers.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 2: Customize Your QR Code</h3>
            <p>
              Use the customization panel to make your QR code match your brand. Change the foreground color from the default black to any color you prefer. Adjust the background color as well. You can also change the size from 128px (ideal for small prints) to 1024px (perfect for large format printing). Select the error correction level — we recommend &quot;High&quot; if you plan to add a logo.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 3: Add Your Logo (Optional)</h3>
            <p>
              Want to make your QR code look professional? Upload your company logo or any image, and it will be embedded in the center of the QR code. The tool automatically adds a white padding around the logo and uses high error correction to ensure the QR code remains scannable even with the logo overlay.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 4: Download Your QR Code</h3>
            <p>
              Once you are satisfied with the preview, download your QR code in your preferred format. Choose PNG for general use, SVG for scalable vector graphics (ideal for print), or JPEG for smaller file sizes. All downloads are generated instantly in your browser.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Tips for URL QR Codes</h3>
            <p>
              Use URL shorteners for very long URLs to keep the QR code simple and easy to scan. Test your QR code with multiple devices before printing. Consider using a landing page with tracking parameters (UTM codes) to measure how many people scan your QR code. Always ensure your website is mobile-friendly since most QR code scans happen on smartphones.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        {/* FAQ */}
        <section className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        {/* Related Tools */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">Related QR Code Tools</h2>
          <RelatedTools currentSlug="url-qr-code" />
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>
      </div>
    </>
  );
}
