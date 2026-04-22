"use client";

import { useState, useMemo } from "react";
import { defaultQROptions, type QROptions } from "@/lib/qr-utils";
import QRCustomizationPanel from "./QRCustomizationPanel";
import QRPreview from "./QRPreview";

export default function TextQRGenerator() {
  const [text, setText] = useState("");
  const [customization, setCustomization] = useState(defaultQROptions);

  const qrOptions: QROptions = useMemo(() => ({
    ...customization,
    data: text,
  }), [text, customization]);

  const handleClear = () => {
    setText("");
    setCustomization(defaultQROptions);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-4">
        <div>
          <label htmlFor="text-input" className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-2">
            Enter Text
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter any text to encode..."
            rows={5}
            className="input-field resize-y"
            autoFocus
          />
          <div className="flex justify-between mt-1">
            <p className="text-xs text-muted dark:text-text-dark-muted">{text.length} characters</p>
            {text.length > 2000 && (
              <p className="text-xs text-red-500">Long text may produce complex QR codes</p>
            )}
          </div>
        </div>
        <QRCustomizationPanel options={customization} onChange={setCustomization} />
        <button onClick={handleClear} className="btn-secondary w-full text-sm">
          Clear &amp; Reset
        </button>
      </div>
      <div className="lg:col-span-2">
        <div className="card">
          <h3 className="font-semibold text-text dark:text-text-dark mb-4">QR Code Preview</h3>
          <QRPreview options={qrOptions} filename="text-qrcode" />
        </div>
      </div>
    </div>
  );
}
