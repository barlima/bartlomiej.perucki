"use client";

export default function DownloadPdfButton() {
  return (
    <a
      href="/api/cv-pdf"
      className="fixed top-4 right-4 z-50 px-3 py-1.5 text-xs font-semibold bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 transition-colors print:hidden"
    >
      Download as PDF
    </a>
  );
}
