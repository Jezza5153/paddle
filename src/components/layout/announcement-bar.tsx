import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-50 bg-orange-500 text-white text-center text-sm py-2.5 px-4">
      <div className="page-width flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-sm">celebration</span>
        <Link href="/koningsdag" className="hover:underline">
          <strong>Koningsdag 27 april</strong> — Bestel nu je oranje outfit! | Veilig betalen met iDEAL
        </Link>
      </div>
    </div>
  );
}
