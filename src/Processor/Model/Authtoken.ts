export interface Authtoken {
    authId: number,
    expiration: Number,
    loginInfo: JSON,
    accessToken:string,
    authUserId: number,
    authToken: string
}