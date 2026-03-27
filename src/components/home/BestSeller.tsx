import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Circle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BestSeller() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col mb-12 items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3"
          >
            Le choix de l'excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl font-medium"
          >
            Notre modèle le plus plebiscité. Performance brute et design intemporel, reconditionné à la perfection dans nos locaux.
          </motion.p>
        </div>

        <div className="rounded-[32px] p-6 md:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center relative overflow-visible border border-slate-100 shadow-sm bg-white">
          
          {/* Subtle Abstract Background */}
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-slate-100/60 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          {/* Left: Product Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-full min-h-[350px] lg:min-h-[450px]"
          >
            {/* The iPhone 13 / 14 Midnight aesthetic */}
            <motion.img 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src="https://www.pngmart.com/files/22/iPhone-14-Pro-PNG-Isolated-HD.png" 
              alt="iPhone Reconditionné"
              className="w-[75%] max-w-[340px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-10"
            />
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start relative z-10"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] font-bold text-[11px] tracking-widest uppercase mb-5">
              ✦ Notre best-seller
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">iPhone 14 Pro</h3>
            
            <p className="text-base text-slate-600 font-medium mb-6 leading-relaxed max-w-md">
              L'alliance parfaite entre puissance photographique et fluidité absolue. Un véritable bijou technologique, testé sur tous les points et prêt à vous accompagner partout.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-black text-slate-900">849€</span>
              <span className="text-sm text-slate-400 font-medium tracking-wide">au lieu de <span className="line-through">1199€</span></span>
            </div>

            {/* Selectors */}
            <div className="flex gap-10 w-full mb-8">
              {/* Color */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Finition</span>
                <div className="flex gap-2.5">
                  <button className="w-6 h-6 rounded-full bg-[#4A4846] ring-2 ring-offset-2 ring-slate-900 cursor-pointer shadow-sm" />
                  <button className="w-6 h-6 rounded-full bg-[#F3F2F0] hover:ring-2 ring-offset-2 ring-slate-300 transition-all cursor-pointer shadow-sm border border-slate-200" />
                  <button className="w-6 h-6 rounded-full bg-[#E0D5C9] hover:ring-2 ring-offset-2 ring-slate-300 transition-all cursor-pointer shadow-sm border border-slate-200" />
                </div>
              </div>

              {/* Storage */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Stockage</span>
                <div className="flex gap-4">
                  <button className="text-sm font-bold text-slate-900 pb-0.5 border-b-2 border-slate-900 transition-all">128 Go</button>
                  <button className="text-sm font-medium text-slate-400 pb-0.5 border-b-2 border-transparent hover:text-slate-600 transition-all">256 Go</button>
                </div>
              </div>
            </div>

            {/* 3 Highlight Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md">Face ID</div>
              <div className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md">5G</div>
              <div className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md">Écran OLED</div>
            </div>

            {/* Ce qui est inclus */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 w-full mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Ce qui est inclus</span>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium"><Check className="w-3.5 h-3.5 text-emerald-500" /> Chargeur rapide</li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium"><Check className="w-3.5 h-3.5 text-emerald-500" /> Boîte originale ou premium</li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium"><Check className="w-3.5 h-3.5 text-emerald-500" /> Garantie constructeur ou 24m équivalente</li>
              </ul>
            </div>

            {/* Minimal Stock Indicator */}
            <div className="flex items-center gap-2 mb-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
              <span>En stock, expédié aujourd'hui</span>
            </div>

            {/* CTAs - Properly sized & elegant */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#3b82f6] hover:bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-md shadow-blue-500/20 transition-all">
                Ajouter au panier
              </Button>
              <Link to="/produit/1" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-semibold px-6 py-2.5 transition-all">
                   Voir la fiche détaillée
                </Button>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
