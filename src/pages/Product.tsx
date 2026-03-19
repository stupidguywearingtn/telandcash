import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockProducts } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ShieldCheck, Truck, Star, Info, ChevronRight, ShoppingBag, BatteryCharging } from 'lucide-react';
import { useCart } from '../store/useCart';

export function Product() {
  const { id } = useParams();
  const rawProduct = mockProducts.find(p => p.id === id) || mockProducts[0];
  
  const addItem = useCart(state => state.addItem);

  // State for selectors
  const [selectedStorage, setSelectedStorage] = useState<string>(rawProduct.storage);
  const [selectedGrade, setSelectedGrade] = useState<string>(rawProduct.grade);
  const [selectedColor, setSelectedColor] = useState(rawProduct.color);
  const [activeImage, setActiveImage] = useState(0);

  // Dynamic price calculation
  const basePrice = rawProduct.price;
  const storagePriceMutiplier = selectedStorage === '512' ? 100 : selectedStorage === '256' ? 50 : 0;
  const gradePriceMultiplier = selectedGrade === 'A' ? 40 : selectedGrade === 'B' ? 0 : -30;
  const currentPrice = basePrice + storagePriceMutiplier + gradePriceMultiplier;

  // Mock Gallery
  const gallery = [rawProduct.image, rawProduct.image, rawProduct.image, rawProduct.image];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-background py-8">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 max-w-7xl mb-8">
        <div className="flex items-center text-sm text-muted-foreground gap-2 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/catalogue" className="hover:text-primary transition-colors">Smartphones</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/catalogue?brand=${rawProduct.brand}`} className="hover:text-primary transition-colors">{rawProduct.brand}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{rawProduct.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 sticky top-28">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={activeImage}
              className="aspect-square bg-muted rounded-[2rem] p-8 flex items-center justify-center overflow-hidden border border-border"
            >
              <img 
                src={gallery[activeImage]} 
                alt={rawProduct.name} 
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square bg-muted rounded-2xl p-4 flex items-center justify-center border-2 transition-all ${activeImage === index ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                >
                  <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            {/* Badges & Title */}
            <div className="flex items-center gap-2 mb-4">
              {rawProduct.badges.map((b, i) => (
                <Badge key={i} variant={b === 'Promo' ? 'warning' : 'primary'} className="font-bold">{b}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">{rawProduct.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-sm font-bold mt-1 text-muted-foreground">4.9/5 (128 avis)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-4 mb-10 pb-10 border-b border-border">
              <span className="text-5xl font-black tracking-tight text-primary">{currentPrice} €</span>
              {currentPrice < rawProduct.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through decoration-red-500/50 mb-1">
                  {rawProduct.originalPrice} €
                </span>
              )}
            </div>

            {/* Selectors */}
            <div className="space-y-8 mb-10">
              
              {/* Storage */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Capacité de stockage</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['128', '256', '512'].map(storage => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`py-4 rounded-xl font-bold border-2 transition-all ${selectedStorage === storage ? 'border-primary bg-primary/5 text-primary' : 'border-border text-foreground hover:border-primary/50'}`}
                    >
                      {storage} Go
                    </button>
                  ))}
                </div>
              </div>

              {/* Grade */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    État esthétique
                    <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { grade: 'A', label: 'Parfait état' },
                    { grade: 'B', label: 'Très bon état' },
                    { grade: 'C', label: 'État correct' },
                  ].map(g => (
                    <button
                      key={g.grade}
                      onClick={() => setSelectedGrade(g.grade)}
                      className={`p-4 flex flex-col items-center justify-center rounded-xl font-bold border-2 transition-all ${selectedGrade === g.grade ? 'border-primary bg-primary/5 text-primary' : 'border-border text-foreground hover:border-primary/50'}`}
                    >
                      <span className="text-xl">Grade {g.grade}</span>
                      <span className={`text-xs mt-1 font-medium ${selectedGrade === g.grade ? 'text-primary/80' : 'text-muted-foreground'}`}>{g.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="font-bold text-lg mb-4">Couleur : <span className="text-muted-foreground font-medium">{selectedColor}</span></h3>
                <div className="flex gap-4">
                  {[
                    { color: 'Bleu', hex: '#60A5FA' },
                    { color: 'Noir', hex: '#111827' },
                    { color: 'Blanc', hex: '#FFFFFF' },
                    { color: 'Violet', hex: '#A855F7' }
                  ].map(c => (
                    <button
                      key={c.color}
                      onClick={() => setSelectedColor(c.color)}
                      className={`w-12 h-12 rounded-full border-4 transition-all flex items-center justify-center`}
                      style={{ 
                        borderColor: selectedColor === c.color ? 'hsl(213, 94%, 59%)' : 'transparent',
                        padding: selectedColor === c.color ? '2px' : '0'
                      }}
                    >
                       <div 
                         className="w-full h-full rounded-full border border-border shadow-inner" 
                         style={{ backgroundColor: c.hex }}
                       />
                    </button>
                  ))}
                </div>
              </div>

            </div>

             {/* Add to Cart */}
            <div className="mb-12">
               <Button 
                 onClick={() => {
                   addItem({
                     id: `${rawProduct.id}-${selectedStorage}-${selectedGrade}-${selectedColor}`,
                     productId: rawProduct.id,
                     name: rawProduct.name,
                     price: currentPrice,
                     image: rawProduct.image,
                     quantity: 1,
                     storage: selectedStorage,
                     grade: selectedGrade,
                     color: selectedColor
                   });
                 }}
                 className="w-full h-16 text-xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3"
               >
                 <ShoppingBag className="w-6 h-6" /> Ajouter au panier — {currentPrice} €
               </Button>
            </div>

            {/* Reassurance blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-xl flex gap-4 items-start">
                <Truck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-bold mb-1 font-sm">Livraison Gratuite</div>
                  <div className="text-xs text-muted-foreground font-medium text-balance">Expédié aujourd'hui si commandé avant 15h</div>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-xl flex gap-4 items-start">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-bold mb-1 font-sm">Garantie 24 Mois</div>
                  <div className="text-xs text-muted-foreground font-medium text-balance">Couverture totale pièces et main d'œuvre</div>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-xl flex gap-4 items-start sm:col-span-2">
                <BatteryCharging className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold mb-1 font-sm">Batterie Neuve / +85% garantie</div>
                  <div className="text-xs text-muted-foreground font-medium">Nos batteries sont testées et garanties pour assurer une tenue optimale. Si la capacité est inferieure à 85%, nous la remplaçons par une neuve.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Technical Specs Tab simulation below (simple) */}
        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="text-3xl font-black mb-10">Caractéristiques Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            <div className="flex justify-between py-4 border-b border-border">
              <span className="text-muted-foreground font-medium">Marque</span>
              <span className="font-bold">{rawProduct.brand}</span>
            </div>
            <div className="flex justify-between py-4 border-b border-border">
              <span className="text-muted-foreground font-medium">Modèle</span>
              <span className="font-bold">{rawProduct.name}</span>
            </div>
            <div className="flex justify-between py-4 border-b border-border">
              <span className="text-muted-foreground font-medium">Capacité de stockage</span>
              <span className="font-bold">{selectedStorage} Go</span>
            </div>
            <div className="flex justify-between py-4 border-b border-border">
              <span className="text-muted-foreground font-medium">Débloqué tout opérateur</span>
              <span className="font-bold">Oui</span>
            </div>
            <div className="flex justify-between py-4 border-b border-border">
              <span className="text-muted-foreground font-medium">Double SIM</span>
              <span className="font-bold">Oui (eSIM)</span>
            </div>
             <div className="flex justify-between py-4 border-b border-border">
              <span className="text-muted-foreground font-medium">Garantie</span>
              <span className="font-bold">24 Mois</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
