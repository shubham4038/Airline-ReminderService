const express = require('express');

const { PORT } = require('./config/serverConfig');
const mailDetails = require('./services/emailService');

const setupAndStartServer = () => {
    const app = express();
    

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`)
       });

       mailDetails(
            '',
            'devnodemailer024@gmail.com',
            'testing email',
            'Hi Jeevansh why your await is not working'
        );
}

setupAndStartServer();