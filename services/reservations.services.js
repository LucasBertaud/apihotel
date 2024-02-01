import { hotelServices } from "./hotel.services.js";
import { clientsServices } from "./clients.services.js";

class ReservationsServices{
    addReservation(idRoom, idClient){
        const room = hotelServices.getRoomById(idRoom);
        const client = clientsServices.getClientById(idClient);
        if (room != undefined && client != undefined) {
            return `Ajout d'une réservation avec l'id de la chambre: ${idRoom} et l'id du client: ${idClient}.`;
        }else{
            return `La chambre ou le client n'a pas été trouvé.`
        }
    }

    deleteReservation(id){
        return `La réservation avec l'id ${id} a été supprimée.`;
    }
}

export const reservationsServices = new ReservationsServices();