import { motion } from 'framer-motion';
import { Check, Battery, Eye, Zap, Star } from 'lucide-react';

export function Grades() {
  const grades = [
    {
      badge: "BESTSELLER",
      letter: "A",
      title: "Parfait État",
      subtitle: "PREMIUM",
      features: [
        "Écran 100% intact, aucune rayure",
        "Coque impeccable sans aucun choc",
        "Composants d'origine certifiés",
        "Connectique testée et nettoyée",
        "Libre tout opérateur",
        "Garantie 24 mois incluse"
      ],
      stats: {
        battery: "≥85%",
        scratches: "Aucune",
        functional: "100%"
      },
      quote: `"L'expérience du neuf au prix du reconditionné."`,
      letterBg: "bg-blue-100/60",
      letterColor: "text-blue-600",
      borderColor: "border-blue-500",
      subtitleColor: "text-blue-600",
      badgeBg: "bg-slate-800",
      checkColor: "text-blue-500"
    },
    {
      letter: "B",
      title: "Très Bon État",
      subtitle: "OPTIMAL",
      features: [
        "Écran en excellent état",
        "Micro-rayures invisibles à 20cm",
        "Composants entièrement testés",
        "Connectique 100% fonctionnelle",
        "Libre tout opérateur",
        "Garantie 12 mois incluse"
      ],
      stats: {
        battery: "≥85%",
        scratches: "Légères",
        functional: "100%"
      },
      quote: `"Le meilleur compromis qualité/prix."`,
      letterBg: "bg-emerald-100/60",
      letterColor: "text-emerald-600",
      borderColor: "border-emerald-400/50",
      subtitleColor: "text-emerald-600",
      checkColor: "text-emerald-500"
    },
    {
      letter: "C",
      title: "État Correct",
      subtitle: "ESSENTIEL",
      features: [
        "Écran avec micro-rayures",
        "Traces d'usure sur la coque",
        "100% testé et approuvé",
        "Toutes fonctionnalités opérationnelles",
        "Libre tout opérateur",
        "Garantie 12 mois incluse"
      ],
      stats: {
        battery: "≥85%",
        scratches: "Visibles",
        functional: "100%"
      },
      quote: `"Idéal pour les petits budgets."`,
      letterBg: "bg-orange-100/60",
      letterColor: "text-orange-500",
      borderColor: "border-slate-200",
      subtitleColor: "text-orange-500",
      checkColor: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900"
          >
            Nos grades de qualité
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Une transparence totale sur l'état esthétique. La performance technique reste garantie à 100%.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {grades.map((grade, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className={`relative h-full bg-white rounded-3xl border-2 ${grade.borderColor} shadow-sm overflow-visible`}>
                {grade.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 ${grade.badgeBg} text-white text-[11px] font-black tracking-wide uppercase rounded-full flex items-center gap-1.5 shadow-md border border-slate-700 z-10 whitespace-nowrap`}>
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {grade.badge}
                  </div>
                )}
                
                <div className="p-8 flex flex-col h-full bg-[#f8fafc]/50 rounded-3xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${grade.letterBg} flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-2xl font-black ${grade.letterColor}`}>{grade.letter}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">{grade.title}</h3>
                      <p className={`text-[10px] font-black tracking-widest uppercase mt-1 ${grade.subtitleColor}`}>{grade.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    {grade.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`w-[18px] h-[18px] flex-shrink-0 mt-[3px] ${grade.checkColor}`} strokeWidth={3} />
                        <span className="text-slate-600 text-sm font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-200">
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div className="flex flex-col items-center text-center">
                        <Battery className="w-5 h-5 text-slate-400 mb-2" strokeWidth={1.5} />
                        <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Batterie</span>
                        <span className="text-sm font-bold text-slate-900">{grade.stats.battery}</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Eye className="w-5 h-5 text-slate-400 mb-2" strokeWidth={1.5} />
                        <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Rayures</span>
                        <span className="text-sm font-bold text-slate-900">{grade.stats.scratches}</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Zap className="w-5 h-5 text-slate-400 mb-2" strokeWidth={1.5} />
                        <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Fonctionnel</span>
                        <span className="text-sm font-bold text-slate-900">{grade.stats.functional}</span>
                      </div>
                    </div>
                    <div className="text-center italic text-slate-500 text-[13px] font-medium leading-relaxed">
                      {grade.quote}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
