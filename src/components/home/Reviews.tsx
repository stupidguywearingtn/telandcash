import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { mockReviews } from '../../data/mockData';

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface ReviewType {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

const ReviewCard = ({ review }: { review: ReviewType }) => (
  <div className="w-[300px] md:w-[400px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <img src={review.avatar} alt={review.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
          <span className="text-xs text-muted-foreground">Local Guide</span>
        </div>
      </div>
      <GoogleIcon />
    </div>
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
      ))}
    </div>
    <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
      "{review.text}"
    </p>
  </div>
);

export function Reviews() {
  // Create an array that repeats to allow seamless infinite scrolling
  const baseArr1 = [...mockReviews, ...mockReviews];
  const row1 = [...baseArr1, ...baseArr1]; // Double it so 50% is a full set
  
  const baseArr2 = [...mockReviews].reverse();
  const baseArr2Extended = [...baseArr2, ...baseArr2];
  const row2 = [...baseArr2Extended, ...baseArr2Extended];

  const googleMapsUrl = "https://www.google.com/search?sca_esv=bb692e0fdf80bd80&q=Tel%20and%20Cash%20Angers";

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Ils nous font confiance</h2>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
              <span className="text-4xl font-bold flex items-center gap-2">
                4.9<Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              </span>
              <div className="h-10 w-px bg-border hidden md:block"></div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-lg leading-none mb-1 text-foreground">Avis Google</span>
                <span className="text-sm text-muted-foreground leading-none">Basé sur d'authentiques avis clients</span>
              </div>
            </div>
          </div>
          
          <a
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 bg-white text-foreground px-6 py-3.5 rounded-full font-bold shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-zinc-200"
          >
            <GoogleIcon />
            <span>Voir notre page Google</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Row 1 - Moves Left */}
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
        >
          {row1.map((review, i) => (
            <ReviewCard key={`row1-${i}`} review={review} />
          ))}
        </motion.div>

        {/* Row 2 - Moves Right */}
        <motion.div 
          className="flex gap-6 w-max -ml-[25%]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
        >
          {row2.map((review, i) => (
            <ReviewCard key={`row2-${i}`} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
