require("dotenv").config({ path: ".env.dev" });

const Hapi = require("@hapi/hapi");
const os = require("os");
const routes = require("./router/route"); // 👈 Import route array

const getLocalIPs = (port) => {
  const interfaces = os.networkInterfaces();
  const ips = [];

  for (const iface of Object.values(interfaces)) {
    iface?.forEach((config) => {
      if (config.family === "IPv4" && !config.internal) {
        ips.push(`http://${config.address}:${port}`);
      }
    });
  }

  return ips;
};

const init = async () => {
  const port = process.env.PORT || 3000;

  const server = Hapi.server({
    port,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"], // Allow all origins (for development; restrict in production)
        additionalHeaders: ["Authorization", "Content-Type"], // Optional: Allow specific headers
      },
    },
  });

  // Default route
  server.route({
    method: "GET",
    path: "/",
    handler: () => {
      return { message: "Hello from Hapi.js on port " + port };
    },
  });

  // 🔁 Register all imported routes
  server.route(routes);

  await server.start();

  console.log(`✅ Server running at:`);
  console.log(`→ http://localhost:${port}`);
  getLocalIPs(port).forEach((ip) => console.log(`→ ${ip}`));
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});

init();
