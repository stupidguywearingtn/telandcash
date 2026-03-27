import { motion } from 'framer-motion';

export function StoreStory() {
  return (
    <section className="py-24 bg-[#FCFBF8] overflow-hidden">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="relative mb-3 ml-1 w-full">
              <p className="font-['Caveat'] text-[#3b82f6] text-3xl -rotate-2 inline-block">fait avec passion</p>
              {/* Curved arrow from annotation */}
              <svg width="40" height="40" viewBox="0 0 50 50" className="absolute -top-2 left-40 stroke-[#3b82f6] fill-none stroke-[2px] opacity-70 hidden sm:block" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                <path d="M 5 5 Q 25 30 5 45 M 5 45 L 14 45 M 5 45 L 8 35" />
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-[1.1] tracking-tight text-slate-900 relative">
              Pas un entrepôt.<br />
              <span className="gradient-text-blue-animated relative inline-block">
                Une vraie boutique.
                {/* Wavy Underline */}
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute -bottom-3 left-0 w-full h-3 stroke-[#3b82f6] fill-none stroke-[2.5px] opacity-70" style={{strokeLinecap: 'round'}}>
                  <path d="M 0 10 Q 12 0 25 10 T 50 10 T 75 10 T 100 10"/>
                </svg>
              </span>
            </h2>
            
            <ul className="space-y-6 mb-10">
              {[
                { label: "Équipe locale", desc: "Tout est géré depuis nos locaux à Angers" },
                { label: "Diagnostic précis", desc: "Chaque appareil passe entre nos mains expertes" },
                { label: "SAV direct", desc: "Pas de centre d'appels délocalisés, nous vous répondons directement" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
                  </span>
                  <span className="text-slate-600 font-medium text-lg leading-relaxed">
                    <strong className="text-slate-900">{item.label}</strong> — <span className="text-slate-500">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="relative">
              <button className="border-2 border-slate-900 text-slate-900 font-bold text-lg px-8 py-3.5 rounded-xl hover:bg-slate-900 hover:text-white transition-colors shadow-sm relative z-10 bg-white hover:shadow-xl hover:shadow-slate-900/20">
                Nous rendre visite
              </button>
              {/* Sparkle near CTA */}
              <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -top-2 -right-6 stroke-yellow-400 fill-none stroke-[2px] opacity-100 z-0 animate-pulse hidden sm:block delay-300" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z"/>
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center relative mt-16 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-[300px] h-[340px] md:w-[360px] md:h-[460px] rounded-2xl bg-white border-[10px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden" style={{ transform: "rotate(2deg)" }}>
                <div className="w-full h-full rounded-xl flex items-center justify-center relative bg-slate-100">
                  <span className="text-slate-400 font-medium absolute z-0 text-sm">Notre boutique</span>
                  <img src="https://images.unsplash.com/photo-1621379183861-fede97299a91?auto=format&fit=crop&w=800&q=80" alt="Boutique Tel & Cash" className="w-full h-full object-cover opacity-90 grayscale-[10%] relative z-10 hover:grayscale-0 hover:scale-105 transition-all duration-700" />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-full px-5 py-2.5 text-sm font-bold animate-levitate border border-slate-100 flex items-center gap-2 z-20">
                <span className="text-yellow-400 text-base">⭐</span> <span className="text-slate-800">5/5</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-full px-5 py-2.5 text-sm font-bold text-slate-800 animate-levitate border border-slate-100 flex items-center gap-2 z-20" style={{ animationDelay: "0.5s" }}>
                <span>📍</span> Angers
              </div>
              <div className="absolute top-1/2 -right-12 bg-[#0A0F1E] text-white shadow-xl rounded-full px-5 py-2.5 text-sm font-bold animate-levitate z-20 border border-white/10" style={{ animationDelay: "1.2s" }}>
                +5 ans d'expérience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
