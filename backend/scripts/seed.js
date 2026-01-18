require('dotenv').config();
const mongoose = require('mongoose');
const Menu = require('../models/Menu');
const Team = require('../models/Team');
const Gallery = require('../models/Gallery');
const Wine = require('../models/Wine');
const Review = require('../models/Review');
const fs = require('fs');
const path = require('path');

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/the-meal');
        console.log('Connected to MongoDB for seeding...');

        // Seed Menu
        const menuPath = path.join(__dirname, '../data/menu.json');
        const menuData = JSON.parse(fs.readFileSync(menuPath, 'utf8'));
        await Menu.deleteMany({});
        const itemsToInsert = [];
        Object.entries(menuData).forEach(([category, items]) => {
            items.forEach(item => {
                itemsToInsert.push({
                    category,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    image: item.image
                });
            });
        });
        await Menu.insertMany(itemsToInsert);
        console.log('Successfully seeded menu items!');

        // Seed Team
        await Team.deleteMany({});
        const teamData = [
            { name: 'Chef Alessandro Romano', role: 'Executive Chef', experience: '20+ years', specialty: 'Italian & Fusion Cuisine', image: '/images/chef-1.jpg' },
            { name: 'Sofia Martinez', role: 'Sous Chef', experience: '12 years', specialty: 'Pastry & Desserts', image: '/images/chef-2.jpg' },
            { name: 'Marcus Chen', role: 'Head Sommelier', experience: '15 years', specialty: 'Wine Pairing', image: '/images/chef-3.jpg' }
        ];
        await Team.insertMany(teamData);
        console.log('Successfully seeded team items!');

        // Seed Gallery
        await Gallery.deleteMany({});
        const galleryData = [
            { category: 'ambiance', src: '/images/gallery-1.jpg' },
            { category: 'food', src: '/images/gallery-2.jpg' },
            { category: 'drinks', src: '/images/gallery-3.jpg' },
            { category: 'ambiance', src: '/images/gallery-4.jpg' },
            { category: 'food', src: '/images/gallery-5.jpg' },
            { category: 'drinks', src: '/images/gallery-6.jpg' }
        ];
        await Gallery.insertMany(galleryData);
        console.log('Successfully seeded gallery items!');

        // Seed Wine
        await Wine.deleteMany({});
        const wineData = [
            { name: 'Château Margaux', year: '2015', region: 'Bordeaux, France', price: '₹45,000', category: 'featured' },
            { name: 'Sassicaia', year: '2018', region: 'Tuscany, Italy', price: '₹32,000', category: 'featured' },
            { name: 'Opus One', year: '2019', region: 'Napa Valley, USA', price: '₹38,000', category: 'featured' }
        ];
        await Wine.insertMany(wineData);
        console.log('Successfully seeded wine items!');

        // Seed Reviews
        await Review.deleteMany({});
        const reviewData = [
            { name: "Julianne Moore", text: "The Bridge is more than a restaurant; it's a sensory pilgrimage. Every dish is a chapter in a story of flavor." },
            { name: "Robert Chen", text: "The attention to detail here is unparalleled. From the lighting to the service, everything is orchestrated to perfection." },
            { name: "Sarah Jenkins", text: "Technically flawless and emotionally resonant. One of the few places where innovation serves the flavor." }
        ];
        await Review.insertMany(reviewData);
        console.log('Successfully seeded review items!');

        console.log('--- ALL DATA SEEDED SUCCESSFULLY ---');
        process.exit();
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedData();
