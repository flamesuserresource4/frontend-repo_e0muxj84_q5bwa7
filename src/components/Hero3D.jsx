import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Hero 3D">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays should not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.6)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur">
            Building the future • On time • On budget
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Precision. Performance. Architectural Impact.
          </h1>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg">
            We craft high-performance commercial and residential spaces with modern techniques and uncompromising quality.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Explore Services
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl border border-white/20 bg-neutral-900/70 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
