import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Star, Truck, RefreshCw, Shield, Circle, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BestSeller() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col mb-16 items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase mb-4"
          >
            Le Choix de nos Experts
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900"
          >
            Notre Best-Seller du Moment
          </motion.h2>
        </div>

        <div className="bg-[#f8fafc] rounded-[40px] p-8 md:p-14 lg:p-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center border border-slate-100 shadow-sm relative overflow-visible">
          
          {/* Decorative Background for the product */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

          {/* Left: Product Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[500px]"
          >
            {/* Soft backdrop pedestal */}
            <div className="absolute bottom-10 w-[60%] h-[20%] bg-slate-200/50 rounded-full blur-2xl" />
            <img 
              src="https://www.pngmart.com/files/22/iPhone-14-Pro-Max-PNG-Pic.png" 
              alt="iPhone 14 Pro Max"
              className="w-[70%] max-w-[350px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-10 transition-transform hover:scale-105 duration-700"
            />
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start relative z-10"
          >
            {/* Brand & Reviews */}
            <div className="flex items-center gap-4 mb-4 text-sm font-medium text-slate-500">
              <span className="uppercase tracking-widest font-bold">Apple</span>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1 text-[#2563EB]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i === 4 ? 'text-slate-300' : 'fill-current text-current'}`} />
                ))}
                <span className="ml-1 text-slate-800 font-bold">4.9/5</span>
                <span className="text-slate-400 font-normal">(124)</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">iPhone 14 Pro Max</h3>
            <p className="text-lg text-slate-500 font-medium mb-8">Reconditionné Grade A — Parfait État</p>

            {/* Price */}
            <div className="flex items-end gap-3 mb-8 pb-8 border-b border-slate-200/60 w-full">
              <span className="text-4xl md:text-5xl font-black text-slate-900 leading-none">849€</span>
              <span className="text-xl text-slate-400 line-through font-medium leading-tight pb-1">1199€ neuf</span>
              <div className="ml-4 mb-1 px-2.5 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold rounded-md">
                -350€
              </div>
            </div>

            {/* Selectors */}
            <div className="flex justify-between w-full mb-8">
              {/* Color */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Couleur : <span className="text-slate-900">Noir Sidéral</span></span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border-2 border-[#2563EB] p-[2px] cursor-pointer">
                    <div className="w-full h-full rounded-full bg-[#3B3B3C]" />
                  </button>
                  <button className="w-8 h-8 rounded-full border-2 border-transparent p-[2px] cursor-pointer hover:border-slate-300 transition-colors">
                    <div className="w-full h-full rounded-full bg-[#E5E5E6]" />
                  </button>
                  <button className="w-8 h-8 rounded-full border-2 border-transparent p-[2px] cursor-pointer hover:border-slate-300 transition-colors">
                    <div className="w-full h-full rounded-full bg-[#5C5B57]" />
                  </button>
                  <button className="w-8 h-8 rounded-full border-2 border-transparent p-[2px] cursor-pointer hover:border-slate-300 transition-colors">
                    <div className="w-full h-full rounded-full bg-[#594F63]" />
                  </button>
                </div>
              </div>

              {/* Storage */}
              <div className="flex flex-col gap-3 items-end">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Capacité</span>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 rounded-full border-2 border-slate-200 text-sm font-bold text-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors bg-white">128 Go</button>
                  <button className="px-4 py-1.5 rounded-full border-2 border-[#2563EB] text-sm font-bold text-[#2563EB] bg-[#2563EB]/5">256 Go</button>
                </div>
              </div>
            </div>

            {/* Minimal Stock Indicator */}
            <div className="flex items-center gap-2 mb-8 text-sm font-medium text-slate-600">
              <Circle className="w-2.5 h-2.5 fill-green-500 text-green-500" />
              <span>En stock — Expédition aujourd'hui</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mb-10">
              <Button className="flex-1 md:text-lg py-6 md:py-7 rounded-full bg-[#0A0F1E] hover:bg-slate-800 text-white font-bold transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </Button>
              <Link to="/produit/1" className="flex-1">
                <Button variant="outline" className="w-full md:text-lg py-6 md:py-7 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group">
                  Voir la fiche détaillée
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Badges Reassurance */}
            <div className="grid grid-cols-3 gap-2 w-full pt-6 border-t border-slate-200/60">
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="w-5 h-5 text-slate-400" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Garantie 24m</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-x border-slate-200/60">
                <RefreshCw className="w-5 h-5 text-slate-400" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Retour 30j</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-5 h-5 text-slate-400" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Livraison offerte</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
