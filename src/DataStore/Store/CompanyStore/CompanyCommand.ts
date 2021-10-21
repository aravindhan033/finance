import { createUser } from "../../../API/User/Schema/UserSchema";
import { ICompanyCommand } from "../../../Processor/Interface/Company/ICompanyCommand";
import { ZarkCompany } from "../../../Processor/Model/Company";
import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";

export  class CompanyCommand implements ICompanyCommand {
    async create(zkcompany: ZarkCompany): Promise<ZarkCompany> {
        let rawJson = null;
        const persistence = new commonClientPersistence();
        try {
            const newzkcompany = await persistence.db.zarkCompany.create({
                data: JSON.parse(JSON.stringify(zkcompany))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(newzkcompany));
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async update(zkcompany: ZarkCompany): Promise<ZarkCompany> {
        let rawJson = null;
        const persistence = new commonClientPersistence();
        try {
            const updatedzkcompany = await persistence.db.zarkCompany.update({
                where: {
                    zkcid: zkcompany.zkcid
                },
                data: JSON.parse(JSON.stringify(zkcompany))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(updatedzkcompany));
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async delete(zkcompany: ZarkCompany): Promise<void> {
        let rawJson = null;
        const persistence = new commonClientPersistence();
        try {
            const updatedzkcompany = await persistence.db.zarkCompany.delete({
                where: {
                    zkcid: zkcompany.zkcid
                },
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });

        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }


}
