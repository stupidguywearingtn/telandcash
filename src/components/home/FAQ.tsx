import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "La batterie est-elle neuve ?",
      answer: "Les batteries sont testées et doivent présenter une capacité supérieure à 85% de leur charge initiale. Si ce n'est pas le cas, elles sont remplacées par des batteries neuves certifiées avant la mise en vente."
    },
    {
      question: "Comment fonctionne la garantie de 24 mois ?",
      answer: "La garantie couvre tous les dysfonctionnements logiciels et matériels indépendants de votre usage (hors casse, oxydation, ou ouverture par un tiers). Le retour et la réparation sont pris en charge par nos services."
    },
    {
      question: "Puis-je retourner le produit s'il ne me convient pas ?",
      answer: "Oui, vous disposez d'un délai légal de rétractation de 30 jours pour nous renvoyer l'appareil (à condition qu'il soit dans le même état) et obtenir un remboursement intégral."
    },
    {
      question: "Comment choisir le grade esthétique ?",
      answer: "Le Grade A correspond à un état comme neuf (aucune rayure). Le Grade B présente de légères micro-rayures invisibles écran allumé. Le Grade C montre des traces d'usure plus prononcées. Dans tous les cas, l'appareil est 100% fonctionnel."
    },
    {
      question: "Proposez-vous le paiement en plusieurs fois ?",
      answer: "Tout à fait ! Nous passons par notre partenaire Alma pour vous proposer le paiement sécurisé en 3X ou 4X par carte bancaire."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <Mail className="w-12 h-12 mb-8 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Ne manquez aucune bonne affaire !
              </h2>
              <p className="text-white/80 mb-8 text-lg font-medium max-w-md">
                Inscrivez-vous à notre newsletter et recevez nos offres exclusives en avant-première, ainsi qu'un code promo de -10€ sur votre première commande.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 mb-6">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow rounded-xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                  required
                />
                <Button className="bg-foreground text-white hover:bg-foreground/90 shadow-xl border-none">
                  S'inscrire
                </Button>
              </form>
              
              <p className="text-xs text-white/60">
                En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pouvez vous désinscrire à tout moment. (RGPD)
              </p>
            </div>
          </motion.div>

          {/* Accordion FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">Questions Fréquentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-border rounded-2xl overflow-hidden bg-white hover:border-primary/50 transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-lg focus:outline-none"
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
