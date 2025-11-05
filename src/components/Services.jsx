import { HardHat, Hammer, Ruler, Building2 } from 'lucide-react';

const features = [
  {
    title: 'General Contracting',
    icon: HardHat,
    description:
      'End-to-end project delivery with certified crews, clear timelines, and diligent site management.',
  },
  {
    title: 'Structural & Framing',
    icon: Hammer,
    description:
      'Steel and timber systems engineered for durability, speed, and precision across all scales.',
  },
  {
    title: 'Fit-Out & Interiors',
    icon: Ruler,
    description:
      'Premium finishes, millwork, and MEP coordination for refined, functional environments.',
  },
  {
    title: 'Commercial Builds',
    icon: Building2,
    description:
      'From offices to retail, we deliver code-compliant spaces that elevate brand and performance.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Services built for scale</h2>
          <p className="mt-3 text-neutral-400">
            A collaborative process, transparent budgets, and craftsmanship at every stage.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 p-6 transition hover:border-cyan-400/40 hover:bg-neutral-900/60"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-400/0 via-fuchsia-400/0 to-fuchsia-400/0 opacity-0 transition group-hover:opacity-100 pointer-events-none" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/40">
                <f.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
