//Referenciando modulos
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")


const app = express();


//midlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors());
require('dotenv').config();

//routes
app.get('/api/test', (req, res) => {
  res.json({ message: "funciona el api" })
})
app.use('/api/games', require('./routes/games'));

//port
const port = process.env.PORT;

//listen.port
app.listen(port, () => {
  console.log(`Aplicacion corriendo en el puerto ${port}`)
})