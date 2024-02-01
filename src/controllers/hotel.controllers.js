import { hotelServices } from "../../services/hotel.services.js";

class HotelServices{
    getInformationHotel(){
        return(req, res) => {
            const response = hotelServices.getInformationHotel();
            res.send(response);
        }
    }

    getRooms(){
        return(req, res) => {
            const response = hotelServices.getRooms();
            res.send(response);
        }
    }

    getRoom(){
        return(req, res) => {
            const id = req.params.id;
            const response = hotelServices.getRoomById(id);
            if (response == undefined) {
                res.send("La chambre n'a pas été trouvée.");
            }
            res.send(response);
        }
    }
}

export const hotelControllers = new HotelServices();