import fastify from 'fastify';
import { fastifyAwilixPlugin } from 'fastify-awilix';
import UserRoute from './API/User/Controller/UserRoute';

const server = fastify();
server.register(fastifyAwilixPlugin, { disposeOnClose: true, disposeOnResponse: true })

server.register(UserRoute);

server.get("/ping", (req, reply) => {
    reply.send("ponguu");
})

server.listen(8000, (err, address) => {
    console.log("I am and ready mate !");
})