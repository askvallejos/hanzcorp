import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

const Hero: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center-60 md:bg-center-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHx8fA%3D%3D)'
        }}
      />
      
      {/* Gradient overlay for better text readability */}
      {/* Removed gradient overlay as requested */}
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-indigo-900/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-xl">
            Innovating the
            <span className="neon-text bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Future{' '}
            </span>
            of Technology
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur-md border border-white/20">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-900">
                  Get Started with HanzCorp
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="hero-name" className="text-slate-700">Name</Label>
                  <Input
                    id="hero-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-white/50 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-email" className="text-slate-700">Email</Label>
                  <Input
                    id="hero-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-white/50 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-message" className="text-slate-700">Message</Label>
                  <Textarea
                    id="hero-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 bg-white/50 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg group border-slate-300 hover:bg-slate-50"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-16 max-w-2xl mx-auto"
        >
          {[
            { value: '10K+', label: 'Happy Clients' },
            { value: '50+', label: 'Projects Completed' },
            { value: '15+', label: 'Years Experience' },
            { value: '99%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">{stat.value}</div>
              <div className="text-sm text-white/90 mt-1 drop-shadow-md">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;