const { body, validationResult } = require('express-validator');

const validateReservation = [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
    body('email').trim().isEmail().withMessage('Invalid email format').normalizeEmail(),
    body('phone').trim().notEmpty().withMessage('Phone number is required').matches(/^\+?[\d\s-]{10,15}$/).withMessage('Invalid phone format'),
    body('date').notEmpty().withMessage('Date is required').isISO8601().withMessage('Invalid date format'),
    body('time').notEmpty().withMessage('Time is required'),
    body('guests').isInt({ min: 1, max: 20 }).withMessage('Guests must be between 1 and 20'),
    body('occasion').optional().trim().isLength({ max: 200 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

const validateContact = [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
    body('email').trim().isEmail().withMessage('Invalid email format').normalizeEmail(),
    body('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateReservation, validateContact };
