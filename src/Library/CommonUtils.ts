import { FastifyRequest } from "fastify";
import config from "../config";
var jwt = require('jsonwebtoken');


export class CommonUtils{
     static  getZkuid(request:FastifyRequest):number{
        if(request.headers["x-zkuid"]!=null ){            
            return Number(request.headers["x-zkuid"]);
        }
        else{
            let accessToken: any = request.headers["x-access-token"];    
            const decodedToken =  jwt.decode(accessToken, config.accessTokenSecret);
            return Number(decodedToken.data.zkuid);
        }
    }

    static  getZkcid(request:FastifyRequest):number{
        if(request.headers["x-zkcid"]!=null ){            
            return Number(request.headers["x-zkcid"]);
        }
        return null;
    }

    static convertNullToUndefined(value:any){
        return value==null?undefined:value;
    }
}