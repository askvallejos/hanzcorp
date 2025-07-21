import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Rocket, Clock, Shield, Globe } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const BentoGrid: React.FC = () => {
  const gridItems = [
    {
      id: 1,
      title: 'Performance Excellence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1661169399398-dd271af8f651?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      size: 'lg',
      stats: '99% Uptime'
    },
    {
      id: 2,
      title: 'Global Reach',
      description: 'Sed do eiusmod tempor incididunt ut labore.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      size: 'md',
      stats: '50+ Countries'
    },
    {
      id: 3,
      title: 'Award Winning',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      size: 'sm',
      stats: '15+ Awards'
    },
    {
      id: 5,
      title: '24/7 Support',
      description: 'Excepteur sint occaecat cupidatat non proident.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      size: 'md',
      stats: 'Always Available'
    },
    {
      id: 6,
      title: 'Enterprise Security',
      description: 'Sunt in culpa qui officia deserunt mollit anim.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      size: 'lg',
      stats: 'Bank-Grade'
    },
    {
      id: 8,
      title: 'Tech Infrastructure',
      description: 'Duis aute irure dolor in reprehenderit in voluptate.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      size: 'sm',
      stats: 'Enterprise Ready'
    },
  ];

  const getGridClass = (size: string, index: number) => {
    // Make all items the same size for perfect squares
    const baseClass = "relative overflow-hidden rounded-2xl border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 aspect-square";
    
    // All items are now the same size
    return `${baseClass} col-span-1 row-span-1`;
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {' '}HanzCorp
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Bento Grid Container with box styling */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {gridItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={getGridClass(item.size, index)}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative h-full aspect-square group cursor-pointer">
                      {/* Clear Background Image - no blur */}
                      {item.image && (
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            aspectRatio: '1/1'
                          }}
                        />
                      )}
                      
                      {/* Gradient overlay for text readability - no blur */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/70 transition-all duration-300" />
                      
                      {/* Content with raised styling */}
                      <div className="relative h-full p-6 flex flex-col justify-between text-white">
                        <div>
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl mb-4 border border-white/30 shadow-lg">
                            <item.icon className="w-6 h-6 text-slate-700" />
                          </div>
                          <h3 className="text-lg font-bold mb-2 leading-tight text-white drop-shadow-lg filter">
                            {item.title}
                          </h3>
                          <p className="text-sm text-white/95 leading-relaxed drop-shadow-md filter">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="mt-4">
                          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                            <span className="text-sm font-semibold text-slate-700">{item.stats}</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl bg-white/95 backdrop-blur-md border border-white/20 p-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto max-h-[80vh] object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;