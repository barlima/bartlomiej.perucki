import React from "react";

type ViewMoreProps = {
  title?: string;
  children: React.ReactNode;
};

export default function ViewMore({ title, children }: ViewMoreProps) {
  return (
    <details className="mb-2 view-more-details">
      <summary className="flex items-center mb-1 w-min list-none whitespace-nowrap cursor-pointer">
        <span className="px-4 py-1 text-sm rounded border border-gray-300 transition-colors view-more-button hover:bg-gray-100"></span>
        {title && <h4 className="ml-3 text-lg font-semibold">{title}</h4>}
      </summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}
