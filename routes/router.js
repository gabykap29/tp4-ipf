const express = require('express');
const router = express.Router();
//importar las funciones de el archivo controllers
const {get,delet,put,post} = require("../controllers/controllers")

//rutas del servidor
router.get('/',get);
router.post('/post',post);
router.put('/put',put);
router.delete('/delete',delet)

//exportar rutas
module.exports = router;

