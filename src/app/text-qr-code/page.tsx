import type { Metadata } from "next";
import TextQRGenerator from "@/components/tools/TextQRGenerator";
import { WebAppSchema } from "@/components/seo/JsonLd";
import FaqSchema from "@/components/seo/FaqSchema";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "Text QR Code Generator - Encode Any Text into a QR Code",
  description: "Encode any plain text, message, or note into a scannable QR code. Supports multi-line text with custom colors and logo embedding. Free, no signup.",
  alternates: { canonical: "https://qrcodegenerator.one/text-qr-code" },
  openGraph: {
    title: "Text QR Code Generator - Free with Custom Colors & Logo",
    description: "Encode any plain text into a scannable QR code with custom colors and logo embedding.",
    url: "https://qrcodegenerator.one/text-qr-code",
  },
};

const faqItems = [
  { question: "How much text can a QR code hold?", answer: "A QR code can hold up to approximately 4,296 alphanumeric characters or 2,953 bytes of data. However, longer text creates more complex QR codes that may be harder to scan. For best results, keep text under 500 characters." },
  { question: "Can I encode multi-line text in a QR code?", answer: "Yes! Our text QR code generator fully supports multi-line text. Line breaks are preserved in the encoded data, so when someone scans the QR code, they will see the text exactly as you entered it." },
  { question: "What happens when someone scans a text QR code?", answer: "When scanned, the text is displayed on the user's device. Most QR readers will show the decoded text and may offer options to copy it, search for it, or share it. Unlike URL QR codes, text QR codes don't open a browser." },
  { question: "Can I use special characters and emojis in text QR codes?", answer: "Yes, QR codes support UTF-8 encoding, which means you can include special characters, accented letters, and many symbols. However, emojis may increase the QR code complexity significantly." },
];

export default function TextQRCodePage() {
  return (
    <>
      <WebAppSchema name="Text QR Code Generator" description="Encode any plain text into a scannable QR code with custom colors and logo embedding." url="/text-qr-code" />
      <FaqSchema items={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-3">
            Text QR Code Generator
          </h1>
          <p className="text-lg text-muted dark:text-text-dark-muted">
            Encode any plain text, message, or note into a scannable QR code. Supports multi-line text with full customization.
          </p>
        </div>

        <AdSlot label="Advertisement" />

        <div className="mt-8">
          <TextQRGenerator />
        </div>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        <section className="mt-12 card max-w-4xl">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">How to Create a Text QR Code</h2>
          <div className="text-muted dark:text-text-dark-muted space-y-4 leading-relaxed">
            <p>
              Text QR codes are a versatile way to share information without requiring an internet connection. Unlike URL QR codes that redirect to a website, text QR codes store the actual content within the code itself. This makes them perfect for sharing messages, instructions, serial numbers, product information, or any text-based data.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 1: Enter Your Text</h3>
            <p>
              Type or paste your text into the text area above. The QR code generates in real-time as you type, so you can see exactly how your text will be encoded. The character counter below the input shows how many characters you have used. Keep in mind that shorter text produces simpler, easier-to-scan QR codes.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 2: Customize the Appearance</h3>
            <p>
              Make your QR code stand out by customizing its colors. Choose a foreground color that matches your brand or design, and select a background color for contrast. You can also adjust the size from 128px to 1024px depending on where you plan to use the QR code. For printed materials, larger sizes ensure better scannability.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 3: Add a Logo (Optional)</h3>
            <p>
              Upload your logo or any image to embed it in the center of the QR code. When you add a logo, the error correction level is automatically increased to High (30%), which means up to 30% of the QR code can be obscured while still remaining scannable. This ensures your branded QR code works reliably.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 4: Download and Share</h3>
            <p>
              Download your text QR code in PNG, SVG, or JPEG format. PNG is ideal for digital use and web, SVG provides infinite scalability for print materials, and JPEG offers smaller file sizes for email attachments. Print it on business cards, flyers, product labels, or display it on screens.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Best Practices for Text QR Codes</h3>
            <p>
              Keep your text concise for the best scanning experience. Use clear, readable language since the text will be displayed exactly as entered. For longer content, consider using a URL QR code that links to a webpage instead. Always test your QR code with multiple devices before mass printing to ensure compatibility.
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
          <RelatedTools currentSlug="text-qr-code" />
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>
      </div>
    </>
  );
}
