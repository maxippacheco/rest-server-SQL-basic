const { Pool } = require("pg");
const  bcryptjs = require("bcrypt");

const config = {
	user: 'postgres',
	host: 'localhost',
	password: 'password',
	database: 'library'
};

//DB
const pool = new Pool(config)


const getUsers = async(req, res) => {

	const users = await pool.query('SELECT * FROM users')

	res.json(users)

}


const createUsers = async(req, res) => {
	
	const { username, password } = req.body; 
	
	// Encriptar la contraseña
 	const salt = bcryptjs.genSaltSync();
 	const password_crypt = bcryptjs.hashSync( password, salt );

	const user = await pool.query(`INSERT INTO users(username, password) VALUES($1, $2)`, [username, password_crypt]);



	res.json(user);
}

const updateUsers = async(req, res) => {

	const { newUserName, username } = req.body;
	
	const user_updated = await pool.query('UPDATE users SET username = $1 WHERE username = $2', [newUserName, username]) 

	res.json(user_updated);

}

const deleteUsers = async(req , res) => {
	
	const {username} = req.body;
	const userDeleted = await pool.query('DELETE FROM users WHERE username = $1', [username]);

	res.json(userDeleted);

}





module.exports = {
	createUsers,
	getUsers,
	updateUsers,
	deleteUsers
}