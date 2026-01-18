const nodemailer = require('nodemailer');
const twilio = require('twilio');

/**
 * Send reservation confirmation email and SMS
 * @param {Object} reservationData - Guest details
 */
const sendReservationNotification = async (reservationData) => {
    const message = "Congratulations your table is successfully reserved. Thank you for giving us an opportunity to serve you it is our pleasure. Regards The Meal by Md Modassir Hussain";

    // 1. Email Notification
    if (process.env.EMAIL_SERVICE && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
            const transporter = nodemailer.createTransport({
                service: process.env.EMAIL_SERVICE,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            await transporter.sendMail({
                from: `"The Meal" <${process.env.EMAIL_USER}>`,
                to: reservationData.email,
                subject: 'Reservation Confirmed - The Meal',
                text: message
            });
            console.log(`Confirmation email sent to ${reservationData.email}`);
        } catch (error) {
            console.error('Email Notification Error:', error.message);
        }
    } else {
        console.log('--- Mock Email ---');
        console.log(`To: ${reservationData.email}\nMessage: ${message}`);
        console.log('--- Set EMAIL_USER/PASS in .env to enable ---');
    }

    // 2. SMS Notification
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
        try {
            const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
            await client.messages.create({
                body: message,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: reservationData.phone
            });
            console.log(`Confirmation SMS sent to ${reservationData.phone}`);
        } catch (error) {
            console.error('SMS Notification Error:', error.message);
        }
    } else {
        console.log('--- Mock SMS ---');
        console.log(`To: ${reservationData.phone}\nMessage: ${message}`);
        console.log('--- Set TWILIO keys in .env to enable ---');
    }
};

/**
 * Send contact form notification to admin
 * @param {Object} contactData - Contact details
 */
const sendContactNotification = async (contactData) => {
    const adminMessage = `New Contact Form Submission:\nName: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`;

    // Email Notification to Admin
    if (process.env.EMAIL_SERVICE && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
            const transporter = nodemailer.createTransport({
                service: process.env.EMAIL_SERVICE,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            await transporter.sendMail({
                from: `"The Meal Notification" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER, // Send to self (admin)
                subject: 'New Contact Request - The Meal',
                text: adminMessage
            });
            console.log('Admin notification email sent.');
        } catch (error) {
            console.error('Contact Email Notification Error:', error.message);
        }
    } else {
        console.log('--- Mock Contact Notification (Email) ---');
        console.log(adminMessage);
        console.log('--- Set EMAIL_USER/PASS in .env to enable real notifications ---');
    }
};

module.exports = { sendReservationNotification, sendContactNotification };
