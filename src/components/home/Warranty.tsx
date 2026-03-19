import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';
import { ShieldAlert, Wrench, HeadphonesIcon, PhoneCall, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function Warranty() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Garantie & SAV 100% Français</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Nous incluons une garantie commerciale gratuite de 24 mois sur tous nos smartphones et tablettes reconditionnés, car nous avons une confiance absolue en nos process de révision.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Couverture Totale</h3>
                  <p className="text-muted-foreground">Pannes matérielles, défauts techniques, boutons, caméras, connecteurs. Pièces et main d'œuvre incluses.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Exclusions</h3>
                  <p className="text-muted-foreground">La casse, l'oxydation, et l'usure de la batterie en dessous de 80% de capacité maximale au-delà du 6ème mois.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/garantie">
                <Button variant="outline" size="lg">Voir les conditions de garantie</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-primary text-white border-none shadow-2xl">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <HeadphonesIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">SAV Ultra-Réactif</h3>
                    <p className="text-primary-foreground/80 font-medium">Une équipe à votre écoute en France.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <PhoneCall className="w-6 h-6 text-white/70" />
                    <div>
                      <div className="font-bold text-lg">01 23 45 67 89</div>
                      <div className="text-sm text-white/70">Du lundi au samedi, 9h-19h (Appel non surtaxé)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <Mail className="w-6 h-6 text-white/70" />
                    <div>
                      <div className="font-bold text-lg">contact@tel-cash.fr</div>
                      <div className="text-sm text-white/70">Réponse garantie sous 24h ouvrées</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MessageSquare className="w-6 h-6 text-white/70" />
                    <div>
                      <div className="font-bold text-lg">Formulaire en ligne</div>
                      <div className="text-sm text-white/70">Pour vos demandes de retour sous garantie</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link to="/contact">
                   <Button className="w-full bg-white text-primary hover:bg-white/90 shadow-lg">
                     Contacter le support
                   </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
