const express = require('express');
const { PORT } = require('./config/serverConfig');
const jobs = require('./utils/jobs');
const ticketController = require('./controllers/ticketController')
const db = require('./models/index')

const setupAndStartServer = () => {
    // if(process.env.SYNC_DB){
    //     db.sequelize.sync({alter:true})
    // }
    const app = express();
    app.use(express.json());
    app.post('/api/v1/tickets',ticketController.createNotification);
    app.listen(PORT, () => {
        jobs();
        console.log(`Server started at port ${PORT}`)
       });


}

setupAndStartServer();