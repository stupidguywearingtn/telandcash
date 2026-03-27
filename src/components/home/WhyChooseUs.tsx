import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowUpRight, CheckCircle2, Battery, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0A0F1E] text-white overflow-hidden relative border-y border-[#2563EB]/10">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column (Text & Stats) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] font-bold text-[11px] tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              L'excellence accessible
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight mb-8 leading-[1.05]">
              Jusqu'à <span className="text-[#2563EB] relative whitespace-nowrap">
                -70%
                {/* Handwritten or underline touch */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#2563EB] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 2" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span><br />
              sur les meilleurs<br />smartphones
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-lg font-medium leading-relaxed">
              Pourquoi payer le prix fort ? Profitez de la même qualité qu'un appareil neuf, avec une garantie totale et un prix qui a enfin du sens. Le reconditionné, mais en mieux.
            </p>

            {/* Stats Row with refined typography */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 w-full mb-12 pb-12 border-b border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">+50k</div>
                <div className="text-xs md:text-sm text-[#2563EB] font-bold uppercase tracking-wider">Clients ravis</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">24m</div>
                <div className="text-xs md:text-sm text-[#2563EB] font-bold uppercase tracking-wider">De Garantie</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-[#2563EB] mb-2">-350€</div>
                <div className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-wider">Économie moy.</div>
              </div>
            </div>

            <Link to="/boutique">
              <Button className="pl-6 pr-4 py-4 md:py-6 text-sm md:text-base font-bold rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] border border-blue-400/20 transition-all hover:-translate-y-1 flex items-center gap-3">
                Voir tous nos modèles
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Button>
            </Link>
          </motion.div>

          {/* Right Column (Heroic Visual Staging) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
          >
            {/* The Stage */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] bg-gradient-to-br from-[#1E293B] to-[#0A0F1E] border border-white/10 shadow-2xl flex items-center justify-center p-8 overflow-hidden group">
               {/* Grid Pattern inside the stage */}
              <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
              
              {/* Central Glowing Phone */}
              <motion.img 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://www.pngmart.com/files/22/iPhone-14-Pro-Max-PNG-Pic.png"
                alt="Smartphone Premium Reconditionné"
                className="w-[85%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Reassurance Badges */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-[12%] right-[-2%] md:right-[-8%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl z-20 flex flex-col gap-1 items-start"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <span className="font-bold text-white text-sm">État Premium</span>
                </div>
                <span className="text-white/60 text-xs pl-7">Zéro rayure garantie</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-[20%] left-[-2%] md:left-[-8%] bg-[#2563EB] text-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(37,99,235,0.3)] z-20 flex items-center gap-3"
              >
                <Battery className="w-6 h-6" />
                <div className="flex flex-col">
                  <span className="font-black text-lg leading-none">100%</span>
                  <span className="text-white/80 text-[10px] uppercase tracking-wider font-bold">Batterie Testée</span>
                </div>
              </motion.div>
            </div>
            
            {/* The creative human touch: a small handwritten pointing arrow/badge */}
            <div className="absolute bottom-[-30px] right-[20%] text-slate-400 rotate-[-10deg] font-medium italic text-sm opacity-80 z-30 pointer-events-none">
              <svg width="60" height="40" viewBox="0 0 60 40" className="absolute -top-6 -left-12 -rotate-12 fill-none stroke-current stroke-2" style={{strokeLinecap: 'round'}}>
                <path d="M 50 10 Q 30 20 10 30 M 10 30 L 25 35 M 10 30 L 15 15" />
              </svg>
              Comme neuf !
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

