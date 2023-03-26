const Ticketrepository = require('../repository/ticketRepository')
const sender= require('../config/emailConfig');

const repo = new Ticketrepository();

class TicketService{
    async mailDetails (mailFrom, mailTo, mailSubject, mailBody){
        try {
            const response = await sender.sendMail({
                from: mailFrom,
                to: mailTo,
                subject: mailSubject,
                text: mailBody
            });
           return response;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchingPendingEmails(){
        try {
            const response = await repo.gettickets({status: "PENDING"});
            console.log(response);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async createTicket(data){
        try {
            const response = await repo.create(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updateTicket(ticketStatus,ticketId){
        try {
            const ticket = await repo.update(ticketStatus,ticketId);
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

}



module.exports = TicketService;