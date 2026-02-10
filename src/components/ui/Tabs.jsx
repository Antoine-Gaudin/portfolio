import { useState } from "react";

/**
 * Tab navigation component.
 * Handles tab switching with animated indicator.
 */
export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-1 rounded-xl bg-white/[0.03] p-1 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
            activeTab === tab.id
              ? "bg-brand text-black shadow-sm"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
