export default function Projects() {
  const projects = [
    {
      name: 'Aurora Office Tower',
      tag: 'Commercial',
      gradient: 'from-cyan-500 to-fuchsia-500',
    },
    {
      name: 'Harbor View Residences',
      tag: 'Residential',
      gradient: 'from-blue-500 to-emerald-500',
    },
    {
      name: 'Gridline Tech Hub',
      tag: 'Industrial',
      gradient: 'from-violet-500 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="relative bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected projects</h2>
          <p className="mt-3 text-neutral-400">
            A snapshot of recent builds blending functionality, aesthetics, and performance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40"
            >
              <div className={`h-48 w-full bg-gradient-to-r ${p.gradient} opacity-80`} />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-200 ring-1 ring-white/10">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Built to spec with streamlined delivery and rigorous safety standards.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div id="contact" className="mt-14 flex flex-col items-center gap-4">
          <h3 className="text-white text-xl font-semibold">Ready to build?</h3>
          <a
            href="#"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-fuchsia-500/20"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
