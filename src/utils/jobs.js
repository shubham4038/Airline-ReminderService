const cron = require('node-cron');
const TicketService= require('../services/ticketService')
const service = new TicketService();
const sender = require('../config/emailConfig');

const setupJobs = () => {
    cron.schedule('*/1 * * * *', async () => {
        const response = await service.fetchingPendingEmails();
        console.log(response);
        response.forEach((email) => {
            sender.sendMail({
                to: email.recepientMail,
                subject: email.subject,
                text: email.content
            }, async (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await service.updateTicket({status:"SUCCESS"},email.id);
                }
            });
        });
    });    
}


module.exports = setupJobs



