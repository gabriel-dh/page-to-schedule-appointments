import router from "./routes/indexRoutes";
import cors  from 'cors'
import morgan from 'morgan'

const express = require('express')
require('dotenv').config()
const server = express();



server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use(router)


export default server