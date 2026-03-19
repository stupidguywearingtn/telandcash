import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Battery, RefreshCw, Award } from 'lucide-react';

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs tracking-wider uppercase mb-6">
              <div className="w-4 h-4 rounded-[4px] bg-blue-100 flex items-center justify-center">
                <div className="w-1.5 h-2.5 border-2 border-blue-600 rounded-[2px]" />
              </div>
              COMPRENDRE LE RECONDITIONNÉ
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight mb-6 leading-[1.05] text-slate-900">
              Un smartphone reconditionné, c'est quoi exactement ?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl font-medium leading-relaxed">
              Un téléphone reconditionné a été collecté, diagnostiqué, réparé si nécessaire, puis testé sur plus de 60 points de contrôle par des techniciens qualifiés. Il est ensuite remis en état et livré avec une garantie officielle de 24 mois — comme un appareil neuf, mais à prix juste.
            </p>

            {/* Grid 2x2 Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-full border-t border-slate-100 pt-8 mt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-[15px]">+60 points de contrôle</span>
              </div>
              <div className="flex items-center gap-3">
                <Battery className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-[15px]">Batterie certifiée</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-[15px]">Retour 30 jours</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="font-bold text-slate-800 text-[15px]">Garantie 24 mois</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Image & Floating Badge) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[600px] mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Main Rounded Image */}
            <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl bg-black relative">
              <img 
                src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1200&q=80" 
                alt="Smartphone Camera Detail" 
                className="w-full h-full object-cover opacity-90 object-left-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Glassmorphism Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 md:-left-12 -bottom-6 bg-white/70 backdrop-blur-xl border border-white/50 p-4 pr-6 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-[17px] leading-tight mb-0.5">Certifié</div>
                <div className="text-slate-500 text-sm font-medium">60+ tests effectués</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
