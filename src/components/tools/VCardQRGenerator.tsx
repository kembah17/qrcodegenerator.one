"use client";

import { useState, useMemo } from "react";
import { defaultQROptions, type QROptions } from "@/lib/qr-utils";
import QRCustomizationPanel from "./QRCustomizationPanel";
import QRPreview from "./QRPreview";

interface VCardData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  title: string;
  website: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const emptyVCard: VCardData = {
  firstName: "", lastName: "", phone: "", email: "",
  company: "", title: "", website: "",
  street: "", city: "", state: "", zip: "", country: "",
};

export default function VCardQRGenerator() {
  const [vcard, setVcard] = useState<VCardData>(emptyVCard);
  const [customization, setCustomization] = useState(defaultQROptions);

  const vcardString = useMemo(() => {
    if (!vcard.firstName && !vcard.lastName) return "";
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${vcard.lastName};${vcard.firstName};;;`,
      `FN:${vcard.firstName} ${vcard.lastName}`.trim(),
    ];
    if (vcard.company) lines.push(`ORG:${vcard.company}`);
    if (vcard.title) lines.push(`TITLE:${vcard.title}`);
    if (vcard.phone) lines.push(`TEL;TYPE=CELL:${vcard.phone}`);
    if (vcard.email) lines.push(`EMAIL:${vcard.email}`);
    if (vcard.website) lines.push(`URL:${vcard.website}`);
    if (vcard.street || vcard.city || vcard.state || vcard.zip || vcard.country) {
      lines.push(`ADR;TYPE=WORK:;;${vcard.street};${vcard.city};${vcard.state};${vcard.zip};${vcard.country}`);
    }
    lines.push("END:VCARD");
    return lines.join("\n");
  }, [vcard]);

  const qrOptions: QROptions = useMemo(() => ({
    ...customization,
    data: vcardString,
  }), [vcardString, customization]);

  const updateField = (field: keyof VCardData, value: string) => {
    setVcard((prev) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setVcard(emptyVCard);
    setCustomization(defaultQROptions);
  };

  const fields: { key: keyof VCardData; label: string; placeholder: string; type?: string }[] = [
    { key: "firstName", label: "First Name", placeholder: "John" },
    { key: "lastName", label: "Last Name", placeholder: "Doe" },
    { key: "phone", label: "Phone", placeholder: "+1 234 567 8900", type: "tel" },
    { key: "email", label: "Email", placeholder: "john@example.com", type: "email" },
    { key: "company", label: "Company", placeholder: "Acme Inc." },
    { key: "title", label: "Job Title", placeholder: "Software Engineer" },
    { key: "website", label: "Website", placeholder: "https://example.com", type: "url" },
    { key: "street", label: "Street", placeholder: "123 Main St" },
    { key: "city", label: "City", placeholder: "New York" },
    { key: "state", label: "State", placeholder: "NY" },
    { key: "zip", label: "ZIP Code", placeholder: "10001" },
    { key: "country", label: "Country", placeholder: "USA" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {fields.map((f) => (
            <div key={f.key} className={f.key === "street" || f.key === "website" ? "col-span-2" : ""}>
              <label htmlFor={`vcard-${f.key}`} className="block text-xs font-medium text-muted dark:text-text-dark-muted mb-1">
                {f.label}
              </label>
              <input
                id={`vcard-${f.key}`}
                type={f.type || "text"}
                value={vcard[f.key]}
                onChange={(e) => updateField(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="input-field !text-sm !py-2"
              />
            </div>
          ))}
        </div>
        <QRCustomizationPanel options={customization} onChange={setCustomization} />
        <button onClick={handleClear} className="btn-secondary w-full text-sm">
          Clear &amp; Reset
        </button>
      </div>
      <div className="lg:col-span-2">
        <div className="card">
          <h3 className="font-semibold text-text dark:text-text-dark mb-4">vCard QR Code Preview</h3>
          {(vcard.firstName || vcard.lastName) && (
            <div className="mb-4 p-4 bg-surface-alt dark:bg-surface-dark rounded-lg border border-border dark:border-border-dark">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
                  {(vcard.firstName[0] || "").toUpperCase()}{(vcard.lastName[0] || "").toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-text dark:text-text-dark">
                    {vcard.firstName} {vcard.lastName}
                  </p>
                  {vcard.title && <p className="text-sm text-muted dark:text-text-dark-muted">{vcard.title}</p>}
                  {vcard.company && <p className="text-sm text-muted dark:text-text-dark-muted">{vcard.company}</p>}
                  {vcard.phone && <p className="text-xs text-muted dark:text-text-dark-muted mt-1">{vcard.phone}</p>}
                  {vcard.email && <p className="text-xs text-muted dark:text-text-dark-muted">{vcard.email}</p>}
                </div>
              </div>
            </div>
          )}
          <QRPreview options={qrOptions} filename="vcard-qrcode" />
        </div>
      </div>
    </div>
  );
}
