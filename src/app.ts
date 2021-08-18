import fastify from 'fastify';
import UserRoute from './API/User/Controller/UserRoute';
import responseHooks from './API/BaseResponse'
import config from './config';

const server = fastify({ logger: true });
server.register(responseHooks);
server.register(UserRoute);



server.get("/ping", (req, reply) => {
    reply.send("ponguu");
})

server.listen(8000, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`server listening on ${address}`)
    console.log("I am and ready mate !");
})