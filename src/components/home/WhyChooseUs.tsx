import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0A0F1E] text-white overflow-hidden relative border-y border-[#2563EB]/10">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/15 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column (Text & Stats) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start relative relative"
          >
            {/* Cursive annotation */}
            <div className="text-[#3b82f6] font-['Caveat'] text-2xl md:text-3xl -rotate-2 mb-3 ml-1 relative">
              le choix intelligent
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight mb-8 leading-[1.1] relative">
              Jusqu'à <span className="text-[#3b82f6] relative inline-block">
                -70%
                {/* Hand-drawn arrow pointing to -70% */}
                <svg width="60" height="60" viewBox="0 0 60 60" className="absolute -top-12 -right-8 stroke-[#3b82f6] fill-none stroke-2 opacity-80" style={{strokeLinecap: 'round'}}>
                  <path d="M 50 10 Q 30 5 10 25 M 10 25 L 20 20 M 10 25 L 15 35" />
                </svg>
              </span><br />
              sur les meilleurs smartphones
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-lg font-medium leading-relaxed">
              Ne choisissez plus entre qualité et prix. Profitez de la même expérience qu'un appareil neuf, avec une garantie totale et un prix qui a enfin du sens.
            </p>

            {/* Structured Stats Row - Clean, Legible, Unambiguous */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12 border-l-2 sm:border-l-0 border-[#3b82f6]/30 pl-6 sm:pl-0 sm:border-t sm:border-white/10 sm:pt-10">
              <div className="flex flex-col leading-tight">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">500K</div>
                <div className="text-sm font-bold text-[#3b82f6] tracking-wide uppercase">Clients ravis</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">24 mois</div>
                <div className="text-sm font-bold text-[#3b82f6] tracking-wide uppercase">De garantie</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">350€</div>
                <div className="text-sm font-bold text-[#3b82f6] tracking-wide uppercase">Économisés moy.</div>
              </div>
            </div>

            <div className="relative">
              {/* Little sparkle drawing near the CTA */}
              <svg width="40" height="40" viewBox="0 0 40 40" className="absolute -top-4 -right-10 stroke-[#3b82f6] fill-none stroke-2 opacity-80 animate-pulse" style={{strokeLinecap: 'round'}}>
                <path d="M 20 5 L 20 15 M 20 25 L 20 35 M 5 20 L 15 20 M 25 20 L 35 20 M 10 10 L 16 16 M 24 24 L 30 30 M 10 30 L 16 24 M 24 16 L 30 10" />
              </svg>
              
              <Link to="/boutique">
                <Button className="px-8 py-3.5 text-base font-semibold rounded-lg bg-white text-[#0A0F1E] transition-all flex items-center gap-2 group shadow-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] animate-levitate hover:animate-none">
                  Découvrir nos offres
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column (Staging without cropped badges) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center p-4 md:p-8"
          >
            {/* The Visual Stage (Dark, sleek, premium) */}
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[2.5rem] bg-gradient-to-tr from-[#1E293B]/40 to-[#0F172A]/80 border border-white/10 shadow-2xl flex items-center justify-center p-12 overflow-visible">
              
              {/* Central Glowing Phone Mockup, slightly tilted */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full"
              >
                {/* Ambient glow behind phone */}
                <div className="absolute inset-0 bg-[#3b82f6] blur-[80px] opacity-20 transform scale-75" />
                <img 
                  src="https://www.pngmart.com/files/22/iPhone-14-Pro-PNG-Isolated-HD.png"
                  alt="Smartphone Premium Reconditionné"
                  className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10 -rotate-6"
                />
              </motion.div>

              {/* Badges - Kept fully inside or overlapping safely */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 -left-6 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-20 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#3b82f6]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">Garantie 24m</span>
                  <span className="text-white/60 text-[10px] tracking-wider uppercase font-semibold">Incluse</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-12 -right-6 md:-right-8 bg-[#3b82f6] rounded-2xl px-6 py-4 shadow-[0_15px_35px_rgba(59,130,246,0.3)] z-20 flex items-center gap-4"
              >
                <Tag className="w-6 h-6 text-white" />
                <div className="flex flex-col leading-tight">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider line-through decoration-white/50">859€ Neuf</span>
                  <span className="font-black text-white text-2xl">499€</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

