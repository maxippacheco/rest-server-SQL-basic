const { Pool } = require("pg");

const config = {
	user: 'postgres',
	host: 'localhost',
	password: 'password',
	database: 'library'
};

//DB
const pool = new Pool(config)


const getBooks = async(req, res) => {

	const books = await pool.query('select * from books');

	const {rows: data} = books;

	res.json(data);
}




module.exports = {
	getBooks
}
