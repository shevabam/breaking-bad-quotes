const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
        
        this.paths = {
            quotes: '/v1/quotes'
        }

        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.quotes, require('./../routes/quotes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }
}

module.exports = Server;
/**
 * Old way to handle the entries by cross origin
 *  app.all('*', function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');
        next();
    });
 * 
 */
