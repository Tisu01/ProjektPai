import axios from 'axios';

const Ticket_API_BASE_URL = "http://localhost:8080/api/ticket";

class TicketService {

    getTicket(){
        return axios.get(Ticket_API_BASE_URL+ '/all');
    }

    getTicket(){
        return axios.get(Ticket_API_BASE_URL+ '/one');
    }

    getTicketById(ticketId){
        return axios.get(Ticket_API_BASE_URL + '/one' + ticketId);
    }

    createTicket(ticket){
        return axios.post(Ticket_API_BASE_URL + '/add', ticket);
    }

    updateTicket(ticket, ticketId){
        return axios.put(Ticket_API_BASE_URL + '/first' + ticketId, ticket);
    }

    updateTicket(ticket, ticketId){
        return axios.put(Ticket_API_BASE_URL + '/second' + ticketId, ticket);
    }

    updateTicket(ticket, ticketId){
        return axios.put(Ticket_API_BASE_URL + '/third' + ticketId, ticket);
    }


}
export default new TicketService()