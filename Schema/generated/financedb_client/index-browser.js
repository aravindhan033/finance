
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

exports.Prisma.ZKUserCompanyMappingScalarFieldEnum = makeEnum({
  zkuid: 'zkuid',
  zkcid: 'zkcid',
  user_profile: 'user_profile',
  createAt: 'createAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ZKProductScalarFieldEnum = makeEnum({
  zkcid: 'zkcid',
  zkpid: 'zkpid',
  zkp_type: 'zkp_type',
  zkp_code: 'zkp_code',
  zkp_name: 'zkp_name',
  zkp_description: 'zkp_description',
  zkp_unit: 'zkp_unit',
  zkp_unit_selling_price: 'zkp_unit_selling_price',
  zkp_unit_cost_price: 'zkp_unit_cost_price',
  zkp_product_img: 'zkp_product_img',
  zkp_char1: 'zkp_char1',
  zkp_char2: 'zkp_char2',
  zkp_char3: 'zkp_char3',
  zkp_char4: 'zkp_char4',
  zkp_char5: 'zkp_char5',
  zkp_number1: 'zkp_number1',
  zkp_number2: 'zkp_number2',
  zkp_number3: 'zkp_number3'
});

exports.Prisma.ZK_TaxScalarFieldEnum = makeEnum({
  zkcid: 'zkcid',
  zk_tax_id: 'zk_tax_id',
  zk_tax_name: 'zk_tax_name',
  zk_tax_percentage: 'zk_tax_percentage'
});

exports.Prisma.ZK_UnitScalarFieldEnum = makeEnum({
  zkcid: 'zkcid',
  zk_unit_id: 'zk_unit_id',
  zk_unit_name: 'zk_unit_name'
});

exports.Prisma.ZK_CustomerScalarFieldEnum = makeEnum({
  zkcid: 'zkcid',
  zk_customer_id: 'zk_customer_id',
  zk_customer_name: 'zk_customer_name',
  zk_customer_mobile: 'zk_customer_mobile',
  zk_customer_email: 'zk_customer_email',
  zk_customer_other_details: 'zk_customer_other_details'
});

exports.Prisma.ZK_OrderScalarFieldEnum = makeEnum({
  zkcid: 'zkcid',
  zk_order_id: 'zk_order_id',
  zk_order_number: 'zk_order_number',
  zk_order_description: 'zk_order_description',
  zk_order_total_amount: 'zk_order_total_amount',
  zk_order_total_tax: 'zk_order_total_tax',
  zk_order_total_discount: 'zk_order_total_discount',
  zk_order_createAt: 'zk_order_createAt',
  zk_order_updatedAt: 'zk_order_updatedAt',
  zk_order_createby: 'zk_order_createby',
  zk_order_customer_id: 'zk_order_customer_id',
  zk_order_notes: 'zk_order_notes',
  zk_order_termscondition: 'zk_order_termscondition'
});

exports.Prisma.ZK_Order_MappingScalarFieldEnum = makeEnum({
  zk_order_mapping_id: 'zk_order_mapping_id',
  zk_order_id: 'zk_order_id',
  zk_product_id: 'zk_product_id',
  zk_product_quantity: 'zk_product_quantity',
  zk_product_selling_price: 'zk_product_selling_price',
  zk_product_cost_price: 'zk_product_cost_price'
});

exports.Prisma.ZK_Product_Tax_MappingScalarFieldEnum = makeEnum({
  zkpid: 'zkpid',
  zk_tax_id: 'zk_tax_id',
  zkcid: 'zkcid'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.USER_PROFILE = makeEnum({
  PORTAL_OWNER: 'PORTAL_OWNER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE',
  CLIENT: 'CLIENT',
  CONTRACTOR: 'CONTRACTOR',
  CUSTOMER: 'CUSTOMER'
});

exports.PRODUCT_TYPE = makeEnum({
  GOODS: 'GOODS',
  SERVICE: 'SERVICE'
});

exports.Prisma.ModelName = makeEnum({
  ZKUserCompanyMapping: 'ZKUserCompanyMapping',
  ZKProduct: 'ZKProduct',
  ZK_Tax: 'ZK_Tax',
  ZK_Unit: 'ZK_Unit',
  ZK_Customer: 'ZK_Customer',
  ZK_Order: 'ZK_Order',
  ZK_Order_Mapping: 'ZK_Order_Mapping',
  ZK_Product_Tax_Mapping: 'ZK_Product_Tax_Mapping'
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
