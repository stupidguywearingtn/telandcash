import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { MapPin, Star, Award, Heart } from 'lucide-react';

export function StoreStory() {
  return (
    <section className="py-24 bg-[#f8fafc] text-slate-900 border-t border-slate-200/50 overflow-hidden relative">
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/80 text-slate-600 font-bold text-[11px] tracking-widest border border-slate-200 shadow-sm uppercase mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              Basé à Angers
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight mb-8 leading-[1.05]">
              Pas un entrepôt. <br/>
              <span className="text-[#2563EB] relative whitespace-nowrap">
                Une vraie boutique.
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg font-medium leading-relaxed">
              Nous ne sommes pas une marketplace anonyme ni une usine à la chaîne. Derrière <span className="text-[#0A0F1E] font-bold">Tel&Cash</span>, il y a une équipe de vrais experts français passionnés par la tech et engagés pour vous offrir le meilleur de la seconde main.
            </p>

            <ul className="space-y-4 mb-10 w-full">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold mt-1">1</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Équipe locale</h4>
                  <p className="text-slate-500 font-medium">Tout est géré depuis nos locaux à Angers.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold mt-1">2</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Diagnostic précis</h4>
                  <p className="text-slate-500 font-medium">Chaque appareil passe entre nos mains expertes.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold mt-1">3</div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">SAV direct</h4>
                  <p className="text-slate-500 font-medium">Pas de centre d'appels délocalisé, nous vous répondons direktement.</p>
                </div>
              </li>
            </ul>

            <Button variant="outline" className="px-8 py-6 text-sm md:text-lg font-bold rounded-full border-2 border-slate-300 text-slate-700 hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all shadow-sm">
              Découvrir notre histoire
            </Button>
          </motion.div>

          {/* Right Column (Visual with floating elements) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center mt-12 lg:mt-0"
          >
            {/* The Main Image */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white max-w-[450px] relative w-full text-center">
              <img 
                src="https://images.unsplash.com/photo-1621379183861-fede97299a91?auto=format&fit=crop&w=800&q=80" // Modern tech repair/store image
                alt="Notre atelier"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent" />
            </div>

            {/* Handwritten annotation - "fait avec passion" */}
            <div className="absolute -top-4 -right-2 md:right-8 text-[#2563EB] rotate-[15deg] font-medium italic text-lg z-30 pointer-events-none drop-shadow-md flex flex-col items-center">
              <span>Fait avec passion</span>
              <Heart className="w-5 h-5 fill-current mt-1" />
              <svg width="40" height="40" viewBox="0 0 40 40" className="mt-1 stroke-current stroke-2 fill-none" style={{strokeLinecap: 'round'}}>
                <path d="M 20 5 Q 15 20 20 35 M 20 35 L 15 30 M 20 35 L 25 30" />
              </svg>
            </div>

            {/* Badge Note 5/5 */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 left-[-10px] md:left-[-30px] bg-white rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 z-20"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <div className="text-4xl font-black text-[#0A0F1E]">5<span className="text-xl text-slate-400">/5</span></div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#2563EB] mt-1">Avis Vérifiés</span>
              </div>
            </motion.div>

            {/* Badge +5 ans d'expérience */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 bg-[#0A0F1E] rounded-2xl p-4 shadow-[0_15px_40px_rgba(10,15,30,0.2)] z-20 flex items-center gap-4 text-white p-5 border border-white/10"
            >
              <Award className="w-8 h-8 text-[#2563EB]" />
              <div className="flex flex-col">
                <span className="text-2xl font-black mb-1 leading-none">+5 ans</span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">D'expérience</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
