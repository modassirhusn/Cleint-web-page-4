import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Calendar, Users, Clock, Phone, Mail, MapPin, Star, Award, Utensils, Wine, ChefHat } from 'lucide-react';

const BridgeRestaurant = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'Our Story' },
        { id: 'menu', label: 'Menu' },
        { id: 'wine', label: 'Wine Cellar' },
        { id: 'chef', label: 'The Chef' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'reservations', label: 'Reservations' },
        { id: 'contact', label: 'Contact' }
    ];

    const menuItems = {
        starters: [
            { name: 'Grilled Octopus', description: 'Cherry tomatoes, olives, fresh herbs', price: '₹1,850', image: '/images/dish-1.jpg' },
            { name: 'Burrata Salad', description: 'Heirloom tomatoes, basil oil, aged balsamic', price: '₹1,650', image: '/images/dish-2.jpg' }
        ],
        mains: [
            { name: 'Aglio e Olio Pasta', description: 'Fresh pasta, garlic, olive oil, cherry tomatoes', price: '₹1,950', image: '/images/dish-3.jpg' },
            { name: 'Pan-Seared Salmon', description: 'Herb crust, seasonal vegetables, lemon butter', price: '₹2,850', image: '/images/dish-4.jpg' }
        ],
        desserts: [
            { name: 'Artisan Dessert', description: 'Chef\'s special creation with seasonal fruits', price: '₹950', image: '/images/dish-5.jpg' }
        ]
    };

    const team = [
        { name: 'Chef Alessandro Romano', role: 'Executive Chef', experience: '20+ years', specialty: 'Italian & Fusion Cuisine', image: '/images/chef-1.jpg' },
        { name: 'Sofia Martinez', role: 'Sous Chef', experience: '12 years', specialty: 'Pastry & Desserts', image: '/images/chef-2.jpg' },
        { name: 'Marcus Chen', role: 'Head Sommelier', experience: '15 years', specialty: 'Wine Pairing', image: '/images/chef-3.jpg' }
    ];

    const gallery = [
        { id: 1, category: 'ambiance', src: '/images/gallery-1.jpg' },
        { id: 2, category: 'food', src: '/images/gallery-2.jpg' },
        { id: 3, category: 'drinks', src: '/images/gallery-3.jpg' },
        { id: 4, category: 'ambiance', src: '/images/gallery-4.jpg' },
        { id: 5, category: 'food', src: '/images/gallery-5.jpg' },
        { id: 6, category: 'drinks', src: '/images/gallery-6.jpg' }
    ];

    const NavBar = () => (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="text-2xl font-serif text-amber-400 tracking-wider">The Bridge</div>

                <div className="hidden md:flex items-center gap-8">
                    {navigation.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentPage(item.id)}
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-amber-400 ${currentPage === item.id ? 'text-amber-400 font-medium' : 'text-white/90'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg">
                    {navigation.map(item => (
                        <button
                            key={item.id}
                            onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }}
                            className="block w-full text-left px-6 py-4 text-white/90 hover:text-amber-400 hover:bg-white/5"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );

    const HomePage = () => (
        <div className="min-h-screen">
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                >
                    <img
                        src="/images/hero.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="inline-block mb-6"
                    >
                        <div className="w-20 h-px bg-amber-400 mb-6 mx-auto"></div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-7xl md:text-8xl font-serif text-white mb-6 tracking-wide"
                    >
                        The Bridge
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-amber-100 mb-12 tracking-wider font-light"
                    >
                        Where Fine Dining Meets Timeless Elegance
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <motion.button
                            onClick={() => setCurrentPage('reservations')}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251,191,36,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-amber-500 text-black font-medium tracking-wide transition-all duration-300"
                        >
                            Reserve a Table
                        </motion.button>
                        <motion.button
                            onClick={() => setCurrentPage('menu')}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 border-2 border-amber-400 text-amber-400 font-medium tracking-wide transition-all duration-300"
                        >
                            Explore Menu
                        </motion.button>
                    </motion.div>
                </div>
            </div>


            <div className="bg-gradient-to-b from-black to-zinc-900 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-serif text-white mb-6">Experience Excellence</h2>
                        <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: <Award className="w-12 h-12" />, title: 'Award Winning', desc: 'Recognized globally for culinary excellence' },
                            { icon: <ChefHat className="w-12 h-12" />, title: 'Master Chefs', desc: 'World-class culinary team with decades of experience' },
                            { icon: <Wine className="w-12 h-12" />, title: 'Curated Selection', desc: 'Exclusive wine collection from renowned vineyards' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="text-center p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="text-amber-400 mb-6 flex justify-center"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                                <p className="text-zinc-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Added Section Spacing */}
            <div className="py-32 bg-black"></div>

            {/* Space and Video 1 */}
            <div className="my-32">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative h-[600px] overflow-hidden rounded-3xl group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                    >
                        <video className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" autoPlay loop muted playsInline>
                            <source src="/videos/mixkit-empty-restaurant-with-nice-lighting-29050-hd-ready.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        <div className="absolute bottom-12 left-12">
                            <span className="text-amber-400 tracking-[0.4em] uppercase text-sm mb-4 block">Cinematic Experience</span>
                            <h3 className="text-5xl font-serif text-white leading-tight">Authentic <br />Atmosphere</h3>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/ambiance-1.jpg')] bg-cover bg-center bg-fixed opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 text-sm tracking-widest">SIGNATURE EXPERIENCE</div>
                            <h2 className="text-5xl font-serif text-white leading-tight">A Journey Through Flavor</h2>
                            <p className="text-xl text-zinc-300 leading-relaxed">
                                At The Bridge, every dish tells a story. Our chefs craft each plate with passion, precision, and the finest ingredients from around the world.
                            </p>
                            <button
                                onClick={() => setCurrentPage('about')}
                                className="inline-flex items-center gap-2 text-amber-400 hover:gap-4 transition-all duration-300 text-lg group"
                            >
                                Discover Our Story <ChevronRight className="transition-transform group-hover:translate-x-2" />
                            </button>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                src="/images/dish-1.jpg"
                                className="w-full h-64 object-cover"
                                alt="Dish"
                            />
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                src="/images/dish-2.jpg"
                                className="w-full h-64 object-cover mt-8"
                                alt="Dish"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Added Section Spacing */}
            <div className="py-32 bg-black"></div>

            {/* Video Insertion 2: Service */}
            <div className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative h-[600px] overflow-hidden rounded-3xl group border border-amber-500/10"
                    >
                        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                            <source src="/videos/mixkit-waiter-serving-meat-stew-in-a-restaurant-4672-full-hd.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h3 className="text-5xl font-serif text-white mb-4">Dedicated Service</h3>
                                <div className="w-32 h-1 bg-amber-500 mx-auto"></div>
                                <p className="mt-6 text-xl text-amber-100/80 max-w-xl">Where every detail is polished to perfection and every moment is crafted for your delight.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* New Expanded Section: Culinary Philosophy */}
            <div className="bg-zinc-950 py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-5xl font-serif text-white mb-12">The Culinary Philosophy</h2>
                            <div className="space-y-12">
                                {[
                                    { num: '01', title: 'Global Inspiration', desc: 'Sourcing the rarest seasonal ingredients from small-scale artisans across continents.' },
                                    { num: '02', title: 'Technical Mastery', desc: 'Where molecular gastronomy meets thousand-year-old traditional techniques.' },
                                    { num: '03', title: 'Visual Poetry', desc: 'Every plate is a canvas, designed to evoke emotion through color, texture, and form.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <span className="text-4xl font-serif text-amber-500/30 group-hover:text-amber-500 transition-colors duration-500">{item.num}</span>
                                        <div>
                                            <h4 className="text-2xl font-serif text-white mb-2">{item.title}</h4>
                                            <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10">
                                <img src="/images/chef-1.jpg" alt="Chef at work" className="w-full h-[700px] object-cover" />
                            </div>
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Enlarged Content Section */}
            <div className="bg-black py-40 my-24 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-6xl font-serif text-white mb-16">Guest Reviews</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { n: "Julianne Moore", t: "The Bridge is more than a restaurant; it's a sensory pilgrimage. Every dish is a chapter in a story of flavor." },
                            { n: "Robert Chen", t: "The attention to detail here is unparalleled. From the lighting to the service, everything is orchestrated to perfection." },
                            { n: "Sarah Jenkins", t: "Technically flawless and emotionally resonant. One of the few places where innovation serves the flavor." }
                        ].map((rev, i) => (
                            <div key={i} className="bg-zinc-900/50 p-12 border border-white/5 rounded-3xl hover:border-amber-500/30 transition-all duration-500 group">
                                <Star className="text-amber-500 w-6 h-6 mb-6 fill-current" />
                                <p className="text-zinc-300 text-lg italic leading-relaxed mb-8">"{rev.t}"</p>
                                <h4 className="text-white font-serif text-xl">— {rev.n}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* New Section: Private Events */}
            <div className="relative py-48 bg-zinc-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-6xl font-serif text-white leading-tight">Host Your Unforgettable Moments</h2>
                            <p className="text-xl text-zinc-400 leading-relaxed">
                                From intimate celebrations to grand corporate galas, our dedicated events team ensures every detail reflects your vision with the signature elegance of The Bridge.
                            </p>
                            <div className="grid grid-cols-2 gap-8 py-6">
                                <div>
                                    <h4 className="text-amber-500 font-serif text-2xl mb-2">500+</h4>
                                    <p className="text-zinc-500 text-sm tracking-widest uppercase">Events Hosted</p>
                                </div>
                                <div>
                                    <h4 className="text-amber-500 font-serif text-2xl mb-2">120</h4>
                                    <p className="text-zinc-500 text-sm tracking-widest uppercase">Max Capacity</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setCurrentPage('reservations')}
                                className="px-12 py-5 bg-white text-black font-medium tracking-[0.2em] uppercase hover:bg-amber-500 transition-colors duration-500"
                            >
                                Inquire Now
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img src="/images/ambiance-1.jpg" alt="Event Space" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute -bottom-8 -left-8 bg-amber-500 p-8 hidden md:block">
                                <Star className="w-12 h-12 text-black" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );

    const AboutPage = () => (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
                    <h1 className="text-6xl font-serif text-white mb-6">Our Story</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">A bridge between tradition and innovation, connecting cultures through exceptional cuisine</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-serif text-white">The Philosophy</h2>
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            Founded in 2015, The Bridge was born from a vision to create more than just a restaurant. We sought to build a culinary destination where East meets West, tradition embraces innovation, and every meal becomes a memorable experience.
                        </p>
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            Our name reflects our mission: to be a bridge between cultures, flavors, and people. We source the finest ingredients globally, respect time-honored techniques, and infuse modern creativity into every dish.
                        </p>
                    </div>
                    <img src="/images/about-1.jpg" className="w-full h-96 object-cover shadow-2xl" alt="Restaurant" />
                </div>

                <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 backdrop-blur-sm p-12 mb-24">
                    <h2 className="text-4xl font-serif text-white text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Excellence', desc: 'Unwavering commitment to quality in every detail' },
                            { title: 'Innovation', desc: 'Constantly evolving while respecting tradition' },
                            { title: 'Sustainability', desc: 'Ethical sourcing and environmental responsibility' }
                        ].map((value, i) => (
                            <div key={i} className="text-center">
                                <h3 className="text-2xl font-serif text-amber-400 mb-4">{value.title}</h3>
                                <p className="text-zinc-400">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-4xl font-serif text-white mb-6">Awards & Recognition</h2>
                    <div className="grid md:grid-cols-4 gap-6 mt-12">
                        {[
                            { award: 'Michelin Star', year: '2022-2025' },
                            { award: "World's 50 Best", year: '2023' },
                            { award: 'Best Fine Dining', year: '2024' },
                            { award: 'Wine Spectator', year: 'Excellence Award' }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white/5 backdrop-blur-sm">
                                <Star className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                                <h4 className="text-white font-medium mb-2">{item.award}</h4>
                                <p className="text-sm text-zinc-400">{item.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const MenuPage = () => (
        <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-serif text-white mb-6">Our Menu</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
                    <p className="text-xl text-zinc-400">Curated selections crafted with passion</p>
                </div>

                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {['all', 'starters', 'mains', 'desserts'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-3 tracking-wide transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-amber-500 text-black'
                                : 'bg-white/5 text-white hover:bg-white/10'
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="space-y-16">
                    {Object.entries(menuItems).map(([category, items]) => (
                        (selectedCategory === 'all' || selectedCategory === category) && (
                            <div key={category}>
                                <h2 className="text-4xl font-serif text-amber-400 mb-8 text-center capitalize">{category}</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {items.map((item, i) => (
                                        <div key={i} className="group bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-500">
                                            <div className="flex gap-6">
                                                <img src={item.image} alt={item.name} className="w-32 h-32 object-cover group-hover:scale-110 transition-transform duration-500" />
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-3">
                                                        <h3 className="text-2xl font-serif text-white">{item.name}</h3>
                                                        <span className="text-xl text-amber-400 font-medium">{item.price}</span>
                                                    </div>
                                                    <p className="text-zinc-400">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>

                <div className="mt-24 text-center bg-gradient-to-r from-amber-900/20 to-amber-950/20 p-12">
                    <Utensils className="w-16 h-16 text-amber-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-serif text-white mb-4">Chef's Tasting Menu</h3>
                    <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                        Experience our chef's creativity with a specially curated 7-course journey. Each course paired with premium wines.
                    </p>
                    <p className="text-2xl text-amber-400 font-medium">₹8,500 per person</p>
                </div>
            </div>
        </div>
    );

    const WinePage = () => (
        <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-amber-500 tracking-[0.5em] uppercase text-sm mb-4 block">The Sommelier's Choice</span>
                    <h1 className="text-7xl font-serif text-white mb-6">Wine Cellar</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-24 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-4xl font-serif text-white mb-8">A Collection of Rarities</h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                            Our underground cellar houses over 2,000 bottles from the world's most prestigious vineyards. From vintage Champagnes to rare Bordeaux, each bottle is curated to complement our culinary offerings.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: 'Old World Classics', desc: 'Focusing on the heritage regions of France, Italy, and Spain.' },
                                { title: 'New World Gems', desc: 'Handpicked selections from Napa, Mendoza, and Barossa.' },
                                { title: 'Limited Editions', desc: 'Rare vintages and exclusive labels found nowhere else.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                        <Wine className="text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl text-white font-serif">{item.title}</h4>
                                        <p className="text-zinc-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="relative">
                        <img src="/images/gallery-3.jpg" className="rounded-2xl grayscale h-[600px] w-full object-cover" alt="Wine Cellar" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                <div className="bg-zinc-900/40 p-16 rounded-3xl border border-white/5">
                    <h3 className="text-3xl font-serif text-white mb-12 text-center">Featured Vintages</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Château Margaux', year: '2015', region: 'Bordeaux, France', price: '₹45,000' },
                            { name: 'Sassicaia', year: '2018', region: 'Tuscany, Italy', price: '₹32,000' },
                            { name: 'Opus One', year: '2019', region: 'Napa Valley, USA', price: '₹38,000' }
                        ].map((wine, i) => (
                            <div key={i} className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors">
                                <span className="text-amber-500 font-serif mb-2 block">{wine.year}</span>
                                <h4 className="text-2xl text-white font-serif mb-2">{wine.name}</h4>
                                <p className="text-zinc-500 mb-4">{wine.region}</p>
                                <span className="text-xl text-amber-100">{wine.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const ChefPage = () => (
        <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-serif text-white mb-6">Meet Our Team</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
                    <p className="text-xl text-zinc-400">The culinary artists behind every exceptional dish</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-24">
                    {team.map((member, i) => (
                        <div key={i} className="group">
                            <div className="relative overflow-hidden mb-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-2">{member.name}</h3>
                            <p className="text-amber-400 mb-3">{member.role}</p>
                            <p className="text-zinc-400 mb-2">{member.experience}</p>
                            <p className="text-sm text-zinc-500">{member.specialty}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-amber-900/20 to-amber-950/20 backdrop-blur-sm p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <ChefHat className="w-16 h-16 text-amber-400 mx-auto mb-6" />
                        <h2 className="text-4xl font-serif text-white mb-6">Our Philosophy</h2>
                        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                            "Cooking is an art form that requires patience, precision, and passion. We believe in honoring ingredients, respecting traditions, and creating experiences that transcend the plate."
                        </p>
                        <p className="text-amber-400 text-xl font-serif">— Chef Alessandro Romano</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const GalleryPage = () => (
        <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-serif text-white mb-6">Gallery</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
                    <p className="text-xl text-zinc-400">A visual journey through The Bridge</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {gallery.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setLightboxImage(item.src)}
                            className="relative overflow-hidden group cursor-pointer h-80"
                        >
                            <img
                                src={item.src}
                                alt="Gallery"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg">View Image</span>
                            </div>
                        </div>
                    ))}
                </div>

                {lightboxImage && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-amber-400"
                            onClick={() => setLightboxImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <img src={lightboxImage} alt="Enlarged" className="max-w-full max-h-full object-contain" />
                    </div>
                )}
            </div>
        </div>
    );

    const ReservationsPage = () => {
        const [formData, setFormData] = useState({
            name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: ''
        });
        const [submitted, setSubmitted] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        };

        return (
            <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl font-serif text-white mb-6">Reservations</h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
                        <p className="text-xl text-zinc-400">Reserve your table for an unforgettable experience</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-12">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-[pulse_1s_ease-in-out]">
                                    <Star className="w-10 h-10 text-black" />
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-4">Reservation Confirmed!</h3>
                                <p className="text-zinc-400">We look forward to welcoming you.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/10 border border-white/20 p-4 text-white focus:border-amber-400 focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/10 border border-white/20 p-4 text-white focus:border-amber-400 focus:outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-white/10 border border-white/20 p-4 text-white focus:border-amber-400 focus:outline-none transition-colors"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white mb-2">Number of Guests</label>
                                        <select
                                            value={formData.guests}
                                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                            className="w-full bg-white/10 border border-white/20 p-4 text-white focus:border-amber-400 focus:outline-none transition-colors"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white mb-2">Date</label>
                                        <input
                                            type="date"
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full bg-white/10 border border-white/20 p-4 text-white focus:border-amber-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white mb-2">Time</label>
                                        <select
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            className="w-full bg-white/10 border border-white/20 p-4 text-white focus:border-amber-400 focus:outline-none transition-colors"
                                        >
                                            <option value="">Select Time</option>
                                            <option value="18:00">6:00 PM</option>
                                            <option value="18:30">6:30 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="19:30">7:30 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="20:30">8:30 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                            <option value="21:30">9:30 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white mb-2">Special Occasion (Optional)</label>
                                    <input
                                        type="text"
                                        value={formData.occasion}
                                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                                        className="w-full bg-white/10 border border-white/20 p-4 text-white focus:border-amber-400 focus:outline-none transition-colors"
                                        placeholder="Birthday, Anniversary, etc."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-amber-500 text-black font-medium tracking-wide hover:bg-amber-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
                                >
                                    Confirm Reservation
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
                        <div>
                            <Clock className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-white font-medium mb-2">Dining Hours</h3>
                            <p className="text-zinc-400 text-sm">Dinner: 6:00 PM - 11:00 PM</p>
                            <p className="text-zinc-400 text-sm">Closed Mondays</p>
                        </div>
                        <div>
                            <Users className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-white font-medium mb-2">Private Dining</h3>
                            <p className="text-zinc-400 text-sm">Available for parties up to 40 guests</p>
                        </div>
                        <div>
                            <Phone className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                            <h3 className="text-white font-medium mb-2">Call Us</h3>
                            <p className="text-zinc-400 text-sm">+91 98765 43210</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ContactPage = () => (
        <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-serif text-white mb-6">Contact Us</h1>
                    <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
                    <p className="text-xl text-zinc-400">We'd love to hear from you</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <MapPin className="w-8 h-8 text-amber-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-3">Location</h3>
                                <p className="text-zinc-400">123 Culinary Boulevard</p>
                                <p className="text-zinc-400">Park Street, Kolkata</p>
                                <p className="text-zinc-400">West Bengal 700016, India</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <Phone className="w-8 h-8 text-amber-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-3">Phone</h3>
                                <p className="text-zinc-400">Reservations: +91 98765 43210</p>
                                <p className="text-zinc-400">General: +91 98765 43211</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <Mail className="w-8 h-8 text-amber-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-3">Email</h3>
                                <p className="text-zinc-400">reservations@thebridge.com</p>
                                <p className="text-zinc-400">info@thebridge.com</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <Clock className="w-8 h-8 text-amber-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-3">Hours</h3>
                                <p className="text-zinc-400">Tuesday - Sunday: 6:00 PM - 11:00 PM</p>
                                <p className="text-zinc-400">Monday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-8">
                        <h3 className="text-3xl font-serif text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
                            />
                            <textarea
                                rows="6"
                                placeholder="Your Message"
                                className="w-full bg-white/10 border border-white/20 p-4 text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-4 bg-amber-500 text-black font-medium tracking-wide hover:bg-amber-400 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 h-96 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                        <p className="text-zinc-400">Interactive Map Would Display Here</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const Footer = () => (
        <footer className="bg-black border-t border-white/10 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-serif text-amber-400 mb-4">The Bridge</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Where fine dining meets timeless elegance. An experience beyond the ordinary.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['Home', 'Menu', 'Reservations', 'Gallery'].map(item => (
                                <button
                                    key={item}
                                    onClick={() => setCurrentPage(item.toLowerCase())}
                                    className="block text-zinc-400 hover:text-amber-400 transition-colors text-sm"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Contact</h4>
                        <p className="text-zinc-400 text-sm mb-2">123 Culinary Boulevard</p>
                        <p className="text-zinc-400 text-sm mb-2">Kolkata, West Bengal</p>
                        <p className="text-zinc-400 text-sm">+91 98765 43210</p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            {['Instagram', 'Facebook', 'Twitter'].map(social => (
                                <div key={social} className="w-10 h-10 bg-white/10 hover:bg-amber-400/20 flex items-center justify-center cursor-pointer transition-colors">
                                    <span className="text-white text-xs">{social[0]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-zinc-500 text-sm italic">"Dining is not just food. It is an experience."</p>
                    <p className="text-zinc-600 text-xs mt-4">© 2026 The Bridge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );

    const pages = {
        home: <HomePage />,
        about: <AboutPage />,
        menu: <MenuPage />,
        wine: <WinePage />,
        chef: <ChefPage />,
        gallery: <GalleryPage />,
        reservations: <ReservationsPage />,
        contact: <ContactPage />
    };

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <NavBar />
            {pages[currentPage]}
            <Footer />
        </div>
    );
};

export default BridgeRestaurant;
