import { PrismaClient as financeClient } from '../../../Schema/generated/financedb_client';
export class financeClientPersistence {
    public db: financeClient;
    constructor() {
        console.log("fin db connected")
        this.db = new financeClient();
    }
}