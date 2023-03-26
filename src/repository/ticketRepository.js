const { NotificationTicket } = require('../models/index');
const {Op} = require('sequelize')

class Ticketrepository{
    async getAll(){
        try {
            const tickets = await NotificationTicket.findAll({
                where:{
                    status:"PENDING"
                }
            });
            return tickets;
        } catch (error) {
            throw {error : "Error at Repository layer "}
        }
    }

    async create(data){
        try {
            console.log(data)
            const tickets = await NotificationTicket.create(data);
            return tickets;
        } catch (error) {
            throw {error : "Error at Repository layer "}
        }
    }

    async gettickets(filter){
        try {
            const ticket = await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime : {
                        [Op.lte] : new Date()
                    }
                }
            })
            return ticket
        } catch (error) {
            
        }
    }

    async update(ticketStatus,ticketId) {
        try {
            const ticket = await NotificationTicket.update(ticketStatus,{
                where:{
                    id:ticketId
                }
            })
            const result = await NotificationTicket.findByPk(ticketId)
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Ticketrepository;