import { motion } from 'framer-motion';

export function StoreStory() {
  return (
    <section className="py-20 px-4 bg-[#FAFAFA]">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-['Caveat'] text-[#3b82f6] text-3xl mb-2 -rotate-2 ml-1">fait avec passion</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1] tracking-tight text-slate-900">
              Pas un entrepôt.<br />
              <span className="gradient-text-blue-animated">Une vraie boutique.</span>
            </h2>
            <ul className="space-y-5 mb-8">
              {[
                { label: "Équipe locale", desc: "Tout est géré depuis nos locaux à Angers" },
                { label: "Diagnostic précis", desc: "Chaque appareil passe entre nos mains expertes" },
                { label: "SAV direct", desc: "Pas de centre d'appels délocalisés, nous vous répondons directement" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
                  </span>
                  <span className="text-slate-600 font-medium text-lg leading-relaxed">
                    <strong className="text-slate-900">{item.label}</strong> — <span className="text-slate-500">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <button className="border-2 border-slate-900 text-slate-900 font-bold text-lg px-8 py-4 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
              Nous rendre visite
            </button>
          </motion.div>
          <motion.div 
            className="flex justify-center relative mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-[420px] rounded-2xl bg-slate-100 border-[8px] border-white shadow-xl overflow-hidden" style={{ transform: "rotate(2deg)" }}>
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                  <span className="text-slate-400 font-medium absolute z-0 text-sm">Notre boutique</span>
                  <img src="https://images.unsplash.com/photo-1621379183861-fede97299a91?auto=format&fit=crop&w=800&q=80" alt="Boutique" className="w-full h-full object-cover opacity-90 grayscale-[20%] relative z-10" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-full px-5 py-2.5 text-sm font-bold animate-levitate border border-slate-100 flex items-center gap-2">
                <span className="text-yellow-400 text-base">⭐</span> <span className="text-slate-800">5/5</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-full px-5 py-2.5 text-sm font-bold text-slate-800 animate-levitate border border-slate-100 flex items-center gap-2" style={{ animationDelay: "0.5s" }}>
                <span>📍</span> Angers
              </div>
              <div className="absolute top-1/2 -right-10 bg-[#0A0F1E] text-white shadow-lg rounded-full px-5 py-2.5 text-sm font-bold animate-levitate" style={{ animationDelay: "1.2s" }}>
                +5 ans d'expérience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
