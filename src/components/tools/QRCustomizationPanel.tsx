"use client";

import { type QROptions } from "@/lib/qr-utils";

interface QRCustomizationPanelProps {
  options: Omit<QROptions, "data">;
  onChange: (options: Omit<QROptions, "data">) => void;
}

export default function QRCustomizationPanel({ options, onChange }: QRCustomizationPanelProps) {
  const update = (partial: Partial<Omit<QROptions, "data">>) => {
    onChange({ ...options, ...partial });
  };

  return (
    <div className="space-y-5">
      <h3 className="font-semibold text-text dark:text-text-dark text-lg">Customize QR Code</h3>

      {/* Colors */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-1">Foreground Color</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={options.fgColor}
              onChange={(e) => update({ fgColor: e.target.value })}
              className="w-10 h-10 rounded border border-border dark:border-border-dark cursor-pointer"
              aria-label="Foreground color"
            />
            <input
              type="text"
              value={options.fgColor}
              onChange={(e) => update({ fgColor: e.target.value })}
              className="input-field text-sm !py-2"
              aria-label="Foreground color hex"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-1">Background Color</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={options.bgColor}
              onChange={(e) => update({ bgColor: e.target.value })}
              className="w-10 h-10 rounded border border-border dark:border-border-dark cursor-pointer"
              aria-label="Background color"
            />
            <input
              type="text"
              value={options.bgColor}
              onChange={(e) => update({ bgColor: e.target.value })}
              className="input-field text-sm !py-2"
              aria-label="Background color hex"
            />
          </div>
        </div>
      </div>

      {/* Size */}
      <div>
        <label className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-1">
          Size: {options.size}px
        </label>
        <input
          type="range"
          min={128}
          max={1024}
          step={8}
          value={options.size}
          onChange={(e) => update({ size: parseInt(e.target.value) })}
          className="w-full accent-primary cursor-pointer"
          aria-label="QR code size"
        />
        <div className="flex justify-between text-xs text-muted dark:text-text-dark-muted mt-1">
          <span>128px</span>
          <span>1024px</span>
        </div>
      </div>

      {/* Error Correction */}
      <div>
        <label className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-1">Error Correction Level</label>
        <select
          value={options.errorCorrection}
          onChange={(e) => update({ errorCorrection: e.target.value as QROptions["errorCorrection"] })}
          className="select-field text-sm !py-2"
          aria-label="Error correction level"
        >
          <option value="L">Low (7%) - Smallest QR</option>
          <option value="M">Medium (15%) - Recommended</option>
          <option value="Q">Quartile (25%) - Good for logos</option>
          <option value="H">High (30%) - Best for logos</option>
        </select>
      </div>

      {/* Corner Style */}
      <div>
        <label className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-1">Corner Style</label>
        <div className="flex gap-3">
          <button
            onClick={() => update({ cornerStyle: "square" })}
            className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
              options.cornerStyle === "square"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border dark:border-border-dark text-muted dark:text-text-dark-muted hover:border-primary/50"
            }`}
          >
            Square
          </button>
          <button
            onClick={() => update({ cornerStyle: "rounded" })}
            className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
              options.cornerStyle === "rounded"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border dark:border-border-dark text-muted dark:text-text-dark-muted hover:border-primary/50"
            }`}
          >
            Rounded
          </button>
        </div>
      </div>

      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-1">Embed Logo (optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            update({ logoFile: file, errorCorrection: file ? "H" : options.errorCorrection });
          }}
          className="w-full text-sm text-muted dark:text-text-dark-muted file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer cursor-pointer"
          aria-label="Upload logo image"
        />
        {options.logoFile && (
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted dark:text-text-dark-muted">{options.logoFile.name}</span>
            <button
              onClick={() => update({ logoFile: null })}
              className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
            >
              Remove
            </button>
          </div>
        )}
        {options.logoFile && options.errorCorrection !== "H" && (
          <p className="text-xs text-accent-dark dark:text-accent mt-1">Tip: Error correction set to High for best results with logos.</p>
        )}
      </div>

      {/* Free badge */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
        <p className="text-xs font-medium text-primary">All customization features are 100% free. No signup required.</p>
      </div>
    </div>
  );
}
