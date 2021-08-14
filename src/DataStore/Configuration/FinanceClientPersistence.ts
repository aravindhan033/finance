import { PrismaClient as commonClient } from '../Schema/generated/commondb_client';

export class commonDBPersistence {
    public db: commonClient;
    constructor() {
        this.db = new commonClient();
    }

}