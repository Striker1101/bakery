const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

const sendEmail = (to, subject, text) => {
  const mailOption = {
    from: process.env.APP_NAME + " " + process.env.APP_EMAIL,
    to: to,
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOption);
};

module.exports = sendEmail;
