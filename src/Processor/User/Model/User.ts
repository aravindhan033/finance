import { Authtoken } from "./Authtoken";

export interface ZKUser {
    zkuid: Number,
    firstname: String,
    lastname: String,
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