import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <Projects />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} NovaConstruct. All rights reserved.</p>
          <div className="text-sm text-neutral-400">Licensed • Insured • Safety-first</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
