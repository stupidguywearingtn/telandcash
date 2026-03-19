import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockProducts } from '../data/mockData';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Filter, SlidersHorizontal, ShoppingBag, X, Search } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'smartphones';
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filters state
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedStorages, setSelectedStorages] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(1500);
  const [sortBy, setSortBy] = useState<string>('popularite');

  // Computed products
  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    // Simulate switching between smartphones and accessories (with fake data we only have phones mostly)
    if (currentTab === 'accessoires') {
      result = []; // In a real app we would have accessory mock data
    } else {
       // Brand filter
      if (selectedBrands.length > 0) {
        result = result.filter(p => selectedBrands.includes(p.brand));
      }
      // Grade filter
      if (selectedGrades.length > 0) {
        result = result.filter(p => selectedGrades.includes(p.grade));
      }
      // Storage filter
      if (selectedStorages.length > 0) {
        result = result.filter(p => selectedStorages.includes(p.storage));
      }
      // Price filter
      result = result.filter(p => p.price <= maxPrice);

      // Sorting
      switch (sortBy) {
        case 'prix-croissant':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'prix-decroissant':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'nouveautes':
          result.sort((a) => a.badges.includes('Nouveau') ? -1 : 1);
          break;
        case 'popularite':
        default:
          result.sort((a) => a.badges.includes('Best seller') ? -1 : 1);
          break;
      }
    }

    return result;
  }, [selectedBrands, selectedGrades, selectedStorages, maxPrice, sortBy, currentTab]);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, current: string[], value: string) => {
    if (current.includes(value)) {
      setter(current.filter(item => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const renderFilters = () => (
    <div className="space-y-8">
      {/* Brand */}
      <div>
        <h3 className="font-bold mb-4 flex items-center gap-2">Marque</h3>
        <div className="space-y-2">
          {['Apple', 'Samsung', 'Xiaomi'].map(brand => (
             <label key={brand} className="flex items-center gap-3 cursor-pointer group">
               <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-primary border-primary' : 'border-border group-hover:border-primary'}`}>
                 {selectedBrands.includes(brand) && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
               </div>
               <span className={selectedBrands.includes(brand) ? 'font-medium' : 'text-muted-foreground'}>{brand}</span>
             </label>
          ))}
        </div>
      </div>

       {/* Grade */}
      <div>
        <h3 className="font-bold mb-4 flex items-center gap-2">Grade Esthétique</h3>
        <div className="flex gap-2">
          {['A', 'B', 'C'].map(grade => (
             <button
               key={grade}
               onClick={() => toggleFilter(setSelectedGrades, selectedGrades, grade)}
               className={`w-12 h-12 rounded-xl font-bold transition-all ${selectedGrades.includes(grade) ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
             >
               {grade}
             </button>
          ))}
        </div>
      </div>

      {/* Storage */}
      <div>
        <h3 className="font-bold mb-4 flex items-center gap-2">Stockage</h3>
        <div className="flex flex-wrap gap-2">
          {['128', '256', '512'].map(storage => (
             <button
               key={storage}
               onClick={() => toggleFilter(setSelectedStorages, selectedStorages, storage)}
               className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedStorages.includes(storage) ? 'bg-foreground text-white' : 'bg-white border text-muted-foreground hover:border-foreground'}`}
             >
               {storage} Go
             </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-bold mb-4 flex gap-2 justify-between">
          <span>Prix Maximum</span>
          <span className="text-primary">{maxPrice} €</span>
        </h3>
        <input 
          type="range" 
          min="100" 
          max="1500" 
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
          <span>100 €</span>
          <span>1500 €</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header & Tabs */}
        <div className="mb-8">
          <h1 className="text-4xl font-black mb-6 tracking-tight">Notre Catalogue</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            
            <div className="flex bg-muted p-1 rounded-xl">
              <button 
                onClick={() => setSearchParams({ tab: 'smartphones' })}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${currentTab === 'smartphones' || !currentTab ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Smartphones
              </button>
              <button 
                onClick={() => setSearchParams({ tab: 'accessoires' })}
                 className={`px-6 py-2 rounded-lg font-semibold transition-all ${currentTab === 'accessoires' ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Accessoires
              </button>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              {/* Mobile Filter Toggle */}
              <Button 
                variant="outline" 
                className="lg:hidden w-full sm:w-auto gap-2"
                onClick={() => setIsMobileFiltersOpen(true)}
              >
                <Filter className="w-4 h-4" /> Filtres
              </Button>
              
              <div className="relative group w-full sm:w-auto hidden sm:block">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-border text-foreground font-medium rounded-xl px-4 py-2.5 pr-10 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 w-full"
                >
                  <option value="popularite">Trier par Popularité</option>
                  <option value="prix-croissant">Prix Croissant</option>
                  <option value="prix-decroissant">Prix Décroissant</option>
                  <option value="nouveautes">Nouveautés</option>
                </select>
                <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <Card className="sticky top-28 border-none shadow-lg">
              <CardContent className="p-6">
                {renderFilters()}
              </CardContent>
            </Card>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm font-semibold text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length !== 1 && 's'} trouvé{filteredProducts.length !== 1 && 's'}
            </div>
            
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div 
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full flex flex-col group relative overflow-hidden bg-white hover:border-primary/30">
                        {/* Badges */}
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                          {product.badges.map((badge, idx) => (
                            <Badge 
                              key={idx} 
                              variant={badge === 'Promo' ? 'warning' : badge === 'Nouveau' ? 'success' : 'primary'}
                              className="shadow-sm"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Image */}
                        <Link to={`/produit/${product.id}`} className="relative aspect-square overflow-hidden bg-muted/30 p-8 block">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </Link>

                        {/* Content */}
                        <CardContent className="flex flex-col flex-grow p-6">
                          <div className="mb-3">
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{product.brand}</span>
                            <Link to={`/produit/${product.id}`} className="block">
                              <h3 className="font-bold text-lg leading-tight mt-1 group-hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                            </Link>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-6">
                            <Badge variant="default" className="bg-muted font-bold text-xs">{product.storage} Go</Badge>
                            <Badge variant="default" className="bg-muted font-bold text-xs">Grade {product.grade}</Badge>
                            <div className="flex gap-1 ml-auto">
                               <div className="w-4 h-4 rounded-full border border-border" style={{ backgroundColor: product.color.toLowerCase() === 'blanc' ? 'white' : product.color.toLowerCase().includes('noir') ? 'black' : product.color.toLowerCase().includes('bleu') ? '#60A5FA' : '#a855f7' }}></div>
                            </div>
                          </div>

                          <div className="mt-auto flex items-end justify-between pt-4 border-t border-border/50">
                            <div className="flex flex-col">
                              {product.originalPrice > product.price && (
                                <span className="text-sm text-muted-foreground line-through decoration-red-500/50">
                                  {product.originalPrice} €
                                </span>
                              )}
                              <span className="text-2xl font-black text-foreground">
                                {product.price} €
                              </span>
                            </div>
                            
                            <button className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all transform hover:scale-105 shadow-primary-glow">
                              <ShoppingBag className="w-5 h-5" />
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
               <div className="bg-white p-12 rounded-2xl flex flex-col items-center text-center shadow-sm">
                 <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                   <Search className="w-10 h-10 text-muted-foreground" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Aucun produit trouvé</h3>
                 <p className="text-muted-foreground mb-6 max-w-md">
                   Nous n'avons pas trouvé de produit correspondant à vos filtres. Essayez de modifier vos critères de recherche.
                 </p>
                 <Button 
                   onClick={() => {
                     setSelectedBrands([]); setSelectedGrades([]); setSelectedStorages([]); setMaxPrice(1500);
                   }}
                 >
                   Réinitialiser les filtres
                 </Button>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full h-[85vh] bg-white z-50 lg:hidden shadow-xl flex flex-col rounded-t-3xl"
            >
              <div className="p-4 flex justify-between items-center border-b border-border sticky top-0 bg-white rounded-t-3xl z-10">
                <h2 className="text-xl font-black">Filtres</h2>
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-2 text-foreground hover:text-primary bg-muted rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="overflow-y-auto p-6 flex-grow">
                <div className="mb-8 block sm:hidden">
                   <h3 className="font-bold mb-4">Trier par</h3>
                   <select 
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                     className="appearance-none bg-muted border-none text-foreground font-medium rounded-xl px-4 py-3 w-full"
                   >
                     <option value="popularite">Popularité</option>
                     <option value="prix-croissant">Prix Croissant</option>
                     <option value="prix-decroissant">Prix Décroissant</option>
                     <option value="nouveautes">Nouveautés</option>
                   </select>
                </div>
                {renderFilters()}
              </div>

              <div className="p-4 border-t border-border bg-white sticky bottom-0">
                <Button className="w-full" onClick={() => setIsMobileFiltersOpen(false)}>
                  Voir les produits
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
