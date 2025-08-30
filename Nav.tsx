export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xs bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-mint to-sky" />
          <span className="font-semibold">Evolve’Us Business</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#solutions" className="hover:opacity-70">Solutions</a>
          <a href="#lifestyle" className="hover:opacity-70">Lifestyle & Éditions</a>
          <a href="#pricing" className="hover:opacity-70">Tarifs</a>
          <a href="#demo" className="px-4 py-2 rounded-xl bg-deep text-white hover:opacity-90">Demander une démo</a>
        </div>
      </div>
    </nav>
  );
}
