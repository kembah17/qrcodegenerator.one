import QRCode from "qrcode";

export interface QROptions {
  data: string;
  size: number;
  fgColor: string;
  bgColor: string;
  errorCorrection: "L" | "M" | "Q" | "H";
  logoFile?: File | null;
  cornerStyle: "square" | "rounded";
}

export async function generateQRDataURL(options: QROptions): Promise<string> {
  const { data, size, fgColor, bgColor, errorCorrection } = options;
  if (!data) return "";

  try {
    const dataUrl = await QRCode.toDataURL(data, {
      width: size,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: errorCorrection,
    });
    return dataUrl;
  } catch {
    return "";
  }
}

export async function generateQRCanvas(
  options: QROptions,
  canvas: HTMLCanvasElement
): Promise<void> {
  const { data, size, fgColor, bgColor, errorCorrection, logoFile, cornerStyle } = options;
  if (!data) return;

  const tempCanvas = document.createElement("canvas");
  await QRCode.toCanvas(tempCanvas, data, {
    width: size,
    margin: 2,
    color: { dark: fgColor, light: bgColor },
    errorCorrectionLevel: errorCorrection,
  });

  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (cornerStyle === "rounded") {
    ctx.clearRect(0, 0, size, size);
    const radius = 16;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.clip();
  }

  ctx.drawImage(tempCanvas, 0, 0, size, size);

  if (logoFile) {
    try {
      const logoUrl = URL.createObjectURL(logoFile);
      const logoImg = new Image();
      await new Promise<void>((resolve, reject) => {
        logoImg.onload = () => resolve();
        logoImg.onerror = () => reject();
        logoImg.src = logoUrl;
      });

      const logoSize = size * 0.22;
      const logoX = (size - logoSize) / 2;
      const logoY = (size - logoSize) / 2;
      const padding = 6;

      ctx.fillStyle = bgColor;
      ctx.beginPath();
      const r = 8;
      const lx = logoX - padding;
      const ly = logoY - padding;
      const lw = logoSize + padding * 2;
      const lh = logoSize + padding * 2;
      ctx.moveTo(lx + r, ly);
      ctx.lineTo(lx + lw - r, ly);
      ctx.quadraticCurveTo(lx + lw, ly, lx + lw, ly + r);
      ctx.lineTo(lx + lw, ly + lh - r);
      ctx.quadraticCurveTo(lx + lw, ly + lh, lx + lw - r, ly + lh);
      ctx.lineTo(lx + r, ly + lh);
      ctx.quadraticCurveTo(lx, ly + lh, lx, ly + lh - r);
      ctx.lineTo(lx, ly + r);
      ctx.quadraticCurveTo(lx, ly, lx + r, ly);
      ctx.closePath();
      ctx.fill();

      ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
      URL.revokeObjectURL(logoUrl);
    } catch {
      // Logo embedding failed, QR still valid
    }
  }
}

export async function generateQRSVG(options: QROptions): Promise<string> {
  const { data, size, fgColor, bgColor, errorCorrection } = options;
  if (!data) return "";

  try {
    const svg = await QRCode.toString(data, {
      type: "svg",
      width: size,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: errorCorrection,
    });
    return svg;
  } catch {
    return "";
  }
}

export function downloadCanvasAs(
  canvas: HTMLCanvasElement,
  filename: string,
  format: "png" | "jpeg" | "svg",
  svgString?: string
) {
  if (format === "svg" && svgString) {
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    return;
  }

  const mimeType = format === "jpeg" ? "image/jpeg" : "image/png";
  const ext = format === "jpeg" ? "jpg" : "png";
  const dataUrl = canvas.toDataURL(mimeType, 0.95);
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `${filename}.${ext}`;
  a.click();
}

export const defaultQROptions: Omit<QROptions, "data"> = {
  size: 300,
  fgColor: "#000000",
  bgColor: "#ffffff",
  errorCorrection: "M",
  logoFile: null,
  cornerStyle: "square",
};
