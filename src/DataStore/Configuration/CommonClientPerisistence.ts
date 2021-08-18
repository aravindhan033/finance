import { PrismaClient as commonClient } from '../../../Schema/generated/commondb_client';
export class commonClientPersistence {
    public db: commonClient;
    constructor() {
        console.log("db connected")
        this.db = new commonClient();
    }



}