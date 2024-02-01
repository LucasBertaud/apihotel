import express from "express";
import { clientsControllers } from "../src/controllers/clients.controllers.js";

export const router = express.Router();

// L’hôtel peut lister l’ensemble de ses clients
router.get("/", clientsControllers.getClients());

// L’hôtel peut récupérer les informations d’un client spécifique
router.get("/:id", clientsControllers.getClientById());

// L’hôtel peut ajouter un client
router.post("", clientsControllers.addClient());

// L’hôtel peut modifier le informations d’un client
router.put("/:id", clientsControllers.updateClient());

