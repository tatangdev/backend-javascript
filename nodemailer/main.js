require('dotenv').config();
const oauth2Client = require('./utils/oauth2');
const nodemailer = require('nodemailer');
const { GOOGLE_REFRESH_TOKEN,
    GOOGLE_SENDER_EMAIL,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET } = process.env;

// set credentials by refresh token
oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

async function sendEmail(to, subject, text) {
    const accesToken = await oauth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: GOOGLE_SENDER_EMAIL,
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            refreshToken: GOOGLE_REFRESH_TOKEN,
            accessToken: accesToken
        }
    });

    transport.sendMail({ to, subject, text });
}

sendEmail('tatang.romadhona@rushowl.sg', 'Testing Email', 'Ini adalah pesan percobaan');