import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";
import { BaseStore } from "../BaseStore";
import { ZKUser } from "../../../Processor/User/Model/User";

export class UserQuery<ZKUser> extends BaseStore<ZKUser> {
    public async getUser(zkuser: ZKUser): Promise<ZKUser> {

        const persistence = new commonClientPersistence();
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
        })
        const rawJson = super.plainToEntityType(newZkuser);
        return rawJson;

    }
}