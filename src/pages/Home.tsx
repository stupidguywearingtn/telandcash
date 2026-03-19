import { Hero } from '../components/home/Hero';
import { Marquee } from '../components/home/Marquee';
import { Categories } from '../components/home/Categories';
import { BestOffers } from '../components/home/BestOffers';
import { Grades } from '../components/home/Grades';
import { HowItWorks } from '../components/home/HowItWorks';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Reviews } from '../components/home/Reviews';
import { Warranty } from '../components/home/Warranty';
import { WhyRefurbished } from '../components/home/WhyRefurbished';
import { FAQ } from '../components/home/FAQ';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Marquee />
      <Categories />
      <BestOffers />
      <Grades />
      <HowItWorks />
      <Warranty />
      <Reviews />
      <WhyChooseUs />
      <WhyRefurbished />
      <FAQ />
    </motion.div>
  );
}
