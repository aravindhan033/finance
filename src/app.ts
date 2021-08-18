import fastify from 'fastify';
import UserRoute from './API/User/Controller/UserRoute';
import responseHooks from './API/BaseResponse'
import config from './config';
import AuthtokenValidation from './Library/Middleware/Auth';

const server = fastify({ logger: true });
server.register(responseHooks);
server.register(UserRoute);
server.register(require('fastify-boom'))



server.get("/ping", (req, reply) => {
    //  console.log("=>"+req.headers);
    reply.send(req.headers);
})

server.get("/authcheck", { preValidation: AuthtokenValidation }, (req, reply) => {
    //  console.log("=>"+req.headers);
    reply.send({});
})

server.listen(8000, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`server listening on ${address}`)
    console.log("I am and ready mate !");
})