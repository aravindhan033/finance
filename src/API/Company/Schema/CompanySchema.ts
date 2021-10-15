export const createCompany={body: {
    type: "object",
    properties: {
        companyName: { type: "string" },
        companyAddress: { type: "string" },
        country: { type: "string" },
    },
    required: ["companyName"]
}};

export  const updateCompany={
    body: {
        type: "object",
        properties: {
            companyName: { type: "string" },
            companyAddress: { type: "string" },
            country: { type: "string" },
        },
        required: ["companyName"]
    }
};
export  const addUserToCompany={body: {
    type: "object",
    properties: {
        zkcid: { type: "number" },
        zkuid: { type: "number" },
        user_profile: { type: "string"  },
    },
    required: ["zkcid","zkuid"]
}};

