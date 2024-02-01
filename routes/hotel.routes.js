import express from "express";
import { hotelControllers } from "../src/controllers/hotel.controllers.js";

export const router = express.Router();

// Les clients peut récupérer les informations de l’hôtel
router.get("/", hotelControllers.getInformationHotel());

// Les clients peut lister l’ensemble des chambres de l’hôtel
router.get("/rooms", hotelControllers.getRooms());

// Les clients peut récupérer les informations d’une chambre spécifique
router.get("/rooms/:id", hotelControllers.getRoom());