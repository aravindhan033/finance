import { ZKUser } from "../../Model/User";
export interface IUserQuery {

    getUser(userId: Number): Promise<ZKUser>;
    getUsers(userIds: Number[]): Promise<[ZKUser]>;
    getUserAuthToken(zkuid: number): Promise<any> ;
    getUserAuthTokenByAuthId(authId: number): Promise<any>;

}