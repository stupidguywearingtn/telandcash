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
              Un téléphone reconditionné a été collecté, diagnostiqué, réparé si nécessaire, puis testé sur plus de 60 points de contrôle par des techniciens qualifiés.
            </p>

            {/* Premium Grid 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-3 group hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">+60 points</div>
                  <div className="text-sm text-slate-500">de contrôle effectués</div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-3 group hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Battery className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Batterie</div>
                  <div className="text-sm text-slate-500">certifiée +85%</div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-3 group hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Retour 30j</div>
                  <div className="text-sm text-slate-500">Satisfait ou remboursé</div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col gap-3 group hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Garantie 24m</div>
                  <div className="text-sm text-slate-500">Sérénité totale incluse</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Image with specific focus) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-slate-100 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1556656793-08538af09e9d?auto=format&fit=crop&w=1200&q=80" 
                alt="Refurbished Smartphone" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl max-w-[200px] z-10">
              <Award className="w-8 h-8 mb-3" />
              <div className="font-black text-xl leading-tight">Certifié Premium</div>
              <div className="text-blue-100 text-sm mt-1">Qualité garantie</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
