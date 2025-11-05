import Image from 'next/image'
import Link from 'next/link'

const birds = [
  { name: 'Kingfisher', img: '/birds/kingfisher.svg', desc: 'Aqua missile with precision dives.' },
  { name: 'Hummingbird', img: '/birds/hummingbird.svg', desc: 'Wingbeats up to 80 per second.' },
  { name: 'Toucan', img: '/birds/toucan.svg', desc: 'Oversized beak, oversized personality.' },
  { name: 'Owl', img: '/birds/owl.svg', desc: 'Silent flight, night vision master.' },
  { name: 'Flamingo', img: '/birds/flamingo.svg', desc: 'Graceful, balanced, perfectly pink.' },
  { name: 'Eagle', img: '/birds/eagle.svg', desc: 'Apex flyer with razor focus.' }
]

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 backdrop-blur-md">
        <nav className="section mt-4 mb-4">
          <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
            <Link href="#" className="text-lg font-semibold gradient-text">Aviaire</Link>
            <div className="flex items-center gap-4 text-sm">
              <a href="#gallery" className="opacity-80 hover:opacity-100">Gallery</a>
              <a href="#facts" className="opacity-80 hover:opacity-100">Facts</a>
              <a href="#about" className="opacity-80 hover:opacity-100">About</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="section pt-10 md:pt-16">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Birds, but make it <span className="gradient-text">glass</span>
              </h1>
              <p className="mt-4 text-white/80 max-w-prose">
                Explore an elegant collection of birds with a modern glassmorphic aesthetic.
                Smooth gradients, soft blur, and vibrant color?designed for the web.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#gallery" className="px-5 py-2 rounded-xl bg-blue-500/80 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20">View gallery</a>
                <a href="#facts" className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20">Learn facts</a>
              </div>
            </div>
            <div>
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 rounded-3xl glass" />
                <Image src="/birds/hummingbird.svg" alt="Hummingbird" fill className="object-contain p-8" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section pt-12 md:pt-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {birds.map((b) => (
            <div key={b.name} className="glass rounded-2xl p-4 hover:bg-white/15 transition-colors">
              <div className="relative h-48">
                <Image src={b.img} alt={b.name} fill className="object-contain p-4" />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold">{b.name}</h3>
                <p className="text-white/70 text-sm">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="facts" className="section pt-12 md:pt-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Bird Facts</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            t: 'Feather Engineering', d: 'Feathers balance insulation, flight, and display.'
          }, {
            t: 'Navigation', d: 'Many birds navigate via magnetic fields and stars.'
          }, {
            t: 'Communication', d: 'Song complexity rivals human language patterns.'
          }, {
            t: 'Metabolism', d: 'Hummingbirds have the highest metabolic rates.'
          }].map((f) => (
            <div key={f.t} className="glass rounded-2xl p-5">
              <p className="font-medium">{f.t}</p>
              <p className="text-white/70 text-sm mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section pt-12 md:pt-20 pb-20">
        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">About Aviaire</h2>
          <p className="text-white/80 mt-3 max-w-prose">
            Aviaire is a minimalist celebration of avian beauty with glassmorphic design principles.
            Built with Next.js and Tailwind CSS for speed, accessibility, and maintainability.
          </p>
        </div>
        <footer className="mt-10 text-center text-white/60 text-sm">
          ? {new Date().getFullYear()} Aviaire. Crafted with care.
        </footer>
      </section>
    </main>
  )
}
