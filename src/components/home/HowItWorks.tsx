import { motion } from 'framer-motion';
import { Search, ShoppingCart, Truck, Smile } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Parcourez notre catalogue",
      description: "Choisissez parmi plus de 500 références de smartphones reconditionnés.",
      icon: <Search className="w-6 h-6" />
    },
    {
      num: "2",
      title: "Choisissez votre modèle",
      description: "Sélectionnez la couleur, le stockage et le grade qui vous correspond.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      num: "3",
      title: "Recevez votre smartphone",
      description: "Expédition le jour même et livraison gratuite en 24h/48h chez vous.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      num: "4",
      title: "Profitez de votre appareil",
      description: "Déballez, insérez votre SIM et profitez avec une garantie de 24 mois.",
      icon: <Smile className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-foreground text-white relative overflow-hidden">
      {/* Interactive Line Background */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden lg:block -translate-y-12" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4"
          >
            Comment ça marche ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            En 4 étapes simples, donnez une seconde vie à un smartphone premium tout en faisant des économies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center lg:items-start lg:text-left group"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary relative z-10 backdrop-blur-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xl shadow-black/50">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 text-6xl font-black text-white/5 select-none transition-all duration-300 group-hover:text-white/10 group-hover:-translate-y-2 group-hover:translate-x-2">
                  {step.num}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
