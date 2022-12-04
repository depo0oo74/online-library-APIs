// ** require express
const express = require("express");
const app = express();

// ** require and enable CORS
const cors = require("cors");
app.use(cors());

// ** require database
require("./database");

// ** require routes
const usersRoutes = require("./routes/users.routes");
const sectionsRoutes = require("./routes/sections.routes");
const publishingHousesRoutes = require("./routes/publishingHouses.routes");
const faqsRoutes = require("./routes/faqs.routes");
const messagesRoutes = require("./routes/messages.routes");
const porivacyPolisysRoutes = require("./routes/privacyPolicys.routes");
const productsRoutes = require("./routes/products.routes");

// ** use routes
app.use(usersRoutes);
app.use(sectionsRoutes);
app.use(publishingHousesRoutes);
app.use(faqsRoutes);
app.use(messagesRoutes);
app.use(porivacyPolisysRoutes);
app.use(productsRoutes);

// ** port to run
const PORT = 5000;

// ** listen app on specific port
app.listen(PORT);
