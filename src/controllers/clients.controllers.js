import { clientsServices } from "../../services/clients.services.js";

class ClientsControllers{
    getClients(){
        return (req, res) => {
            const response = clientsServices.getClients();
            res.send(response); 
        }
    }

    getClientById(){
        return (req, res) => {
            const id = req.params.id;
            const response = clientsServices.getClientById(id);
            res.send(response); 
        }
    }

    addClient(){
        return (req, res) => {
            const response = clientsServices.addClient();
            res.send(response);
        }
    }

    updateClient(){
        return (req, res) => {
            const id = req.params.id;
            const response = clientsServices.updateClient(id);
            res.send(response);
        }
    }
}

export const clientsControllers = new ClientsControllers();