import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { useCart } from '../../store/useCart';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, openCart } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Smartphones', path: '/catalogue' },
    { name: 'Accessoires', path: '/catalogue?tab=accessoires' },
    { name: 'Qui sommes-nous', path: '/qui-sommes-nous' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tight text-primary">
            <Smartphone className="w-8 h-8" />
            <span>TEL & CASH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-foreground hover:text-primary transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-foreground hover:text-primary transition-colors relative"
              onClick={openCart}
            >
              <ShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center -translate-y-1 translate-x-1"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 text-foreground lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-50 lg:hidden shadow-xl flex flex-col"
            >
              <div className="p-4 flex justify-end">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground hover:text-primary bg-muted rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border pb-4"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-8 flex flex-col gap-4">
                  <Button variant="outline" className="w-full justify-center gap-2">
                    <User className="w-4 h-4" /> Mon Compte
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
