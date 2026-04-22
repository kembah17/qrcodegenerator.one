"use client";

import { useState, useMemo } from "react";
import { defaultQROptions, type QROptions } from "@/lib/qr-utils";
import QRCustomizationPanel from "./QRCustomizationPanel";
import QRPreview from "./QRPreview";

export default function UrlQRGenerator() {
  const [url, setUrl] = useState("");
  const [customization, setCustomization] = useState(defaultQROptions);

  const qrOptions: QROptions = useMemo(() => ({
    ...customization,
    data: url,
  }), [url, customization]);

  const handleClear = () => {
    setUrl("");
    setCustomization(defaultQROptions);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Input */}
      <div className="lg:col-span-1 space-y-4">
        <div>
          <label htmlFor="url-input" className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-2">
            Enter URL
          </label>
          <input
            id="url-input"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="input-field"
            autoFocus
          />
          {url && !url.match(/^https?:\/\/.+/) && (
            <p className="text-xs text-accent-dark dark:text-accent mt-1">Tip: Include https:// for best compatibility</p>
          )}
        </div>
        <QRCustomizationPanel options={customization} onChange={setCustomization} />
        <button onClick={handleClear} className="btn-secondary w-full text-sm">
          Clear &amp; Reset
        </button>
      </div>

      {/* Preview */}
      <div className="lg:col-span-2">
        <div className="card">
          <h3 className="font-semibold text-text dark:text-text-dark mb-4">QR Code Preview</h3>
          <QRPreview options={qrOptions} filename="url-qrcode" />
        </div>
      </div>
    </div>
  );
}
