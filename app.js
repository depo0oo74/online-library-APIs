// ** require express
import express from "express";
const app = express();

// ** import and enable CORS
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
import authRoutes from "./routes/auth.routes.js";
import goalsRoutes from "./routes/goals.routes.js";
import slidersRoutes from "./routes/sliders.routes.js";

// ** use routes
app.use(usersRoutes);
app.use(sectionsRoutes);
app.use(publishingHousesRoutes);
app.use(faqsRoutes);
app.use(messagesRoutes);
app.use(privacyPolicesRoutes);
app.use(productsRoutes);
app.use(authRoutes);
app.use(goalsRoutes);
app.use(slidersRoutes);

// ** port to run
const PORT = process.env.PORT || 5000;

// ** listen app on specific port
app.listen(PORT, () => {
  console.log(`The app is running now on port ${PORT}`);
});
