import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";
import { BaseStore } from "../BaseStore";
import { ZKUser } from "../../../Processor/User/Model/User";

export class UserQuery<ZKUser> extends BaseStore<ZKUser> {
    public async getUser(zkuser: ZKUser): Promise<ZKUser> {
        const persistence = new commonClientPersistence();
        let rawJson: any;
        try {
            const newZkuser = await persistence.db.zarkUser.findFirst({
                where: {
                    OR: [
                        {
                            zkuid: {
                                equals: zkuser["zkuid"]
                            }
                        }, {
                            email: {
                                equals: zkuser["email"]
                            },
                        },
                        {
                            mobile_number: {
                                equals: zkuser["mobile_number"]
                            }
                        },
                    ]
                }
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = super.plainToEntityType(newZkuser);
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