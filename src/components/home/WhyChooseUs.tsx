import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0B0F19] text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column (Text & Stats) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-sm mb-6">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              La tech premium à prix juste
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.15]">
              Jusqu'à <span className="text-blue-500"> -70% </span> sur les<br className="hidden sm:block" /> meilleurs smartphones
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-lg font-medium">
              Reconditionné ne veut pas dire compromis. Profitez de la même qualité qu'un appareil neuf, avec une garantie totale et un prix qui a du sens.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 w-full mb-12 border-b border-white/10 pb-12">
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-500 mb-1">+50 000</div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-500 mb-1">24 mois</div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">de garantie incluse</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-blue-500 mb-1">-70%</div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">vs prix neuf</div>
              </div>
            </div>

            <Link to="/catalogue">
              <Button size="lg" className="text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-2xl px-10 py-7 shadow-xl shadow-blue-500/20 font-bold border border-blue-400/20 transition-all hover:-translate-y-1">
                Voir tous nos smartphones
              </Button>
            </Link>
          </motion.div>

          {/* Right Column (Bento Grid) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4 md:gap-6 relative"
          >
            {/* Top Left: Large square image */}
            <div className="col-span-1 rounded-[32px] overflow-hidden relative shadow-2xl h-[250px] md:h-[300px] border border-white/5 group">
              <img src="https://images.unsplash.com/photo-1598327105666-5b89351cb322?auto=format&fit=crop&w=800&q=80" alt="Happy customer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Top Right & Bottom Right wrapper to map grid properly */}
            <div className="col-span-1 flex flex-col gap-4 md:gap-6">
              {/* Top Right: Warranty Card */}
              <div className="bg-[#1A202E] rounded-[32px] p-6 border border-white/5 flex flex-col justify-center h-[120px] md:h-[140px] shadow-xl hover:bg-[#1E2536] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <span className="font-bold text-lg">Garantie</span>
                </div>
                <span className="text-slate-400 text-sm font-medium ml-9">24 mois incluse</span>
              </div>

              {/* Bottom Right: Vertical image */}
              <div className="rounded-[32px] overflow-hidden relative shadow-2xl flex-grow border border-white/5 group">
                <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80" alt="Man taking photo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            {/* Bottom Left: Note Card */}
            <div className="col-span-1 bg-[#162032] rounded-[32px] p-6 md:p-8 border border-blue-500/10 flex flex-col justify-center h-[140px] md:h-[180px] shadow-xl mt-[-50px] md:mt-[-80px] hover:bg-[#1A263B] transition-colors relative z-20">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-blue-500 fill-blue-500" />)}
              </div>
              <div className="text-3xl md:text-5xl font-black text-blue-500 mb-2">4.9/5</div>
              <span className="text-slate-400 text-sm font-medium">Note moyenne clients</span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
