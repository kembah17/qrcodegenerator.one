import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools-data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }} className="mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📱</span>
              <span className="text-lg font-bold" style={{ color: 'var(--color-footer-link)' }}>qrcodegenerator<span style={{ color: 'var(--color-footer-text)' }}>.one</span></span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footer-muted)' }}>
              Free online QR code generator with color customization and logo embedding. All processing happens in your browser — your data never leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-footer-text)' }}>Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-footer-muted)' }}
                  >
                    {tool.icon} {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-footer-text)' }}>Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid var(--color-footer-border)' }}>
          <p className="text-sm" style={{ color: 'var(--color-footer-muted)' }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. 100% client-side processing.
          </p>
        </div>
      </div>
    </footer>
  );
}
