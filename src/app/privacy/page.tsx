import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we protect your data — all processing happens in your browser.`,
  alternates: { canonical: "https://qrcodegenerator.one/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-6">Privacy Policy</h1>

      <div className="card space-y-6 text-muted dark:text-text-dark-muted leading-relaxed">
        <p><strong className="text-text dark:text-text-dark">Last updated:</strong> April 22, 2026</p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Overview</h2>
        <p>
          {siteConfig.name} is committed to protecting your privacy. This policy explains how we handle your data when you use our QR code generation tools.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Data Processing</h2>
        <p>
          All QR code generation happens entirely in your web browser using client-side JavaScript. Your data — including URLs, text, WiFi credentials, contact information, and any other content you enter — is processed locally on your device and never transmitted to our servers.
        </p>
        <p>
          We do not collect, store, or have access to any data you enter into our tools. There are no server-side APIs processing your QR code requests.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Cookies and Local Storage</h2>
        <p>
          We may use minimal cookies or local storage for essential site functionality, such as remembering your dark/light mode preference. We do not use cookies for tracking or advertising purposes.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Third-Party Services</h2>
        <p>
          We may use third-party advertising networks to display ads on our site. These networks may use cookies and similar technologies to serve relevant ads. We do not share any data you enter into our tools with these services.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Analytics</h2>
        <p>
          We may use privacy-respecting analytics to understand how our site is used (page views, popular tools). This data is aggregated and anonymous — we cannot identify individual users.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">File Uploads</h2>
        <p>
          When you upload a logo image for QR code embedding or a CSV file for bulk generation, these files are processed entirely in your browser. They are never uploaded to our servers. The files exist only in your browser memory and are discarded when you close the page.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Data Security</h2>
        <p>
          Since we do not collect or store your data, there is no risk of data breaches affecting your QR code content. Your data remains on your device at all times.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Children&apos;s Privacy</h2>
        <p>
          Our service is not directed at children under 13. We do not knowingly collect personal information from children.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-semibold text-text dark:text-text-dark">Contact</h2>
        <p>
          If you have questions about this privacy policy, contact us at <span className="text-primary">hello@qrcodegenerator.one</span>.
        </p>
      </div>
    </div>
  );
}
