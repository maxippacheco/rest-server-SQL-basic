const { Router } = require("express");
const { createUsers, getUsers, deleteUsers, updateUsers } = require("../controllers/users");


const router = Router();

router.get('/', getUsers);
router.post('/', createUsers);
router.put('/', updateUsers);
router.delete('/', deleteUsers);


module.exports = router;