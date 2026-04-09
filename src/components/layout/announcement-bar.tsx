import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 bg-orange-500 text-white text-center text-sm py-2.5 px-4">
      <div className="page-width flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-sm animate-pulse">warning</span>
        <Link href="/koningsdag" className="hover:underline">
          <strong>⏰ Laatste kans!</strong> Bestel vóór 13 april voor levering op Koningsdag — <strong>Shop oranje →</strong>
        </Link>
      </div>
    </div>
  );
}
