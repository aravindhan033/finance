import fastify from 'fastify';

const server = fastify();

server.get("/ping", (req, reply) => {
    reply.send("ponguu");
})

server.listen(8000, (err, address) => {
    console.log("I am and ready mate !");
})