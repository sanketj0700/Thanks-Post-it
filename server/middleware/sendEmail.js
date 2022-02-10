const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'notifications.thankspost@gmail.com',
        pass: 'thanksP0st1t',
    },
});
module.exports = function sendEmail(to, subject, message) {
    const mailOptions = {
        from: 'notifications.thankspost@gmail.com',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};