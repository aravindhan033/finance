import { financeClientPersistence } from "../../Configuration/FinanceClientPersistence";
export class FinanceStoreCommand {
    
    async create(tablename: any,rowData:any): Promise<any> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const newRow = await persistence.db[tablename].create({
                data: rowData
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = newRow;
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async update(tablename: any,whereCondition:any,updatedRowData:any): Promise<any> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const updatedRow = await persistence.db[tablename].update({
                where:whereCondition,
                data: updatedRowData
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = updatedRow;
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async delete(tablename: any,whereCondition:any,): Promise<boolean> {
        let result = false;
        const persistence = new financeClientPersistence();
        try {
            const deletedRow = await persistence.db[tablename].delete({
                where:whereCondition         
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            result = true;
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return result;
    }
    
}