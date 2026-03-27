import { motion } from 'framer-motion';

export function WhyRefurbished() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column (Content) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            {/* Handwritten annotation */}
            <div className="text-[#3b82f6] font-['Caveat'] text-2xl md:text-3xl -rotate-2 mb-3 ml-1">
              on vous explique tout
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
              Un smartphone reconditionné,<br /> c'est quoi exactement ?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl font-medium leading-relaxed">
              Un téléphone reconditionné a été collecté, diagnostiqué, réparé si nécessaire, puis testé sur plus de 60 points de contrôle par nos techniciens passionnés.
            </p>

            {/* Premium Grid 2x2 with Sketchy Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              
              <div className="bg-white p-5 rounded-3xl border-2 border-slate-100 flex flex-col gap-3 group hover:border-blue-200 transition-colors shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full pointer-events-none" />
                <svg width="32" height="32" viewBox="0 0 40 40" className="stroke-[#3b82f6] fill-none stroke-2 shrink-0 mb-1" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                  <path d="M 12 20 L 18 26 L 28 12" />
                  <circle cx="20" cy="20" r="16" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                </svg>
                <div className="relative z-10">
                  <div className="font-bold text-slate-900 text-lg">+60 points</div>
                  <div className="text-sm font-medium text-slate-500">de contrôle stricts</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border-2 border-slate-100 flex flex-col gap-3 group hover:border-[#22c55e]/30 transition-colors shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50/50 rounded-bl-full pointer-events-none" />
                <svg width="32" height="32" viewBox="0 0 40 40" className="stroke-[#22c55e] fill-none stroke-2 shrink-0 mb-1" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                  <rect x="8" y="12" width="20" height="16" rx="2" />
                  <path d="M 28 16 L 31 16 C 32 16 33 17 33 18 L 33 22 C 33 23 32 24 31 24 L 28 24" />
                  <path d="M 12 16 L 12 24 M 16 16 L 16 24 M 20 16 L 20 24" strokeWidth="3" />
                </svg>
                <div className="relative z-10">
                  <div className="font-bold text-slate-900 text-lg">Batterie</div>
                  <div className="text-sm font-medium text-slate-500">certifiée ≥85%</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border-2 border-slate-100 flex flex-col gap-3 group hover:border-purple-200 transition-colors shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-50/50 rounded-bl-full pointer-events-none" />
                <svg width="32" height="32" viewBox="0 0 40 40" className="stroke-purple-600 fill-none stroke-2 shrink-0 mb-1" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                  <path d="M 10 20 A 10 10 0 0 1 30 20 A 10 10 0 0 1 10 20 Z" />
                  <path d="M 10 20 L 15 15 M 10 20 L 15 25" />
                  <path d="M 30 20 L 25 15 M 30 20 L 25 25" />
                </svg>
                <div className="relative z-10">
                  <div className="font-bold text-slate-900 text-lg">Retour 30j</div>
                  <div className="text-sm font-medium text-slate-500">Satisfait ou remboursé</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border-2 border-slate-100 flex flex-col gap-3 group hover:border-amber-200 transition-colors shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50/50 rounded-bl-full pointer-events-none" />
                <svg width="32" height="32" viewBox="0 0 40 40" className="stroke-amber-500 fill-none stroke-2 shrink-0 mb-1" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                  <path d="M 20 5 L 32 10 L 32 20 C 32 28 20 35 20 35 C 20 35 8 28 8 20 L 8 10 Z" />
                  <path d="M 16 18 L 20 22 L 26 14" />
                </svg>
                <div className="relative z-10">
                  <div className="font-bold text-slate-900 text-lg">Garantie 24m</div>
                  <div className="text-sm font-medium text-slate-500">Sérénité totale incluse</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column (Image with pedagogical pedagogy) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 md:mt-0 px-4"
          >
            {/* Ambient pedagogy glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square bg-[#3b82f6] blur-[100px] opacity-[0.15] rounded-full pointer-events-none" />

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[10px] border-white bg-white rotate-2 z-10">
              <img 
                src="https://images.unsplash.com/photo-1556656793-08538af09e9d?auto=format&fit=crop&w=1200&q=80" 
                alt="Refurbished Smartphone Workshop" 
                className="w-full aspect-[4/5] object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            
            {/* Floating pedagogical details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-10 -left-6 md:-left-12 bg-white rounded-full p-4 shadow-xl border border-slate-100 z-20 animate-levitate"
              style={{ animationDelay: '0.2s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="stroke-[#3b82f6] fill-none stroke-2" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="11" />
                <line x1="11" y1="14" x2="11.01" y2="14" />
              </svg>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 md:-right-4 bg-white p-5 rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-slate-100 z-20 flex flex-col gap-1 min-w-[200px]"
            >
              <div className="font-['Caveat'] text-[#3b82f6] text-xl mb-1">Comme neuf !</div>
              <div className="flex bg-slate-100/50 p-2 rounded-xl gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">✨</div>
                <span className="text-slate-600 font-bold text-sm leading-tight">100% fonctionnel garanti</span>
              </div>
            </motion.div>

            {/* Doodle Arrow */}
            <svg width="80" height="80" viewBox="0 0 80 80" className="absolute -bottom-16 left-10 md:-left-10 stroke-slate-300 fill-none stroke-[3] -rotate-12 z-0 hidden md:block" style={{strokeLinecap: 'round'}}>
              <path d="M 70 10 Q 30 20 10 60 M 10 60 L 25 55 M 10 60 L 15 45" />
            </svg>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
