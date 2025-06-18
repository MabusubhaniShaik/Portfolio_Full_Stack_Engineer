const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env.dev" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send email using the transporter
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise<void>}
 */
const sendMail = async ({ to, subject, text }) => {
  const mailOptions = {
    from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
