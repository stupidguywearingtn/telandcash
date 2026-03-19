import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircle2, Star, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-24 md:pt-32 md:pb-32 bg-slate-50">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left z-10"
          >
            <motion.div variants={item} className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 border border-blue-100">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Smartphones reconditionnés premium
            </motion.div>
            
            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-[68px] font-black uppercase tracking-tighter text-slate-900 leading-[1.05] mb-6">
              <span className="whitespace-nowrap">ACHETEZ VOTRE</span> <br />
              <span className="text-blue-600">SMARTPHONE</span> <br />
              <span className="whitespace-nowrap">AU MEILLEUR PRIX</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-slate-500 mb-8 max-w-xl font-medium">
              iPhone, Samsung & Xiaomi • Testés & certifiés en France • Garantis 24 mois
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full justify-start mb-12">
              <Link to="/catalogue">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20">
                  Voir les smartphones
                </Button>
              </Link>
              <Link to="/catalogue?sort=promo">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-white border-slate-200 text-slate-700 hover:bg-slate-50">
                  Nos meilleures offres
                </Button>
              </Link>
            </motion.div>

            {/* Trust Bar */}
            <motion.div variants={item} className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Avis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>+15 000 clients</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-500" />
                <span>Livraison express</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>Garantie 24 mois</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative hidden lg:block"
          >
            {/* Main Hero Image */}
            <div className="relative w-full aspect-square max-w-[550px] ml-auto flex items-center justify-center">
              
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ zIndex: -10 }} />
              
              <img 
                src="/hero.png" 
                alt="Smartphones Premium" 
                className="relative z-10 w-[60%] h-auto object-contain transition-transform duration-700 hover:scale-[2.1] scale-[2.0] drop-shadow-2xl translate-x-8"
                style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.15))' }}
              />
              
              {/* Floating badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute right-[-40px] top-32 bg-white/40 backdrop-blur-xl px-5 py-3 rounded-[14px] shadow-[0_8px_32px_rgba(37,99,235,0.2)] border border-white/20 z-50 flex items-center gap-3"
              >
                 <Shield className="w-5 h-5 text-[#2563eb]" />
                 <span className="text-[13px] md:text-sm font-medium text-[#1e3a5f] whitespace-nowrap">Batterie testée +85%</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute left-0 bottom-40 bg-white/40 backdrop-blur-xl px-5 py-3 rounded-[14px] shadow-[0_8px_32px_rgba(37,99,235,0.2)] border border-white/20 z-50 flex items-center gap-3"
              >
                 <CheckCircle2 className="w-5 h-5 text-[#2563eb]" />
                 <span className="text-[13px] md:text-sm font-medium text-[#1e3a5f] whitespace-nowrap">Garantie 24 mois</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
