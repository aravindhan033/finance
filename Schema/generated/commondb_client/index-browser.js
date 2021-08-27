
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.29.1
 * Query Engine version: 60b19f4a1de4fe95741da371b4c44a92f4d1adcb
 */
Prisma.prismaVersion = {
  client: "2.29.1",
  engine: "60b19f4a1de4fe95741da371b4c44a92f4d1adcb"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ZarkUserScalarFieldEnum = makeEnum({
  zkuid: 'zkuid',
  firstname: 'firstname',
  lastname: 'lastname',
  email: 'email',
  mobile_number: 'mobile_number',
  createAt: 'createAt',
  updatedAt: 'updatedAt',
  isEmailValid: 'isEmailValid',
  isMobileValid: 'isMobileValid',
  password: 'password',
  loginType: 'loginType',
  otherLoginDetails: 'otherLoginDetails',
  country: 'country',
  timezone: 'timezone',
  language: 'language',
  isActive: 'isActive'
});

exports.Prisma.AuthtokenScalarFieldEnum = makeEnum({
  authId: 'authId',
  createAt: 'createAt',
  updatedAt: 'updatedAt',
  expiration: 'expiration',
  loginInfo: 'loginInfo',
  authToken: 'authToken',
  accessToken: 'accessToken',
  authUserId: 'authUserId'
});

exports.Prisma.ZarkCompanyScalarFieldEnum = makeEnum({
  zkcid: 'zkcid',
  companyName: 'companyName',
  companyAddress: 'companyAddress',
  country: 'country',
  taxNumber: 'taxNumber',
  createAt: 'createAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.LOGIN_TYPE = makeEnum({
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  APPLE: 'APPLE',
  EMAIL: 'EMAIL'
});

exports.LANGUAGE = makeEnum({
  en: 'en'
});

exports.Prisma.ModelName = makeEnum({
  ZarkUser: 'ZarkUser',
  Authtoken: 'Authtoken',
  ZarkCompany: 'ZarkCompany'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
