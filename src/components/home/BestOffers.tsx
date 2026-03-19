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
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Recommandés pour vous</h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2.5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-slate-900 border-2 border-slate-900 text-white shadow-md" 
                    : "bg-slate-200 border-2 border-transparent text-slate-700 hover:bg-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors bg-white shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors bg-white shadow-sm"
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
            className={`flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
                    className="flex-none w-[200px] snap-start"
                  >
                    <div className="h-full border border-slate-200 shadow-sm rounded-2xl flex flex-col relative bg-white overflow-hidden group">
                      
                      {badgeText && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full tracking-wide ${
                            badgeText.toLowerCase().includes('promo') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {badgeText}
                          </span>
                        </div>
                      )}
                      
                      <Link to={`/produit/${product.id}`} className="block relative h-[180px] w-full p-4 pt-8 pointer-events-none md:pointer-events-auto flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-auto h-[120px] object-contain drop-shadow-md mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
                      </Link>

                      <div className="px-4 pb-4 flex flex-col flex-grow">
                        <span className="text-xs font-medium text-slate-500 mb-0.5">{product.brand}</span>
                        <Link to={`/produit/${product.id}`} className="block w-fit">
                          <h3 className="font-bold text-slate-900 text-[15px] leading-tight mb-1 hover:underline">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <p className="text-[12px] text-slate-600 mb-2 leading-tight pr-2">
                          {product.storage}Go - {product.color} - Grade {product.grade}
                        </p>

                        <div className="flex items-center gap-1 mb-4">
                          <div className="flex gap-1 text-[#FFB800]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3.5 h-3.5 ${i < dynamicRating ? 'fill-current' : 'text-slate-200 fill-slate-200'}`} />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-500 ml-1">({dynamicReviews})</span>
                        </div>

                        <div className="mt-auto pt-4 flex items-center justify-between">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-lg font-bold text-slate-900 leading-none">
                              {product.price.toFixed(2).replace('.', ',')} €
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-slate-400 font-medium line-through leading-none">
                                {product.originalPrice.toFixed(2).replace('.', ',')} €
                              </span>
                            )}
                          </div>
                          
                          <button className="w-9 h-9 rounded-full bg-[#00b06b] hover:bg-[#00965a] flex items-center justify-center text-white flex-shrink-0 shadow-sm transition-transform hover:scale-105 active:scale-95 group/btn">
                            <ShoppingCart className="w-4 h-4 group-hover/btn:-rotate-12 transition-transform" />
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
