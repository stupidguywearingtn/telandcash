import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/mockData';
import { mockProducts } from '../../data/mockData';

const tabs = ["Bons plans", "Meilleures ventes", "Nouveautés", "Petit budget"];

const productsData: Record<string, Product[]> = {
  "Bons plans": mockProducts.slice(0, 6),
  "Meilleures ventes": mockProducts.slice(0, 6),
  "Nouveautés": mockProducts.slice(2, 8),
  "Petit budget": mockProducts.slice(4, 8),
};

export function BestOffers() {
  const [activeTab, setActiveTab] = useState("Meilleures ventes");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (!scrollContainerRef.current) return;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const currentProducts = productsData[activeTab] || [];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-10 text-center md:text-left relative">
          {/* Cursive annotation */}
          <div className="text-[#3b82f6] font-['Caveat'] text-2xl md:text-3xl -rotate-2 mb-2 ml-1 inline-block">
            sélectionné pour vous
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 relative inline-block">
            Recommandés pour vous
            {/* Tiny stars around title */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -top-4 -right-8 stroke-yellow-400 fill-none stroke-[2px] opacity-90 hidden sm:block delay-100" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute -bottom-2 -left-6 stroke-[#3b82f6] fill-none stroke-[2px] opacity-60 hidden sm:block" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
              <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z"/>
            </svg>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative">
          
          {/* Handdrawn arrow pointing to tabs */}
          <svg width="40" height="40" viewBox="0 0 50 50" className="absolute -top-10 left-32 md:-top-5 md:left-auto md:-right-12 xl:right-auto xl:left-[600px] stroke-[#3b82f6] fill-none stroke-[2px] opacity-60 z-10 hidden md:block" style={{strokeLinecap: 'round', strokeLinejoin: 'round'}}>
            <path d="M 5 5 Q 30 20 40 40" />
            <path d="M 30 40 L 40 40 L 35 30" />
          </svg>

          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab 
                    ? "bg-[#3b82f6] border border-[#3b82f6] text-white shadow-lg shadow-blue-500/20" 
                    : "bg-transparent border border-slate-200 text-slate-600 hover:border-[#3b82f6]/50 hover:text-[#3b82f6]"
                }`}
              >
                {/* Active glow inside pill */}
                {activeTab === tab && (
                  <span className="absolute inset-0 bg-white/20 blur-md rounded-full" />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-3 relative z-20">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] transition-all bg-white shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] transition-all bg-white shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div
            ref={scrollContainerRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={onDrag}
            className={`flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 pt-2 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            <AnimatePresence mode="wait">
              {currentProducts.map((product, index) => {
                const badgeText = product.badges && product.badges.length > 0 ? product.badges[0] : null;
                const dynamicRating = product.grade === 'A' ? 5 : 4;
                const dynamicReviews = 42 + index * 7;
                
                return (
                  <motion.div
                    key={`${activeTab}-${product.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex-none w-[240px] snap-start"
                  >
                    <div className="h-full border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow rounded-3xl flex flex-col relative bg-white overflow-hidden group">
                      
                      {badgeText && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase ${
                            badgeText.toLowerCase().includes('promo') ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {badgeText}
                          </span>
                        </div>
                      )}
                      
                      <Link to={`/produit/${product.id}`} className="block relative h-[220px] w-full p-6 pt-12 pointer-events-none md:pointer-events-auto flex items-center justify-center bg-slate-50/50 group-hover:bg-slate-50 transition-colors">
                        <img src={product.image} alt={product.name} className="w-auto h-[140px] object-contain drop-shadow-md mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
                      </Link>

                      <div className="p-5 flex flex-col flex-grow">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-1">{product.brand}</span>
                        <Link to={`/produit/${product.id}`} className="block w-fit">
                          <h3 className="font-bold text-slate-900 text-base leading-tight mb-1.5 group-hover:text-[#3b82f6] transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <p className="text-[13px] text-slate-500 font-medium mb-3 leading-tight pr-2">
                          {product.storage}Go - {product.color} - Grade {product.grade}
                        </p>

                        <div className="flex items-center gap-1.5 mb-5">
                          <div className="flex gap-0.5 text-[#FFB800]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3.5 h-3.5 ${i < dynamicRating ? 'fill-current' : 'text-slate-200 fill-slate-200'}`} />
                            ))}
                          </div>
                          <span className="text-[11px] font-medium text-slate-400">({dynamicReviews})</span>
                        </div>

                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex flex-col items-start leading-none">
                            {product.originalPrice && (
                              <span className="text-[11px] text-slate-400 font-bold line-through mb-1">
                                {product.originalPrice.toFixed(2).replace('.', ',')} €
                              </span>
                            )}
                            <span className="text-[22px] font-black text-slate-900 tracking-tight">
                              {product.price.toFixed(2).replace('.', ',')} €
                            </span>
                          </div>
                          
                          <button className="w-10 h-10 rounded-full bg-[#3b82f6] hover:bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-500/30 transition-transform active:scale-95 group/btn">
                            <ShoppingCart className="w-4 h-4 transition-transform group-hover/btn:-rotate-12" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
