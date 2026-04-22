"use client";

import { useState, useRef, useCallback } from "react";
import QRCode from "qrcode";
import JSZip from "jszip";

interface BulkItem {
  text: string;
  status: "pending" | "generating" | "done" | "error";
  dataUrl?: string;
}

export default function BulkQRGenerator() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<BulkItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(300);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseInput = useCallback((text: string): string[] => {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }, []);

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const lines = text.split("\n").map((l) => {
        const parts = l.split(",");
        return parts[0]?.trim().replace(/^"|"$/g, "") || "";
      }).filter((l) => l.length > 0);
      setInputText(lines.join("\n"));
    };
    reader.readAsText(file);
  };

  const generateAll = async () => {
    const lines = parseInput(inputText);
    if (lines.length === 0) return;

    setIsGenerating(true);
    setProgress(0);
    const newItems: BulkItem[] = lines.map((text) => ({ text, status: "pending" }));
    setItems(newItems);

    for (let i = 0; i < newItems.length; i++) {
      newItems[i].status = "generating";
      setItems([...newItems]);
      try {
        const dataUrl = await QRCode.toDataURL(newItems[i].text, {
          width: size,
          margin: 2,
          color: { dark: fgColor, light: bgColor },
          errorCorrectionLevel: "M",
        });
        newItems[i].status = "done";
        newItems[i].dataUrl = dataUrl;
      } catch {
        newItems[i].status = "error";
      }
      setProgress(Math.round(((i + 1) / newItems.length) * 100));
      setItems([...newItems]);
    }
    setIsGenerating(false);
  };

  const downloadAll = async () => {
    const doneItems = items.filter((item) => item.status === "done" && item.dataUrl);
    if (doneItems.length === 0) return;

    const zip = new JSZip();
    doneItems.forEach((item, index) => {
      if (!item.dataUrl) return;
      const base64 = item.dataUrl.split(",")[1];
      const safeName = item.text.replace(/[^a-zA-Z0-9.-]/g, "_").substring(0, 50);
      zip.file(`qr_${String(index + 1).padStart(3, "0")}_${safeName}.png`, base64, { base64: true });
    });

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-codes-bulk.zip";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setInputText("");
    setItems([]);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const lineCount = parseInput(inputText).length;

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label htmlFor="bulk-input" className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-2">
              Enter URLs or text (one per line)
            </label>
            <textarea
              id="bulk-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={"https://example.com\nhttps://google.com\nhttps://github.com\nHello World"}
              rows={8}
              className="input-field resize-y font-mono text-sm"
            />
            <p className="text-xs text-muted dark:text-text-dark-muted mt-1">{lineCount} item{lineCount !== 1 ? "s" : ""} detected</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted dark:text-text-dark-muted">Or upload CSV:</span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.txt"
              onChange={handleCSVUpload}
              className="text-sm text-muted dark:text-text-dark-muted file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer cursor-pointer"
              aria-label="Upload CSV file"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-text dark:text-text-dark">Quick Settings</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-muted dark:text-text-dark-muted mb-1">Foreground</label>
              <div className="flex items-center gap-2">
                <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer" aria-label="Foreground color" />
                <span className="text-xs text-muted dark:text-text-dark-muted">{fgColor}</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted dark:text-text-dark-muted mb-1">Background</label>
              <div className="flex items-center gap-2">
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer" aria-label="Background color" />
                <span className="text-xs text-muted dark:text-text-dark-muted">{bgColor}</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted dark:text-text-dark-muted mb-1">Size: {size}px</label>
            <input type="range" min={128} max={1024} step={8} value={size} onChange={(e) => setSize(parseInt(e.target.value))} className="w-full accent-primary cursor-pointer" aria-label="QR code size" />
          </div>
          <div className="flex gap-2">
            <button onClick={generateAll} disabled={lineCount === 0 || isGenerating} className="btn-primary flex-1 text-sm disabled:opacity-50">
              {isGenerating ? "Generating..." : `Generate ${lineCount} QR Code${lineCount !== 1 ? "s" : ""}`}
            </button>
            <button onClick={handleClear} className="btn-secondary text-sm">
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Progress */}
      {isGenerating && (
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text dark:text-text-dark">Generating QR Codes...</span>
            <span className="text-sm text-muted dark:text-text-dark-muted">{progress}%</span>
          </div>
          <div className="w-full bg-surface-alt dark:bg-surface-dark rounded-full h-3">
            <div className="bg-primary h-3 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* Results */}
      {items.length > 0 && !isGenerating && (
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-text dark:text-text-dark">
              Generated {items.filter((i) => i.status === "done").length} of {items.length} QR Codes
            </h3>
            <button onClick={downloadAll} className="btn-primary text-sm">
              Download All as ZIP
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {items.map((item, index) => (
              <div key={index} className="text-center">
                {item.status === "done" && item.dataUrl ? (
                  <img src={item.dataUrl} alt={`QR code for ${item.text}`} className="w-full h-auto rounded border border-border dark:border-border-dark" />
                ) : item.status === "error" ? (
                  <div className="w-full aspect-square bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800 flex items-center justify-center">
                    <span className="text-xs text-red-500">Error</span>
                  </div>
                ) : (
                  <div className="w-full aspect-square bg-surface-alt dark:bg-surface-dark rounded border border-border dark:border-border-dark flex items-center justify-center">
                    <span className="text-xs text-muted dark:text-text-dark-muted">Pending</span>
                  </div>
                )}
                <p className="text-xs text-muted dark:text-text-dark-muted mt-1 truncate" title={item.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
