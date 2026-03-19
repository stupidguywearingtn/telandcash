import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FeaturesBar } from './components/home/FeaturesBar';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Product } from './pages/Product';
import { MiniCart } from './components/cart/MiniCart';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalog />} />
            <Route path="/produit/:id" element={<Product />} />
          </Routes>
        </main>
        <FeaturesBar />
        <Footer />
        <MiniCart />
      </div>
    </Router>
  );
}

export default App;
