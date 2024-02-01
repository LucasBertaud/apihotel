import express from "express";
import { router as clientsRouter } from "./routes/clients.routes.js";
import { router as reservationsRouter } from "./routes/reservations.routes.js";
import { router as hotelRouter } from "./routes/hotel.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/admin/clients', clientsRouter);
app.use('/admin/reservation', reservationsRouter);
app.use('/reservation', reservationsRouter);
app.use('/hotel', hotelRouter);

app.listen(port, ()=>{
    console.log(`Server listen to port: ${port}`);
});