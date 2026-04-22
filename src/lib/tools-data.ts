export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  shortDesc: string;
}

export const tools: Tool[] = [
  {
    name: "URL QR Code Generator",
    slug: "url-qr-code",
    description: "Generate QR codes for any URL with custom colors, logo embedding, and multiple download formats. Free, no signup required.",
    icon: "🔗",
    shortDesc: "Create QR codes for any website URL",
  },
  {
    name: "Text QR Code Generator",
    slug: "text-qr-code",
    description: "Encode any plain text into a scannable QR code. Supports multi-line text with full color customization and logo embedding.",
    icon: "📝",
    shortDesc: "Encode plain text into scannable QR codes",
  },
  {
    name: "WiFi QR Code Generator",
    slug: "wifi-qr-code",
    description: "Create WiFi QR codes that let anyone connect to your network with a single scan. Supports WPA, WPA2, WEP, and open networks.",
    icon: "📶",
    shortDesc: "One-scan WiFi connection QR codes",
  },
  {
    name: "vCard QR Code Generator",
    slug: "vcard-qr-code",
    description: "Generate QR codes containing your contact information in vCard 3.0 format. Share your business card with a single scan.",
    icon: "👤",
    shortDesc: "Share contact info via scannable QR codes",
  },
  {
    name: "Bulk QR Generator",
    slug: "bulk-qr-generator",
    description: "Generate multiple QR codes at once from a CSV file or text list. Download all as a ZIP archive with progress tracking.",
    icon: "📦",
    shortDesc: "Generate and download multiple QR codes at once",
  },
];

export const siteConfig = {
  name: "qrcodegenerator.one",
  title: "QR Code Generator Suite",
  description: "Free online QR code generator with color customization and logo embedding. Create QR codes for URLs, text, WiFi, vCards, and bulk generation. 100% client-side, private, and fast.",
  url: "https://qrcodegenerator.one",
  email: "hello@qrcodegenerator.one",
};
