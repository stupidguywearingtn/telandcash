import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0A0F1E] text-white overflow-hidden relative border-y border-[#2563EB]/10">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column (Text & Stats) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            {/* Cursive annotation */}
            <div className="text-[#3b82f6] font-['Caveat'] text-2xl md:text-3xl -rotate-2 mb-3 ml-1">
              le choix intelligent
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight mb-8 leading-[1.1]">
              Jusqu'à <span className="text-[#3b82f6]">-70%</span><br />
              sur les meilleurs smartphones
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-lg font-medium leading-relaxed">
              Ne choisissez plus entre qualité et prix. Profitez de la même expérience qu'un appareil neuf, avec une garantie totale et un prix qui a enfin du sens.
            </p>

            {/* Structured Stats Row - Clean, Legible, Unambiguous */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12 border-l-2 sm:border-l-0 border-[#3b82f6]/30 pl-6 sm:pl-0 sm:border-t sm:border-white/10 sm:pt-10">
              <div className="flex flex-col leading-tight">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">+500 000</div>
                <div className="text-sm font-bold text-[#3b82f6] tracking-wide uppercase">Clients ravis</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">24 mois</div>
                <div className="text-sm font-bold text-[#3b82f6] tracking-wide uppercase">De Garantie</div>
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">350€</div>
                <div className="text-sm font-bold text-[#3b82f6] tracking-wide uppercase">Économisés moy.</div>
              </div>
            </div>

            <Link to="/boutique">
              <Button className="px-8 py-3.5 text-base font-semibold rounded-lg bg-white text-[#0A0F1E] hover:bg-slate-200 transition-all flex items-center gap-2 group shadow-xl">
                Découvrir nos offres
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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
              
              {/* Central Glowing Phone Mockup */}
              <motion.img 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="https://www.pngmart.com/files/22/iPhone-14-Pro-PNG-Isolated-HD.png" // Different phone mockup
                alt="Smartphone Premium Reconditionné"
                className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10"
              />

              {/* Badges - Kept fully inside or overlapping safely, proportional */}
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
                className="absolute bottom-12 -right-6 md:-right-8 bg-[#3b82f6] rounded-2xl px-5 py-4 shadow-[0_15px_35px_rgba(59,130,246,0.3)] z-20 flex items-center gap-4"
              >
                <TrendingDown className="w-6 h-6 text-white" />
                <div className="flex flex-col leading-none">
                  <span className="font-black text-white text-xl">-70%</span>
                  <span className="text-white/80 text-[10px] uppercase font-bold tracking-wider mt-1">vs prix neuf</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute top-[40%] -right-4 md:-right-6 bg-white rounded-full p-2 shadow-xl z-20 flex items-center"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0A0F1E]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

