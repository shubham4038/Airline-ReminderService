const TicketService = require('../services/ticketService');

const ticketService = new TicketService();

exports.fetchPendingEmial = async ()=>{

}

exports.createNotification = async (req,res,next)=>{
    try {
        const result = await ticketService.createTicket(req.body)
        res.status(200).json({
            status:"Success",
            message:"Fetched ticket notification successfully",
            result
        })
    } catch (error) {
        return res.status(400).json({
            status:"Failed",
            message:"Fetced ticket notification failed",
        })
    }
}