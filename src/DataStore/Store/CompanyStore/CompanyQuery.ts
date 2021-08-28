import { ICompanyQuery } from "../../../Processor/User/Interface/Company/ICompanyQuery";
import { ZarkCompany } from "../../../Processor/User/Model/Company";
import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";

export class CompanyQuery implements ICompanyQuery{
    async get(zkcompany: ZarkCompany): Promise<ZarkCompany> {
        const persistence = new commonClientPersistence();
        let rawJson: any;
        try {
            const newzkcompany = await persistence.db.zarkCompany.findFirst({
                where: {
                    OR: [
                        {
                            zkcid: {
                                equals: zkcompany.zkcid
                            }
                        }, {
                            companyName: {
                                equals: zkcompany.companyName
                            },
                        }
                    ]
                }
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(newzkcompany));
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