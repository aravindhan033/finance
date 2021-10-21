import { Authtoken } from "./Authtoken";

export interface ZKUser {
    zkuid: number,
    firstname: String,
    lastname: String,
    password: String,
    email: String,
    mobile_number: String,
    isEmailValid: Boolean,
    isMobileValid: Boolean,
    country: String,
    timezone: String,
    language: String,
    isActive: String,
    authToken: Authtoken,
}