import fs from "fs";

const path = "json/clients.json";

class UsersServices {
    getClients(){
        try {
            const data = fs.readFileSync(path, 'utf8');
            const clients = JSON.parse(data).clients;
            return clients;
        } catch (error) {
            throw error;
        }
    }

    getClientById(id){
        try {
            const data = fs.readFileSync(path, 'utf8');
            const clients = JSON.parse(data).clients;
            const client = clients.find(x => x.id == id);
            return client;
        } catch (error) {
            throw error;
        }
    }
    
    addClient(){
        return "Client ajouté";
    }

    updateClient(id){
        return `Client avec l'id ${id} modifié`;
    }
}

export const clientsServices = new UsersServices();