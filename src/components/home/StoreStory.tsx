import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { MapPin, Star } from 'lucide-react';

export function StoreStory() {
  return (
    <section className="py-24 bg-[#FAFAFA] text-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column (Text) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            {/* Handwritten annotation */}
            <div className="text-[#3b82f6] font-['Caveat'] text-2xl md:text-3xl -rotate-2 mb-2 ml-1">
              fait avec passion
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight mb-8 leading-[1.1]">
              Pas un entrepôt.<br/>
              <span className="text-[#0ea5e9]">
                Une vraie boutique.
              </span>
            </h2>
            
            <ul className="space-y-5 mb-10 w-full">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                </div>
                <div className="text-slate-600 font-medium text-lg leading-relaxed">
                  <span className="font-semibold text-slate-800">Équipe locale</span> — Tout est géré depuis nos locaux à Angers
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                </div>
                <div className="text-slate-600 font-medium text-lg leading-relaxed">
                  <span className="font-semibold text-slate-800">Diagnostic précis</span> — Chaque appareil passe entre nos mains expertes
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                </div>
                <div className="text-slate-600 font-medium text-lg leading-relaxed">
                  <span className="font-semibold text-slate-800">SAV direct</span> — Pas de centre d'appels délocalisés, nous vous répondons directement
                </div>
              </li>
            </ul>

            <Button variant="outline" className="px-8 py-6 text-sm md:text-lg font-bold rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              Nous rendre visite
            </Button>
          </motion.div>

          {/* Right Column (Visual with floating elements) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center mt-12 lg:mt-0 px-8"
          >
            {/* The Main Image Area */}
            <div className="rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-[10px] border-white max-w-[420px] aspect-[4/5] bg-slate-100 relative w-full text-center flex items-center justify-center">
              {/* Optional: if you want a subtle logo or text inside the frame when image is missing/loading */}
              <span className="text-slate-300 font-medium">Notre boutique</span>
              {/* the actual image */}
              <img 
                src="https://images.unsplash.com/photo-1621379183861-fede97299a91?auto=format&fit=crop&w=800&q=80"
                alt="Notre boutique"
                className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale-[20%]"
              />
            </div>

            {/* Top Right Badge (Rating) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[-15px] right-[5%] md:right-[15%] bg-white rounded-full py-2.5 px-5 shadow-lg border border-slate-100 z-20 flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-slate-800 text-sm">5/5</span>
            </motion.div>

            {/* Middle Right Badge (Experience) */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[5%] bg-[#0A0F1E] rounded-full py-2.5 px-5 shadow-xl z-20"
            >
              <span className="font-bold text-white text-sm whitespace-nowrap">+5 ans d'expérience</span>
            </motion.div>

            {/* Bottom Left Badge (Location) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-[-15px] left-[0%] md:left-[10%] bg-white rounded-full py-2.5 px-5 shadow-lg border border-slate-100 z-20 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-rose-500 fill-rose-500/20" />
              <span className="font-bold text-slate-800 text-sm">Angers</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
