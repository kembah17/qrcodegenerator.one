"use client";

import { useState, useMemo } from "react";
import { defaultQROptions, type QROptions } from "@/lib/qr-utils";
import QRCustomizationPanel from "./QRCustomizationPanel";
import QRPreview from "./QRPreview";

type EncryptionType = "WPA" | "WEP" | "nopass";

export default function WiFiQRGenerator() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState<EncryptionType>("WPA");
  const [hidden, setHidden] = useState(false);
  const [customization, setCustomization] = useState(defaultQROptions);

  const wifiString = useMemo(() => {
    if (!ssid) return "";
    const escapedSsid = ssid.replace(/([\\;,:"\\])/g, "\\$1");
    const escapedPass = password.replace(/([\\;,:"\\])/g, "\\$1");
    return `WIFI:T:${encryption};S:${escapedSsid};P:${escapedPass};H:${hidden ? "true" : "false"};;`;
  }, [ssid, password, encryption, hidden]);

  const qrOptions: QROptions = useMemo(() => ({
    ...customization,
    data: wifiString,
  }), [wifiString, customization]);

  const handleClear = () => {
    setSsid("");
    setPassword("");
    setEncryption("WPA");
    setHidden(false);
    setCustomization(defaultQROptions);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-4">
        <div>
          <label htmlFor="ssid-input" className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-2">
            Network Name (SSID)
          </label>
          <input
            id="ssid-input"
            type="text"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
            placeholder="MyWiFiNetwork"
            className="input-field"
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="wifi-password" className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-2">
            Password
          </label>
          <input
            id="wifi-password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter WiFi password"
            className="input-field"
            disabled={encryption === "nopass"}
          />
        </div>
        <div>
          <label htmlFor="encryption-type" className="block text-sm font-medium text-muted dark:text-text-dark-muted mb-2">
            Encryption Type
          </label>
          <select
            id="encryption-type"
            value={encryption}
            onChange={(e) => setEncryption(e.target.value as EncryptionType)}
            className="select-field"
          >
            <option value="WPA">WPA/WPA2/WPA3</option>
            <option value="WEP">WEP</option>
            <option value="nopass">None (Open Network)</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <input
            id="hidden-network"
            type="checkbox"
            checked={hidden}
            onChange={(e) => setHidden(e.target.checked)}
            className="w-4 h-4 accent-primary cursor-pointer"
          />
          <label htmlFor="hidden-network" className="text-sm text-muted dark:text-text-dark-muted cursor-pointer">
            Hidden Network
          </label>
        </div>
        <QRCustomizationPanel options={customization} onChange={setCustomization} />
        <button onClick={handleClear} className="btn-secondary w-full text-sm">
          Clear &amp; Reset
        </button>
      </div>
      <div className="lg:col-span-2">
        <div className="card">
          <h3 className="font-semibold text-text dark:text-text-dark mb-4">WiFi QR Code Preview</h3>
          {ssid && (
            <div className="mb-4 p-3 bg-surface-alt dark:bg-surface-dark rounded-lg border border-border dark:border-border-dark">
              <p className="text-sm text-muted dark:text-text-dark-muted">
                <span className="font-medium">Network:</span> {ssid} | <span className="font-medium">Security:</span> {encryption === "nopass" ? "Open" : encryption} {hidden && "| Hidden"}
              </p>
            </div>
          )}
          <QRPreview options={qrOptions} filename="wifi-qrcode" />
        </div>
      </div>
    </div>
  );
}
