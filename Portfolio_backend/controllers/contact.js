const { sendMail } = require("../utils/mailer");

const validateContactPayload = (value) => {
  const { name, email, message } = value;

  if (!name || !email || !message) {
    throw new Error("All fields (name, email, message) are required.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format.");
  }

  return value;
};

const contactHandler = async (request, h) => {
  try {
    const { name, email, message } = request.payload;
    validateContactPayload(request.payload); // optional if validated via route

    // Send mail
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    });

    return h
      .response({
        message: "Message sent successfully!",
        data: { name, email },
      })
      .code(200);
  } catch (err) {
    return h
      .response({
        message: err.message || "Failed to send email",
        data: {},
      })
      .code(400);
  }
};

module.exports = {
  contactHandler,
};
