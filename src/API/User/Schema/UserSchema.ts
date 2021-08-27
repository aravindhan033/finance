const createUser = {
    body: {
        type: "object",
        properties: {
            firstname: { type: "string" },
            lastname: { type: "string" },
            email: { type: "string" },
            mobile_number: { type: "string" },
            password: { type: "string" },
            country: { type: "string" },
            timezone: { type: "string" },
        },
        required: ["firstname", "password"]

    }
}
const userlogin = {
    body: {
        type: "object",
        properties: {
            email: { type: "string" },
            mobile_number: { type: "string" },
            password: { type: "string" },
            device: { type: "string" },
            location: { type: "string" },
            ipaddress: { type: "string" }
        },
        required: ["password"]

    }
}
const checkUser = {
    querystring: {
        type: "object",
        properties: {
            email: { type: "string" },
            mobile_number: { type: "string" },           
        },
    }
}
const userupdate = {
    body: {
        type: "object",
        properties: {
            zkuid:{ type: "number" },
            firstname: { type: "string" },
            lastname: { type: "string" },
            email: { type: "string" },
            mobile_number: { type: "string" },
            password: { type: "string" },
            country: { type: "string" },
            timezone: { type: "string" },
            language:{ type: "string" },
        },
        required: ["zkuid"]

    }
}

const logout = {
    body: {
        type: "object",
        properties: {        
            zkuid:{ type: "number" }
        },
        required: ["zkuid"]

    }
}

export { createUser, userlogin ,checkUser,userupdate,logout};