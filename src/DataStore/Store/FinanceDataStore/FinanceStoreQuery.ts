import { financeClientPersistence } from "../../Configuration/FinanceClientPersistence";

export class FinanceStoreQuery{

    async fetch(tablename:any,whereCondition:any):Promise<any>{
        const persistence = new financeClientPersistence();
        let rawJson: any=null;
        try {
            const data = await persistence.db[tablename].findFirst({
                where: whereCondition
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = data
        }
        catch (err) {
            console.log(err)
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }

    async fetchAll(tablename:any,whereCondition:any):Promise<any>{
        const persistence = new financeClientPersistence();
        let rawJson: any=null;
        try {
            const data = await persistence.db.zK_Unit.findMany({
                where: whereCondition
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = data
        }
        catch (err) {
            console.log(err)
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
}