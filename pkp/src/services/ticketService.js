import axios from 'axios';

const Ticket_API_BASE_URL = "http://localhost:8080/api/ticket";


class TicketService {

    getTicket(){
        return axios.get(Ticket_API_BASE_URL+ '/all');
    }

    getTicketOne(){
        return axios.get(Ticket_API_BASE_URL + '/one');
    }

    getTicketById(ticketId){
        return axios.get(Ticket_API_BASE_URL + '/one/' + ticketId);
    }

    createTicket(ticket){
        return axios.post(Ticket_API_BASE_URL + '/add', ticket).then(response => {
          localStorage.setItem("ticket", JSON.stringify(response.data));
          return response.data;
        });
    }

    updateTicketFirst(ticket, ticketId){
        return axios.put(Ticket_API_BASE_URL + '/first/' +  ticketId, ticket);
    }

    updateTicketSecond(ticketId, ticket){
//    const header = new Headers();
//    header.append('Access-Control-Allow-Origin', '*');
        return axios.put(Ticket_API_BASE_URL + '/second/' +  ticketId, ticket);
    }

    updateTicketThird(ticket, ticketId){
        return axios.put(Ticket_API_BASE_URL + '/third/' +  ticketId, ticket);
    }
    getCurrentTicketConn() {
        return JSON.parse(localStorage.getItem('ticket')).connection;
      }

    getCurrentTicketId() {
              return JSON.parse(localStorage.getItem('ticket')).id;
            }
    removeTicket(){
     localStorage.removeItem("ticket");
    }

    createItemSite(){
    localStorage.setItem("site", JSON.stringify({"site":null}));
    }
    getItemSite(){
    return JSON.parse(localStorage.getItem('site')).site;
    }



}
export default new TicketService()