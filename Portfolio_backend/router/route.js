const { contactHandler } = require("../controllers/contact");

module.exports = [
  {
    method: "POST",
    path: "/contact",
    handler: contactHandler,
  },
];
