import { CheckCircle } from 'lucide-react';

export function Marquee() {
  const items = [
    "Stock vérifié",
    "Certifié",
    "Garantie 24 mois",
    "Retour 30 jours",
    "Paiement en 3x ou 4x",
    "SAV humain et réactif",
    "Livraison gratuite 24/48h",
    "Produits testés sur 40 points de contrôle",
  ];

  // We double the items to create the infinite scroll effect seamlessly
  const scrollItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-primary text-white py-4 overflow-hidden shadow-md">
      <div className="marquee-container w-full">
        <div className="marquee-content flex gap-8 px-4">
          {scrollItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-bold uppercase tracking-wider">
              <CheckCircle className="w-5 h-5 opacity-80" />
              <span>{item}</span>
              <span className="ml-8 opacity-20">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
