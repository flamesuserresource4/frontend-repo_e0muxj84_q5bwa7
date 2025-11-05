import { Building2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/40">
              <Building2 className="h-5 w-5 text-cyan-400" />
            </span>
            <span className="text-white font-semibold tracking-wide">NovaConstruct</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a className="hover:text-white transition" href="#services">Services</a>
            <a className="hover:text-white transition" href="#projects">Projects</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20 transition">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
