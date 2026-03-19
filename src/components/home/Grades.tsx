import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { ShieldCheck, CheckCircle2, Battery, Smartphone } from 'lucide-react';

export function Grades() {
  const grades = [
    {
      title: "Grade A",
      subtitle: "Parfait état",
      icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
      features: [
        { text: "Parfait état esthétique", icon: <Smartphone className="w-5 h-5 text-slate-500" /> },
        { text: "Aucune trace rayure", icon: <CheckCircle2 className="w-5 h-5 text-slate-500" /> },
        { text: "Batterie +85%", icon: <Battery className="w-5 h-5 text-slate-500" /> },
      ],
      color: "border-blue-500",
      bgHover: "hover:shadow-blue-500/10 hover:border-blue-200"
    },
    {
      title: "Grade B",
      subtitle: "Très bon état",
      icon: <ShieldCheck className="w-8 h-8 text-slate-700" />,
      features: [
        { text: "Très bon état général", icon: <Smartphone className="w-5 h-5 text-slate-500" /> },
        { text: "Légères traces d'usure", icon: <ShieldCheck className="w-5 h-5 text-slate-500" /> },
        { text: "Batterie +85%", icon: <Battery className="w-5 h-5 text-slate-500" /> },
      ],
      color: "border-slate-300",
      bgHover: "hover:shadow-slate-500/10 hover:border-slate-300"
    },
    {
      title: "Grade C",
      subtitle: "État correct",
      icon: <ShieldCheck className="w-8 h-8 text-slate-400" />,
      features: [
        { text: "État correct fonctionnel", icon: <Smartphone className="w-5 h-5 text-slate-500" /> },
        { text: "Marques visibles sur coque", icon: <ShieldCheck className="w-5 h-5 text-slate-500" /> },
        { text: "Batterie +85%", icon: <Battery className="w-5 h-5 text-slate-500" /> },
      ],
      color: "border-slate-200",
      bgHover: "hover:shadow-slate-500/5 hover:border-slate-200"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {grades.map((grade, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className={`h-full bg-white rounded-3xl border ${grade.color} shadow-sm transition-all duration-300 transform hover:-translate-y-2 ${grade.bgHover} hover:shadow-2xl overflow-hidden`}>
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col items-center text-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                      {grade.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{grade.title}</h3>
                      <p className="font-semibold text-blue-600 uppercase tracking-widest text-sm mt-1">{grade.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 bg-slate-50/50 rounded-2xl p-6 border border-slate-50">
                    {grade.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {feature.icon}
                        </div>
                        <span className="font-semibold text-slate-700 text-[15px]">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
