require("dotenv").config();
const _environment = require("./Helpers/config");
const nodemailer = require("nodemailer");
const environment = _environment.environment;

const transporter = nodemailer.createTransport({
  host: environment.MAILTRAP_HOST,
  port: environment.MAILTRAP_PORT,
  auth: {
    user: environment.MAILTRAP_USER,
    pass: environment.MAILTRAP_PASS,
  },
});

const sendEmail = (to, subject, text) => {
  const mailOption = {
    from: environment.APP_NAME + " " + environment.APP_EMAIL,
    to: to,
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOption);
};

module.exports = sendEmail;
