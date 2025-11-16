import React from "react";

type ViewMoreProps = {
  title?: string;
  children: React.ReactNode;
};

export default function ViewMore({ title, children }: ViewMoreProps) {
  return (
    <details className="mb-2 view-more-details">
      <summary className="flex items-center mb-1 cursor-pointer list-none">
        <span className="view-more-button px-4 py-1 text-sm rounded border border-gray-300 transition-colors hover:bg-gray-100"></span>
        {title && <h4 className="ml-3 text-lg font-semibold">{title}</h4>}
      </summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}

