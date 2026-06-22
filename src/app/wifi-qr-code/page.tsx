import type { Metadata } from "next";
import WiFiQRGenerator from "@/components/tools/WiFiQRGenerator";
import { WebAppSchema } from "@/components/seo/JsonLd";
import FaqSchema from "@/components/seo/FaqSchema";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "WiFi QR Code Generator - Share WiFi Password with a QR Code",
  description: "Create a QR code for your WiFi network. Guests can scan to connect instantly — no typing passwords. Supports WPA, WPA2, WPA3, WEP, and open networks.",
  alternates: { canonical: "https://qrcodegenerator.one/wifi-qr-code" },
  openGraph: {
    title: "WiFi QR Code Generator - One-Scan WiFi Connect",
    description: "Create a QR code for your WiFi network. Guests scan to connect instantly without typing passwords.",
    url: "https://qrcodegenerator.one/wifi-qr-code",
  },
};

const faqItems = [
  { question: "How does a WiFi QR code work?", answer: "A WiFi QR code encodes your network name (SSID), password, and encryption type in a standard format. When scanned by a smartphone, the device automatically prompts the user to connect to the WiFi network without manually typing the password." },
  { question: "Is it safe to share my WiFi password via QR code?", answer: "The QR code is generated entirely in your browser — your WiFi credentials never leave your device. However, anyone who scans the printed QR code will be able to connect to your network, so place it where only authorized users can access it." },
  { question: "Which devices support WiFi QR codes?", answer: "Most modern smartphones support WiFi QR codes natively. Android devices (version 10+) and iPhones (iOS 11+) can scan WiFi QR codes using their built-in camera app. Older devices may need a third-party QR scanner app." },
  { question: "What encryption types are supported?", answer: "Our generator supports WPA/WPA2/WPA3 (most common), WEP (legacy), and open networks (no password). Select the encryption type that matches your router settings for the QR code to work correctly." },
  { question: "Can I create a WiFi QR code for a hidden network?", answer: "Yes! Toggle the 'Hidden Network' option and the QR code will include the hidden flag. When scanned, the device will know to search for the hidden SSID and connect accordingly." },
];

export default function WiFiQRCodePage() {
  return (
    <>
      <WebAppSchema name="WiFi QR Code Generator" description="Create a QR code for your WiFi network so guests can connect instantly." url="/wifi-qr-code" />
      <FaqSchema items={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-3">
            WiFi QR Code Generator
          </h1>
          <p className="text-lg text-muted dark:text-text-dark-muted">
            Create a QR code for your WiFi network. Guests can scan to connect instantly — no more spelling out passwords.
          </p>
        </div>

        <AdSlot label="Advertisement" />

        <div className="mt-8">
          <WiFiQRGenerator />
        </div>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        <section className="mt-12 card max-w-4xl">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">How to Create a WiFi QR Code</h2>
          <div className="text-muted dark:text-text-dark-muted space-y-4 leading-relaxed">
            <p>
              WiFi QR codes are one of the most practical applications of QR technology. Instead of telling guests your complicated WiFi password, you can simply display a QR code that they scan to connect instantly. This is perfect for homes, offices, hotels, restaurants, cafes, and any venue that offers WiFi access.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 1: Enter Your Network Details</h3>
            <p>
              Start by entering your WiFi network name (SSID) exactly as it appears on your router. This is case-sensitive, so make sure it matches perfectly. Then enter your WiFi password. Select the encryption type — most modern routers use WPA/WPA2, which is the default selection. If your network is hidden, toggle the hidden network option.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 2: Customize the Design</h3>
            <p>
              Make your WiFi QR code match your venue or brand. Change the colors to match your interior design or corporate branding. For a restaurant, you might use colors that match your menu design. For a hotel, use your brand colors. You can also add your logo to make the QR code look professional and trustworthy.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 3: Download and Display</h3>
            <p>
              Download the QR code and print it. Common placement locations include: near the entrance, on table tents in restaurants, at the reception desk in hotels, on the wall near the router, or on welcome cards in guest rooms. Make sure the QR code is large enough to scan easily — at least 2 inches (5 cm) for close-range scanning.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Tips for WiFi QR Codes</h3>
            <p>
              Add a small label below the QR code saying &quot;Scan to connect to WiFi&quot; so people know what it does. If you change your WiFi password, remember to generate and print a new QR code. For security, consider creating a separate guest network with limited access rather than sharing your main network password. Use high error correction when adding a logo to ensure reliable scanning.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Troubleshooting</h3>
            <p>
              If the QR code does not connect, double-check that the SSID and password are entered exactly as configured on your router. Ensure the encryption type matches your router settings. Some older devices may not support WiFi QR codes natively and may need a dedicated QR scanner app. If you have special characters in your password, they should work fine as our generator properly escapes them.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        <section className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6">Related QR Code Tools</h2>
          <RelatedTools currentSlug="wifi-qr-code" />
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>
      </div>
    </>
  );
}
