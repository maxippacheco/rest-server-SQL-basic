const express = require('express');
const cors = require('cors');

class Server{

	constructor(){
		this.app = express();
		this.port = process.env.PORT;

		this.apiPaths = {
			books:'/api/books',
			users:'/api/users'
		};
	
		this.middlewares();
		this.routes();

	}

	middlewares(){

		this.app.use(cors());
		this.app.use(express.json());

	}

	routes(){

		this.app.use(this.apiPaths.books, require('../routes/books'));
		this.app.use(this.apiPaths.users, require('../routes/users'));
	}


	listen(){
		this.app.listen(this.port , () => {
			console.log(`Server running on PORT ${this.port}`);
		})
	}

}

module.exports = Server;
