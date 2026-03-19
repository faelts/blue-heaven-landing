import { ArrowRight, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-[#050a14] text-white font-sans">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif tracking-tighter uppercase italic">
          Blue <span className="font-bold text-blue-400 text-sm italic">HEAVEN</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.3em] font-light">
          <a href="#" className="hover:text-blue-400 transition">Projetos</a>
          <a href="#" className="hover:text-blue-400 transition">Sobre Nós</a>
          <a href="#" className="hover:text-blue-400 transition">Contato</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050a14]"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-serif italic mb-6 tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Arquitetura em <br /> <span className="text-blue-400 font-bold not-italic">Sinfonia</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.5em] mb-12">
            Balneário Camboriú | Santa Catarina
          </p>
          <button className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-blue-400 hover:text-white transition-all duration-300">
            Conhecer Portfólio
          </button>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif italic mb-16 border-l-4 border-blue-400 pl-6 uppercase tracking-widest">Lançamentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1600607687940-4e524cb35797?q=80&w=2070`} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest">Infinitá Treehouse</h3>
                  <p className="text-zinc-500 text-xs mt-2 uppercase tracking-tighter">Design Biofílico | Praia Brava</p>
                </div>
                <ArrowRight className="w-6 h-6 text-blue-400 group-hover:translate-x-2 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/40 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="text-xl font-serif italic mb-8 uppercase">Blue Heaven</div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Transformando a paisagem urbana com sofisticação e propósito.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-zinc-400 text-sm uppercase tracking-widest font-light">
            <div className="flex items-center gap-3"><MapPin size={16} className="text-blue-400"/> Balneário Camboriú, SC</div>
            <div className="flex items-center gap-3"><Phone size={16} className="text-blue-400"/> (47) 99999-9999</div>
            <div className="flex items-center gap-3"><Mail size={16} className="text-blue-400"/> contato@blueheaven.com.br</div>
          </div>
          <div className="flex gap-6 justify-end">
            <Instagram className="hover:text-blue-400 cursor-pointer transition" />
            <Facebook className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>
      </footer>
    </div>
  )
}