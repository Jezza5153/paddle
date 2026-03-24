import { Shield } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 bg-accent-navy text-white text-center text-sm py-2.5 px-4">
      <div className="page-width flex items-center justify-center gap-2">
        <Shield className="h-3.5 w-3.5 shrink-0" />
        <span>Veilig afrekenen met iDEAL | Wero, kaart, Apple Pay en Google Pay</span>
      </div>
    </div>
  );
}
