"use client";

interface SortBarProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { value: "recommended", label: "Aanbevolen" },
  { value: "price-asc", label: "Prijs laag-hoog" },
  { value: "price-desc", label: "Prijs hoog-laag" },
];

export function SortBar({ value, onChange }: SortBarProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <p className="text-sm text-text-secondary">
        3 producten
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-text-secondary">
          Sorteer:
        </label>
        <select
          id="sort"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm border border-border rounded-2xl px-3 py-2 bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-green"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
