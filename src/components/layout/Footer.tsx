import { Link } from 'react-router-dom';
import { Smartphone, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tight text-white mb-6">
              <Smartphone className="w-8 h-8 text-primary" />
              <span>TEL & CASH</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Votre expert français en smartphones reconditionnés premium. 
              Qualité certifiée et garantie 24 mois.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Smartphones</Link></li>
              <li><Link to="/catalogue?tab=accessoires" className="hover:text-primary transition-colors">Accessoires</Link></li>
              <li><Link to="/qui-sommes-nous" className="hover:text-primary transition-colors">Qui sommes-nous ?</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link to="/garantie" className="hover:text-primary transition-colors">Garantie 24 mois</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/avis-clients" className="hover:text-primary transition-colors">Avis clients</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          {/* Legal & Payments */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Légal & Paiement</h3>
            <ul className="flex flex-col gap-4 text-muted-foreground mb-6">
              <li><Link to="/cgv" className="hover:text-primary transition-colors">Conditions générales de vente</Link></li>
              <li><Link to="/confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/mentions" className="hover:text-primary transition-colors">Mentions légales</Link></li>
            </ul>
            <div className="flex items-center gap-2 opacity-50 grayscale">
              {/* Fake payment icons */}
              <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center text-xs font-bold">VISA</div>
              <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center text-xs font-bold">MC</div>
              <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center text-xs font-bold">PAYPAL</div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Tel & Cash. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Fait avec passion en France 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
}
