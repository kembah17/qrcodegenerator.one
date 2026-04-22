"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { type QROptions, generateQRCanvas, generateQRSVG, downloadCanvasAs } from "@/lib/qr-utils";

interface QRPreviewProps {
  options: QROptions;
  filename?: string;
}

export default function QRPreview({ options, filename = "qrcode" }: QRPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [svgString, setSvgString] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = useCallback(async () => {
    if (!options.data || !canvasRef.current) return;
    setIsGenerating(true);
    try {
      await generateQRCanvas(options, canvasRef.current);
      const svg = await generateQRSVG(options);
      setSvgString(svg);
    } catch {
      // Generation failed
    }
    setIsGenerating(false);
  }, [options]);

  useEffect(() => {
    const timer = setTimeout(generate, 150);
    return () => clearTimeout(timer);
  }, [generate]);

  const handleDownload = (format: "png" | "jpeg" | "svg") => {
    if (!canvasRef.current) return;
    downloadCanvasAs(canvasRef.current, filename, format, svgString);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center p-6 bg-surface-alt dark:bg-surface-dark rounded-xl border border-border dark:border-border-dark min-h-[200px]">
        {!options.data ? (
          <p className="text-muted dark:text-text-dark-muted text-sm">Enter data to generate QR code</p>
        ) : isGenerating ? (
          <div className="flex items-center gap-2 text-muted dark:text-text-dark-muted">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-sm">Generating...</span>
          </div>
        ) : (
          <canvas ref={canvasRef} className="max-w-full h-auto" />
        )}
      </div>

      {options.data && (
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => handleDownload("png")}
            className="btn-primary text-sm !px-3 !py-2 text-center"
            aria-label="Download as PNG"
          >
            PNG
          </button>
          <button
            onClick={() => handleDownload("svg")}
            className="btn-secondary text-sm !px-3 !py-2 text-center"
            aria-label="Download as SVG"
          >
            SVG
          </button>
          <button
            onClick={() => handleDownload("jpeg")}
            className="btn-secondary text-sm !px-3 !py-2 text-center"
            aria-label="Download as JPEG"
          >
            JPEG
          </button>
        </div>
      )}
    </div>
  );
}
