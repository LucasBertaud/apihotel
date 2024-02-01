import { reservationsServices } from "../../services/reservations.services.js";
import { clientsServices } from "../../services/clients.services.js";

class ReservationsControllers{
    addReservation(){
        return (req, res) => {
            const idRoom = req.params.idroom;
            const idClient = req.params.idclient;
            const baseUrl = req.baseUrl.split('/')[1];
            if (baseUrl != "admin") {
                const clients = clientsServices.getClients();
                if (!clients.find(x => x.id == idClient)) {
                    res.send("Le client ne peut pas ajouter de réservation pour un autre client.")
                }
            }
            const response = reservationsServices.addReservation(idRoom, idClient);
            res.send(response);
        }
    }

    deleteReservation(){
        return (req, res) => {
            const id = req.params.id;
            const response = reservationsServices.deleteReservation(id);
            if (baseUrl != "admin") {
                const user = clientsServices.getClientById(2);
                if (id != user.id) {
                    res.send("Le client ne peut pas supprimer de réservation pour un autre client.")
                }
            }
            res.send(response);
        }
    }
}

export const reservationsControllers = new ReservationsControllers();