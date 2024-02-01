import fs from "fs";

const path = "json/hotel.json";

class HotelServices{
    getRooms(){
        try {
            const data = fs.readFileSync(path, 'utf8');
            const rooms = JSON.parse(data).rooms;
            return rooms;
        } catch (error) {
            throw error;
        }
    }

    getRoomById(id){
        try {
            const data = fs.readFileSync(path, 'utf8');
            const rooms = JSON.parse(data).rooms;
            const room = rooms.find(x => x.id == id);
            return room;
        } catch (error) {
            throw error;
        }
    }

    getInformationHotel(){
        try {
            const data = fs.readFileSync(path, 'utf8');
            const hotel = JSON.parse(data);
            delete hotel.rooms;
            return hotel;
        } catch (error) {
            throw error;
        }
    }
}

export const hotelServices = new HotelServices();