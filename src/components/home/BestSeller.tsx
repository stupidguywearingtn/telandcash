import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Circle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BestSeller() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAFAFA] to-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col mb-16 items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4"
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

        <div className="rounded-[40px] p-8 md:p-14 lg:p-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 items-center relative overflow-visible">
          
          {/* Subtle Abstract Background */}
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-slate-100/50 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          {/* Left: Product Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[500px]"
          >
            {/* The iPhone 13 / 14 Midnight aesthetic */}
            <motion.img 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src="https://www.pngmart.com/files/22/iPhone-14-Pro-PNG-Isolated-HD.png" 
              alt="iPhone Reconditionné"
              className="w-[75%] max-w-[380px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] z-10"
            />
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start relative z-10"
          >
            <div className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Reconditionné  ·  Grade A</div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">iPhone 14 Pro</h3>
            <p className="text-base text-slate-500 font-medium mb-10 leading-relaxed max-w-sm">
              L'alliance parfaite entre puissance photographique et fluidité absolue. Comme neuf, garanti 24 mois.
            </p>

            {/* Selectors - Very minimalist */}
            <div className="flex gap-12 w-full mb-10">
              {/* Color */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Finition</span>
                <div className="flex gap-3">
                  <button className="w-7 h-7 rounded-full bg-[#4A4846] ring-2 ring-offset-2 ring-slate-900 cursor-pointer shadow-sm" />
                  <button className="w-7 h-7 rounded-full bg-[#F3F2F0] hover:ring-2 ring-offset-2 ring-slate-300 transition-all cursor-pointer shadow-sm border border-slate-200" />
                  <button className="w-7 h-7 rounded-full bg-[#E0D5C9] hover:ring-2 ring-offset-2 ring-slate-300 transition-all cursor-pointer shadow-sm border border-slate-200" />
                </div>
              </div>

              {/* Storage */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Stockage</span>
                <div className="flex gap-3">
                  <button className="text-sm font-bold text-slate-900 pb-1 border-b-2 border-slate-900 transition-all">128 Go</button>
                  <button className="text-sm font-medium text-slate-400 pb-1 border-b-2 border-transparent hover:text-slate-600 transition-all">256 Go</button>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-bold text-slate-900">849€</span>
              <span className="text-sm text-slate-400 font-medium tracking-wide">au lieu de <span className="line-through">1199€</span></span>
            </div>

            {/* Minimal Stock Indicator */}
            <div className="flex items-center gap-2 mb-10 text-[13px] font-medium text-slate-500">
              <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
              <span>En stock, livraison demain</span>
            </div>

            {/* CTAs - Elegant & Proportioned */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
              <Button className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-sm font-semibold shadow-lg shadow-slate-900/20 transition-all hover:scale-[1.02]">
                Ajouter au panier
              </Button>
              <Link to="/produit/1" className="group flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors">
                En savoir plus
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
