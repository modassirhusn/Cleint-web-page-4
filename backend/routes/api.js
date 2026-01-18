const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');
const Reservation = require('../models/Reservation');
const Contact = require('../models/Contact');
const Team = require('../models/Team');
const Gallery = require('../models/Gallery');
const Wine = require('../models/Wine');
const Review = require('../models/Review');
const { formLimiter } = require('../middleware/rateLimiter');
const { validateReservation, validateContact } = require('../middleware/validator');
const { sendReservationNotification, sendContactNotification } = require('../utils/notifications');

// GET /api/menu
router.get('/menu', async (req, res) => {
    try {
        const menuItems = await Menu.find();

        // Group items by category for the frontend
        const groupedMenu = menuItems.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push({
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image
            });
            return acc;
        }, { starters: [], mains: [], desserts: [] });

        res.json(groupedMenu);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch menu data' });
    }
});

// POST /api/reservations
router.post('/reservations', formLimiter, validateReservation, async (req, res) => {
    try {
        const newReservation = new Reservation(req.body);
        const saved = await newReservation.save();

        // Trigger notification (Email/SMS)
        await sendReservationNotification(saved);

        res.status(201).json({ message: 'Reservation confirmed', data: saved });
    } catch (error) {
        console.error('Reservation Error:', error);
        res.status(500).json({ error: 'Failed to save reservation' });
    }
});

// POST /api/contact
router.post('/contact', formLimiter, validateContact, async (req, res) => {
    try {
        const newMessage = new Contact(req.body);
        const saved = await newMessage.save();

        // Trigger notification to admin
        await sendContactNotification(saved);

        res.status(200).json({ message: 'Message sent successfully', data: saved });
    } catch (error) {
        console.error('Contact Error:', error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// GET /api/team
router.get('/team', async (req, res) => {
    try {
        const team = await Team.find();
        res.json(team);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch team data' });
    }
});

// GET /api/gallery
router.get('/gallery', async (req, res) => {
    try {
        const gallery = await Gallery.find();
        res.json(gallery);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch gallery data' });
    }
});

// GET /api/wines
router.get('/wines', async (req, res) => {
    try {
        const wines = await Wine.find();
        res.json(wines);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch wine data' });
    }
});

// GET /api/reviews
router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch review data' });
    }
});

module.exports = router;
