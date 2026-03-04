import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Scissors, 
  Star, 
  ShieldCheck, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle 
} from 'lucide-react';

export const PHONE_NUMBER = "+91 85550 66584";
export const WHATSAPP_LINK = `https://wa.me/918555066584`;
export const INSTAGRAM_LINK = "https://www.instagram.com/modernbeautyclinic_";

export const SERVICES = [
  { 
    name: "Bridal Makeup", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Exquisite bridal transformations for your special day.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Engagement Makeup", 
    icon: React.createElement(Heart, { className: "w-6 h-6" }), 
    desc: "Radiant looks for your engagement ceremony.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Party Makeup", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Stunning looks for any celebration or event.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Mehndi Design", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Intricate and beautiful henna patterns.",
    image: "https://www.affordable.pk/uploads/blog/1681727779_20+%20Beautiful%20and%20Trendy%20Mehndi%20Designs%20for%20Eid%202023.jpg"
  },
  { 
    name: "Skin Care", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Rejuvenating facials and skin therapies.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Hair Care & Spa", 
    icon: React.createElement(Scissors, { className: "w-6 h-6" }), 
    desc: "Professional hair styling and nourishing treatments.",
    image: "https://siestaheadspa.com/wp-content/uploads/2024/09/The-Unique-Experience-of-Hair-and-Scalp-Care-at-Siesta-Head-Spa-and-Salon-6.webp"
  },
  { 
    name: "Manicure & Pedicure", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Pampering for your hands and feet.",
    image: "https://static.wixstatic.com/media/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg"
  },
  { 
    name: "Nail Art", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Creative and trendy nail designs.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Saree Draping", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Perfect pleats and elegant draping styles.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Blouse Stitching", 
    icon: React.createElement(Scissors, { className: "w-6 h-6" }), 
    desc: "Custom-fit designer blouses.",
    image: "https://khinkhwab.com/cdn/shop/files/khinkhwab-design-studio-potli-buttons-blouse-stitching-simple-without-pads-18937974128802.jpg?v=1700949039&width=3840"
  },
  { 
    name: "Embroidery Work", 
    icon: React.createElement(Sparkles, { className: "w-6 h-6" }), 
    desc: "Detailed and artistic hand embroidery.",
    image: "https://www.hunarcourses.com/blog/wp-content/uploads/2022/11/Image-3-9.jpg"
  },
];

export const GALLERY = [
  { url: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800", title: "Bridal Makeup", category: "Bridal Makeup" },
  { url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800", title: "Mehndi Design", category: "Mehndi Designs" },
  { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800", title: "Beauty Treatment", category: "Bridal Makeup" },
  { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", title: "Boutique Work", category: "Boutique Work" },
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", title: "Hair Styling", category: "Hair Styling" },
  { url: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800", title: "Nail Art", category: "Bridal Makeup" },
];

export const OFFERS = [
  { name: "Beauty Glow Package", price: "₹599", features: ["Threading", "Clean-up", "Hair Cut", "Face Bleach"] },
  { name: "Classic Beauty Package", price: "₹999", features: ["Facial", "Pedicure", "Hair Spa", "Full Arms Wax"] },
  { name: "Royal Bridal Package", price: "₹1499", features: ["Premium Facial", "Manicure & Pedicure", "Hair Treatment", "D-Tan"] },
];

export const WHY_CHOOSE_US = [
  { title: "Premium Products", icon: React.createElement(Star, { className: "w-8 h-8" }) },
  { title: "Professional Artists", icon: React.createElement(Users, { className: "w-8 h-8" }) },
  { title: "Hygienic Treatments", icon: React.createElement(ShieldCheck, { className: "w-8 h-8" }) },
  { title: "Affordable Packages", icon: React.createElement(Sparkles, { className: "w-8 h-8" }) },
  { title: "Bridal Specialists", icon: React.createElement(Heart, { className: "w-8 h-8" }) },
];

export const TESTIMONIALS = [
  { name: "Anjali Sharma", text: "My bridal makeup was absolutely perfect. Everyone loved it!", rating: 5 },
  { name: "Priya Reddy", text: "Best beauty parlour in Kadapa. Very professional and clean.", rating: 5 },
  { name: "Sneha Kapoor", text: "Professional service and beautiful results. Highly recommended.", rating: 5 },
];

export const BLOG_POSTS = [
  { 
    title: "Bridal Skincare Tips", 
    date: "Oct 12, 2023", 
    excerpt: "Prepare your skin for the big day with these simple steps...",
    content: "A flawless bridal look starts with healthy skin. We recommend starting your skincare routine at least 3 months before the wedding. 1. Hydrate: Drink at least 3 liters of water daily. 2. Cleanse: Use a gentle cleanser twice a day. 3. Moisturize: Never skip moisturizer, even if you have oily skin. 4. Sunscreen: Protect your skin from UV damage. 5. Professional Facials: Visit us for monthly rejuvenating facials tailored to your skin type."
  },
  { 
    title: "Hair Care Secrets", 
    date: "Nov 05, 2023", 
    excerpt: "Maintain healthy and shiny hair with our expert advice...",
    content: "Your hair is your crowning glory. To keep it shiny and strong: 1. Regular Trims: Get a trim every 8-10 weeks to prevent split ends. 2. Deep Conditioning: Use a hair mask once a week. 3. Avoid Heat: Minimize the use of styling tools. 4. Scalp Massage: Stimulate blood flow with regular oil massages. 5. Professional Spa: Our hair spa treatments nourish from root to tip, ensuring your hair looks voluminous on your big day."
  },
  { 
    title: "Choosing Bridal Makeup", 
    date: "Dec 20, 2023", 
    excerpt: "How to pick the perfect look that matches your style...",
    content: "Choosing the right makeup look is crucial. Consider your outfit color, the time of the event, and your personal style. 1. Classic Red: Timeless and bold. 2. Nude & Dewy: Modern and elegant. 3. Smokey Eyes: For a dramatic evening look. 4. Traditional Gold: Perfect for South Indian brides. We offer personalized consultations to help you decide the best look that enhances your natural beauty."
  },
];
