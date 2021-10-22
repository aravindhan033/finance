import fastify from 'fastify';
import UserRoute from './API/User/Controller/UserRoute';
import responseHooks from './API/BaseResponse'
import AuthtokenValidation from './Library/Middleware/Auth';
import CompanyRoute from './API/Company/Controller/CompanyRoute';
import ProductRoute from './API/Product/Controller/ProductRoute';

const server = fastify({ logger: true });
//server.register(responseHooks);
server.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/documentation',
    swagger: {
      info: { title: 'f     inance-api' },      
    },
  })
server.register(UserRoute);
server.register(CompanyRoute);
server.register(ProductRoute);
//server.register(require('fastify-boom'))

server.get("/ping", (req, reply) => {    
    reply.send(req.headers);
})

server.get("/authcheck", { preValidation: AuthtokenValidation }, (req, reply) => {
    reply.send({});
})

server.listen(8000, (err, address) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    BigInt.prototype["toJSON"] = function () {
        return Number(this);
    };
    console.log(`server listening on ${address}`)
    console.log("I am and ready mate !");
})