import { FastifyPluginAsync, FastifyInstance, FastifyPluginOptions } from "fastify";
import fp from 'fastify-plugin';
import { commonClientPersistence } from "../DataStore/Configuration/CommonClientPerisistence";

const responseHooks: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.addHook('onError', (request, reply, error, done) => {
    // Some code
    console.log("i am a error me")
    done()
  })

  server.addHook('onError', (request, reply, error, done) => {
    // Some code
    console.log("send me")
    done()
  })

  server.addHook('onClose', (instance, done) => {
    done()
  })
};

export default fp(responseHooks);
