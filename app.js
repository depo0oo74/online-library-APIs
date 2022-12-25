// ** require express
import express from "express";
const app = express();

// ** require and enable CORS
import cors from "cors";
app.use(cors());

// ** import database
import "./database.js";

// ** import routes
import usersRoutes from "./routes/users.routes.js";
import sectionsRoutes from "./routes/sections.routes.js";
import publishingHousesRoutes from "./routes/publishingHouses.routes.js";
import faqsRoutes from "./routes/faqs.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import privacyPolicesRoutes from "./routes/privacyPolicys.routes.js";
import productsRoutes from "./routes/products.routes.js";

// ** use routes
app.use(usersRoutes);
app.use(sectionsRoutes);
app.use(publishingHousesRoutes);
app.use(faqsRoutes);
app.use(messagesRoutes);
app.use(privacyPolicesRoutes);
app.use(productsRoutes);

// ** port to run
const PORT = process.env.PORT || 5000;

// ** listen app on specific port
app.listen(PORT, () => {
  console.log(`The app is running now on port ${PORT}`);
});
