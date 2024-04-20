import server from "./server";
import "reflect-metadata"
import {AppDataSource} from "./config/data-source"
import { error } from "console";
const PORT = process.env.PORT

AppDataSource.initialize().
then(res => console.log('esta conectado')).
catch(error => console.log(error))


server.listen(PORT,()=>{
    console.log(`esta corriendo en el puerto ${PORT}`);
})