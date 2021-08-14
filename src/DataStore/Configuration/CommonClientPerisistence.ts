import { PrismaClient as commonClient } from '../Schema/generated/commondb_client';

export class commonClientPersistence {
    public db: commonClient;
    constructor() {
        this.db = new commonClient();
        this.db.$connect();
    }

}