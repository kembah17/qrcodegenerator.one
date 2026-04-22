import type { Metadata } from "next";
import BulkQRGenerator from "@/components/tools/BulkQRGenerator";
import { WebAppSchema } from "@/components/seo/JsonLd";
import FaqSchema from "@/components/seo/FaqSchema";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "Bulk QR Code Generator - Generate Multiple QR Codes at Once",
  description: "Generate hundreds of QR codes at once from a CSV file or text list. Download all as a ZIP archive. Free bulk QR code generation with custom colors.",
  alternates: { canonical: "https://qrcodegenerator.one/bulk-qr-generator" },
  openGraph: {
    title: "Bulk QR Code Generator - Mass QR Code Creation",
    description: "Generate hundreds of QR codes at once from a CSV file or text list. Download all as a ZIP archive.",
    url: "https://qrcodegenerator.one/bulk-qr-generator",
  },
};

const faqItems = [
  { question: "How many QR codes can I generate at once?", answer: "There is no hard limit. You can generate hundreds of QR codes in a single batch. However, very large batches (1000+) may take longer to process since all generation happens in your browser. We recommend batches of 500 or fewer for the best experience." },
  { question: "What CSV format is supported?", answer: "Upload a CSV file with one URL or text per row. The tool reads the first column of each row. Headers are treated as data, so remove any header row if you don't want it converted to a QR code. Standard comma-separated and quoted values are supported." },
  { question: "Can I customize colors for bulk QR codes?", answer: "Yes! Set the foreground and background colors before generating. All QR codes in the batch will use the same color settings. You can also adjust the size of all generated QR codes." },
  { question: "How do I download all the QR codes?", answer: "After generation is complete, click the 'Download All as ZIP' button. All QR codes will be packaged into a single ZIP file with descriptive filenames based on the encoded content. Each QR code is saved as a PNG image." },
  { question: "Is there a file size limit for CSV uploads?", answer: "Since all processing happens in your browser, the limit depends on your device's memory. Most modern devices can handle CSV files with thousands of rows without issues. For very large files, consider splitting them into smaller batches." },
];

export default function BulkQRGeneratorPage() {
  return (
    <>
      <WebAppSchema name="Bulk QR Code Generator" description="Generate multiple QR codes at once from a CSV file or text list." url="/bulk-qr-generator" />
      <FaqSchema items={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-3">
            Bulk QR Code Generator
          </h1>
          <p className="text-lg text-muted dark:text-text-dark-muted">
            Generate multiple QR codes at once. Paste a list or upload a CSV file, then download all as a ZIP archive.
          </p>
        </div>

        <AdSlot label="Advertisement" />

        <div className="mt-8">
          <BulkQRGenerator />
        </div>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        <section className="mt-12 card max-w-4xl">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">How to Generate QR Codes in Bulk</h2>
          <div className="text-muted dark:text-text-dark-muted space-y-4 leading-relaxed">
            <p>
              Need to create QR codes for a large number of URLs, product codes, or text entries? Our bulk QR code generator lets you create hundreds of QR codes in a single operation. This is ideal for businesses that need QR codes for inventory management, marketing campaigns, event management, or product packaging at scale.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Method 1: Paste a Text List</h3>
            <p>
              The simplest way to generate bulk QR codes is to paste a list of URLs or text entries into the text area, with one item per line. This is perfect for quick batches of 10-50 items. Simply copy your list from a spreadsheet, document, or any other source and paste it directly into the input field.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Method 2: Upload a CSV File</h3>
            <p>
              For larger batches, upload a CSV file. The tool reads the first column of each row, so make sure your URLs or text entries are in the first column. You can export CSV files from Excel, Google Sheets, or any database tool. Remove any header rows if you do not want them converted to QR codes.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 2: Configure Settings</h3>
            <p>
              Before generating, set your preferred foreground and background colors. All QR codes in the batch will use these settings. Adjust the size slider to set the resolution of each QR code. Larger sizes are better for print, while smaller sizes work well for digital use.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step 3: Generate and Download</h3>
            <p>
              Click the Generate button and watch the progress bar as each QR code is created. Once complete, you can preview all generated QR codes in a grid view. Click &quot;Download All as ZIP&quot; to get a single archive containing all QR codes as PNG files. Each file is named with a sequential number and a sanitized version of the encoded content for easy identification.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Use Cases for Bulk QR Codes</h3>
            <p>
              Common use cases include generating QR codes for product catalogs, creating unique codes for event tickets, building QR-based inventory tracking systems, producing marketing materials with individual tracking URLs, and creating batch labels for shipping or logistics. The bulk generator saves hours of manual work compared to creating QR codes one at a time.
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
          <RelatedTools currentSlug="bulk-qr-generator" />
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>
      </div>
    </>
  );
}
