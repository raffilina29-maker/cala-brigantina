import { motion } from "motion/react";
import { 
  Wine, 
  Utensils, 
  Music, 
  Calendar, 
  Instagram, 
  Phone, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const SicilianLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative ${className} group`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" fill="currentColor" className="text-brand-cream" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-black" />
      
      {/* Stylized Face / Testa di Moro elements */}
      <path 
        d="M30 40 Q50 20 70 40 L75 60 Q50 85 25 60 Z" 
        fill="currentColor" 
        className="text-brand-black"
      />
      
      {/* Crown / Foulard */}
      <path 
        d="M25 35 L50 15 L75 35 L80 45 L20 45 Z" 
        fill="currentColor" 
        className="text-brand-red"
      />
      
      {/* Eyes (minimalist) */}
      <circle cx="40" cy="50" r="3" fill="white" />
      <circle cx="60" cy="50" r="3" fill="white" />
      
      {/* Decorative dots */}
      <circle cx="50" cy="25" r="2" fill="white" />
      <circle cx="35" cy="30" r="1.5" fill="white" />
      <circle cx="65" cy="30" r="1.5" fill="white" />
    </svg>
    {/* Animated glow effect on hover */}
    <div className="absolute inset-0 rounded-full bg-brand-red/20 scale-0 group-hover:scale-110 transition-transform duration-500 blur-md -z-10" />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Chi Siamo", href: "#chi-siamo" },
    { name: "La Cantina", href: "#cantina" },
    { name: "Cucina", href: "#cucina" },
    { name: "Eventi", href: "#eventi" },
    { name: "Contatti", href: "#contatti" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <SicilianLogo className="w-10 h-10 md:w-12 md:h-12" />
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter">
              <span className="text-brand-red">Cala</span> Brigantina
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] opacity-50 group-hover:text-brand-red transition-colors">Bistrot Siciliano</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#prenota" 
            className="bg-brand-black text-brand-cream px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-brand-red transition-all duration-300"
          >
            Prenota
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-black/5 py-8 px-6 flex flex-col gap-6 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-serif"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#prenota" 
            className="bg-brand-red text-brand-cream py-4 rounded-xl text-center font-bold uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            Prenota un Tavolo
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-brand-cream">
      {/* Abstract Graphic Elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 border-[1px] border-brand-red/20 rounded-full" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 border-[1px] border-brand-black/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] foulard-pattern opacity-[0.03] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <SicilianLogo className="w-32 h-32 md:w-48 md:h-48 shadow-2xl rounded-full" />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tight">
          Cala <span className="text-brand-red italic">Brigantina</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-brand-red" />
          <p className="text-xl md:text-2xl uppercase tracking-[0.3em] font-light">Food | Wine | Beer</p>
          <div className="h-[1px] w-8 bg-brand-red" />
        </div>

        <p className="text-lg md:text-xl text-brand-black/60 mb-12 max-w-xl mx-auto font-light leading-relaxed">
          Bistrot Siciliano nel cuore di Pozzallo. Un viaggio sensoriale tra mare, terra e cultura.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#prenota" 
            className="bg-brand-black text-brand-cream px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-brand-red transition-all duration-500 shadow-lg hover:shadow-brand-red/20"
          >
            Prenota un Tavolo
          </a>
          <a 
            href="#cantina" 
            className="border border-brand-black/20 px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-all duration-500"
          >
            Scopri la Cantina
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="chi-siamo" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
              alt="Pozzallo Atmosphere" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-red rounded-2xl flex items-center justify-center p-8 text-brand-cream shadow-xl hidden lg:flex">
            <p className="font-serif text-xl italic leading-tight">"Tra il mare e la tradizione siciliana."</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <span className="text-brand-red uppercase tracking-widest text-sm font-bold">Identità</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Cala Brigantina nasce a Pozzallo.</h2>
          </div>
          
          <div className="space-y-6 text-lg text-brand-black/70 font-light leading-relaxed">
            <p>
              Un luogo dove il vino racconta storie, il cibo è a km 0 e la musica accompagna ogni esperienza. Cala Brigantina non è solo un bistrot, è un'estensione dell'anima siciliana, reinterpretata con eleganza contemporanea.
            </p>
            <p>
              Ogni ingrediente è selezionato dai produttori locali, ogni calice è un tributo alla nostra terra vulcanica e solare. Qui, la convivialità incontra la raffinatezza in un'atmosfera intima e culturale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Utensils size={20} />
              </div>
              <h4 className="font-serif text-xl">Cucina Km 0</h4>
              <p className="text-sm text-brand-black/60">Ingredienti freschi e stagionali dal territorio.</p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                <Wine size={20} />
              </div>
              <h4 className="font-serif text-xl">Cantina</h4>
              <p className="text-sm text-brand-black/60">Etichette selezionate che raccontano la Sicilia.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TheCellar = () => {
  return (
    <section id="cantina" className="py-24 px-6 bg-brand-black text-brand-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full foulard-pattern opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-red uppercase tracking-widest text-sm font-bold">La Cantina</span>
          <h2 className="text-4xl md:text-6xl font-serif">Un Viaggio in ogni Calice</h2>
          <p className="max-w-2xl mx-auto text-brand-cream/60 font-light text-lg italic">
            "Una vasta cantina con etichette selezionate che raccontano la Sicilia in ogni calice."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Vini Siciliani", desc: "Dai bianchi dell'Etna ai rossi intensi del ragusano.", img: "https://www.pexels.com/it-it/@raffilina-2160328674/downloads/" },
            { title: "Degustazioni", desc: "Percorsi guidati tra i sentori della nostra isola.", img: "https://www.pexels.com/it-it/@raffilina-2160328674/downloads/ },
            { title: "Etichette Pregiate", desc: "Una selezione curata per i palati più esigenti.", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=600" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 space-y-2">
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="text-sm text-brand-cream/60 font-light">{item.desc}</p>
                <div className="pt-4 overflow-hidden">
                  <div className="h-[1px] w-0 bg-brand-red transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Kitchen = () => {
  return (
    <section id="cucina" className="py-24 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-brand-red uppercase tracking-widest text-sm font-bold">Cucina Km 0</span>
            <h2 className="text-4xl md:text-6xl font-serif">Autenticità nel Piatto</h2>
            <p className="text-lg text-brand-black/60 font-light leading-relaxed">
              Prodotti locali, ingredienti stagionali e piatti tipici rivisitati con maestria. Dai taglieri gourmet alle specialità mediterranee, ogni boccone è un omaggio alla Sicilia.
            </p>
          </div>
          <a href="#menu" className="flex items-center gap-2 text-brand-red uppercase tracking-widest text-sm font-bold group">
            Vedi il Menù <ChevronRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1534422298391-e4f8c170db0a?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=600"
          ].map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden shadow-md"
            >
              <img src={img} alt="Food Detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MusicSection = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <span className="text-brand-red uppercase tracking-widest text-sm font-bold">Serate Musicali</span>
            <h2 className="text-4xl md:text-6xl font-serif">La Sicilia si ascolta, oltre che gustarsi.</h2>
          </div>
          <p className="text-lg text-brand-black/60 font-light leading-relaxed">
            Jazz, musica siciliana d'autore e cantautorato raffinato. Cala Brigantina si trasforma in un palcoscenico intimo dove le note si fondono con il profumo del vino.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-brand-black/5 hover:border-brand-red/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-red text-brand-cream flex items-center justify-center font-serif italic text-xl">J</div>
              <div>
                <h4 className="font-bold">Venerdì Jazz</h4>
                <p className="text-sm text-brand-black/50">Dalle 21:30 - Ingresso libero</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-brand-black/5 hover:border-brand-red/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-black text-brand-cream flex items-center justify-center font-serif italic text-xl">S</div>
              <div>
                <h4 className="font-bold">Sicilia d'Autore</h4>
                <p className="text-sm text-brand-black/50">Sabato sera - Musica live</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <div className="relative">
             <div className="aspect-square rounded-full overflow-hidden border-8 border-brand-cream shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" 
                alt="Music Atmosphere" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-red/20 rounded-full animate-pulse pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="prenota" className="py-24 px-6 bg-brand-cream relative">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-3xl shadow-2xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-serif">Vivi l'esperienza Cala Brigantina.</h2>
          <p className="text-brand-black/60 font-light">Prenota il tuo tavolo o richiedi informazioni per un evento privato.</p>
        </div>

        <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Nome</label>
            <input type="text" className="w-full bg-white/50 border-b border-brand-black/10 py-3 px-4 focus:border-brand-red outline-none transition-colors" placeholder="Il tuo nome" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Email</label>
            <input type="email" className="w-full bg-white/50 border-b border-brand-black/10 py-3 px-4 focus:border-brand-red outline-none transition-colors" placeholder="La tua email" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Data</label>
            <input type="date" className="w-full bg-white/50 border-b border-brand-black/10 py-3 px-4 focus:border-brand-red outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Persone</label>
            <select className="w-full bg-white/50 border-b border-brand-black/10 py-3 px-4 focus:border-brand-red outline-none transition-colors">
              <option>2 Persone</option>
              <option>3 Persone</option>
              <option>4 Persone</option>
              <option>5+ Persone</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Messaggio</label>
            <textarea className="w-full bg-white/50 border-b border-brand-black/10 py-3 px-4 focus:border-brand-red outline-none transition-colors h-32 resize-none" placeholder="Richieste particolari o eventi privati..."></textarea>
          </div>
          <button className="md:col-span-2 bg-brand-black text-brand-cream py-5 rounded-xl font-bold uppercase tracking-[0.2em] hover:bg-brand-red transition-all duration-500 shadow-xl">
            Invia Prenotazione
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contatti" className="bg-brand-black text-brand-cream pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <SicilianLogo className="w-10 h-10" />
            <h3 className="text-2xl font-serif">Cala <span className="text-brand-red italic">Brigantina</span></h3>
          </div>
          <p className="text-brand-cream/50 font-light text-sm leading-relaxed">
            Un bistrot identitario nel cuore di Pozzallo. Dove la tradizione siciliana incontra l'eleganza contemporanea.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase tracking-widest text-xs font-bold text-brand-red">Contatti</h4>
          <ul className="space-y-4 text-sm font-light text-brand-cream/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span>Pozzallo, Sicilia<br />Via delle Tradizioni, 42</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-red shrink-0" />
              <span>+39 0932 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="text-brand-red shrink-0" />
              <span>WhatsApp: +39 333 123 4567</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase tracking-widest text-xs font-bold text-brand-red">Orari</h4>
          <ul className="space-y-2 text-sm font-light text-brand-cream/70">
            <li className="flex justify-between"><span>Lun - Gio</span> <span>18:00 - 01:00</span></li>
            <li className="flex justify-between"><span>Ven - Sab</span> <span>18:00 - 02:00</span></li>
            <li className="flex justify-between"><span>Domenica</span> <span>12:00 - 00:00</span></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="uppercase tracking-widest text-xs font-bold text-brand-red">Link Rapidi</h4>
          <ul className="space-y-2 text-sm font-light text-brand-cream/70">
            <li><a href="#chi-siamo" className="hover:text-brand-red transition-colors">Chi Siamo</a></li>
            <li><a href="#cantina" className="hover:text-brand-red transition-colors">La Cantina</a></li>
            <li><a href="#cucina" className="hover:text-brand-red transition-colors">Cucina Km 0</a></li>
            <li><a href="#eventi" className="hover:text-brand-red transition-colors">Eventi</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-brand-cream/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-brand-cream/30">
        <p>© 2026 Cala Brigantina Bistrot. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-red selection:text-brand-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TheCellar />
        <Kitchen />
        <MusicSection />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
