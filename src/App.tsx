/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star, 
  Clock, 
  X, 
  Menu,
  ChevronRight,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { 
  PHONE_NUMBER, 
  WHATSAPP_LINK, 
  SERVICES, 
  GALLERY, 
  OFFERS, 
  WHY_CHOOSE_US, 
  TESTIMONIALS, 
  BLOG_POSTS 
} from './constants';

// --- Components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl my-8 glass-card p-6 md:p-10 text-center border-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-3xl md:text-4xl font-display mb-8 gold-text-gradient">{title}</h3>
            <div className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BookingContent = () => (
  <div className="space-y-8">
    <div className="flex justify-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold animate-pulse">
        <Phone className="w-6 h-6" />
      </div>
      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 animate-pulse">
        <MessageCircle className="w-6 h-6" />
      </div>
    </div>
    <p className="text-white/80 text-lg">Book your appointment now via Call or WhatsApp</p>
    <div className="text-2xl font-mono font-bold tracking-widest text-gold bg-white/5 py-3 rounded-xl border border-white/10">{PHONE_NUMBER}</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a 
        href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
        className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-gold text-black font-bold hover:bg-gold-light transition-all glow-gold uppercase tracking-widest text-xs"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-all uppercase tracking-widest text-xs"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  </div>
);

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="ba-slider h-[400px] md:h-[600px] rounded-3xl cursor-ew-resize"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Before" />
      <div className="ba-overlay" style={{ width: `${sliderPos}%` }}>
        <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" style={{ width: `${10000 / sliderPos}%` }} alt="After" />
      </div>
      <div className="ba-handle" style={{ left: `${sliderPos}%` }} />
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-xs uppercase tracking-widest">Before</div>
      <div className="absolute top-4 right-4 bg-gold/50 backdrop-blur-md px-4 py-1 rounded-full text-xs uppercase tracking-widest">After</div>
    </div>
  );
};

const ArticleContent = ({ article }: { article: typeof BLOG_POSTS[0] }) => (
  <div className="text-left space-y-6">
    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
      <img src={`https://picsum.photos/seed/${article.title}/800/450`} alt={article.title} className="w-full h-full object-cover" />
    </div>
    <div className="text-gold text-[10px] font-bold uppercase tracking-widest">{article.date}</div>
    <p className="text-white/80 leading-relaxed text-sm md:text-base">{article.content}</p>
    <div className="pt-6 border-t border-white/10">
      <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Interested in this service?</p>
      <BookingContent />
    </div>
  </div>
);

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [isAllArticlesModalOpen, setIsAllArticlesModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = (service?: string) => {
    setSelectedService(service || null);
    setIsBookingModalOpen(true);
  };

  const openArticle = (article: typeof BLOG_POSTS[0]) => {
    setSelectedArticle(article);
    setIsArticleModalOpen(true);
  };

  const categories = ["All", "Bridal Makeup", "Mehndi Designs", "Hair Styling", "Boutique Work"];
  const filteredGallery = activeCategory === "All" ? GALLERY : GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-col group cursor-pointer">
            <span className="text-2xl md:text-3xl font-display font-bold gold-text-gradient leading-none group-hover:tracking-wider transition-all duration-500">MBC</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 group-hover:text-gold transition-colors">Beauty Parlour & Boutique</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold">
            {['Services', 'Gallery', 'Offers', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <button 
            onClick={() => openBooking()}
            className="hidden sm:flex btn-luxury-outline !py-2 !px-6 text-[10px]"
          >
            Book Appointment
          </button>
          <button className="lg:hidden text-white hover:text-gold transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1920" 
            alt="Bridal Makeup" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/20 via-luxury-black/60 to-luxury-black" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-6 py-2 mb-8 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-bold uppercase tracking-[0.5em] animate-pulse">
              Ultra Premium Experience
            </span>
            <h1 className="text-6xl md:text-9xl font-display mb-8 leading-none">
              Luxury Beauty <br />
              <span className="gold-text-gradient italic font-light">Experience</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
              Bridal Makeup, Skin Care & Boutique Services in Kadapa. <br className="hidden md:block" />
              Where elegance meets perfection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => openBooking()}
                className="btn-luxury-primary w-full sm:w-auto text-sm"
              >
                Book Appointment
              </button>
              <a 
                href="#gallery"
                className="btn-luxury-outline w-full sm:w-auto text-sm"
              >
                View Bridal Gallery
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Happy Brides", value: "500+" },
              { label: "Years Experience", value: "10+" },
              { label: "Beauty Services", value: "25+" },
              { label: "Expert Artists", value: "08+" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display text-gold mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-5xl md:text-7xl mb-6">Exquisite Services</h2>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-3xl glass-card border-white/5 hover:border-gold/30 transition-all duration-700"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl mb-3 group-hover:text-gold transition-colors">{service.name}</h3>
                  <p className="text-white/50 mb-8 text-sm font-light leading-relaxed">{service.desc}</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); openBooking(service.name); }}
                    className="relative z-10 flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all"
                  >
                    Book Service <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Transformation</span>
              <h2 className="text-5xl md:text-7xl mb-8">The Magic of <br /> <span className="gold-text-gradient italic">Artistry</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 font-light">
                Experience the stunning difference with our professional bridal makeovers. We enhance your natural features to create a look that is uniquely yours.
              </p>
              <div className="space-y-6">
                {['Natural Finish', 'Long Lasting', 'Premium Products'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span className="text-sm uppercase tracking-widest font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <BeforeAfter />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-8">Bridal Gallery</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-gold text-black glow-gold' : 'border border-white/10 text-white/50 hover:border-gold hover:text-gold'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, idx) => (
                <motion.div 
                  key={item.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[4/5] overflow-hidden rounded-3xl group cursor-pointer"
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                    <div>
                      <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-3">{item.category}</p>
                      <h4 className="text-3xl font-display">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="section-padding bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-6">Special Offers</h2>
            <p className="text-white/50 italic font-serif text-xl">Indulge in luxury at exclusive prices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {OFFERS.map((offer, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -15 }}
                className={`glass-card p-12 text-center flex flex-col border-2 relative ${idx === 1 ? 'border-gold bg-gold/5' : 'border-white/5'}`}
              >
                {idx === 1 && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] glow-gold">
                    Best Seller
                  </span>
                )}
                <h3 className="text-3xl mb-4">{offer.name}</h3>
                <div className="text-5xl font-display gold-text-gradient mb-10">{offer.price}</div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {offer.features.map((f, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-center justify-center gap-3">
                      <Star className="w-3 h-3 text-gold fill-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openBooking(offer.name)}
                  className={`btn-luxury ${idx === 1 ? 'bg-gold text-black glow-gold' : 'border border-gold text-gold hover:bg-gold hover:text-black'}`}
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-6">Client Love</h2>
            <div className="w-32 h-[1px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-card p-10 relative">
                <div className="flex text-gold mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/70 italic text-lg mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">{t.name[0]}</div>
                  <div className="text-sm font-bold uppercase tracking-widest">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 mx-auto rounded-full border border-gold/20 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-black transition-all duration-700 glow-gold">
                  {item.icon}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest leading-relaxed text-white/80">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl mb-4">Beauty Tips</h2>
              <p className="text-white/50 italic font-serif text-xl">Expert advice for your beauty routine.</p>
            </div>
            <button 
              onClick={() => setIsAllArticlesModalOpen(true)}
              className="hidden md:flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px] border-b border-gold/30 pb-1 hover:border-gold transition-all"
            >
              View All Articles <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => openArticle(post)}>
                <div className="aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5">
                  <img src={`https://picsum.photos/seed/${post.title}/800/450`} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="text-gold text-[10px] font-bold uppercase tracking-widest mb-3">{post.date}</div>
                <h3 className="text-2xl mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-white/50 text-sm mb-6 font-light">{post.excerpt}</p>
                <button 
                  onClick={(e) => { e.stopPropagation(); openArticle(post); }}
                  className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-widest text-[10px] hover:text-gold transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="section-padding bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl mb-10">Visit Us</h2>
              <div className="space-y-10 mb-16">
                <div className="flex items-start gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0"><MapPin className="w-7 h-7" /></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Our Sanctuary</h4>
                    <p className="text-white/60 text-lg">Near Machupalli Bus Stand, Kadapa, Andhra Pradesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0"><Phone className="w-7 h-7" /></div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Phone Support</h4>
                    <p className="text-white/60 text-lg">{PHONE_NUMBER}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-luxury-primary flex-1 flex items-center justify-center gap-3">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-luxury-outline flex-1 flex items-center justify-center gap-3 !border-emerald-500/50 !text-emerald-500 hover:!bg-emerald-500 hover:!text-white">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            
            <div className="h-[500px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15481.6508215682!2d78.8173468!3d14.4722851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb372078232c31f%3A0x2a369a1c09ad667a!2sKadapa%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709545000000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-luxury-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <div className="flex flex-col mb-8">
                <span className="text-4xl font-display font-bold gold-text-gradient leading-none">MBC</span>
                <span className="text-xs uppercase tracking-[0.4em] text-white/50">Beauty Parlour & Boutique</span>
              </div>
              <p className="text-white/40 max-w-sm mb-10 text-lg font-light leading-relaxed">
                Crafting timeless beauty experiences in Kadapa. We believe every woman deserves to shine with elegance and confidence.
              </p>
              <div className="flex gap-6">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:text-gold hover:border-gold transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-8 text-gold">Sanctuary</h4>
              <ul className="space-y-5 text-white/40 text-sm font-medium">
                {['Services', 'Gallery', 'Offers', 'About', 'Contact'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-8 text-gold">Connect</h4>
              <ul className="space-y-6 text-white/40 text-sm">
                <li className="flex items-start gap-4"><MapPin className="w-5 h-5 text-gold shrink-0" /> Kadapa, Andhra Pradesh</li>
                <li className="flex items-center gap-4"><Phone className="w-5 h-5 text-gold shrink-0" /> {PHONE_NUMBER}</li>
                <li className="flex items-center gap-4"><MessageCircle className="w-5 h-5 text-gold shrink-0" /> WhatsApp Booking</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold">
            &copy; {new Date().getFullYear()} MBC. Crafted for Excellence.
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-10 right-10 z-50"
      >
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:bg-emerald-500 transition-all group relative"
        >
          <MessageCircle className="w-10 h-10" />
          <span className="absolute right-full mr-6 bg-white text-black px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl translate-x-4 group-hover:translate-x-0">
            Book via WhatsApp
          </span>
        </a>
      </motion.div>

      {/* Booking Modal */}
      <Modal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        title={selectedService ? `Book ${selectedService}` : "Book Your Appointment"}
      >
        <BookingContent />
      </Modal>

      {/* Article Modal */}
      <Modal 
        isOpen={isArticleModalOpen} 
        onClose={() => setIsArticleModalOpen(false)} 
        title={selectedArticle?.title || "Beauty Tip"}
      >
        {selectedArticle && <ArticleContent article={selectedArticle} />}
      </Modal>

      {/* All Articles Modal */}
      <Modal 
        isOpen={isAllArticlesModalOpen} 
        onClose={() => setIsAllArticlesModalOpen(false)} 
        title="All Beauty Tips"
      >
        <div className="grid grid-cols-1 gap-8 text-left">
          {BLOG_POSTS.map((post, i) => (
            <div 
              key={i} 
              className="group cursor-pointer border-b border-white/10 pb-8 last:border-0"
              onClick={() => {
                setIsAllArticlesModalOpen(false);
                openArticle(post);
              }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 aspect-video rounded-xl overflow-hidden shrink-0">
                  <img src={`https://picsum.photos/seed/${post.title}/400/225`} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <div className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">{post.date}</div>
                  <h4 className="text-xl mb-2 group-hover:text-gold transition-colors">{post.title}</h4>
                  <p className="text-white/50 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
