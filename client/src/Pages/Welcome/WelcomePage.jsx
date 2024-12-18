import { motion } from 'framer-motion';
import Hero from './Hero';
import Features from './Features';
import TechStack from './TechStack';
import ServerHealth from './ServerHealth';
import Footer from './Footer';

const WelcomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black text-white overflow-hidden scrollbar-hide"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] opacity-10 bg-cover bg-center" />
      
      <div className="relative ">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Nessa
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#tech" className="text-gray-300 hover:text-white transition-colors">Tech Stack</a>
              <a href="#status" className="text-gray-300 hover:text-white transition-colors">Status</a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6">
          <div className="py-20">
            <Hero />
          </div>

          <div id="features" className="py-20">
            <Features />
          </div>

          <div id="tech" className="py-20">
            <TechStack />
          </div>

          <div id="status" className="py-20">
            <ServerHealth />
          </div>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

export default WelcomePage;