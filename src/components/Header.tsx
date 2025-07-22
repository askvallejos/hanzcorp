import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Asterisk } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-b-lg ${
        isScrolled
          ? 'bg-indigo-900/40 backdrop-blur-md border-b border-indigo-800/20'
          : 'bg-indigo-900/30 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Asterisk className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-white">
              HanzCorp
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white hover:text-indigo-200 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  Get Started
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
                    <Label htmlFor="modal-name" className="text-slate-700">Name</Label>
                    <Input
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-white/50 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="modal-email" className="text-slate-700">Email</Label>
                    <Input
                      id="modal-email"
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
                    <Label htmlFor="modal-message" className="text-slate-700">Message</Label>
                    <Textarea
                      id="modal-message"
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
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-transparent">
                  <Menu className="h-8 w-8 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-slate-800 hover:text-indigo-600 font-medium py-2 border-b border-slate-100 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 mt-4">
                        Get Started
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
                          <Label htmlFor="mobile-name" className="text-slate-700">Name</Label>
                          <Input
                            id="mobile-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 bg-white/50 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mobile-email" className="text-slate-700">Email</Label>
                          <Input
                            id="mobile-email"
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
                          <Label htmlFor="mobile-message" className="text-slate-700">Message</Label>
                          <Textarea
                            id="mobile-message"
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;