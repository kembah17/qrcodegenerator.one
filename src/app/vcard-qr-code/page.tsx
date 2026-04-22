import type { Metadata } from "next";
import VCardQRGenerator from "@/components/tools/VCardQRGenerator";
import { WebAppSchema } from "@/components/seo/JsonLd";
import FaqSchema from "@/components/seo/FaqSchema";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "vCard QR Code Generator - Create Digital Business Card QR Codes",
  description: "Generate a vCard QR code with your name, phone, email, company, and address. Recipients scan to save your contact info instantly. Free with custom colors.",
  alternates: { canonical: "https://qrcodegenerator.one/vcard-qr-code" },
  openGraph: {
    title: "vCard QR Code Generator - Digital Business Card",
    description: "Generate a vCard QR code with your contact information. Recipients scan to save your details instantly.",
    url: "https://qrcodegenerator.one/vcard-qr-code",
  },
};

const faqItems = [
  { question: "What is a vCard QR code?", answer: "A vCard QR code encodes your contact information (name, phone, email, company, address) in the vCard 3.0 format. When scanned, the recipient's phone prompts them to save your contact details directly to their address book — no manual typing required." },
  { question: "What information can I include in a vCard QR code?", answer: "You can include your first and last name, phone number, email address, company name, job title, website URL, and full mailing address. All fields are optional except the name." },
  { question: "How is this different from a regular text QR code?", answer: "A vCard QR code uses a standardized format (vCard 3.0) that smartphones recognize as contact data. When scanned, the phone automatically opens the contacts app with all fields pre-filled, ready to save. A text QR code would just display the raw text." },
  { question: "Can I use a vCard QR code on my business card?", answer: "Absolutely! This is one of the most popular uses. Print the QR code on the back of your business card so people can scan it to save your contact info instantly instead of manually typing it from the card." },
  { question: "Will the QR code work with both iPhone and Android?", answer: "Yes. The vCard 3.0 format is universally supported by both iOS and Android devices. When scanned, both platforms will recognize the contact data and offer to save it to the address book." },
];

export default function VCardQRCodePage() {
  return (
    <>
      <WebAppSchema name="vCard QR Code Generator" description="Generate a vCard QR code with your contact information for digital business cards." url="/vcard-qr-code" />
      <FaqSchema items={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-3">
            vCard QR Code Generator
          </h1>
          <p className="text-lg text-muted dark:text-text-dark-muted">
            Create a digital business card QR code. Recipients scan to save your contact information instantly.
          </p>
        </div>

        <AdSlot label="Advertisement" />

        <div className="mt-8">
          <VCardQRGenerator />
        </div>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        <section className="mt-12 card max-w-4xl">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">How to Create a vCard QR Code</h2>
          <div className="text-muted dark:text-text-dark-muted space-y-4 leading-relaxed">
            <p>
              A vCard QR code is the modern equivalent of a digital business card. Instead of handing someone a physical card and hoping they manually enter your details, you can provide a QR code that instantly saves your complete contact information to their phone. This is perfect for networking events, conferences, business meetings, and even personal use.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 1: Fill In Your Contact Details</h3>
            <p>
              Enter your information in the form above. Start with your first and last name, which are the minimum required fields. Then add your phone number, email address, company name, job title, website, and mailing address. All fields except the name are optional, so include only what you want to share.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 2: Preview the Contact Card</h3>
            <p>
              As you fill in the form, a contact card preview appears showing how your information will look. The QR code also updates in real-time. Review the preview to make sure all details are correct before downloading. Remember that once printed, you cannot change the encoded information.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 3: Customize and Brand</h3>
            <p>
              Make your vCard QR code match your personal or corporate brand. Change the colors to match your business card design, and upload your company logo to embed it in the center. This creates a professional, recognizable QR code that people will trust to scan. Use high error correction when adding a logo.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 4: Download and Use</h3>
            <p>
              Download your vCard QR code in PNG, SVG, or JPEG format. Print it on business cards, name badges, email signatures, presentation slides, or your website. For business cards, place the QR code on the back with a small label like &quot;Scan to save my contact.&quot;
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Tips for vCard QR Codes</h3>
            <p>
              Keep the information concise to produce a simpler QR code. Use your professional email and phone number. Include your website for additional information. If you have multiple phone numbers, use the primary one. Test the QR code by scanning it yourself to verify all information is correct. Consider creating different vCard QR codes for different contexts — one for professional networking and another for personal use.
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
          <RelatedTools currentSlug="vcard-qr-code" />
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>
      </div>
    </>
  );
}
