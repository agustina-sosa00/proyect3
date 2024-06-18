import { AppDataSource } from './config/data-source';
import { PORT } from './config/envs';
import server from './server';

AppDataSource.initialize()
.then(() => {
    console.log('DB connected..')
    server.listen(PORT, ()=>{
    console.log('servidor escuchando en el puerto 3000')
})
}).catch((error) => {
    console.log(error)
})

