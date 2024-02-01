import express from "express";
import { reservationsControllers } from "../src/controllers/reservations.controllers.js";

export const router = express.Router();

// L’hôtel peut réserver une chambre pour un client
router.post("/:idroom/:idclient", reservationsControllers.addReservation());

// L’hôtel peut annuler la réservation d’un client
router.delete("/:id", reservationsControllers.deleteReservation());
