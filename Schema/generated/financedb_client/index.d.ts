
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model ZKUserCompanyMapping
 */

export type ZKUserCompanyMapping = {
  zkuid: number
  zkcid: number
  user_profile: USER_PROFILE
  createAt: Date
  updatedAt: Date
}

/**
 * Model ZKProduct
 */

export type ZKProduct = {
  zkcid: number
  zkpid: bigint
  zkp_type: PRODUCT_TYPE
  zkp_code: string | null
  zkp_name: string
  zkp_description: string | null
  zk_category_id: bigint
  zkp_unit: bigint
  zkp_unit_selling_price: Prisma.Decimal
  zkp_unit_cost_price: Prisma.Decimal
  zkp_product_img: string | null
  zkp_char1: string | null
  zkp_char2: string | null
  zkp_char3: string | null
  zkp_char4: string | null
  zkp_char5: string | null
  zkp_number1: bigint | null
  zkp_number2: bigint | null
  zkp_number3: bigint | null
}

/**
 * Model ZK_Tax
 */

export type ZK_Tax = {
  zkcid: number
  zk_tax_id: bigint
  zk_tax_name: string
  zk_tax_percentage: Prisma.Decimal
}

/**
 * Model ZK_Unit
 */

export type ZK_Unit = {
  zkcid: number
  zk_unit_id: bigint
  zk_unit_name: string
}

/**
 * Model ZK_Category
 */

export type ZK_Category = {
  zkcid: number
  zk_category_id: bigint
  zk_category_name: string
  zk_category_level: number
  zk_category_parentid: bigint | null
}

/**
 * Model ZK_Customer
 */

export type ZK_Customer = {
  zkcid: number
  zk_customer_id: bigint
  zk_customer_name: string
  zk_customer_mobile: string | null
  zk_customer_email: string | null
  zk_customer_other_details: string
}

/**
 * Model ZK_ShippingAddress
 */

export type ZK_ShippingAddress = {
  zkcid: number
  zk_customer_id: bigint
  zk_shipping_id: bigint
  zk_name: string
  zk_contact_number: string
  zk_addressline_1: string
  zk_addressline_2: string | null
  zk_state: string
  zk_country: string
  zk_pincode: number
}

/**
 * Model ZK_Order
 */

export type ZK_Order = {
  zkcid: number
  zk_order_id: bigint
  zk_order_number: string
  zk_shipping_id: bigint
  zk_order_description: string | null
  zk_order_total_amount: Prisma.Decimal
  zk_order_total_tax: Prisma.JsonValue
  zk_order_total_discount: Prisma.JsonValue
  zk_order_createAt: Date
  zk_order_updatedAt: Date
  zk_order_createby: number
  zk_order_customer_id: bigint | null
  zk_order_notes: string
  zk_order_termscondition: string
}

/**
 * Model ZK_Order_Mapping
 */

export type ZK_Order_Mapping = {
  zk_order_mapping_id: bigint
  zk_order_id: bigint
  zk_product_id: bigint
  zk_product_quantity: number
  zk_product_selling_price: Prisma.Decimal
  zk_product_cost_price: Prisma.Decimal
}

/**
 * Model ZK_Product_Tax_Mapping
 */

export type ZK_Product_Tax_Mapping = {
  zkpid: bigint
  zk_tax_id: bigint
  zkcid: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const USER_PROFILE: {
  PORTAL_OWNER: 'PORTAL_OWNER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE',
  CLIENT: 'CLIENT',
  CONTRACTOR: 'CONTRACTOR',
  CUSTOMER: 'CUSTOMER'
};

export type USER_PROFILE = (typeof USER_PROFILE)[keyof typeof USER_PROFILE]


export const PRODUCT_TYPE: {
  GOODS: 'GOODS',
  SERVICE: 'SERVICE'
};

export type PRODUCT_TYPE = (typeof PRODUCT_TYPE)[keyof typeof PRODUCT_TYPE]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ZKUserCompanyMappings
 * const zKUserCompanyMappings = await prisma.zKUserCompanyMapping.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ZKUserCompanyMappings
   * const zKUserCompanyMappings = await prisma.zKUserCompanyMapping.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.zKUserCompanyMapping`: Exposes CRUD operations for the **ZKUserCompanyMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZKUserCompanyMappings
    * const zKUserCompanyMappings = await prisma.zKUserCompanyMapping.findMany()
    * ```
    */
  get zKUserCompanyMapping(): Prisma.ZKUserCompanyMappingDelegate<GlobalReject>;

  /**
   * `prisma.zKProduct`: Exposes CRUD operations for the **ZKProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZKProducts
    * const zKProducts = await prisma.zKProduct.findMany()
    * ```
    */
  get zKProduct(): Prisma.ZKProductDelegate<GlobalReject>;

  /**
   * `prisma.zK_Tax`: Exposes CRUD operations for the **ZK_Tax** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_Taxes
    * const zK_Taxes = await prisma.zK_Tax.findMany()
    * ```
    */
  get zK_Tax(): Prisma.ZK_TaxDelegate<GlobalReject>;

  /**
   * `prisma.zK_Unit`: Exposes CRUD operations for the **ZK_Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_Units
    * const zK_Units = await prisma.zK_Unit.findMany()
    * ```
    */
  get zK_Unit(): Prisma.ZK_UnitDelegate<GlobalReject>;

  /**
   * `prisma.zK_Category`: Exposes CRUD operations for the **ZK_Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_Categories
    * const zK_Categories = await prisma.zK_Category.findMany()
    * ```
    */
  get zK_Category(): Prisma.ZK_CategoryDelegate<GlobalReject>;

  /**
   * `prisma.zK_Customer`: Exposes CRUD operations for the **ZK_Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_Customers
    * const zK_Customers = await prisma.zK_Customer.findMany()
    * ```
    */
  get zK_Customer(): Prisma.ZK_CustomerDelegate<GlobalReject>;

  /**
   * `prisma.zK_ShippingAddress`: Exposes CRUD operations for the **ZK_ShippingAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_ShippingAddresses
    * const zK_ShippingAddresses = await prisma.zK_ShippingAddress.findMany()
    * ```
    */
  get zK_ShippingAddress(): Prisma.ZK_ShippingAddressDelegate<GlobalReject>;

  /**
   * `prisma.zK_Order`: Exposes CRUD operations for the **ZK_Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_Orders
    * const zK_Orders = await prisma.zK_Order.findMany()
    * ```
    */
  get zK_Order(): Prisma.ZK_OrderDelegate<GlobalReject>;

  /**
   * `prisma.zK_Order_Mapping`: Exposes CRUD operations for the **ZK_Order_Mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_Order_Mappings
    * const zK_Order_Mappings = await prisma.zK_Order_Mapping.findMany()
    * ```
    */
  get zK_Order_Mapping(): Prisma.ZK_Order_MappingDelegate<GlobalReject>;

  /**
   * `prisma.zK_Product_Tax_Mapping`: Exposes CRUD operations for the **ZK_Product_Tax_Mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZK_Product_Tax_Mappings
    * const zK_Product_Tax_Mappings = await prisma.zK_Product_Tax_Mapping.findMany()
    * ```
    */
  get zK_Product_Tax_Mapping(): Prisma.ZK_Product_Tax_MappingDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 2.29.1
   * Query Engine version: 60b19f4a1de4fe95741da371b4c44a92f4d1adcb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    ZKUserCompanyMapping: 'ZKUserCompanyMapping',
    ZKProduct: 'ZKProduct',
    ZK_Tax: 'ZK_Tax',
    ZK_Unit: 'ZK_Unit',
    ZK_Category: 'ZK_Category',
    ZK_Customer: 'ZK_Customer',
    ZK_ShippingAddress: 'ZK_ShippingAddress',
    ZK_Order: 'ZK_Order',
    ZK_Order_Mapping: 'ZK_Order_Mapping',
    ZK_Product_Tax_Mapping: 'ZK_Product_Tax_Mapping'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ZKUserCompanyMapping
   */


  export type AggregateZKUserCompanyMapping = {
    _count: ZKUserCompanyMappingCountAggregateOutputType | null
    count: ZKUserCompanyMappingCountAggregateOutputType | null
    _avg: ZKUserCompanyMappingAvgAggregateOutputType | null
    avg: ZKUserCompanyMappingAvgAggregateOutputType | null
    _sum: ZKUserCompanyMappingSumAggregateOutputType | null
    sum: ZKUserCompanyMappingSumAggregateOutputType | null
    _min: ZKUserCompanyMappingMinAggregateOutputType | null
    min: ZKUserCompanyMappingMinAggregateOutputType | null
    _max: ZKUserCompanyMappingMaxAggregateOutputType | null
    max: ZKUserCompanyMappingMaxAggregateOutputType | null
  }

  export type ZKUserCompanyMappingAvgAggregateOutputType = {
    zkuid: number | null
    zkcid: number | null
  }

  export type ZKUserCompanyMappingSumAggregateOutputType = {
    zkuid: number | null
    zkcid: number | null
  }

  export type ZKUserCompanyMappingMinAggregateOutputType = {
    zkuid: number | null
    zkcid: number | null
    user_profile: USER_PROFILE | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ZKUserCompanyMappingMaxAggregateOutputType = {
    zkuid: number | null
    zkcid: number | null
    user_profile: USER_PROFILE | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ZKUserCompanyMappingCountAggregateOutputType = {
    zkuid: number
    zkcid: number
    user_profile: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type ZKUserCompanyMappingAvgAggregateInputType = {
    zkuid?: true
    zkcid?: true
  }

  export type ZKUserCompanyMappingSumAggregateInputType = {
    zkuid?: true
    zkcid?: true
  }

  export type ZKUserCompanyMappingMinAggregateInputType = {
    zkuid?: true
    zkcid?: true
    user_profile?: true
    createAt?: true
    updatedAt?: true
  }

  export type ZKUserCompanyMappingMaxAggregateInputType = {
    zkuid?: true
    zkcid?: true
    user_profile?: true
    createAt?: true
    updatedAt?: true
  }

  export type ZKUserCompanyMappingCountAggregateInputType = {
    zkuid?: true
    zkcid?: true
    user_profile?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ZKUserCompanyMappingAggregateArgs = {
    /**
     * Filter which ZKUserCompanyMapping to aggregate.
     * 
    **/
    where?: ZKUserCompanyMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKUserCompanyMappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZKUserCompanyMappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZKUserCompanyMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKUserCompanyMappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKUserCompanyMappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZKUserCompanyMappings
    **/
    _count?: true | ZKUserCompanyMappingCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZKUserCompanyMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZKUserCompanyMappingAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZKUserCompanyMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZKUserCompanyMappingSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZKUserCompanyMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZKUserCompanyMappingMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZKUserCompanyMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZKUserCompanyMappingMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZKUserCompanyMappingMaxAggregateInputType
  }

  export type GetZKUserCompanyMappingAggregateType<T extends ZKUserCompanyMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateZKUserCompanyMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZKUserCompanyMapping[P]>
      : GetScalarType<T[P], AggregateZKUserCompanyMapping[P]>
  }


    
    
  export type ZKUserCompanyMappingGroupByArgs = {
    where?: ZKUserCompanyMappingWhereInput
    orderBy?: Enumerable<ZKUserCompanyMappingOrderByInput>
    by: Array<ZKUserCompanyMappingScalarFieldEnum>
    having?: ZKUserCompanyMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZKUserCompanyMappingCountAggregateInputType | true
    _avg?: ZKUserCompanyMappingAvgAggregateInputType
    _sum?: ZKUserCompanyMappingSumAggregateInputType
    _min?: ZKUserCompanyMappingMinAggregateInputType
    _max?: ZKUserCompanyMappingMaxAggregateInputType
  }


  export type ZKUserCompanyMappingGroupByOutputType = {
    zkuid: number
    zkcid: number
    user_profile: USER_PROFILE
    createAt: Date
    updatedAt: Date
    _count: ZKUserCompanyMappingCountAggregateOutputType | null
    _avg: ZKUserCompanyMappingAvgAggregateOutputType | null
    _sum: ZKUserCompanyMappingSumAggregateOutputType | null
    _min: ZKUserCompanyMappingMinAggregateOutputType | null
    _max: ZKUserCompanyMappingMaxAggregateOutputType | null
  }

  type GetZKUserCompanyMappingGroupByPayload<T extends ZKUserCompanyMappingGroupByArgs> = Promise<
    Array<
      PickArray<ZKUserCompanyMappingGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZKUserCompanyMappingGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZKUserCompanyMappingGroupByOutputType[P]> 
            : GetScalarType<T[P], ZKUserCompanyMappingGroupByOutputType[P]>
        }
      > 
    >


  export type ZKUserCompanyMappingSelect = {
    zkuid?: boolean
    zkcid?: boolean
    user_profile?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type ZKUserCompanyMappingGetPayload<
    S extends boolean | null | undefined | ZKUserCompanyMappingArgs,
    U = keyof S
      > = S extends true
        ? ZKUserCompanyMapping
    : S extends undefined
    ? never
    : S extends ZKUserCompanyMappingArgs | ZKUserCompanyMappingFindManyArgs
    ?'include' extends U
    ? ZKUserCompanyMapping 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZKUserCompanyMapping ?ZKUserCompanyMapping [P]
  : 
     never
  } 
    : ZKUserCompanyMapping
  : ZKUserCompanyMapping


  type ZKUserCompanyMappingCountArgs = Merge<
    Omit<ZKUserCompanyMappingFindManyArgs, 'select' | 'include'> & {
      select?: ZKUserCompanyMappingCountAggregateInputType | true
    }
  >

  export interface ZKUserCompanyMappingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZKUserCompanyMapping that matches the filter.
     * @param {ZKUserCompanyMappingFindUniqueArgs} args - Arguments to find a ZKUserCompanyMapping
     * @example
     * // Get one ZKUserCompanyMapping
     * const zKUserCompanyMapping = await prisma.zKUserCompanyMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZKUserCompanyMappingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZKUserCompanyMappingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZKUserCompanyMapping'> extends True ? CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping>, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T>>> : CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping | null >, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T> | null >>

    /**
     * Find the first ZKUserCompanyMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKUserCompanyMappingFindFirstArgs} args - Arguments to find a ZKUserCompanyMapping
     * @example
     * // Get one ZKUserCompanyMapping
     * const zKUserCompanyMapping = await prisma.zKUserCompanyMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZKUserCompanyMappingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZKUserCompanyMappingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZKUserCompanyMapping'> extends True ? CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping>, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T>>> : CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping | null >, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T> | null >>

    /**
     * Find zero or more ZKUserCompanyMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKUserCompanyMappingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZKUserCompanyMappings
     * const zKUserCompanyMappings = await prisma.zKUserCompanyMapping.findMany()
     * 
     * // Get first 10 ZKUserCompanyMappings
     * const zKUserCompanyMappings = await prisma.zKUserCompanyMapping.findMany({ take: 10 })
     * 
     * // Only select the `zkuid`
     * const zKUserCompanyMappingWithZkuidOnly = await prisma.zKUserCompanyMapping.findMany({ select: { zkuid: true } })
     * 
    **/
    findMany<T extends ZKUserCompanyMappingFindManyArgs>(
      args?: SelectSubset<T, ZKUserCompanyMappingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZKUserCompanyMapping>>, PrismaPromise<Array<ZKUserCompanyMappingGetPayload<T>>>>

    /**
     * Create a ZKUserCompanyMapping.
     * @param {ZKUserCompanyMappingCreateArgs} args - Arguments to create a ZKUserCompanyMapping.
     * @example
     * // Create one ZKUserCompanyMapping
     * const ZKUserCompanyMapping = await prisma.zKUserCompanyMapping.create({
     *   data: {
     *     // ... data to create a ZKUserCompanyMapping
     *   }
     * })
     * 
    **/
    create<T extends ZKUserCompanyMappingCreateArgs>(
      args: SelectSubset<T, ZKUserCompanyMappingCreateArgs>
    ): CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping>, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T>>>

    /**
     * Create many ZKUserCompanyMappings.
     *     @param {ZKUserCompanyMappingCreateManyArgs} args - Arguments to create many ZKUserCompanyMappings.
     *     @example
     *     // Create many ZKUserCompanyMappings
     *     const zKUserCompanyMapping = await prisma.zKUserCompanyMapping.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZKUserCompanyMappingCreateManyArgs>(
      args?: SelectSubset<T, ZKUserCompanyMappingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZKUserCompanyMapping.
     * @param {ZKUserCompanyMappingDeleteArgs} args - Arguments to delete one ZKUserCompanyMapping.
     * @example
     * // Delete one ZKUserCompanyMapping
     * const ZKUserCompanyMapping = await prisma.zKUserCompanyMapping.delete({
     *   where: {
     *     // ... filter to delete one ZKUserCompanyMapping
     *   }
     * })
     * 
    **/
    delete<T extends ZKUserCompanyMappingDeleteArgs>(
      args: SelectSubset<T, ZKUserCompanyMappingDeleteArgs>
    ): CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping>, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T>>>

    /**
     * Update one ZKUserCompanyMapping.
     * @param {ZKUserCompanyMappingUpdateArgs} args - Arguments to update one ZKUserCompanyMapping.
     * @example
     * // Update one ZKUserCompanyMapping
     * const zKUserCompanyMapping = await prisma.zKUserCompanyMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZKUserCompanyMappingUpdateArgs>(
      args: SelectSubset<T, ZKUserCompanyMappingUpdateArgs>
    ): CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping>, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T>>>

    /**
     * Delete zero or more ZKUserCompanyMappings.
     * @param {ZKUserCompanyMappingDeleteManyArgs} args - Arguments to filter ZKUserCompanyMappings to delete.
     * @example
     * // Delete a few ZKUserCompanyMappings
     * const { count } = await prisma.zKUserCompanyMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZKUserCompanyMappingDeleteManyArgs>(
      args?: SelectSubset<T, ZKUserCompanyMappingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZKUserCompanyMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKUserCompanyMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZKUserCompanyMappings
     * const zKUserCompanyMapping = await prisma.zKUserCompanyMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZKUserCompanyMappingUpdateManyArgs>(
      args: SelectSubset<T, ZKUserCompanyMappingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZKUserCompanyMapping.
     * @param {ZKUserCompanyMappingUpsertArgs} args - Arguments to update or create a ZKUserCompanyMapping.
     * @example
     * // Update or create a ZKUserCompanyMapping
     * const zKUserCompanyMapping = await prisma.zKUserCompanyMapping.upsert({
     *   create: {
     *     // ... data to create a ZKUserCompanyMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZKUserCompanyMapping we want to update
     *   }
     * })
    **/
    upsert<T extends ZKUserCompanyMappingUpsertArgs>(
      args: SelectSubset<T, ZKUserCompanyMappingUpsertArgs>
    ): CheckSelect<T, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMapping>, Prisma__ZKUserCompanyMappingClient<ZKUserCompanyMappingGetPayload<T>>>

    /**
     * Count the number of ZKUserCompanyMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKUserCompanyMappingCountArgs} args - Arguments to filter ZKUserCompanyMappings to count.
     * @example
     * // Count the number of ZKUserCompanyMappings
     * const count = await prisma.zKUserCompanyMapping.count({
     *   where: {
     *     // ... the filter for the ZKUserCompanyMappings we want to count
     *   }
     * })
    **/
    count<T extends ZKUserCompanyMappingCountArgs>(
      args?: Subset<T, ZKUserCompanyMappingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZKUserCompanyMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZKUserCompanyMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKUserCompanyMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZKUserCompanyMappingAggregateArgs>(args: Subset<T, ZKUserCompanyMappingAggregateArgs>): PrismaPromise<GetZKUserCompanyMappingAggregateType<T>>

    /**
     * Group by ZKUserCompanyMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKUserCompanyMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZKUserCompanyMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZKUserCompanyMappingGroupByArgs['orderBy'] }
        : { orderBy?: ZKUserCompanyMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZKUserCompanyMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZKUserCompanyMappingGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZKUserCompanyMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZKUserCompanyMappingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZKUserCompanyMapping findUnique
   */
  export type ZKUserCompanyMappingFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
    /**
     * Throw an Error if a ZKUserCompanyMapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZKUserCompanyMapping to fetch.
     * 
    **/
    where: ZKUserCompanyMappingWhereUniqueInput
  }


  /**
   * ZKUserCompanyMapping findFirst
   */
  export type ZKUserCompanyMappingFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
    /**
     * Throw an Error if a ZKUserCompanyMapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZKUserCompanyMapping to fetch.
     * 
    **/
    where?: ZKUserCompanyMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKUserCompanyMappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZKUserCompanyMappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZKUserCompanyMappings.
     * 
    **/
    cursor?: ZKUserCompanyMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKUserCompanyMappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKUserCompanyMappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZKUserCompanyMappings.
     * 
    **/
    distinct?: Enumerable<ZKUserCompanyMappingScalarFieldEnum>
  }


  /**
   * ZKUserCompanyMapping findMany
   */
  export type ZKUserCompanyMappingFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
    /**
     * Filter, which ZKUserCompanyMappings to fetch.
     * 
    **/
    where?: ZKUserCompanyMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKUserCompanyMappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZKUserCompanyMappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZKUserCompanyMappings.
     * 
    **/
    cursor?: ZKUserCompanyMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKUserCompanyMappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKUserCompanyMappings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZKUserCompanyMappingScalarFieldEnum>
  }


  /**
   * ZKUserCompanyMapping create
   */
  export type ZKUserCompanyMappingCreateArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
    /**
     * The data needed to create a ZKUserCompanyMapping.
     * 
    **/
    data: XOR<ZKUserCompanyMappingCreateInput, ZKUserCompanyMappingUncheckedCreateInput>
  }


  /**
   * ZKUserCompanyMapping createMany
   */
  export type ZKUserCompanyMappingCreateManyArgs = {
    data: Enumerable<ZKUserCompanyMappingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZKUserCompanyMapping update
   */
  export type ZKUserCompanyMappingUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
    /**
     * The data needed to update a ZKUserCompanyMapping.
     * 
    **/
    data: XOR<ZKUserCompanyMappingUpdateInput, ZKUserCompanyMappingUncheckedUpdateInput>
    /**
     * Choose, which ZKUserCompanyMapping to update.
     * 
    **/
    where: ZKUserCompanyMappingWhereUniqueInput
  }


  /**
   * ZKUserCompanyMapping updateMany
   */
  export type ZKUserCompanyMappingUpdateManyArgs = {
    data: XOR<ZKUserCompanyMappingUpdateManyMutationInput, ZKUserCompanyMappingUncheckedUpdateManyInput>
    where?: ZKUserCompanyMappingWhereInput
  }


  /**
   * ZKUserCompanyMapping upsert
   */
  export type ZKUserCompanyMappingUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
    /**
     * The filter to search for the ZKUserCompanyMapping to update in case it exists.
     * 
    **/
    where: ZKUserCompanyMappingWhereUniqueInput
    /**
     * In case the ZKUserCompanyMapping found by the `where` argument doesn't exist, create a new ZKUserCompanyMapping with this data.
     * 
    **/
    create: XOR<ZKUserCompanyMappingCreateInput, ZKUserCompanyMappingUncheckedCreateInput>
    /**
     * In case the ZKUserCompanyMapping was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZKUserCompanyMappingUpdateInput, ZKUserCompanyMappingUncheckedUpdateInput>
  }


  /**
   * ZKUserCompanyMapping delete
   */
  export type ZKUserCompanyMappingDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
    /**
     * Filter which ZKUserCompanyMapping to delete.
     * 
    **/
    where: ZKUserCompanyMappingWhereUniqueInput
  }


  /**
   * ZKUserCompanyMapping deleteMany
   */
  export type ZKUserCompanyMappingDeleteManyArgs = {
    where?: ZKUserCompanyMappingWhereInput
  }


  /**
   * ZKUserCompanyMapping without action
   */
  export type ZKUserCompanyMappingArgs = {
    /**
     * Select specific fields to fetch from the ZKUserCompanyMapping
     * 
    **/
    select?: ZKUserCompanyMappingSelect | null
  }



  /**
   * Model ZKProduct
   */


  export type AggregateZKProduct = {
    _count: ZKProductCountAggregateOutputType | null
    count: ZKProductCountAggregateOutputType | null
    _avg: ZKProductAvgAggregateOutputType | null
    avg: ZKProductAvgAggregateOutputType | null
    _sum: ZKProductSumAggregateOutputType | null
    sum: ZKProductSumAggregateOutputType | null
    _min: ZKProductMinAggregateOutputType | null
    min: ZKProductMinAggregateOutputType | null
    _max: ZKProductMaxAggregateOutputType | null
    max: ZKProductMaxAggregateOutputType | null
  }

  export type ZKProductAvgAggregateOutputType = {
    zkcid: number | null
    zkpid: number | null
    zk_category_id: number | null
    zkp_unit: number | null
    zkp_unit_selling_price: Decimal | null
    zkp_unit_cost_price: Decimal | null
    zkp_number1: number | null
    zkp_number2: number | null
    zkp_number3: number | null
  }

  export type ZKProductSumAggregateOutputType = {
    zkcid: number | null
    zkpid: bigint | null
    zk_category_id: bigint | null
    zkp_unit: bigint | null
    zkp_unit_selling_price: Decimal | null
    zkp_unit_cost_price: Decimal | null
    zkp_number1: bigint | null
    zkp_number2: bigint | null
    zkp_number3: bigint | null
  }

  export type ZKProductMinAggregateOutputType = {
    zkcid: number | null
    zkpid: bigint | null
    zkp_type: PRODUCT_TYPE | null
    zkp_code: string | null
    zkp_name: string | null
    zkp_description: string | null
    zk_category_id: bigint | null
    zkp_unit: bigint | null
    zkp_unit_selling_price: Decimal | null
    zkp_unit_cost_price: Decimal | null
    zkp_product_img: string | null
    zkp_char1: string | null
    zkp_char2: string | null
    zkp_char3: string | null
    zkp_char4: string | null
    zkp_char5: string | null
    zkp_number1: bigint | null
    zkp_number2: bigint | null
    zkp_number3: bigint | null
  }

  export type ZKProductMaxAggregateOutputType = {
    zkcid: number | null
    zkpid: bigint | null
    zkp_type: PRODUCT_TYPE | null
    zkp_code: string | null
    zkp_name: string | null
    zkp_description: string | null
    zk_category_id: bigint | null
    zkp_unit: bigint | null
    zkp_unit_selling_price: Decimal | null
    zkp_unit_cost_price: Decimal | null
    zkp_product_img: string | null
    zkp_char1: string | null
    zkp_char2: string | null
    zkp_char3: string | null
    zkp_char4: string | null
    zkp_char5: string | null
    zkp_number1: bigint | null
    zkp_number2: bigint | null
    zkp_number3: bigint | null
  }

  export type ZKProductCountAggregateOutputType = {
    zkcid: number
    zkpid: number
    zkp_type: number
    zkp_code: number
    zkp_name: number
    zkp_description: number
    zk_category_id: number
    zkp_unit: number
    zkp_unit_selling_price: number
    zkp_unit_cost_price: number
    zkp_product_img: number
    zkp_char1: number
    zkp_char2: number
    zkp_char3: number
    zkp_char4: number
    zkp_char5: number
    zkp_number1: number
    zkp_number2: number
    zkp_number3: number
    _all: number
  }


  export type ZKProductAvgAggregateInputType = {
    zkcid?: true
    zkpid?: true
    zk_category_id?: true
    zkp_unit?: true
    zkp_unit_selling_price?: true
    zkp_unit_cost_price?: true
    zkp_number1?: true
    zkp_number2?: true
    zkp_number3?: true
  }

  export type ZKProductSumAggregateInputType = {
    zkcid?: true
    zkpid?: true
    zk_category_id?: true
    zkp_unit?: true
    zkp_unit_selling_price?: true
    zkp_unit_cost_price?: true
    zkp_number1?: true
    zkp_number2?: true
    zkp_number3?: true
  }

  export type ZKProductMinAggregateInputType = {
    zkcid?: true
    zkpid?: true
    zkp_type?: true
    zkp_code?: true
    zkp_name?: true
    zkp_description?: true
    zk_category_id?: true
    zkp_unit?: true
    zkp_unit_selling_price?: true
    zkp_unit_cost_price?: true
    zkp_product_img?: true
    zkp_char1?: true
    zkp_char2?: true
    zkp_char3?: true
    zkp_char4?: true
    zkp_char5?: true
    zkp_number1?: true
    zkp_number2?: true
    zkp_number3?: true
  }

  export type ZKProductMaxAggregateInputType = {
    zkcid?: true
    zkpid?: true
    zkp_type?: true
    zkp_code?: true
    zkp_name?: true
    zkp_description?: true
    zk_category_id?: true
    zkp_unit?: true
    zkp_unit_selling_price?: true
    zkp_unit_cost_price?: true
    zkp_product_img?: true
    zkp_char1?: true
    zkp_char2?: true
    zkp_char3?: true
    zkp_char4?: true
    zkp_char5?: true
    zkp_number1?: true
    zkp_number2?: true
    zkp_number3?: true
  }

  export type ZKProductCountAggregateInputType = {
    zkcid?: true
    zkpid?: true
    zkp_type?: true
    zkp_code?: true
    zkp_name?: true
    zkp_description?: true
    zk_category_id?: true
    zkp_unit?: true
    zkp_unit_selling_price?: true
    zkp_unit_cost_price?: true
    zkp_product_img?: true
    zkp_char1?: true
    zkp_char2?: true
    zkp_char3?: true
    zkp_char4?: true
    zkp_char5?: true
    zkp_number1?: true
    zkp_number2?: true
    zkp_number3?: true
    _all?: true
  }

  export type ZKProductAggregateArgs = {
    /**
     * Filter which ZKProduct to aggregate.
     * 
    **/
    where?: ZKProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<ZKProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZKProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZKProducts
    **/
    _count?: true | ZKProductCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZKProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZKProductAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZKProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZKProductSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZKProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZKProductMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZKProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZKProductMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZKProductMaxAggregateInputType
  }

  export type GetZKProductAggregateType<T extends ZKProductAggregateArgs> = {
        [P in keyof T & keyof AggregateZKProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZKProduct[P]>
      : GetScalarType<T[P], AggregateZKProduct[P]>
  }


    
    
  export type ZKProductGroupByArgs = {
    where?: ZKProductWhereInput
    orderBy?: Enumerable<ZKProductOrderByInput>
    by: Array<ZKProductScalarFieldEnum>
    having?: ZKProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZKProductCountAggregateInputType | true
    _avg?: ZKProductAvgAggregateInputType
    _sum?: ZKProductSumAggregateInputType
    _min?: ZKProductMinAggregateInputType
    _max?: ZKProductMaxAggregateInputType
  }


  export type ZKProductGroupByOutputType = {
    zkcid: number
    zkpid: bigint
    zkp_type: PRODUCT_TYPE
    zkp_code: string | null
    zkp_name: string
    zkp_description: string | null
    zk_category_id: bigint
    zkp_unit: bigint
    zkp_unit_selling_price: Decimal
    zkp_unit_cost_price: Decimal
    zkp_product_img: string | null
    zkp_char1: string | null
    zkp_char2: string | null
    zkp_char3: string | null
    zkp_char4: string | null
    zkp_char5: string | null
    zkp_number1: bigint | null
    zkp_number2: bigint | null
    zkp_number3: bigint | null
    _count: ZKProductCountAggregateOutputType | null
    _avg: ZKProductAvgAggregateOutputType | null
    _sum: ZKProductSumAggregateOutputType | null
    _min: ZKProductMinAggregateOutputType | null
    _max: ZKProductMaxAggregateOutputType | null
  }

  type GetZKProductGroupByPayload<T extends ZKProductGroupByArgs> = Promise<
    Array<
      PickArray<ZKProductGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZKProductGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZKProductGroupByOutputType[P]> 
            : GetScalarType<T[P], ZKProductGroupByOutputType[P]>
        }
      > 
    >


  export type ZKProductSelect = {
    zkcid?: boolean
    zkpid?: boolean
    zkp_type?: boolean
    zkp_code?: boolean
    zkp_name?: boolean
    zkp_description?: boolean
    zk_category_id?: boolean
    zkp_unit?: boolean
    zkp_unit_selling_price?: boolean
    zkp_unit_cost_price?: boolean
    zkp_product_img?: boolean
    zkp_char1?: boolean
    zkp_char2?: boolean
    zkp_char3?: boolean
    zkp_char4?: boolean
    zkp_char5?: boolean
    zkp_number1?: boolean
    zkp_number2?: boolean
    zkp_number3?: boolean
    ZK_Taxes?: boolean | ZK_Product_Tax_MappingFindManyArgs
    ZK_Unit?: boolean | ZK_UnitArgs
    ZK_Category?: boolean | ZK_CategoryArgs
  }

  export type ZKProductInclude = {
    ZK_Taxes?: boolean | ZK_Product_Tax_MappingFindManyArgs
    ZK_Unit?: boolean | ZK_UnitArgs
    ZK_Category?: boolean | ZK_CategoryArgs
  }

  export type ZKProductGetPayload<
    S extends boolean | null | undefined | ZKProductArgs,
    U = keyof S
      > = S extends true
        ? ZKProduct
    : S extends undefined
    ? never
    : S extends ZKProductArgs | ZKProductFindManyArgs
    ?'include' extends U
    ? ZKProduct  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ZK_Taxes'
        ? Array < ZK_Product_Tax_MappingGetPayload<S['include'][P]>>  :
        P extends 'ZK_Unit'
        ? ZK_UnitGetPayload<S['include'][P]> :
        P extends 'ZK_Category'
        ? ZK_CategoryGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZKProduct ?ZKProduct [P]
  : 
          P extends 'ZK_Taxes'
        ? Array < ZK_Product_Tax_MappingGetPayload<S['select'][P]>>  :
        P extends 'ZK_Unit'
        ? ZK_UnitGetPayload<S['select'][P]> :
        P extends 'ZK_Category'
        ? ZK_CategoryGetPayload<S['select'][P]> : never
  } 
    : ZKProduct
  : ZKProduct


  type ZKProductCountArgs = Merge<
    Omit<ZKProductFindManyArgs, 'select' | 'include'> & {
      select?: ZKProductCountAggregateInputType | true
    }
  >

  export interface ZKProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZKProduct that matches the filter.
     * @param {ZKProductFindUniqueArgs} args - Arguments to find a ZKProduct
     * @example
     * // Get one ZKProduct
     * const zKProduct = await prisma.zKProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZKProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZKProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZKProduct'> extends True ? CheckSelect<T, Prisma__ZKProductClient<ZKProduct>, Prisma__ZKProductClient<ZKProductGetPayload<T>>> : CheckSelect<T, Prisma__ZKProductClient<ZKProduct | null >, Prisma__ZKProductClient<ZKProductGetPayload<T> | null >>

    /**
     * Find the first ZKProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProductFindFirstArgs} args - Arguments to find a ZKProduct
     * @example
     * // Get one ZKProduct
     * const zKProduct = await prisma.zKProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZKProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZKProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZKProduct'> extends True ? CheckSelect<T, Prisma__ZKProductClient<ZKProduct>, Prisma__ZKProductClient<ZKProductGetPayload<T>>> : CheckSelect<T, Prisma__ZKProductClient<ZKProduct | null >, Prisma__ZKProductClient<ZKProductGetPayload<T> | null >>

    /**
     * Find zero or more ZKProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZKProducts
     * const zKProducts = await prisma.zKProduct.findMany()
     * 
     * // Get first 10 ZKProducts
     * const zKProducts = await prisma.zKProduct.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zKProductWithZkcidOnly = await prisma.zKProduct.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZKProductFindManyArgs>(
      args?: SelectSubset<T, ZKProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZKProduct>>, PrismaPromise<Array<ZKProductGetPayload<T>>>>

    /**
     * Create a ZKProduct.
     * @param {ZKProductCreateArgs} args - Arguments to create a ZKProduct.
     * @example
     * // Create one ZKProduct
     * const ZKProduct = await prisma.zKProduct.create({
     *   data: {
     *     // ... data to create a ZKProduct
     *   }
     * })
     * 
    **/
    create<T extends ZKProductCreateArgs>(
      args: SelectSubset<T, ZKProductCreateArgs>
    ): CheckSelect<T, Prisma__ZKProductClient<ZKProduct>, Prisma__ZKProductClient<ZKProductGetPayload<T>>>

    /**
     * Create many ZKProducts.
     *     @param {ZKProductCreateManyArgs} args - Arguments to create many ZKProducts.
     *     @example
     *     // Create many ZKProducts
     *     const zKProduct = await prisma.zKProduct.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZKProductCreateManyArgs>(
      args?: SelectSubset<T, ZKProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZKProduct.
     * @param {ZKProductDeleteArgs} args - Arguments to delete one ZKProduct.
     * @example
     * // Delete one ZKProduct
     * const ZKProduct = await prisma.zKProduct.delete({
     *   where: {
     *     // ... filter to delete one ZKProduct
     *   }
     * })
     * 
    **/
    delete<T extends ZKProductDeleteArgs>(
      args: SelectSubset<T, ZKProductDeleteArgs>
    ): CheckSelect<T, Prisma__ZKProductClient<ZKProduct>, Prisma__ZKProductClient<ZKProductGetPayload<T>>>

    /**
     * Update one ZKProduct.
     * @param {ZKProductUpdateArgs} args - Arguments to update one ZKProduct.
     * @example
     * // Update one ZKProduct
     * const zKProduct = await prisma.zKProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZKProductUpdateArgs>(
      args: SelectSubset<T, ZKProductUpdateArgs>
    ): CheckSelect<T, Prisma__ZKProductClient<ZKProduct>, Prisma__ZKProductClient<ZKProductGetPayload<T>>>

    /**
     * Delete zero or more ZKProducts.
     * @param {ZKProductDeleteManyArgs} args - Arguments to filter ZKProducts to delete.
     * @example
     * // Delete a few ZKProducts
     * const { count } = await prisma.zKProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZKProductDeleteManyArgs>(
      args?: SelectSubset<T, ZKProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZKProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZKProducts
     * const zKProduct = await prisma.zKProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZKProductUpdateManyArgs>(
      args: SelectSubset<T, ZKProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZKProduct.
     * @param {ZKProductUpsertArgs} args - Arguments to update or create a ZKProduct.
     * @example
     * // Update or create a ZKProduct
     * const zKProduct = await prisma.zKProduct.upsert({
     *   create: {
     *     // ... data to create a ZKProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZKProduct we want to update
     *   }
     * })
    **/
    upsert<T extends ZKProductUpsertArgs>(
      args: SelectSubset<T, ZKProductUpsertArgs>
    ): CheckSelect<T, Prisma__ZKProductClient<ZKProduct>, Prisma__ZKProductClient<ZKProductGetPayload<T>>>

    /**
     * Count the number of ZKProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProductCountArgs} args - Arguments to filter ZKProducts to count.
     * @example
     * // Count the number of ZKProducts
     * const count = await prisma.zKProduct.count({
     *   where: {
     *     // ... the filter for the ZKProducts we want to count
     *   }
     * })
    **/
    count<T extends ZKProductCountArgs>(
      args?: Subset<T, ZKProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZKProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZKProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZKProductAggregateArgs>(args: Subset<T, ZKProductAggregateArgs>): PrismaPromise<GetZKProductAggregateType<T>>

    /**
     * Group by ZKProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZKProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZKProductGroupByArgs['orderBy'] }
        : { orderBy?: ZKProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZKProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZKProductGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZKProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZKProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ZK_Taxes<T extends ZK_Product_Tax_MappingFindManyArgs = {}>(args?: Subset<T, ZK_Product_Tax_MappingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ZK_Product_Tax_Mapping>>, PrismaPromise<Array<ZK_Product_Tax_MappingGetPayload<T>>>>;

    ZK_Unit<T extends ZK_UnitArgs = {}>(args?: Subset<T, ZK_UnitArgs>): CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit | null >, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T> | null >>;

    ZK_Category<T extends ZK_CategoryArgs = {}>(args?: Subset<T, ZK_CategoryArgs>): CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category | null >, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZKProduct findUnique
   */
  export type ZKProductFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
    /**
     * Throw an Error if a ZKProduct can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZKProduct to fetch.
     * 
    **/
    where: ZKProductWhereUniqueInput
  }


  /**
   * ZKProduct findFirst
   */
  export type ZKProductFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
    /**
     * Throw an Error if a ZKProduct can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZKProduct to fetch.
     * 
    **/
    where?: ZKProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<ZKProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZKProducts.
     * 
    **/
    cursor?: ZKProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZKProducts.
     * 
    **/
    distinct?: Enumerable<ZKProductScalarFieldEnum>
  }


  /**
   * ZKProduct findMany
   */
  export type ZKProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
    /**
     * Filter, which ZKProducts to fetch.
     * 
    **/
    where?: ZKProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<ZKProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZKProducts.
     * 
    **/
    cursor?: ZKProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKProducts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZKProductScalarFieldEnum>
  }


  /**
   * ZKProduct create
   */
  export type ZKProductCreateArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
    /**
     * The data needed to create a ZKProduct.
     * 
    **/
    data: XOR<ZKProductCreateInput, ZKProductUncheckedCreateInput>
  }


  /**
   * ZKProduct createMany
   */
  export type ZKProductCreateManyArgs = {
    data: Enumerable<ZKProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZKProduct update
   */
  export type ZKProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
    /**
     * The data needed to update a ZKProduct.
     * 
    **/
    data: XOR<ZKProductUpdateInput, ZKProductUncheckedUpdateInput>
    /**
     * Choose, which ZKProduct to update.
     * 
    **/
    where: ZKProductWhereUniqueInput
  }


  /**
   * ZKProduct updateMany
   */
  export type ZKProductUpdateManyArgs = {
    data: XOR<ZKProductUpdateManyMutationInput, ZKProductUncheckedUpdateManyInput>
    where?: ZKProductWhereInput
  }


  /**
   * ZKProduct upsert
   */
  export type ZKProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
    /**
     * The filter to search for the ZKProduct to update in case it exists.
     * 
    **/
    where: ZKProductWhereUniqueInput
    /**
     * In case the ZKProduct found by the `where` argument doesn't exist, create a new ZKProduct with this data.
     * 
    **/
    create: XOR<ZKProductCreateInput, ZKProductUncheckedCreateInput>
    /**
     * In case the ZKProduct was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZKProductUpdateInput, ZKProductUncheckedUpdateInput>
  }


  /**
   * ZKProduct delete
   */
  export type ZKProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
    /**
     * Filter which ZKProduct to delete.
     * 
    **/
    where: ZKProductWhereUniqueInput
  }


  /**
   * ZKProduct deleteMany
   */
  export type ZKProductDeleteManyArgs = {
    where?: ZKProductWhereInput
  }


  /**
   * ZKProduct without action
   */
  export type ZKProductArgs = {
    /**
     * Select specific fields to fetch from the ZKProduct
     * 
    **/
    select?: ZKProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZKProductInclude | null
  }



  /**
   * Model ZK_Tax
   */


  export type AggregateZK_Tax = {
    _count: ZK_TaxCountAggregateOutputType | null
    count: ZK_TaxCountAggregateOutputType | null
    _avg: ZK_TaxAvgAggregateOutputType | null
    avg: ZK_TaxAvgAggregateOutputType | null
    _sum: ZK_TaxSumAggregateOutputType | null
    sum: ZK_TaxSumAggregateOutputType | null
    _min: ZK_TaxMinAggregateOutputType | null
    min: ZK_TaxMinAggregateOutputType | null
    _max: ZK_TaxMaxAggregateOutputType | null
    max: ZK_TaxMaxAggregateOutputType | null
  }

  export type ZK_TaxAvgAggregateOutputType = {
    zkcid: number | null
    zk_tax_id: number | null
    zk_tax_percentage: Decimal | null
  }

  export type ZK_TaxSumAggregateOutputType = {
    zkcid: number | null
    zk_tax_id: bigint | null
    zk_tax_percentage: Decimal | null
  }

  export type ZK_TaxMinAggregateOutputType = {
    zkcid: number | null
    zk_tax_id: bigint | null
    zk_tax_name: string | null
    zk_tax_percentage: Decimal | null
  }

  export type ZK_TaxMaxAggregateOutputType = {
    zkcid: number | null
    zk_tax_id: bigint | null
    zk_tax_name: string | null
    zk_tax_percentage: Decimal | null
  }

  export type ZK_TaxCountAggregateOutputType = {
    zkcid: number
    zk_tax_id: number
    zk_tax_name: number
    zk_tax_percentage: number
    _all: number
  }


  export type ZK_TaxAvgAggregateInputType = {
    zkcid?: true
    zk_tax_id?: true
    zk_tax_percentage?: true
  }

  export type ZK_TaxSumAggregateInputType = {
    zkcid?: true
    zk_tax_id?: true
    zk_tax_percentage?: true
  }

  export type ZK_TaxMinAggregateInputType = {
    zkcid?: true
    zk_tax_id?: true
    zk_tax_name?: true
    zk_tax_percentage?: true
  }

  export type ZK_TaxMaxAggregateInputType = {
    zkcid?: true
    zk_tax_id?: true
    zk_tax_name?: true
    zk_tax_percentage?: true
  }

  export type ZK_TaxCountAggregateInputType = {
    zkcid?: true
    zk_tax_id?: true
    zk_tax_name?: true
    zk_tax_percentage?: true
    _all?: true
  }

  export type ZK_TaxAggregateArgs = {
    /**
     * Filter which ZK_Tax to aggregate.
     * 
    **/
    where?: ZK_TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Taxes to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_TaxOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Taxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Taxes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_Taxes
    **/
    _count?: true | ZK_TaxCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_TaxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_TaxAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_TaxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_TaxSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_TaxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_TaxMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_TaxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_TaxMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_TaxMaxAggregateInputType
  }

  export type GetZK_TaxAggregateType<T extends ZK_TaxAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_Tax]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_Tax[P]>
      : GetScalarType<T[P], AggregateZK_Tax[P]>
  }


    
    
  export type ZK_TaxGroupByArgs = {
    where?: ZK_TaxWhereInput
    orderBy?: Enumerable<ZK_TaxOrderByInput>
    by: Array<ZK_TaxScalarFieldEnum>
    having?: ZK_TaxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_TaxCountAggregateInputType | true
    _avg?: ZK_TaxAvgAggregateInputType
    _sum?: ZK_TaxSumAggregateInputType
    _min?: ZK_TaxMinAggregateInputType
    _max?: ZK_TaxMaxAggregateInputType
  }


  export type ZK_TaxGroupByOutputType = {
    zkcid: number
    zk_tax_id: bigint
    zk_tax_name: string
    zk_tax_percentage: Decimal
    _count: ZK_TaxCountAggregateOutputType | null
    _avg: ZK_TaxAvgAggregateOutputType | null
    _sum: ZK_TaxSumAggregateOutputType | null
    _min: ZK_TaxMinAggregateOutputType | null
    _max: ZK_TaxMaxAggregateOutputType | null
  }

  type GetZK_TaxGroupByPayload<T extends ZK_TaxGroupByArgs> = Promise<
    Array<
      PickArray<ZK_TaxGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_TaxGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_TaxGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_TaxGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_TaxSelect = {
    zkcid?: boolean
    zk_tax_id?: boolean
    zk_tax_name?: boolean
    zk_tax_percentage?: boolean
    ZK_Products?: boolean | ZK_Product_Tax_MappingFindManyArgs
  }

  export type ZK_TaxInclude = {
    ZK_Products?: boolean | ZK_Product_Tax_MappingFindManyArgs
  }

  export type ZK_TaxGetPayload<
    S extends boolean | null | undefined | ZK_TaxArgs,
    U = keyof S
      > = S extends true
        ? ZK_Tax
    : S extends undefined
    ? never
    : S extends ZK_TaxArgs | ZK_TaxFindManyArgs
    ?'include' extends U
    ? ZK_Tax  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ZK_Products'
        ? Array < ZK_Product_Tax_MappingGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_Tax ?ZK_Tax [P]
  : 
          P extends 'ZK_Products'
        ? Array < ZK_Product_Tax_MappingGetPayload<S['select'][P]>>  : never
  } 
    : ZK_Tax
  : ZK_Tax


  type ZK_TaxCountArgs = Merge<
    Omit<ZK_TaxFindManyArgs, 'select' | 'include'> & {
      select?: ZK_TaxCountAggregateInputType | true
    }
  >

  export interface ZK_TaxDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_Tax that matches the filter.
     * @param {ZK_TaxFindUniqueArgs} args - Arguments to find a ZK_Tax
     * @example
     * // Get one ZK_Tax
     * const zK_Tax = await prisma.zK_Tax.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_TaxFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_TaxFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_Tax'> extends True ? CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax>, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T>>> : CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax | null >, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T> | null >>

    /**
     * Find the first ZK_Tax that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_TaxFindFirstArgs} args - Arguments to find a ZK_Tax
     * @example
     * // Get one ZK_Tax
     * const zK_Tax = await prisma.zK_Tax.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_TaxFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_TaxFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_Tax'> extends True ? CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax>, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T>>> : CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax | null >, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T> | null >>

    /**
     * Find zero or more ZK_Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_TaxFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_Taxes
     * const zK_Taxes = await prisma.zK_Tax.findMany()
     * 
     * // Get first 10 ZK_Taxes
     * const zK_Taxes = await prisma.zK_Tax.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zK_TaxWithZkcidOnly = await prisma.zK_Tax.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZK_TaxFindManyArgs>(
      args?: SelectSubset<T, ZK_TaxFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_Tax>>, PrismaPromise<Array<ZK_TaxGetPayload<T>>>>

    /**
     * Create a ZK_Tax.
     * @param {ZK_TaxCreateArgs} args - Arguments to create a ZK_Tax.
     * @example
     * // Create one ZK_Tax
     * const ZK_Tax = await prisma.zK_Tax.create({
     *   data: {
     *     // ... data to create a ZK_Tax
     *   }
     * })
     * 
    **/
    create<T extends ZK_TaxCreateArgs>(
      args: SelectSubset<T, ZK_TaxCreateArgs>
    ): CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax>, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T>>>

    /**
     * Create many ZK_Taxes.
     *     @param {ZK_TaxCreateManyArgs} args - Arguments to create many ZK_Taxes.
     *     @example
     *     // Create many ZK_Taxes
     *     const zK_Tax = await prisma.zK_Tax.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_TaxCreateManyArgs>(
      args?: SelectSubset<T, ZK_TaxCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_Tax.
     * @param {ZK_TaxDeleteArgs} args - Arguments to delete one ZK_Tax.
     * @example
     * // Delete one ZK_Tax
     * const ZK_Tax = await prisma.zK_Tax.delete({
     *   where: {
     *     // ... filter to delete one ZK_Tax
     *   }
     * })
     * 
    **/
    delete<T extends ZK_TaxDeleteArgs>(
      args: SelectSubset<T, ZK_TaxDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax>, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T>>>

    /**
     * Update one ZK_Tax.
     * @param {ZK_TaxUpdateArgs} args - Arguments to update one ZK_Tax.
     * @example
     * // Update one ZK_Tax
     * const zK_Tax = await prisma.zK_Tax.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_TaxUpdateArgs>(
      args: SelectSubset<T, ZK_TaxUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax>, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T>>>

    /**
     * Delete zero or more ZK_Taxes.
     * @param {ZK_TaxDeleteManyArgs} args - Arguments to filter ZK_Taxes to delete.
     * @example
     * // Delete a few ZK_Taxes
     * const { count } = await prisma.zK_Tax.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_TaxDeleteManyArgs>(
      args?: SelectSubset<T, ZK_TaxDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_TaxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_Taxes
     * const zK_Tax = await prisma.zK_Tax.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_TaxUpdateManyArgs>(
      args: SelectSubset<T, ZK_TaxUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_Tax.
     * @param {ZK_TaxUpsertArgs} args - Arguments to update or create a ZK_Tax.
     * @example
     * // Update or create a ZK_Tax
     * const zK_Tax = await prisma.zK_Tax.upsert({
     *   create: {
     *     // ... data to create a ZK_Tax
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_Tax we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_TaxUpsertArgs>(
      args: SelectSubset<T, ZK_TaxUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax>, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T>>>

    /**
     * Count the number of ZK_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_TaxCountArgs} args - Arguments to filter ZK_Taxes to count.
     * @example
     * // Count the number of ZK_Taxes
     * const count = await prisma.zK_Tax.count({
     *   where: {
     *     // ... the filter for the ZK_Taxes we want to count
     *   }
     * })
    **/
    count<T extends ZK_TaxCountArgs>(
      args?: Subset<T, ZK_TaxCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_TaxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_TaxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_TaxAggregateArgs>(args: Subset<T, ZK_TaxAggregateArgs>): PrismaPromise<GetZK_TaxAggregateType<T>>

    /**
     * Group by ZK_Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_TaxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_TaxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_TaxGroupByArgs['orderBy'] }
        : { orderBy?: ZK_TaxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_TaxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_TaxGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_Tax.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_TaxClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ZK_Products<T extends ZK_Product_Tax_MappingFindManyArgs = {}>(args?: Subset<T, ZK_Product_Tax_MappingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ZK_Product_Tax_Mapping>>, PrismaPromise<Array<ZK_Product_Tax_MappingGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_Tax findUnique
   */
  export type ZK_TaxFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
    /**
     * Throw an Error if a ZK_Tax can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Tax to fetch.
     * 
    **/
    where: ZK_TaxWhereUniqueInput
  }


  /**
   * ZK_Tax findFirst
   */
  export type ZK_TaxFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
    /**
     * Throw an Error if a ZK_Tax can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Tax to fetch.
     * 
    **/
    where?: ZK_TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Taxes to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_TaxOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_Taxes.
     * 
    **/
    cursor?: ZK_TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Taxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Taxes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_Taxes.
     * 
    **/
    distinct?: Enumerable<ZK_TaxScalarFieldEnum>
  }


  /**
   * ZK_Tax findMany
   */
  export type ZK_TaxFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
    /**
     * Filter, which ZK_Taxes to fetch.
     * 
    **/
    where?: ZK_TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Taxes to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_TaxOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_Taxes.
     * 
    **/
    cursor?: ZK_TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Taxes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Taxes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_TaxScalarFieldEnum>
  }


  /**
   * ZK_Tax create
   */
  export type ZK_TaxCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
    /**
     * The data needed to create a ZK_Tax.
     * 
    **/
    data: XOR<ZK_TaxCreateInput, ZK_TaxUncheckedCreateInput>
  }


  /**
   * ZK_Tax createMany
   */
  export type ZK_TaxCreateManyArgs = {
    data: Enumerable<ZK_TaxCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_Tax update
   */
  export type ZK_TaxUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
    /**
     * The data needed to update a ZK_Tax.
     * 
    **/
    data: XOR<ZK_TaxUpdateInput, ZK_TaxUncheckedUpdateInput>
    /**
     * Choose, which ZK_Tax to update.
     * 
    **/
    where: ZK_TaxWhereUniqueInput
  }


  /**
   * ZK_Tax updateMany
   */
  export type ZK_TaxUpdateManyArgs = {
    data: XOR<ZK_TaxUpdateManyMutationInput, ZK_TaxUncheckedUpdateManyInput>
    where?: ZK_TaxWhereInput
  }


  /**
   * ZK_Tax upsert
   */
  export type ZK_TaxUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
    /**
     * The filter to search for the ZK_Tax to update in case it exists.
     * 
    **/
    where: ZK_TaxWhereUniqueInput
    /**
     * In case the ZK_Tax found by the `where` argument doesn't exist, create a new ZK_Tax with this data.
     * 
    **/
    create: XOR<ZK_TaxCreateInput, ZK_TaxUncheckedCreateInput>
    /**
     * In case the ZK_Tax was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_TaxUpdateInput, ZK_TaxUncheckedUpdateInput>
  }


  /**
   * ZK_Tax delete
   */
  export type ZK_TaxDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
    /**
     * Filter which ZK_Tax to delete.
     * 
    **/
    where: ZK_TaxWhereUniqueInput
  }


  /**
   * ZK_Tax deleteMany
   */
  export type ZK_TaxDeleteManyArgs = {
    where?: ZK_TaxWhereInput
  }


  /**
   * ZK_Tax without action
   */
  export type ZK_TaxArgs = {
    /**
     * Select specific fields to fetch from the ZK_Tax
     * 
    **/
    select?: ZK_TaxSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_TaxInclude | null
  }



  /**
   * Model ZK_Unit
   */


  export type AggregateZK_Unit = {
    _count: ZK_UnitCountAggregateOutputType | null
    count: ZK_UnitCountAggregateOutputType | null
    _avg: ZK_UnitAvgAggregateOutputType | null
    avg: ZK_UnitAvgAggregateOutputType | null
    _sum: ZK_UnitSumAggregateOutputType | null
    sum: ZK_UnitSumAggregateOutputType | null
    _min: ZK_UnitMinAggregateOutputType | null
    min: ZK_UnitMinAggregateOutputType | null
    _max: ZK_UnitMaxAggregateOutputType | null
    max: ZK_UnitMaxAggregateOutputType | null
  }

  export type ZK_UnitAvgAggregateOutputType = {
    zkcid: number | null
    zk_unit_id: number | null
  }

  export type ZK_UnitSumAggregateOutputType = {
    zkcid: number | null
    zk_unit_id: bigint | null
  }

  export type ZK_UnitMinAggregateOutputType = {
    zkcid: number | null
    zk_unit_id: bigint | null
    zk_unit_name: string | null
  }

  export type ZK_UnitMaxAggregateOutputType = {
    zkcid: number | null
    zk_unit_id: bigint | null
    zk_unit_name: string | null
  }

  export type ZK_UnitCountAggregateOutputType = {
    zkcid: number
    zk_unit_id: number
    zk_unit_name: number
    _all: number
  }


  export type ZK_UnitAvgAggregateInputType = {
    zkcid?: true
    zk_unit_id?: true
  }

  export type ZK_UnitSumAggregateInputType = {
    zkcid?: true
    zk_unit_id?: true
  }

  export type ZK_UnitMinAggregateInputType = {
    zkcid?: true
    zk_unit_id?: true
    zk_unit_name?: true
  }

  export type ZK_UnitMaxAggregateInputType = {
    zkcid?: true
    zk_unit_id?: true
    zk_unit_name?: true
  }

  export type ZK_UnitCountAggregateInputType = {
    zkcid?: true
    zk_unit_id?: true
    zk_unit_name?: true
    _all?: true
  }

  export type ZK_UnitAggregateArgs = {
    /**
     * Filter which ZK_Unit to aggregate.
     * 
    **/
    where?: ZK_UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Units to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_UnitOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Units from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Units.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_Units
    **/
    _count?: true | ZK_UnitCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_UnitAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_UnitSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_UnitMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_UnitMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_UnitMaxAggregateInputType
  }

  export type GetZK_UnitAggregateType<T extends ZK_UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_Unit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_Unit[P]>
      : GetScalarType<T[P], AggregateZK_Unit[P]>
  }


    
    
  export type ZK_UnitGroupByArgs = {
    where?: ZK_UnitWhereInput
    orderBy?: Enumerable<ZK_UnitOrderByInput>
    by: Array<ZK_UnitScalarFieldEnum>
    having?: ZK_UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_UnitCountAggregateInputType | true
    _avg?: ZK_UnitAvgAggregateInputType
    _sum?: ZK_UnitSumAggregateInputType
    _min?: ZK_UnitMinAggregateInputType
    _max?: ZK_UnitMaxAggregateInputType
  }


  export type ZK_UnitGroupByOutputType = {
    zkcid: number
    zk_unit_id: bigint
    zk_unit_name: string
    _count: ZK_UnitCountAggregateOutputType | null
    _avg: ZK_UnitAvgAggregateOutputType | null
    _sum: ZK_UnitSumAggregateOutputType | null
    _min: ZK_UnitMinAggregateOutputType | null
    _max: ZK_UnitMaxAggregateOutputType | null
  }

  type GetZK_UnitGroupByPayload<T extends ZK_UnitGroupByArgs> = Promise<
    Array<
      PickArray<ZK_UnitGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_UnitGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_UnitGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_UnitGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_UnitSelect = {
    zkcid?: boolean
    zk_unit_id?: boolean
    zk_unit_name?: boolean
    ZK_Product?: boolean | ZKProductArgs
  }

  export type ZK_UnitInclude = {
    ZK_Product?: boolean | ZKProductArgs
  }

  export type ZK_UnitGetPayload<
    S extends boolean | null | undefined | ZK_UnitArgs,
    U = keyof S
      > = S extends true
        ? ZK_Unit
    : S extends undefined
    ? never
    : S extends ZK_UnitArgs | ZK_UnitFindManyArgs
    ?'include' extends U
    ? ZK_Unit  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ZK_Product'
        ? ZKProductGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_Unit ?ZK_Unit [P]
  : 
          P extends 'ZK_Product'
        ? ZKProductGetPayload<S['select'][P]> | null : never
  } 
    : ZK_Unit
  : ZK_Unit


  type ZK_UnitCountArgs = Merge<
    Omit<ZK_UnitFindManyArgs, 'select' | 'include'> & {
      select?: ZK_UnitCountAggregateInputType | true
    }
  >

  export interface ZK_UnitDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_Unit that matches the filter.
     * @param {ZK_UnitFindUniqueArgs} args - Arguments to find a ZK_Unit
     * @example
     * // Get one ZK_Unit
     * const zK_Unit = await prisma.zK_Unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_UnitFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_UnitFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_Unit'> extends True ? CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit>, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T>>> : CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit | null >, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T> | null >>

    /**
     * Find the first ZK_Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_UnitFindFirstArgs} args - Arguments to find a ZK_Unit
     * @example
     * // Get one ZK_Unit
     * const zK_Unit = await prisma.zK_Unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_UnitFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_UnitFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_Unit'> extends True ? CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit>, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T>>> : CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit | null >, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T> | null >>

    /**
     * Find zero or more ZK_Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_UnitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_Units
     * const zK_Units = await prisma.zK_Unit.findMany()
     * 
     * // Get first 10 ZK_Units
     * const zK_Units = await prisma.zK_Unit.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zK_UnitWithZkcidOnly = await prisma.zK_Unit.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZK_UnitFindManyArgs>(
      args?: SelectSubset<T, ZK_UnitFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_Unit>>, PrismaPromise<Array<ZK_UnitGetPayload<T>>>>

    /**
     * Create a ZK_Unit.
     * @param {ZK_UnitCreateArgs} args - Arguments to create a ZK_Unit.
     * @example
     * // Create one ZK_Unit
     * const ZK_Unit = await prisma.zK_Unit.create({
     *   data: {
     *     // ... data to create a ZK_Unit
     *   }
     * })
     * 
    **/
    create<T extends ZK_UnitCreateArgs>(
      args: SelectSubset<T, ZK_UnitCreateArgs>
    ): CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit>, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T>>>

    /**
     * Create many ZK_Units.
     *     @param {ZK_UnitCreateManyArgs} args - Arguments to create many ZK_Units.
     *     @example
     *     // Create many ZK_Units
     *     const zK_Unit = await prisma.zK_Unit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_UnitCreateManyArgs>(
      args?: SelectSubset<T, ZK_UnitCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_Unit.
     * @param {ZK_UnitDeleteArgs} args - Arguments to delete one ZK_Unit.
     * @example
     * // Delete one ZK_Unit
     * const ZK_Unit = await prisma.zK_Unit.delete({
     *   where: {
     *     // ... filter to delete one ZK_Unit
     *   }
     * })
     * 
    **/
    delete<T extends ZK_UnitDeleteArgs>(
      args: SelectSubset<T, ZK_UnitDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit>, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T>>>

    /**
     * Update one ZK_Unit.
     * @param {ZK_UnitUpdateArgs} args - Arguments to update one ZK_Unit.
     * @example
     * // Update one ZK_Unit
     * const zK_Unit = await prisma.zK_Unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_UnitUpdateArgs>(
      args: SelectSubset<T, ZK_UnitUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit>, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T>>>

    /**
     * Delete zero or more ZK_Units.
     * @param {ZK_UnitDeleteManyArgs} args - Arguments to filter ZK_Units to delete.
     * @example
     * // Delete a few ZK_Units
     * const { count } = await prisma.zK_Unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_UnitDeleteManyArgs>(
      args?: SelectSubset<T, ZK_UnitDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_Units
     * const zK_Unit = await prisma.zK_Unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_UnitUpdateManyArgs>(
      args: SelectSubset<T, ZK_UnitUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_Unit.
     * @param {ZK_UnitUpsertArgs} args - Arguments to update or create a ZK_Unit.
     * @example
     * // Update or create a ZK_Unit
     * const zK_Unit = await prisma.zK_Unit.upsert({
     *   create: {
     *     // ... data to create a ZK_Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_Unit we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_UnitUpsertArgs>(
      args: SelectSubset<T, ZK_UnitUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_UnitClient<ZK_Unit>, Prisma__ZK_UnitClient<ZK_UnitGetPayload<T>>>

    /**
     * Count the number of ZK_Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_UnitCountArgs} args - Arguments to filter ZK_Units to count.
     * @example
     * // Count the number of ZK_Units
     * const count = await prisma.zK_Unit.count({
     *   where: {
     *     // ... the filter for the ZK_Units we want to count
     *   }
     * })
    **/
    count<T extends ZK_UnitCountArgs>(
      args?: Subset<T, ZK_UnitCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_UnitAggregateArgs>(args: Subset<T, ZK_UnitAggregateArgs>): PrismaPromise<GetZK_UnitAggregateType<T>>

    /**
     * Group by ZK_Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_UnitGroupByArgs['orderBy'] }
        : { orderBy?: ZK_UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_UnitGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_UnitClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ZK_Product<T extends ZKProductArgs = {}>(args?: Subset<T, ZKProductArgs>): CheckSelect<T, Prisma__ZKProductClient<ZKProduct | null >, Prisma__ZKProductClient<ZKProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_Unit findUnique
   */
  export type ZK_UnitFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
    /**
     * Throw an Error if a ZK_Unit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Unit to fetch.
     * 
    **/
    where: ZK_UnitWhereUniqueInput
  }


  /**
   * ZK_Unit findFirst
   */
  export type ZK_UnitFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
    /**
     * Throw an Error if a ZK_Unit can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Unit to fetch.
     * 
    **/
    where?: ZK_UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Units to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_UnitOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_Units.
     * 
    **/
    cursor?: ZK_UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Units from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Units.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_Units.
     * 
    **/
    distinct?: Enumerable<ZK_UnitScalarFieldEnum>
  }


  /**
   * ZK_Unit findMany
   */
  export type ZK_UnitFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
    /**
     * Filter, which ZK_Units to fetch.
     * 
    **/
    where?: ZK_UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Units to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_UnitOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_Units.
     * 
    **/
    cursor?: ZK_UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Units from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Units.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_UnitScalarFieldEnum>
  }


  /**
   * ZK_Unit create
   */
  export type ZK_UnitCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
    /**
     * The data needed to create a ZK_Unit.
     * 
    **/
    data: XOR<ZK_UnitCreateInput, ZK_UnitUncheckedCreateInput>
  }


  /**
   * ZK_Unit createMany
   */
  export type ZK_UnitCreateManyArgs = {
    data: Enumerable<ZK_UnitCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_Unit update
   */
  export type ZK_UnitUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
    /**
     * The data needed to update a ZK_Unit.
     * 
    **/
    data: XOR<ZK_UnitUpdateInput, ZK_UnitUncheckedUpdateInput>
    /**
     * Choose, which ZK_Unit to update.
     * 
    **/
    where: ZK_UnitWhereUniqueInput
  }


  /**
   * ZK_Unit updateMany
   */
  export type ZK_UnitUpdateManyArgs = {
    data: XOR<ZK_UnitUpdateManyMutationInput, ZK_UnitUncheckedUpdateManyInput>
    where?: ZK_UnitWhereInput
  }


  /**
   * ZK_Unit upsert
   */
  export type ZK_UnitUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
    /**
     * The filter to search for the ZK_Unit to update in case it exists.
     * 
    **/
    where: ZK_UnitWhereUniqueInput
    /**
     * In case the ZK_Unit found by the `where` argument doesn't exist, create a new ZK_Unit with this data.
     * 
    **/
    create: XOR<ZK_UnitCreateInput, ZK_UnitUncheckedCreateInput>
    /**
     * In case the ZK_Unit was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_UnitUpdateInput, ZK_UnitUncheckedUpdateInput>
  }


  /**
   * ZK_Unit delete
   */
  export type ZK_UnitDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
    /**
     * Filter which ZK_Unit to delete.
     * 
    **/
    where: ZK_UnitWhereUniqueInput
  }


  /**
   * ZK_Unit deleteMany
   */
  export type ZK_UnitDeleteManyArgs = {
    where?: ZK_UnitWhereInput
  }


  /**
   * ZK_Unit without action
   */
  export type ZK_UnitArgs = {
    /**
     * Select specific fields to fetch from the ZK_Unit
     * 
    **/
    select?: ZK_UnitSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_UnitInclude | null
  }



  /**
   * Model ZK_Category
   */


  export type AggregateZK_Category = {
    _count: ZK_CategoryCountAggregateOutputType | null
    count: ZK_CategoryCountAggregateOutputType | null
    _avg: ZK_CategoryAvgAggregateOutputType | null
    avg: ZK_CategoryAvgAggregateOutputType | null
    _sum: ZK_CategorySumAggregateOutputType | null
    sum: ZK_CategorySumAggregateOutputType | null
    _min: ZK_CategoryMinAggregateOutputType | null
    min: ZK_CategoryMinAggregateOutputType | null
    _max: ZK_CategoryMaxAggregateOutputType | null
    max: ZK_CategoryMaxAggregateOutputType | null
  }

  export type ZK_CategoryAvgAggregateOutputType = {
    zkcid: number | null
    zk_category_id: number | null
    zk_category_level: number | null
    zk_category_parentid: number | null
  }

  export type ZK_CategorySumAggregateOutputType = {
    zkcid: number | null
    zk_category_id: bigint | null
    zk_category_level: number | null
    zk_category_parentid: bigint | null
  }

  export type ZK_CategoryMinAggregateOutputType = {
    zkcid: number | null
    zk_category_id: bigint | null
    zk_category_name: string | null
    zk_category_level: number | null
    zk_category_parentid: bigint | null
  }

  export type ZK_CategoryMaxAggregateOutputType = {
    zkcid: number | null
    zk_category_id: bigint | null
    zk_category_name: string | null
    zk_category_level: number | null
    zk_category_parentid: bigint | null
  }

  export type ZK_CategoryCountAggregateOutputType = {
    zkcid: number
    zk_category_id: number
    zk_category_name: number
    zk_category_level: number
    zk_category_parentid: number
    _all: number
  }


  export type ZK_CategoryAvgAggregateInputType = {
    zkcid?: true
    zk_category_id?: true
    zk_category_level?: true
    zk_category_parentid?: true
  }

  export type ZK_CategorySumAggregateInputType = {
    zkcid?: true
    zk_category_id?: true
    zk_category_level?: true
    zk_category_parentid?: true
  }

  export type ZK_CategoryMinAggregateInputType = {
    zkcid?: true
    zk_category_id?: true
    zk_category_name?: true
    zk_category_level?: true
    zk_category_parentid?: true
  }

  export type ZK_CategoryMaxAggregateInputType = {
    zkcid?: true
    zk_category_id?: true
    zk_category_name?: true
    zk_category_level?: true
    zk_category_parentid?: true
  }

  export type ZK_CategoryCountAggregateInputType = {
    zkcid?: true
    zk_category_id?: true
    zk_category_name?: true
    zk_category_level?: true
    zk_category_parentid?: true
    _all?: true
  }

  export type ZK_CategoryAggregateArgs = {
    /**
     * Filter which ZK_Category to aggregate.
     * 
    **/
    where?: ZK_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_Categories
    **/
    _count?: true | ZK_CategoryCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_CategoryAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_CategorySumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_CategoryMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_CategoryMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_CategoryMaxAggregateInputType
  }

  export type GetZK_CategoryAggregateType<T extends ZK_CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_Category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_Category[P]>
      : GetScalarType<T[P], AggregateZK_Category[P]>
  }


    
    
  export type ZK_CategoryGroupByArgs = {
    where?: ZK_CategoryWhereInput
    orderBy?: Enumerable<ZK_CategoryOrderByInput>
    by: Array<ZK_CategoryScalarFieldEnum>
    having?: ZK_CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_CategoryCountAggregateInputType | true
    _avg?: ZK_CategoryAvgAggregateInputType
    _sum?: ZK_CategorySumAggregateInputType
    _min?: ZK_CategoryMinAggregateInputType
    _max?: ZK_CategoryMaxAggregateInputType
  }


  export type ZK_CategoryGroupByOutputType = {
    zkcid: number
    zk_category_id: bigint
    zk_category_name: string
    zk_category_level: number
    zk_category_parentid: bigint | null
    _count: ZK_CategoryCountAggregateOutputType | null
    _avg: ZK_CategoryAvgAggregateOutputType | null
    _sum: ZK_CategorySumAggregateOutputType | null
    _min: ZK_CategoryMinAggregateOutputType | null
    _max: ZK_CategoryMaxAggregateOutputType | null
  }

  type GetZK_CategoryGroupByPayload<T extends ZK_CategoryGroupByArgs> = Promise<
    Array<
      PickArray<ZK_CategoryGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_CategoryGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_CategoryGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_CategoryGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_CategorySelect = {
    zkcid?: boolean
    zk_category_id?: boolean
    zk_category_name?: boolean
    zk_category_level?: boolean
    zk_category_parentid?: boolean
    ZKProduct?: boolean | ZKProductArgs
  }

  export type ZK_CategoryInclude = {
    ZKProduct?: boolean | ZKProductArgs
  }

  export type ZK_CategoryGetPayload<
    S extends boolean | null | undefined | ZK_CategoryArgs,
    U = keyof S
      > = S extends true
        ? ZK_Category
    : S extends undefined
    ? never
    : S extends ZK_CategoryArgs | ZK_CategoryFindManyArgs
    ?'include' extends U
    ? ZK_Category  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ZKProduct'
        ? ZKProductGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_Category ?ZK_Category [P]
  : 
          P extends 'ZKProduct'
        ? ZKProductGetPayload<S['select'][P]> | null : never
  } 
    : ZK_Category
  : ZK_Category


  type ZK_CategoryCountArgs = Merge<
    Omit<ZK_CategoryFindManyArgs, 'select' | 'include'> & {
      select?: ZK_CategoryCountAggregateInputType | true
    }
  >

  export interface ZK_CategoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_Category that matches the filter.
     * @param {ZK_CategoryFindUniqueArgs} args - Arguments to find a ZK_Category
     * @example
     * // Get one ZK_Category
     * const zK_Category = await prisma.zK_Category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_Category'> extends True ? CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category>, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T>>> : CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category | null >, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T> | null >>

    /**
     * Find the first ZK_Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CategoryFindFirstArgs} args - Arguments to find a ZK_Category
     * @example
     * // Get one ZK_Category
     * const zK_Category = await prisma.zK_Category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_Category'> extends True ? CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category>, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T>>> : CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category | null >, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T> | null >>

    /**
     * Find zero or more ZK_Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_Categories
     * const zK_Categories = await prisma.zK_Category.findMany()
     * 
     * // Get first 10 ZK_Categories
     * const zK_Categories = await prisma.zK_Category.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zK_CategoryWithZkcidOnly = await prisma.zK_Category.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZK_CategoryFindManyArgs>(
      args?: SelectSubset<T, ZK_CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_Category>>, PrismaPromise<Array<ZK_CategoryGetPayload<T>>>>

    /**
     * Create a ZK_Category.
     * @param {ZK_CategoryCreateArgs} args - Arguments to create a ZK_Category.
     * @example
     * // Create one ZK_Category
     * const ZK_Category = await prisma.zK_Category.create({
     *   data: {
     *     // ... data to create a ZK_Category
     *   }
     * })
     * 
    **/
    create<T extends ZK_CategoryCreateArgs>(
      args: SelectSubset<T, ZK_CategoryCreateArgs>
    ): CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category>, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T>>>

    /**
     * Create many ZK_Categories.
     *     @param {ZK_CategoryCreateManyArgs} args - Arguments to create many ZK_Categories.
     *     @example
     *     // Create many ZK_Categories
     *     const zK_Category = await prisma.zK_Category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_CategoryCreateManyArgs>(
      args?: SelectSubset<T, ZK_CategoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_Category.
     * @param {ZK_CategoryDeleteArgs} args - Arguments to delete one ZK_Category.
     * @example
     * // Delete one ZK_Category
     * const ZK_Category = await prisma.zK_Category.delete({
     *   where: {
     *     // ... filter to delete one ZK_Category
     *   }
     * })
     * 
    **/
    delete<T extends ZK_CategoryDeleteArgs>(
      args: SelectSubset<T, ZK_CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category>, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T>>>

    /**
     * Update one ZK_Category.
     * @param {ZK_CategoryUpdateArgs} args - Arguments to update one ZK_Category.
     * @example
     * // Update one ZK_Category
     * const zK_Category = await prisma.zK_Category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_CategoryUpdateArgs>(
      args: SelectSubset<T, ZK_CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category>, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T>>>

    /**
     * Delete zero or more ZK_Categories.
     * @param {ZK_CategoryDeleteManyArgs} args - Arguments to filter ZK_Categories to delete.
     * @example
     * // Delete a few ZK_Categories
     * const { count } = await prisma.zK_Category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_CategoryDeleteManyArgs>(
      args?: SelectSubset<T, ZK_CategoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_Categories
     * const zK_Category = await prisma.zK_Category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_CategoryUpdateManyArgs>(
      args: SelectSubset<T, ZK_CategoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_Category.
     * @param {ZK_CategoryUpsertArgs} args - Arguments to update or create a ZK_Category.
     * @example
     * // Update or create a ZK_Category
     * const zK_Category = await prisma.zK_Category.upsert({
     *   create: {
     *     // ... data to create a ZK_Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_Category we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_CategoryUpsertArgs>(
      args: SelectSubset<T, ZK_CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_CategoryClient<ZK_Category>, Prisma__ZK_CategoryClient<ZK_CategoryGetPayload<T>>>

    /**
     * Count the number of ZK_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CategoryCountArgs} args - Arguments to filter ZK_Categories to count.
     * @example
     * // Count the number of ZK_Categories
     * const count = await prisma.zK_Category.count({
     *   where: {
     *     // ... the filter for the ZK_Categories we want to count
     *   }
     * })
    **/
    count<T extends ZK_CategoryCountArgs>(
      args?: Subset<T, ZK_CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_CategoryAggregateArgs>(args: Subset<T, ZK_CategoryAggregateArgs>): PrismaPromise<GetZK_CategoryAggregateType<T>>

    /**
     * Group by ZK_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_CategoryGroupByArgs['orderBy'] }
        : { orderBy?: ZK_CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_CategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_CategoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ZKProduct<T extends ZKProductArgs = {}>(args?: Subset<T, ZKProductArgs>): CheckSelect<T, Prisma__ZKProductClient<ZKProduct | null >, Prisma__ZKProductClient<ZKProductGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_Category findUnique
   */
  export type ZK_CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
    /**
     * Throw an Error if a ZK_Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Category to fetch.
     * 
    **/
    where: ZK_CategoryWhereUniqueInput
  }


  /**
   * ZK_Category findFirst
   */
  export type ZK_CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
    /**
     * Throw an Error if a ZK_Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Category to fetch.
     * 
    **/
    where?: ZK_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_Categories.
     * 
    **/
    cursor?: ZK_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_Categories.
     * 
    **/
    distinct?: Enumerable<ZK_CategoryScalarFieldEnum>
  }


  /**
   * ZK_Category findMany
   */
  export type ZK_CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
    /**
     * Filter, which ZK_Categories to fetch.
     * 
    **/
    where?: ZK_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_CategoryOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_Categories.
     * 
    **/
    cursor?: ZK_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_CategoryScalarFieldEnum>
  }


  /**
   * ZK_Category create
   */
  export type ZK_CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
    /**
     * The data needed to create a ZK_Category.
     * 
    **/
    data: XOR<ZK_CategoryCreateInput, ZK_CategoryUncheckedCreateInput>
  }


  /**
   * ZK_Category createMany
   */
  export type ZK_CategoryCreateManyArgs = {
    data: Enumerable<ZK_CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_Category update
   */
  export type ZK_CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
    /**
     * The data needed to update a ZK_Category.
     * 
    **/
    data: XOR<ZK_CategoryUpdateInput, ZK_CategoryUncheckedUpdateInput>
    /**
     * Choose, which ZK_Category to update.
     * 
    **/
    where: ZK_CategoryWhereUniqueInput
  }


  /**
   * ZK_Category updateMany
   */
  export type ZK_CategoryUpdateManyArgs = {
    data: XOR<ZK_CategoryUpdateManyMutationInput, ZK_CategoryUncheckedUpdateManyInput>
    where?: ZK_CategoryWhereInput
  }


  /**
   * ZK_Category upsert
   */
  export type ZK_CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
    /**
     * The filter to search for the ZK_Category to update in case it exists.
     * 
    **/
    where: ZK_CategoryWhereUniqueInput
    /**
     * In case the ZK_Category found by the `where` argument doesn't exist, create a new ZK_Category with this data.
     * 
    **/
    create: XOR<ZK_CategoryCreateInput, ZK_CategoryUncheckedCreateInput>
    /**
     * In case the ZK_Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_CategoryUpdateInput, ZK_CategoryUncheckedUpdateInput>
  }


  /**
   * ZK_Category delete
   */
  export type ZK_CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
    /**
     * Filter which ZK_Category to delete.
     * 
    **/
    where: ZK_CategoryWhereUniqueInput
  }


  /**
   * ZK_Category deleteMany
   */
  export type ZK_CategoryDeleteManyArgs = {
    where?: ZK_CategoryWhereInput
  }


  /**
   * ZK_Category without action
   */
  export type ZK_CategoryArgs = {
    /**
     * Select specific fields to fetch from the ZK_Category
     * 
    **/
    select?: ZK_CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CategoryInclude | null
  }



  /**
   * Model ZK_Customer
   */


  export type AggregateZK_Customer = {
    _count: ZK_CustomerCountAggregateOutputType | null
    count: ZK_CustomerCountAggregateOutputType | null
    _avg: ZK_CustomerAvgAggregateOutputType | null
    avg: ZK_CustomerAvgAggregateOutputType | null
    _sum: ZK_CustomerSumAggregateOutputType | null
    sum: ZK_CustomerSumAggregateOutputType | null
    _min: ZK_CustomerMinAggregateOutputType | null
    min: ZK_CustomerMinAggregateOutputType | null
    _max: ZK_CustomerMaxAggregateOutputType | null
    max: ZK_CustomerMaxAggregateOutputType | null
  }

  export type ZK_CustomerAvgAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: number | null
  }

  export type ZK_CustomerSumAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: bigint | null
  }

  export type ZK_CustomerMinAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: bigint | null
    zk_customer_name: string | null
    zk_customer_mobile: string | null
    zk_customer_email: string | null
    zk_customer_other_details: string | null
  }

  export type ZK_CustomerMaxAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: bigint | null
    zk_customer_name: string | null
    zk_customer_mobile: string | null
    zk_customer_email: string | null
    zk_customer_other_details: string | null
  }

  export type ZK_CustomerCountAggregateOutputType = {
    zkcid: number
    zk_customer_id: number
    zk_customer_name: number
    zk_customer_mobile: number
    zk_customer_email: number
    zk_customer_other_details: number
    _all: number
  }


  export type ZK_CustomerAvgAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
  }

  export type ZK_CustomerSumAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
  }

  export type ZK_CustomerMinAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_customer_name?: true
    zk_customer_mobile?: true
    zk_customer_email?: true
    zk_customer_other_details?: true
  }

  export type ZK_CustomerMaxAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_customer_name?: true
    zk_customer_mobile?: true
    zk_customer_email?: true
    zk_customer_other_details?: true
  }

  export type ZK_CustomerCountAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_customer_name?: true
    zk_customer_mobile?: true
    zk_customer_email?: true
    zk_customer_other_details?: true
    _all?: true
  }

  export type ZK_CustomerAggregateArgs = {
    /**
     * Filter which ZK_Customer to aggregate.
     * 
    **/
    where?: ZK_CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_CustomerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_Customers
    **/
    _count?: true | ZK_CustomerCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_CustomerAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_CustomerSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_CustomerMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_CustomerMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_CustomerMaxAggregateInputType
  }

  export type GetZK_CustomerAggregateType<T extends ZK_CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_Customer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_Customer[P]>
      : GetScalarType<T[P], AggregateZK_Customer[P]>
  }


    
    
  export type ZK_CustomerGroupByArgs = {
    where?: ZK_CustomerWhereInput
    orderBy?: Enumerable<ZK_CustomerOrderByInput>
    by: Array<ZK_CustomerScalarFieldEnum>
    having?: ZK_CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_CustomerCountAggregateInputType | true
    _avg?: ZK_CustomerAvgAggregateInputType
    _sum?: ZK_CustomerSumAggregateInputType
    _min?: ZK_CustomerMinAggregateInputType
    _max?: ZK_CustomerMaxAggregateInputType
  }


  export type ZK_CustomerGroupByOutputType = {
    zkcid: number
    zk_customer_id: bigint
    zk_customer_name: string
    zk_customer_mobile: string | null
    zk_customer_email: string | null
    zk_customer_other_details: string
    _count: ZK_CustomerCountAggregateOutputType | null
    _avg: ZK_CustomerAvgAggregateOutputType | null
    _sum: ZK_CustomerSumAggregateOutputType | null
    _min: ZK_CustomerMinAggregateOutputType | null
    _max: ZK_CustomerMaxAggregateOutputType | null
  }

  type GetZK_CustomerGroupByPayload<T extends ZK_CustomerGroupByArgs> = Promise<
    Array<
      PickArray<ZK_CustomerGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_CustomerGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_CustomerGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_CustomerGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_CustomerSelect = {
    zkcid?: boolean
    zk_customer_id?: boolean
    zk_customer_name?: boolean
    zk_customer_mobile?: boolean
    zk_customer_email?: boolean
    zk_customer_other_details?: boolean
    ZK_Order?: boolean | ZK_OrderFindManyArgs
    ZK_ShippingAddress?: boolean | ZK_ShippingAddressArgs
  }

  export type ZK_CustomerInclude = {
    ZK_Order?: boolean | ZK_OrderFindManyArgs
    ZK_ShippingAddress?: boolean | ZK_ShippingAddressArgs
  }

  export type ZK_CustomerGetPayload<
    S extends boolean | null | undefined | ZK_CustomerArgs,
    U = keyof S
      > = S extends true
        ? ZK_Customer
    : S extends undefined
    ? never
    : S extends ZK_CustomerArgs | ZK_CustomerFindManyArgs
    ?'include' extends U
    ? ZK_Customer  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ZK_Order'
        ? Array < ZK_OrderGetPayload<S['include'][P]>>  :
        P extends 'ZK_ShippingAddress'
        ? ZK_ShippingAddressGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_Customer ?ZK_Customer [P]
  : 
          P extends 'ZK_Order'
        ? Array < ZK_OrderGetPayload<S['select'][P]>>  :
        P extends 'ZK_ShippingAddress'
        ? ZK_ShippingAddressGetPayload<S['select'][P]> | null : never
  } 
    : ZK_Customer
  : ZK_Customer


  type ZK_CustomerCountArgs = Merge<
    Omit<ZK_CustomerFindManyArgs, 'select' | 'include'> & {
      select?: ZK_CustomerCountAggregateInputType | true
    }
  >

  export interface ZK_CustomerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_Customer that matches the filter.
     * @param {ZK_CustomerFindUniqueArgs} args - Arguments to find a ZK_Customer
     * @example
     * // Get one ZK_Customer
     * const zK_Customer = await prisma.zK_Customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_Customer'> extends True ? CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer>, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T>>> : CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer | null >, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T> | null >>

    /**
     * Find the first ZK_Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CustomerFindFirstArgs} args - Arguments to find a ZK_Customer
     * @example
     * // Get one ZK_Customer
     * const zK_Customer = await prisma.zK_Customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_Customer'> extends True ? CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer>, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T>>> : CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer | null >, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T> | null >>

    /**
     * Find zero or more ZK_Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_Customers
     * const zK_Customers = await prisma.zK_Customer.findMany()
     * 
     * // Get first 10 ZK_Customers
     * const zK_Customers = await prisma.zK_Customer.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zK_CustomerWithZkcidOnly = await prisma.zK_Customer.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZK_CustomerFindManyArgs>(
      args?: SelectSubset<T, ZK_CustomerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_Customer>>, PrismaPromise<Array<ZK_CustomerGetPayload<T>>>>

    /**
     * Create a ZK_Customer.
     * @param {ZK_CustomerCreateArgs} args - Arguments to create a ZK_Customer.
     * @example
     * // Create one ZK_Customer
     * const ZK_Customer = await prisma.zK_Customer.create({
     *   data: {
     *     // ... data to create a ZK_Customer
     *   }
     * })
     * 
    **/
    create<T extends ZK_CustomerCreateArgs>(
      args: SelectSubset<T, ZK_CustomerCreateArgs>
    ): CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer>, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T>>>

    /**
     * Create many ZK_Customers.
     *     @param {ZK_CustomerCreateManyArgs} args - Arguments to create many ZK_Customers.
     *     @example
     *     // Create many ZK_Customers
     *     const zK_Customer = await prisma.zK_Customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_CustomerCreateManyArgs>(
      args?: SelectSubset<T, ZK_CustomerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_Customer.
     * @param {ZK_CustomerDeleteArgs} args - Arguments to delete one ZK_Customer.
     * @example
     * // Delete one ZK_Customer
     * const ZK_Customer = await prisma.zK_Customer.delete({
     *   where: {
     *     // ... filter to delete one ZK_Customer
     *   }
     * })
     * 
    **/
    delete<T extends ZK_CustomerDeleteArgs>(
      args: SelectSubset<T, ZK_CustomerDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer>, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T>>>

    /**
     * Update one ZK_Customer.
     * @param {ZK_CustomerUpdateArgs} args - Arguments to update one ZK_Customer.
     * @example
     * // Update one ZK_Customer
     * const zK_Customer = await prisma.zK_Customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_CustomerUpdateArgs>(
      args: SelectSubset<T, ZK_CustomerUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer>, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T>>>

    /**
     * Delete zero or more ZK_Customers.
     * @param {ZK_CustomerDeleteManyArgs} args - Arguments to filter ZK_Customers to delete.
     * @example
     * // Delete a few ZK_Customers
     * const { count } = await prisma.zK_Customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_CustomerDeleteManyArgs>(
      args?: SelectSubset<T, ZK_CustomerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_Customers
     * const zK_Customer = await prisma.zK_Customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_CustomerUpdateManyArgs>(
      args: SelectSubset<T, ZK_CustomerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_Customer.
     * @param {ZK_CustomerUpsertArgs} args - Arguments to update or create a ZK_Customer.
     * @example
     * // Update or create a ZK_Customer
     * const zK_Customer = await prisma.zK_Customer.upsert({
     *   create: {
     *     // ... data to create a ZK_Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_Customer we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_CustomerUpsertArgs>(
      args: SelectSubset<T, ZK_CustomerUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer>, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T>>>

    /**
     * Count the number of ZK_Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CustomerCountArgs} args - Arguments to filter ZK_Customers to count.
     * @example
     * // Count the number of ZK_Customers
     * const count = await prisma.zK_Customer.count({
     *   where: {
     *     // ... the filter for the ZK_Customers we want to count
     *   }
     * })
    **/
    count<T extends ZK_CustomerCountArgs>(
      args?: Subset<T, ZK_CustomerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_CustomerAggregateArgs>(args: Subset<T, ZK_CustomerAggregateArgs>): PrismaPromise<GetZK_CustomerAggregateType<T>>

    /**
     * Group by ZK_Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_CustomerGroupByArgs['orderBy'] }
        : { orderBy?: ZK_CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_CustomerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_CustomerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ZK_Order<T extends ZK_OrderFindManyArgs = {}>(args?: Subset<T, ZK_OrderFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ZK_Order>>, PrismaPromise<Array<ZK_OrderGetPayload<T>>>>;

    ZK_ShippingAddress<T extends ZK_ShippingAddressArgs = {}>(args?: Subset<T, ZK_ShippingAddressArgs>): CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress | null >, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_Customer findUnique
   */
  export type ZK_CustomerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
    /**
     * Throw an Error if a ZK_Customer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Customer to fetch.
     * 
    **/
    where: ZK_CustomerWhereUniqueInput
  }


  /**
   * ZK_Customer findFirst
   */
  export type ZK_CustomerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
    /**
     * Throw an Error if a ZK_Customer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Customer to fetch.
     * 
    **/
    where?: ZK_CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_CustomerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_Customers.
     * 
    **/
    cursor?: ZK_CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Customers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_Customers.
     * 
    **/
    distinct?: Enumerable<ZK_CustomerScalarFieldEnum>
  }


  /**
   * ZK_Customer findMany
   */
  export type ZK_CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
    /**
     * Filter, which ZK_Customers to fetch.
     * 
    **/
    where?: ZK_CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Customers to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_CustomerOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_Customers.
     * 
    **/
    cursor?: ZK_CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Customers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Customers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_CustomerScalarFieldEnum>
  }


  /**
   * ZK_Customer create
   */
  export type ZK_CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
    /**
     * The data needed to create a ZK_Customer.
     * 
    **/
    data: XOR<ZK_CustomerCreateInput, ZK_CustomerUncheckedCreateInput>
  }


  /**
   * ZK_Customer createMany
   */
  export type ZK_CustomerCreateManyArgs = {
    data: Enumerable<ZK_CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_Customer update
   */
  export type ZK_CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
    /**
     * The data needed to update a ZK_Customer.
     * 
    **/
    data: XOR<ZK_CustomerUpdateInput, ZK_CustomerUncheckedUpdateInput>
    /**
     * Choose, which ZK_Customer to update.
     * 
    **/
    where: ZK_CustomerWhereUniqueInput
  }


  /**
   * ZK_Customer updateMany
   */
  export type ZK_CustomerUpdateManyArgs = {
    data: XOR<ZK_CustomerUpdateManyMutationInput, ZK_CustomerUncheckedUpdateManyInput>
    where?: ZK_CustomerWhereInput
  }


  /**
   * ZK_Customer upsert
   */
  export type ZK_CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
    /**
     * The filter to search for the ZK_Customer to update in case it exists.
     * 
    **/
    where: ZK_CustomerWhereUniqueInput
    /**
     * In case the ZK_Customer found by the `where` argument doesn't exist, create a new ZK_Customer with this data.
     * 
    **/
    create: XOR<ZK_CustomerCreateInput, ZK_CustomerUncheckedCreateInput>
    /**
     * In case the ZK_Customer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_CustomerUpdateInput, ZK_CustomerUncheckedUpdateInput>
  }


  /**
   * ZK_Customer delete
   */
  export type ZK_CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
    /**
     * Filter which ZK_Customer to delete.
     * 
    **/
    where: ZK_CustomerWhereUniqueInput
  }


  /**
   * ZK_Customer deleteMany
   */
  export type ZK_CustomerDeleteManyArgs = {
    where?: ZK_CustomerWhereInput
  }


  /**
   * ZK_Customer without action
   */
  export type ZK_CustomerArgs = {
    /**
     * Select specific fields to fetch from the ZK_Customer
     * 
    **/
    select?: ZK_CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_CustomerInclude | null
  }



  /**
   * Model ZK_ShippingAddress
   */


  export type AggregateZK_ShippingAddress = {
    _count: ZK_ShippingAddressCountAggregateOutputType | null
    count: ZK_ShippingAddressCountAggregateOutputType | null
    _avg: ZK_ShippingAddressAvgAggregateOutputType | null
    avg: ZK_ShippingAddressAvgAggregateOutputType | null
    _sum: ZK_ShippingAddressSumAggregateOutputType | null
    sum: ZK_ShippingAddressSumAggregateOutputType | null
    _min: ZK_ShippingAddressMinAggregateOutputType | null
    min: ZK_ShippingAddressMinAggregateOutputType | null
    _max: ZK_ShippingAddressMaxAggregateOutputType | null
    max: ZK_ShippingAddressMaxAggregateOutputType | null
  }

  export type ZK_ShippingAddressAvgAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: number | null
    zk_shipping_id: number | null
    zk_pincode: number | null
  }

  export type ZK_ShippingAddressSumAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: bigint | null
    zk_shipping_id: bigint | null
    zk_pincode: number | null
  }

  export type ZK_ShippingAddressMinAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: bigint | null
    zk_shipping_id: bigint | null
    zk_name: string | null
    zk_contact_number: string | null
    zk_addressline_1: string | null
    zk_addressline_2: string | null
    zk_state: string | null
    zk_country: string | null
    zk_pincode: number | null
  }

  export type ZK_ShippingAddressMaxAggregateOutputType = {
    zkcid: number | null
    zk_customer_id: bigint | null
    zk_shipping_id: bigint | null
    zk_name: string | null
    zk_contact_number: string | null
    zk_addressline_1: string | null
    zk_addressline_2: string | null
    zk_state: string | null
    zk_country: string | null
    zk_pincode: number | null
  }

  export type ZK_ShippingAddressCountAggregateOutputType = {
    zkcid: number
    zk_customer_id: number
    zk_shipping_id: number
    zk_name: number
    zk_contact_number: number
    zk_addressline_1: number
    zk_addressline_2: number
    zk_state: number
    zk_country: number
    zk_pincode: number
    _all: number
  }


  export type ZK_ShippingAddressAvgAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_shipping_id?: true
    zk_pincode?: true
  }

  export type ZK_ShippingAddressSumAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_shipping_id?: true
    zk_pincode?: true
  }

  export type ZK_ShippingAddressMinAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_shipping_id?: true
    zk_name?: true
    zk_contact_number?: true
    zk_addressline_1?: true
    zk_addressline_2?: true
    zk_state?: true
    zk_country?: true
    zk_pincode?: true
  }

  export type ZK_ShippingAddressMaxAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_shipping_id?: true
    zk_name?: true
    zk_contact_number?: true
    zk_addressline_1?: true
    zk_addressline_2?: true
    zk_state?: true
    zk_country?: true
    zk_pincode?: true
  }

  export type ZK_ShippingAddressCountAggregateInputType = {
    zkcid?: true
    zk_customer_id?: true
    zk_shipping_id?: true
    zk_name?: true
    zk_contact_number?: true
    zk_addressline_1?: true
    zk_addressline_2?: true
    zk_state?: true
    zk_country?: true
    zk_pincode?: true
    _all?: true
  }

  export type ZK_ShippingAddressAggregateArgs = {
    /**
     * Filter which ZK_ShippingAddress to aggregate.
     * 
    **/
    where?: ZK_ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_ShippingAddresses to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_ShippingAddressOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_ShippingAddresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_ShippingAddresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_ShippingAddresses
    **/
    _count?: true | ZK_ShippingAddressCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_ShippingAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_ShippingAddressAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_ShippingAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_ShippingAddressSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_ShippingAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_ShippingAddressMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_ShippingAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_ShippingAddressMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_ShippingAddressMaxAggregateInputType
  }

  export type GetZK_ShippingAddressAggregateType<T extends ZK_ShippingAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_ShippingAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_ShippingAddress[P]>
      : GetScalarType<T[P], AggregateZK_ShippingAddress[P]>
  }


    
    
  export type ZK_ShippingAddressGroupByArgs = {
    where?: ZK_ShippingAddressWhereInput
    orderBy?: Enumerable<ZK_ShippingAddressOrderByInput>
    by: Array<ZK_ShippingAddressScalarFieldEnum>
    having?: ZK_ShippingAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_ShippingAddressCountAggregateInputType | true
    _avg?: ZK_ShippingAddressAvgAggregateInputType
    _sum?: ZK_ShippingAddressSumAggregateInputType
    _min?: ZK_ShippingAddressMinAggregateInputType
    _max?: ZK_ShippingAddressMaxAggregateInputType
  }


  export type ZK_ShippingAddressGroupByOutputType = {
    zkcid: number
    zk_customer_id: bigint
    zk_shipping_id: bigint
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
    _count: ZK_ShippingAddressCountAggregateOutputType | null
    _avg: ZK_ShippingAddressAvgAggregateOutputType | null
    _sum: ZK_ShippingAddressSumAggregateOutputType | null
    _min: ZK_ShippingAddressMinAggregateOutputType | null
    _max: ZK_ShippingAddressMaxAggregateOutputType | null
  }

  type GetZK_ShippingAddressGroupByPayload<T extends ZK_ShippingAddressGroupByArgs> = Promise<
    Array<
      PickArray<ZK_ShippingAddressGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_ShippingAddressGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_ShippingAddressGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_ShippingAddressGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_ShippingAddressSelect = {
    zkcid?: boolean
    zk_customer_id?: boolean
    zk_shipping_id?: boolean
    zk_name?: boolean
    zk_contact_number?: boolean
    zk_addressline_1?: boolean
    zk_addressline_2?: boolean
    zk_state?: boolean
    zk_country?: boolean
    zk_pincode?: boolean
    ZK_Order?: boolean | ZK_OrderArgs
    ZK_Customer?: boolean | ZK_CustomerArgs
  }

  export type ZK_ShippingAddressInclude = {
    ZK_Order?: boolean | ZK_OrderArgs
    ZK_Customer?: boolean | ZK_CustomerArgs
  }

  export type ZK_ShippingAddressGetPayload<
    S extends boolean | null | undefined | ZK_ShippingAddressArgs,
    U = keyof S
      > = S extends true
        ? ZK_ShippingAddress
    : S extends undefined
    ? never
    : S extends ZK_ShippingAddressArgs | ZK_ShippingAddressFindManyArgs
    ?'include' extends U
    ? ZK_ShippingAddress  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ZK_Order'
        ? ZK_OrderGetPayload<S['include'][P]> | null :
        P extends 'ZK_Customer'
        ? ZK_CustomerGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_ShippingAddress ?ZK_ShippingAddress [P]
  : 
          P extends 'ZK_Order'
        ? ZK_OrderGetPayload<S['select'][P]> | null :
        P extends 'ZK_Customer'
        ? ZK_CustomerGetPayload<S['select'][P]> : never
  } 
    : ZK_ShippingAddress
  : ZK_ShippingAddress


  type ZK_ShippingAddressCountArgs = Merge<
    Omit<ZK_ShippingAddressFindManyArgs, 'select' | 'include'> & {
      select?: ZK_ShippingAddressCountAggregateInputType | true
    }
  >

  export interface ZK_ShippingAddressDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_ShippingAddress that matches the filter.
     * @param {ZK_ShippingAddressFindUniqueArgs} args - Arguments to find a ZK_ShippingAddress
     * @example
     * // Get one ZK_ShippingAddress
     * const zK_ShippingAddress = await prisma.zK_ShippingAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_ShippingAddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_ShippingAddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_ShippingAddress'> extends True ? CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress>, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T>>> : CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress | null >, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T> | null >>

    /**
     * Find the first ZK_ShippingAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_ShippingAddressFindFirstArgs} args - Arguments to find a ZK_ShippingAddress
     * @example
     * // Get one ZK_ShippingAddress
     * const zK_ShippingAddress = await prisma.zK_ShippingAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_ShippingAddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_ShippingAddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_ShippingAddress'> extends True ? CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress>, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T>>> : CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress | null >, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T> | null >>

    /**
     * Find zero or more ZK_ShippingAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_ShippingAddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_ShippingAddresses
     * const zK_ShippingAddresses = await prisma.zK_ShippingAddress.findMany()
     * 
     * // Get first 10 ZK_ShippingAddresses
     * const zK_ShippingAddresses = await prisma.zK_ShippingAddress.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zK_ShippingAddressWithZkcidOnly = await prisma.zK_ShippingAddress.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZK_ShippingAddressFindManyArgs>(
      args?: SelectSubset<T, ZK_ShippingAddressFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_ShippingAddress>>, PrismaPromise<Array<ZK_ShippingAddressGetPayload<T>>>>

    /**
     * Create a ZK_ShippingAddress.
     * @param {ZK_ShippingAddressCreateArgs} args - Arguments to create a ZK_ShippingAddress.
     * @example
     * // Create one ZK_ShippingAddress
     * const ZK_ShippingAddress = await prisma.zK_ShippingAddress.create({
     *   data: {
     *     // ... data to create a ZK_ShippingAddress
     *   }
     * })
     * 
    **/
    create<T extends ZK_ShippingAddressCreateArgs>(
      args: SelectSubset<T, ZK_ShippingAddressCreateArgs>
    ): CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress>, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T>>>

    /**
     * Create many ZK_ShippingAddresses.
     *     @param {ZK_ShippingAddressCreateManyArgs} args - Arguments to create many ZK_ShippingAddresses.
     *     @example
     *     // Create many ZK_ShippingAddresses
     *     const zK_ShippingAddress = await prisma.zK_ShippingAddress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_ShippingAddressCreateManyArgs>(
      args?: SelectSubset<T, ZK_ShippingAddressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_ShippingAddress.
     * @param {ZK_ShippingAddressDeleteArgs} args - Arguments to delete one ZK_ShippingAddress.
     * @example
     * // Delete one ZK_ShippingAddress
     * const ZK_ShippingAddress = await prisma.zK_ShippingAddress.delete({
     *   where: {
     *     // ... filter to delete one ZK_ShippingAddress
     *   }
     * })
     * 
    **/
    delete<T extends ZK_ShippingAddressDeleteArgs>(
      args: SelectSubset<T, ZK_ShippingAddressDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress>, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T>>>

    /**
     * Update one ZK_ShippingAddress.
     * @param {ZK_ShippingAddressUpdateArgs} args - Arguments to update one ZK_ShippingAddress.
     * @example
     * // Update one ZK_ShippingAddress
     * const zK_ShippingAddress = await prisma.zK_ShippingAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_ShippingAddressUpdateArgs>(
      args: SelectSubset<T, ZK_ShippingAddressUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress>, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T>>>

    /**
     * Delete zero or more ZK_ShippingAddresses.
     * @param {ZK_ShippingAddressDeleteManyArgs} args - Arguments to filter ZK_ShippingAddresses to delete.
     * @example
     * // Delete a few ZK_ShippingAddresses
     * const { count } = await prisma.zK_ShippingAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_ShippingAddressDeleteManyArgs>(
      args?: SelectSubset<T, ZK_ShippingAddressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_ShippingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_ShippingAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_ShippingAddresses
     * const zK_ShippingAddress = await prisma.zK_ShippingAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_ShippingAddressUpdateManyArgs>(
      args: SelectSubset<T, ZK_ShippingAddressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_ShippingAddress.
     * @param {ZK_ShippingAddressUpsertArgs} args - Arguments to update or create a ZK_ShippingAddress.
     * @example
     * // Update or create a ZK_ShippingAddress
     * const zK_ShippingAddress = await prisma.zK_ShippingAddress.upsert({
     *   create: {
     *     // ... data to create a ZK_ShippingAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_ShippingAddress we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_ShippingAddressUpsertArgs>(
      args: SelectSubset<T, ZK_ShippingAddressUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress>, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T>>>

    /**
     * Count the number of ZK_ShippingAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_ShippingAddressCountArgs} args - Arguments to filter ZK_ShippingAddresses to count.
     * @example
     * // Count the number of ZK_ShippingAddresses
     * const count = await prisma.zK_ShippingAddress.count({
     *   where: {
     *     // ... the filter for the ZK_ShippingAddresses we want to count
     *   }
     * })
    **/
    count<T extends ZK_ShippingAddressCountArgs>(
      args?: Subset<T, ZK_ShippingAddressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_ShippingAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_ShippingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_ShippingAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_ShippingAddressAggregateArgs>(args: Subset<T, ZK_ShippingAddressAggregateArgs>): PrismaPromise<GetZK_ShippingAddressAggregateType<T>>

    /**
     * Group by ZK_ShippingAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_ShippingAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_ShippingAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_ShippingAddressGroupByArgs['orderBy'] }
        : { orderBy?: ZK_ShippingAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_ShippingAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_ShippingAddressGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_ShippingAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_ShippingAddressClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ZK_Order<T extends ZK_OrderArgs = {}>(args?: Subset<T, ZK_OrderArgs>): CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order | null >, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T> | null >>;

    ZK_Customer<T extends ZK_CustomerArgs = {}>(args?: Subset<T, ZK_CustomerArgs>): CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer | null >, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_ShippingAddress findUnique
   */
  export type ZK_ShippingAddressFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
    /**
     * Throw an Error if a ZK_ShippingAddress can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_ShippingAddress to fetch.
     * 
    **/
    where: ZK_ShippingAddressWhereUniqueInput
  }


  /**
   * ZK_ShippingAddress findFirst
   */
  export type ZK_ShippingAddressFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
    /**
     * Throw an Error if a ZK_ShippingAddress can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_ShippingAddress to fetch.
     * 
    **/
    where?: ZK_ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_ShippingAddresses to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_ShippingAddressOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_ShippingAddresses.
     * 
    **/
    cursor?: ZK_ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_ShippingAddresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_ShippingAddresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_ShippingAddresses.
     * 
    **/
    distinct?: Enumerable<ZK_ShippingAddressScalarFieldEnum>
  }


  /**
   * ZK_ShippingAddress findMany
   */
  export type ZK_ShippingAddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
    /**
     * Filter, which ZK_ShippingAddresses to fetch.
     * 
    **/
    where?: ZK_ShippingAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_ShippingAddresses to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_ShippingAddressOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_ShippingAddresses.
     * 
    **/
    cursor?: ZK_ShippingAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_ShippingAddresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_ShippingAddresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_ShippingAddressScalarFieldEnum>
  }


  /**
   * ZK_ShippingAddress create
   */
  export type ZK_ShippingAddressCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
    /**
     * The data needed to create a ZK_ShippingAddress.
     * 
    **/
    data: XOR<ZK_ShippingAddressCreateInput, ZK_ShippingAddressUncheckedCreateInput>
  }


  /**
   * ZK_ShippingAddress createMany
   */
  export type ZK_ShippingAddressCreateManyArgs = {
    data: Enumerable<ZK_ShippingAddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_ShippingAddress update
   */
  export type ZK_ShippingAddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
    /**
     * The data needed to update a ZK_ShippingAddress.
     * 
    **/
    data: XOR<ZK_ShippingAddressUpdateInput, ZK_ShippingAddressUncheckedUpdateInput>
    /**
     * Choose, which ZK_ShippingAddress to update.
     * 
    **/
    where: ZK_ShippingAddressWhereUniqueInput
  }


  /**
   * ZK_ShippingAddress updateMany
   */
  export type ZK_ShippingAddressUpdateManyArgs = {
    data: XOR<ZK_ShippingAddressUpdateManyMutationInput, ZK_ShippingAddressUncheckedUpdateManyInput>
    where?: ZK_ShippingAddressWhereInput
  }


  /**
   * ZK_ShippingAddress upsert
   */
  export type ZK_ShippingAddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
    /**
     * The filter to search for the ZK_ShippingAddress to update in case it exists.
     * 
    **/
    where: ZK_ShippingAddressWhereUniqueInput
    /**
     * In case the ZK_ShippingAddress found by the `where` argument doesn't exist, create a new ZK_ShippingAddress with this data.
     * 
    **/
    create: XOR<ZK_ShippingAddressCreateInput, ZK_ShippingAddressUncheckedCreateInput>
    /**
     * In case the ZK_ShippingAddress was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_ShippingAddressUpdateInput, ZK_ShippingAddressUncheckedUpdateInput>
  }


  /**
   * ZK_ShippingAddress delete
   */
  export type ZK_ShippingAddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
    /**
     * Filter which ZK_ShippingAddress to delete.
     * 
    **/
    where: ZK_ShippingAddressWhereUniqueInput
  }


  /**
   * ZK_ShippingAddress deleteMany
   */
  export type ZK_ShippingAddressDeleteManyArgs = {
    where?: ZK_ShippingAddressWhereInput
  }


  /**
   * ZK_ShippingAddress without action
   */
  export type ZK_ShippingAddressArgs = {
    /**
     * Select specific fields to fetch from the ZK_ShippingAddress
     * 
    **/
    select?: ZK_ShippingAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_ShippingAddressInclude | null
  }



  /**
   * Model ZK_Order
   */


  export type AggregateZK_Order = {
    _count: ZK_OrderCountAggregateOutputType | null
    count: ZK_OrderCountAggregateOutputType | null
    _avg: ZK_OrderAvgAggregateOutputType | null
    avg: ZK_OrderAvgAggregateOutputType | null
    _sum: ZK_OrderSumAggregateOutputType | null
    sum: ZK_OrderSumAggregateOutputType | null
    _min: ZK_OrderMinAggregateOutputType | null
    min: ZK_OrderMinAggregateOutputType | null
    _max: ZK_OrderMaxAggregateOutputType | null
    max: ZK_OrderMaxAggregateOutputType | null
  }

  export type ZK_OrderAvgAggregateOutputType = {
    zkcid: number | null
    zk_order_id: number | null
    zk_shipping_id: number | null
    zk_order_total_amount: Decimal | null
    zk_order_createby: number | null
    zk_order_customer_id: number | null
  }

  export type ZK_OrderSumAggregateOutputType = {
    zkcid: number | null
    zk_order_id: bigint | null
    zk_shipping_id: bigint | null
    zk_order_total_amount: Decimal | null
    zk_order_createby: number | null
    zk_order_customer_id: bigint | null
  }

  export type ZK_OrderMinAggregateOutputType = {
    zkcid: number | null
    zk_order_id: bigint | null
    zk_order_number: string | null
    zk_shipping_id: bigint | null
    zk_order_description: string | null
    zk_order_total_amount: Decimal | null
    zk_order_createAt: Date | null
    zk_order_updatedAt: Date | null
    zk_order_createby: number | null
    zk_order_customer_id: bigint | null
    zk_order_notes: string | null
    zk_order_termscondition: string | null
  }

  export type ZK_OrderMaxAggregateOutputType = {
    zkcid: number | null
    zk_order_id: bigint | null
    zk_order_number: string | null
    zk_shipping_id: bigint | null
    zk_order_description: string | null
    zk_order_total_amount: Decimal | null
    zk_order_createAt: Date | null
    zk_order_updatedAt: Date | null
    zk_order_createby: number | null
    zk_order_customer_id: bigint | null
    zk_order_notes: string | null
    zk_order_termscondition: string | null
  }

  export type ZK_OrderCountAggregateOutputType = {
    zkcid: number
    zk_order_id: number
    zk_order_number: number
    zk_shipping_id: number
    zk_order_description: number
    zk_order_total_amount: number
    zk_order_total_tax: number
    zk_order_total_discount: number
    zk_order_createAt: number
    zk_order_updatedAt: number
    zk_order_createby: number
    zk_order_customer_id: number
    zk_order_notes: number
    zk_order_termscondition: number
    _all: number
  }


  export type ZK_OrderAvgAggregateInputType = {
    zkcid?: true
    zk_order_id?: true
    zk_shipping_id?: true
    zk_order_total_amount?: true
    zk_order_createby?: true
    zk_order_customer_id?: true
  }

  export type ZK_OrderSumAggregateInputType = {
    zkcid?: true
    zk_order_id?: true
    zk_shipping_id?: true
    zk_order_total_amount?: true
    zk_order_createby?: true
    zk_order_customer_id?: true
  }

  export type ZK_OrderMinAggregateInputType = {
    zkcid?: true
    zk_order_id?: true
    zk_order_number?: true
    zk_shipping_id?: true
    zk_order_description?: true
    zk_order_total_amount?: true
    zk_order_createAt?: true
    zk_order_updatedAt?: true
    zk_order_createby?: true
    zk_order_customer_id?: true
    zk_order_notes?: true
    zk_order_termscondition?: true
  }

  export type ZK_OrderMaxAggregateInputType = {
    zkcid?: true
    zk_order_id?: true
    zk_order_number?: true
    zk_shipping_id?: true
    zk_order_description?: true
    zk_order_total_amount?: true
    zk_order_createAt?: true
    zk_order_updatedAt?: true
    zk_order_createby?: true
    zk_order_customer_id?: true
    zk_order_notes?: true
    zk_order_termscondition?: true
  }

  export type ZK_OrderCountAggregateInputType = {
    zkcid?: true
    zk_order_id?: true
    zk_order_number?: true
    zk_shipping_id?: true
    zk_order_description?: true
    zk_order_total_amount?: true
    zk_order_total_tax?: true
    zk_order_total_discount?: true
    zk_order_createAt?: true
    zk_order_updatedAt?: true
    zk_order_createby?: true
    zk_order_customer_id?: true
    zk_order_notes?: true
    zk_order_termscondition?: true
    _all?: true
  }

  export type ZK_OrderAggregateArgs = {
    /**
     * Filter which ZK_Order to aggregate.
     * 
    **/
    where?: ZK_OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_OrderOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_Orders
    **/
    _count?: true | ZK_OrderCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_OrderAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_OrderSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_OrderMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_OrderMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_OrderMaxAggregateInputType
  }

  export type GetZK_OrderAggregateType<T extends ZK_OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_Order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_Order[P]>
      : GetScalarType<T[P], AggregateZK_Order[P]>
  }


    
    
  export type ZK_OrderGroupByArgs = {
    where?: ZK_OrderWhereInput
    orderBy?: Enumerable<ZK_OrderOrderByInput>
    by: Array<ZK_OrderScalarFieldEnum>
    having?: ZK_OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_OrderCountAggregateInputType | true
    _avg?: ZK_OrderAvgAggregateInputType
    _sum?: ZK_OrderSumAggregateInputType
    _min?: ZK_OrderMinAggregateInputType
    _max?: ZK_OrderMaxAggregateInputType
  }


  export type ZK_OrderGroupByOutputType = {
    zkcid: number
    zk_order_id: bigint
    zk_order_number: string
    zk_shipping_id: bigint
    zk_order_description: string | null
    zk_order_total_amount: Decimal
    zk_order_total_tax: JsonValue
    zk_order_total_discount: JsonValue
    zk_order_createAt: Date
    zk_order_updatedAt: Date
    zk_order_createby: number
    zk_order_customer_id: bigint | null
    zk_order_notes: string
    zk_order_termscondition: string
    _count: ZK_OrderCountAggregateOutputType | null
    _avg: ZK_OrderAvgAggregateOutputType | null
    _sum: ZK_OrderSumAggregateOutputType | null
    _min: ZK_OrderMinAggregateOutputType | null
    _max: ZK_OrderMaxAggregateOutputType | null
  }

  type GetZK_OrderGroupByPayload<T extends ZK_OrderGroupByArgs> = Promise<
    Array<
      PickArray<ZK_OrderGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_OrderGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_OrderGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_OrderGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_OrderSelect = {
    zkcid?: boolean
    zk_order_id?: boolean
    zk_order_number?: boolean
    zk_shipping_id?: boolean
    zk_order_description?: boolean
    zk_order_total_amount?: boolean
    zk_order_total_tax?: boolean
    zk_order_total_discount?: boolean
    zk_order_createAt?: boolean
    zk_order_updatedAt?: boolean
    zk_order_createby?: boolean
    zk_order_customer_id?: boolean
    zk_order_notes?: boolean
    zk_order_termscondition?: boolean
    ZK_Order_Mapping?: boolean | ZK_Order_MappingFindManyArgs
    zk_order_customer_id_fkey?: boolean | ZK_CustomerArgs
    ZK_ShippingAddress?: boolean | ZK_ShippingAddressArgs
  }

  export type ZK_OrderInclude = {
    ZK_Order_Mapping?: boolean | ZK_Order_MappingFindManyArgs
    zk_order_customer_id_fkey?: boolean | ZK_CustomerArgs
    ZK_ShippingAddress?: boolean | ZK_ShippingAddressArgs
  }

  export type ZK_OrderGetPayload<
    S extends boolean | null | undefined | ZK_OrderArgs,
    U = keyof S
      > = S extends true
        ? ZK_Order
    : S extends undefined
    ? never
    : S extends ZK_OrderArgs | ZK_OrderFindManyArgs
    ?'include' extends U
    ? ZK_Order  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ZK_Order_Mapping'
        ? Array < ZK_Order_MappingGetPayload<S['include'][P]>>  :
        P extends 'zk_order_customer_id_fkey'
        ? ZK_CustomerGetPayload<S['include'][P]> | null :
        P extends 'ZK_ShippingAddress'
        ? ZK_ShippingAddressGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_Order ?ZK_Order [P]
  : 
          P extends 'ZK_Order_Mapping'
        ? Array < ZK_Order_MappingGetPayload<S['select'][P]>>  :
        P extends 'zk_order_customer_id_fkey'
        ? ZK_CustomerGetPayload<S['select'][P]> | null :
        P extends 'ZK_ShippingAddress'
        ? ZK_ShippingAddressGetPayload<S['select'][P]> : never
  } 
    : ZK_Order
  : ZK_Order


  type ZK_OrderCountArgs = Merge<
    Omit<ZK_OrderFindManyArgs, 'select' | 'include'> & {
      select?: ZK_OrderCountAggregateInputType | true
    }
  >

  export interface ZK_OrderDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_Order that matches the filter.
     * @param {ZK_OrderFindUniqueArgs} args - Arguments to find a ZK_Order
     * @example
     * // Get one ZK_Order
     * const zK_Order = await prisma.zK_Order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_Order'> extends True ? CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order>, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T>>> : CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order | null >, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T> | null >>

    /**
     * Find the first ZK_Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_OrderFindFirstArgs} args - Arguments to find a ZK_Order
     * @example
     * // Get one ZK_Order
     * const zK_Order = await prisma.zK_Order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_Order'> extends True ? CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order>, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T>>> : CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order | null >, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T> | null >>

    /**
     * Find zero or more ZK_Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_Orders
     * const zK_Orders = await prisma.zK_Order.findMany()
     * 
     * // Get first 10 ZK_Orders
     * const zK_Orders = await prisma.zK_Order.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zK_OrderWithZkcidOnly = await prisma.zK_Order.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZK_OrderFindManyArgs>(
      args?: SelectSubset<T, ZK_OrderFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_Order>>, PrismaPromise<Array<ZK_OrderGetPayload<T>>>>

    /**
     * Create a ZK_Order.
     * @param {ZK_OrderCreateArgs} args - Arguments to create a ZK_Order.
     * @example
     * // Create one ZK_Order
     * const ZK_Order = await prisma.zK_Order.create({
     *   data: {
     *     // ... data to create a ZK_Order
     *   }
     * })
     * 
    **/
    create<T extends ZK_OrderCreateArgs>(
      args: SelectSubset<T, ZK_OrderCreateArgs>
    ): CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order>, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T>>>

    /**
     * Create many ZK_Orders.
     *     @param {ZK_OrderCreateManyArgs} args - Arguments to create many ZK_Orders.
     *     @example
     *     // Create many ZK_Orders
     *     const zK_Order = await prisma.zK_Order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_OrderCreateManyArgs>(
      args?: SelectSubset<T, ZK_OrderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_Order.
     * @param {ZK_OrderDeleteArgs} args - Arguments to delete one ZK_Order.
     * @example
     * // Delete one ZK_Order
     * const ZK_Order = await prisma.zK_Order.delete({
     *   where: {
     *     // ... filter to delete one ZK_Order
     *   }
     * })
     * 
    **/
    delete<T extends ZK_OrderDeleteArgs>(
      args: SelectSubset<T, ZK_OrderDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order>, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T>>>

    /**
     * Update one ZK_Order.
     * @param {ZK_OrderUpdateArgs} args - Arguments to update one ZK_Order.
     * @example
     * // Update one ZK_Order
     * const zK_Order = await prisma.zK_Order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_OrderUpdateArgs>(
      args: SelectSubset<T, ZK_OrderUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order>, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T>>>

    /**
     * Delete zero or more ZK_Orders.
     * @param {ZK_OrderDeleteManyArgs} args - Arguments to filter ZK_Orders to delete.
     * @example
     * // Delete a few ZK_Orders
     * const { count } = await prisma.zK_Order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_OrderDeleteManyArgs>(
      args?: SelectSubset<T, ZK_OrderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_Orders
     * const zK_Order = await prisma.zK_Order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_OrderUpdateManyArgs>(
      args: SelectSubset<T, ZK_OrderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_Order.
     * @param {ZK_OrderUpsertArgs} args - Arguments to update or create a ZK_Order.
     * @example
     * // Update or create a ZK_Order
     * const zK_Order = await prisma.zK_Order.upsert({
     *   create: {
     *     // ... data to create a ZK_Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_Order we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_OrderUpsertArgs>(
      args: SelectSubset<T, ZK_OrderUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order>, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T>>>

    /**
     * Count the number of ZK_Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_OrderCountArgs} args - Arguments to filter ZK_Orders to count.
     * @example
     * // Count the number of ZK_Orders
     * const count = await prisma.zK_Order.count({
     *   where: {
     *     // ... the filter for the ZK_Orders we want to count
     *   }
     * })
    **/
    count<T extends ZK_OrderCountArgs>(
      args?: Subset<T, ZK_OrderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_OrderAggregateArgs>(args: Subset<T, ZK_OrderAggregateArgs>): PrismaPromise<GetZK_OrderAggregateType<T>>

    /**
     * Group by ZK_Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_OrderGroupByArgs['orderBy'] }
        : { orderBy?: ZK_OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_OrderGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_OrderClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ZK_Order_Mapping<T extends ZK_Order_MappingFindManyArgs = {}>(args?: Subset<T, ZK_Order_MappingFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ZK_Order_Mapping>>, PrismaPromise<Array<ZK_Order_MappingGetPayload<T>>>>;

    zk_order_customer_id_fkey<T extends ZK_CustomerArgs = {}>(args?: Subset<T, ZK_CustomerArgs>): CheckSelect<T, Prisma__ZK_CustomerClient<ZK_Customer | null >, Prisma__ZK_CustomerClient<ZK_CustomerGetPayload<T> | null >>;

    ZK_ShippingAddress<T extends ZK_ShippingAddressArgs = {}>(args?: Subset<T, ZK_ShippingAddressArgs>): CheckSelect<T, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddress | null >, Prisma__ZK_ShippingAddressClient<ZK_ShippingAddressGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_Order findUnique
   */
  export type ZK_OrderFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
    /**
     * Throw an Error if a ZK_Order can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Order to fetch.
     * 
    **/
    where: ZK_OrderWhereUniqueInput
  }


  /**
   * ZK_Order findFirst
   */
  export type ZK_OrderFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
    /**
     * Throw an Error if a ZK_Order can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Order to fetch.
     * 
    **/
    where?: ZK_OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_OrderOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_Orders.
     * 
    **/
    cursor?: ZK_OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_Orders.
     * 
    **/
    distinct?: Enumerable<ZK_OrderScalarFieldEnum>
  }


  /**
   * ZK_Order findMany
   */
  export type ZK_OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
    /**
     * Filter, which ZK_Orders to fetch.
     * 
    **/
    where?: ZK_OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_OrderOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_Orders.
     * 
    **/
    cursor?: ZK_OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_OrderScalarFieldEnum>
  }


  /**
   * ZK_Order create
   */
  export type ZK_OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
    /**
     * The data needed to create a ZK_Order.
     * 
    **/
    data: XOR<ZK_OrderCreateInput, ZK_OrderUncheckedCreateInput>
  }


  /**
   * ZK_Order createMany
   */
  export type ZK_OrderCreateManyArgs = {
    data: Enumerable<ZK_OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_Order update
   */
  export type ZK_OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
    /**
     * The data needed to update a ZK_Order.
     * 
    **/
    data: XOR<ZK_OrderUpdateInput, ZK_OrderUncheckedUpdateInput>
    /**
     * Choose, which ZK_Order to update.
     * 
    **/
    where: ZK_OrderWhereUniqueInput
  }


  /**
   * ZK_Order updateMany
   */
  export type ZK_OrderUpdateManyArgs = {
    data: XOR<ZK_OrderUpdateManyMutationInput, ZK_OrderUncheckedUpdateManyInput>
    where?: ZK_OrderWhereInput
  }


  /**
   * ZK_Order upsert
   */
  export type ZK_OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
    /**
     * The filter to search for the ZK_Order to update in case it exists.
     * 
    **/
    where: ZK_OrderWhereUniqueInput
    /**
     * In case the ZK_Order found by the `where` argument doesn't exist, create a new ZK_Order with this data.
     * 
    **/
    create: XOR<ZK_OrderCreateInput, ZK_OrderUncheckedCreateInput>
    /**
     * In case the ZK_Order was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_OrderUpdateInput, ZK_OrderUncheckedUpdateInput>
  }


  /**
   * ZK_Order delete
   */
  export type ZK_OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
    /**
     * Filter which ZK_Order to delete.
     * 
    **/
    where: ZK_OrderWhereUniqueInput
  }


  /**
   * ZK_Order deleteMany
   */
  export type ZK_OrderDeleteManyArgs = {
    where?: ZK_OrderWhereInput
  }


  /**
   * ZK_Order without action
   */
  export type ZK_OrderArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order
     * 
    **/
    select?: ZK_OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_OrderInclude | null
  }



  /**
   * Model ZK_Order_Mapping
   */


  export type AggregateZK_Order_Mapping = {
    _count: ZK_Order_MappingCountAggregateOutputType | null
    count: ZK_Order_MappingCountAggregateOutputType | null
    _avg: ZK_Order_MappingAvgAggregateOutputType | null
    avg: ZK_Order_MappingAvgAggregateOutputType | null
    _sum: ZK_Order_MappingSumAggregateOutputType | null
    sum: ZK_Order_MappingSumAggregateOutputType | null
    _min: ZK_Order_MappingMinAggregateOutputType | null
    min: ZK_Order_MappingMinAggregateOutputType | null
    _max: ZK_Order_MappingMaxAggregateOutputType | null
    max: ZK_Order_MappingMaxAggregateOutputType | null
  }

  export type ZK_Order_MappingAvgAggregateOutputType = {
    zk_order_mapping_id: number | null
    zk_order_id: number | null
    zk_product_id: number | null
    zk_product_quantity: number | null
    zk_product_selling_price: Decimal | null
    zk_product_cost_price: Decimal | null
  }

  export type ZK_Order_MappingSumAggregateOutputType = {
    zk_order_mapping_id: bigint | null
    zk_order_id: bigint | null
    zk_product_id: bigint | null
    zk_product_quantity: number | null
    zk_product_selling_price: Decimal | null
    zk_product_cost_price: Decimal | null
  }

  export type ZK_Order_MappingMinAggregateOutputType = {
    zk_order_mapping_id: bigint | null
    zk_order_id: bigint | null
    zk_product_id: bigint | null
    zk_product_quantity: number | null
    zk_product_selling_price: Decimal | null
    zk_product_cost_price: Decimal | null
  }

  export type ZK_Order_MappingMaxAggregateOutputType = {
    zk_order_mapping_id: bigint | null
    zk_order_id: bigint | null
    zk_product_id: bigint | null
    zk_product_quantity: number | null
    zk_product_selling_price: Decimal | null
    zk_product_cost_price: Decimal | null
  }

  export type ZK_Order_MappingCountAggregateOutputType = {
    zk_order_mapping_id: number
    zk_order_id: number
    zk_product_id: number
    zk_product_quantity: number
    zk_product_selling_price: number
    zk_product_cost_price: number
    _all: number
  }


  export type ZK_Order_MappingAvgAggregateInputType = {
    zk_order_mapping_id?: true
    zk_order_id?: true
    zk_product_id?: true
    zk_product_quantity?: true
    zk_product_selling_price?: true
    zk_product_cost_price?: true
  }

  export type ZK_Order_MappingSumAggregateInputType = {
    zk_order_mapping_id?: true
    zk_order_id?: true
    zk_product_id?: true
    zk_product_quantity?: true
    zk_product_selling_price?: true
    zk_product_cost_price?: true
  }

  export type ZK_Order_MappingMinAggregateInputType = {
    zk_order_mapping_id?: true
    zk_order_id?: true
    zk_product_id?: true
    zk_product_quantity?: true
    zk_product_selling_price?: true
    zk_product_cost_price?: true
  }

  export type ZK_Order_MappingMaxAggregateInputType = {
    zk_order_mapping_id?: true
    zk_order_id?: true
    zk_product_id?: true
    zk_product_quantity?: true
    zk_product_selling_price?: true
    zk_product_cost_price?: true
  }

  export type ZK_Order_MappingCountAggregateInputType = {
    zk_order_mapping_id?: true
    zk_order_id?: true
    zk_product_id?: true
    zk_product_quantity?: true
    zk_product_selling_price?: true
    zk_product_cost_price?: true
    _all?: true
  }

  export type ZK_Order_MappingAggregateArgs = {
    /**
     * Filter which ZK_Order_Mapping to aggregate.
     * 
    **/
    where?: ZK_Order_MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Order_Mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_Order_MappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_Order_MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Order_Mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Order_Mappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_Order_Mappings
    **/
    _count?: true | ZK_Order_MappingCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_Order_MappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_Order_MappingAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_Order_MappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_Order_MappingSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_Order_MappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_Order_MappingMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_Order_MappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_Order_MappingMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_Order_MappingMaxAggregateInputType
  }

  export type GetZK_Order_MappingAggregateType<T extends ZK_Order_MappingAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_Order_Mapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_Order_Mapping[P]>
      : GetScalarType<T[P], AggregateZK_Order_Mapping[P]>
  }


    
    
  export type ZK_Order_MappingGroupByArgs = {
    where?: ZK_Order_MappingWhereInput
    orderBy?: Enumerable<ZK_Order_MappingOrderByInput>
    by: Array<ZK_Order_MappingScalarFieldEnum>
    having?: ZK_Order_MappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_Order_MappingCountAggregateInputType | true
    _avg?: ZK_Order_MappingAvgAggregateInputType
    _sum?: ZK_Order_MappingSumAggregateInputType
    _min?: ZK_Order_MappingMinAggregateInputType
    _max?: ZK_Order_MappingMaxAggregateInputType
  }


  export type ZK_Order_MappingGroupByOutputType = {
    zk_order_mapping_id: bigint
    zk_order_id: bigint
    zk_product_id: bigint
    zk_product_quantity: number
    zk_product_selling_price: Decimal
    zk_product_cost_price: Decimal
    _count: ZK_Order_MappingCountAggregateOutputType | null
    _avg: ZK_Order_MappingAvgAggregateOutputType | null
    _sum: ZK_Order_MappingSumAggregateOutputType | null
    _min: ZK_Order_MappingMinAggregateOutputType | null
    _max: ZK_Order_MappingMaxAggregateOutputType | null
  }

  type GetZK_Order_MappingGroupByPayload<T extends ZK_Order_MappingGroupByArgs> = Promise<
    Array<
      PickArray<ZK_Order_MappingGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_Order_MappingGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_Order_MappingGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_Order_MappingGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_Order_MappingSelect = {
    zk_order_mapping_id?: boolean
    zk_order_id?: boolean
    zk_product_id?: boolean
    zk_product_quantity?: boolean
    zk_product_selling_price?: boolean
    zk_product_cost_price?: boolean
    zk_order_mapping_id_fkey?: boolean | ZK_OrderArgs
  }

  export type ZK_Order_MappingInclude = {
    zk_order_mapping_id_fkey?: boolean | ZK_OrderArgs
  }

  export type ZK_Order_MappingGetPayload<
    S extends boolean | null | undefined | ZK_Order_MappingArgs,
    U = keyof S
      > = S extends true
        ? ZK_Order_Mapping
    : S extends undefined
    ? never
    : S extends ZK_Order_MappingArgs | ZK_Order_MappingFindManyArgs
    ?'include' extends U
    ? ZK_Order_Mapping  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'zk_order_mapping_id_fkey'
        ? ZK_OrderGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_Order_Mapping ?ZK_Order_Mapping [P]
  : 
          P extends 'zk_order_mapping_id_fkey'
        ? ZK_OrderGetPayload<S['select'][P]> : never
  } 
    : ZK_Order_Mapping
  : ZK_Order_Mapping


  type ZK_Order_MappingCountArgs = Merge<
    Omit<ZK_Order_MappingFindManyArgs, 'select' | 'include'> & {
      select?: ZK_Order_MappingCountAggregateInputType | true
    }
  >

  export interface ZK_Order_MappingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_Order_Mapping that matches the filter.
     * @param {ZK_Order_MappingFindUniqueArgs} args - Arguments to find a ZK_Order_Mapping
     * @example
     * // Get one ZK_Order_Mapping
     * const zK_Order_Mapping = await prisma.zK_Order_Mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_Order_MappingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_Order_MappingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_Order_Mapping'> extends True ? CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping>, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T>>> : CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping | null >, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T> | null >>

    /**
     * Find the first ZK_Order_Mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Order_MappingFindFirstArgs} args - Arguments to find a ZK_Order_Mapping
     * @example
     * // Get one ZK_Order_Mapping
     * const zK_Order_Mapping = await prisma.zK_Order_Mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_Order_MappingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_Order_MappingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_Order_Mapping'> extends True ? CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping>, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T>>> : CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping | null >, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T> | null >>

    /**
     * Find zero or more ZK_Order_Mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Order_MappingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_Order_Mappings
     * const zK_Order_Mappings = await prisma.zK_Order_Mapping.findMany()
     * 
     * // Get first 10 ZK_Order_Mappings
     * const zK_Order_Mappings = await prisma.zK_Order_Mapping.findMany({ take: 10 })
     * 
     * // Only select the `zk_order_mapping_id`
     * const zK_Order_MappingWithZk_order_mapping_idOnly = await prisma.zK_Order_Mapping.findMany({ select: { zk_order_mapping_id: true } })
     * 
    **/
    findMany<T extends ZK_Order_MappingFindManyArgs>(
      args?: SelectSubset<T, ZK_Order_MappingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_Order_Mapping>>, PrismaPromise<Array<ZK_Order_MappingGetPayload<T>>>>

    /**
     * Create a ZK_Order_Mapping.
     * @param {ZK_Order_MappingCreateArgs} args - Arguments to create a ZK_Order_Mapping.
     * @example
     * // Create one ZK_Order_Mapping
     * const ZK_Order_Mapping = await prisma.zK_Order_Mapping.create({
     *   data: {
     *     // ... data to create a ZK_Order_Mapping
     *   }
     * })
     * 
    **/
    create<T extends ZK_Order_MappingCreateArgs>(
      args: SelectSubset<T, ZK_Order_MappingCreateArgs>
    ): CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping>, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T>>>

    /**
     * Create many ZK_Order_Mappings.
     *     @param {ZK_Order_MappingCreateManyArgs} args - Arguments to create many ZK_Order_Mappings.
     *     @example
     *     // Create many ZK_Order_Mappings
     *     const zK_Order_Mapping = await prisma.zK_Order_Mapping.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_Order_MappingCreateManyArgs>(
      args?: SelectSubset<T, ZK_Order_MappingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_Order_Mapping.
     * @param {ZK_Order_MappingDeleteArgs} args - Arguments to delete one ZK_Order_Mapping.
     * @example
     * // Delete one ZK_Order_Mapping
     * const ZK_Order_Mapping = await prisma.zK_Order_Mapping.delete({
     *   where: {
     *     // ... filter to delete one ZK_Order_Mapping
     *   }
     * })
     * 
    **/
    delete<T extends ZK_Order_MappingDeleteArgs>(
      args: SelectSubset<T, ZK_Order_MappingDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping>, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T>>>

    /**
     * Update one ZK_Order_Mapping.
     * @param {ZK_Order_MappingUpdateArgs} args - Arguments to update one ZK_Order_Mapping.
     * @example
     * // Update one ZK_Order_Mapping
     * const zK_Order_Mapping = await prisma.zK_Order_Mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_Order_MappingUpdateArgs>(
      args: SelectSubset<T, ZK_Order_MappingUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping>, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T>>>

    /**
     * Delete zero or more ZK_Order_Mappings.
     * @param {ZK_Order_MappingDeleteManyArgs} args - Arguments to filter ZK_Order_Mappings to delete.
     * @example
     * // Delete a few ZK_Order_Mappings
     * const { count } = await prisma.zK_Order_Mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_Order_MappingDeleteManyArgs>(
      args?: SelectSubset<T, ZK_Order_MappingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_Order_Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Order_MappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_Order_Mappings
     * const zK_Order_Mapping = await prisma.zK_Order_Mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_Order_MappingUpdateManyArgs>(
      args: SelectSubset<T, ZK_Order_MappingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_Order_Mapping.
     * @param {ZK_Order_MappingUpsertArgs} args - Arguments to update or create a ZK_Order_Mapping.
     * @example
     * // Update or create a ZK_Order_Mapping
     * const zK_Order_Mapping = await prisma.zK_Order_Mapping.upsert({
     *   create: {
     *     // ... data to create a ZK_Order_Mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_Order_Mapping we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_Order_MappingUpsertArgs>(
      args: SelectSubset<T, ZK_Order_MappingUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_Order_MappingClient<ZK_Order_Mapping>, Prisma__ZK_Order_MappingClient<ZK_Order_MappingGetPayload<T>>>

    /**
     * Count the number of ZK_Order_Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Order_MappingCountArgs} args - Arguments to filter ZK_Order_Mappings to count.
     * @example
     * // Count the number of ZK_Order_Mappings
     * const count = await prisma.zK_Order_Mapping.count({
     *   where: {
     *     // ... the filter for the ZK_Order_Mappings we want to count
     *   }
     * })
    **/
    count<T extends ZK_Order_MappingCountArgs>(
      args?: Subset<T, ZK_Order_MappingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_Order_MappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_Order_Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Order_MappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_Order_MappingAggregateArgs>(args: Subset<T, ZK_Order_MappingAggregateArgs>): PrismaPromise<GetZK_Order_MappingAggregateType<T>>

    /**
     * Group by ZK_Order_Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Order_MappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_Order_MappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_Order_MappingGroupByArgs['orderBy'] }
        : { orderBy?: ZK_Order_MappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_Order_MappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_Order_MappingGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_Order_Mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_Order_MappingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    zk_order_mapping_id_fkey<T extends ZK_OrderArgs = {}>(args?: Subset<T, ZK_OrderArgs>): CheckSelect<T, Prisma__ZK_OrderClient<ZK_Order | null >, Prisma__ZK_OrderClient<ZK_OrderGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_Order_Mapping findUnique
   */
  export type ZK_Order_MappingFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
    /**
     * Throw an Error if a ZK_Order_Mapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Order_Mapping to fetch.
     * 
    **/
    where: ZK_Order_MappingWhereUniqueInput
  }


  /**
   * ZK_Order_Mapping findFirst
   */
  export type ZK_Order_MappingFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
    /**
     * Throw an Error if a ZK_Order_Mapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Order_Mapping to fetch.
     * 
    **/
    where?: ZK_Order_MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Order_Mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_Order_MappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_Order_Mappings.
     * 
    **/
    cursor?: ZK_Order_MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Order_Mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Order_Mappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_Order_Mappings.
     * 
    **/
    distinct?: Enumerable<ZK_Order_MappingScalarFieldEnum>
  }


  /**
   * ZK_Order_Mapping findMany
   */
  export type ZK_Order_MappingFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
    /**
     * Filter, which ZK_Order_Mappings to fetch.
     * 
    **/
    where?: ZK_Order_MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Order_Mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_Order_MappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_Order_Mappings.
     * 
    **/
    cursor?: ZK_Order_MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Order_Mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Order_Mappings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_Order_MappingScalarFieldEnum>
  }


  /**
   * ZK_Order_Mapping create
   */
  export type ZK_Order_MappingCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
    /**
     * The data needed to create a ZK_Order_Mapping.
     * 
    **/
    data: XOR<ZK_Order_MappingCreateInput, ZK_Order_MappingUncheckedCreateInput>
  }


  /**
   * ZK_Order_Mapping createMany
   */
  export type ZK_Order_MappingCreateManyArgs = {
    data: Enumerable<ZK_Order_MappingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_Order_Mapping update
   */
  export type ZK_Order_MappingUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
    /**
     * The data needed to update a ZK_Order_Mapping.
     * 
    **/
    data: XOR<ZK_Order_MappingUpdateInput, ZK_Order_MappingUncheckedUpdateInput>
    /**
     * Choose, which ZK_Order_Mapping to update.
     * 
    **/
    where: ZK_Order_MappingWhereUniqueInput
  }


  /**
   * ZK_Order_Mapping updateMany
   */
  export type ZK_Order_MappingUpdateManyArgs = {
    data: XOR<ZK_Order_MappingUpdateManyMutationInput, ZK_Order_MappingUncheckedUpdateManyInput>
    where?: ZK_Order_MappingWhereInput
  }


  /**
   * ZK_Order_Mapping upsert
   */
  export type ZK_Order_MappingUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
    /**
     * The filter to search for the ZK_Order_Mapping to update in case it exists.
     * 
    **/
    where: ZK_Order_MappingWhereUniqueInput
    /**
     * In case the ZK_Order_Mapping found by the `where` argument doesn't exist, create a new ZK_Order_Mapping with this data.
     * 
    **/
    create: XOR<ZK_Order_MappingCreateInput, ZK_Order_MappingUncheckedCreateInput>
    /**
     * In case the ZK_Order_Mapping was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_Order_MappingUpdateInput, ZK_Order_MappingUncheckedUpdateInput>
  }


  /**
   * ZK_Order_Mapping delete
   */
  export type ZK_Order_MappingDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
    /**
     * Filter which ZK_Order_Mapping to delete.
     * 
    **/
    where: ZK_Order_MappingWhereUniqueInput
  }


  /**
   * ZK_Order_Mapping deleteMany
   */
  export type ZK_Order_MappingDeleteManyArgs = {
    where?: ZK_Order_MappingWhereInput
  }


  /**
   * ZK_Order_Mapping without action
   */
  export type ZK_Order_MappingArgs = {
    /**
     * Select specific fields to fetch from the ZK_Order_Mapping
     * 
    **/
    select?: ZK_Order_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Order_MappingInclude | null
  }



  /**
   * Model ZK_Product_Tax_Mapping
   */


  export type AggregateZK_Product_Tax_Mapping = {
    _count: ZK_Product_Tax_MappingCountAggregateOutputType | null
    count: ZK_Product_Tax_MappingCountAggregateOutputType | null
    _avg: ZK_Product_Tax_MappingAvgAggregateOutputType | null
    avg: ZK_Product_Tax_MappingAvgAggregateOutputType | null
    _sum: ZK_Product_Tax_MappingSumAggregateOutputType | null
    sum: ZK_Product_Tax_MappingSumAggregateOutputType | null
    _min: ZK_Product_Tax_MappingMinAggregateOutputType | null
    min: ZK_Product_Tax_MappingMinAggregateOutputType | null
    _max: ZK_Product_Tax_MappingMaxAggregateOutputType | null
    max: ZK_Product_Tax_MappingMaxAggregateOutputType | null
  }

  export type ZK_Product_Tax_MappingAvgAggregateOutputType = {
    zkpid: number | null
    zk_tax_id: number | null
    zkcid: number | null
  }

  export type ZK_Product_Tax_MappingSumAggregateOutputType = {
    zkpid: bigint | null
    zk_tax_id: bigint | null
    zkcid: number | null
  }

  export type ZK_Product_Tax_MappingMinAggregateOutputType = {
    zkpid: bigint | null
    zk_tax_id: bigint | null
    zkcid: number | null
  }

  export type ZK_Product_Tax_MappingMaxAggregateOutputType = {
    zkpid: bigint | null
    zk_tax_id: bigint | null
    zkcid: number | null
  }

  export type ZK_Product_Tax_MappingCountAggregateOutputType = {
    zkpid: number
    zk_tax_id: number
    zkcid: number
    _all: number
  }


  export type ZK_Product_Tax_MappingAvgAggregateInputType = {
    zkpid?: true
    zk_tax_id?: true
    zkcid?: true
  }

  export type ZK_Product_Tax_MappingSumAggregateInputType = {
    zkpid?: true
    zk_tax_id?: true
    zkcid?: true
  }

  export type ZK_Product_Tax_MappingMinAggregateInputType = {
    zkpid?: true
    zk_tax_id?: true
    zkcid?: true
  }

  export type ZK_Product_Tax_MappingMaxAggregateInputType = {
    zkpid?: true
    zk_tax_id?: true
    zkcid?: true
  }

  export type ZK_Product_Tax_MappingCountAggregateInputType = {
    zkpid?: true
    zk_tax_id?: true
    zkcid?: true
    _all?: true
  }

  export type ZK_Product_Tax_MappingAggregateArgs = {
    /**
     * Filter which ZK_Product_Tax_Mapping to aggregate.
     * 
    **/
    where?: ZK_Product_Tax_MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Product_Tax_Mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_Product_Tax_MappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZK_Product_Tax_MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Product_Tax_Mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Product_Tax_Mappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZK_Product_Tax_Mappings
    **/
    _count?: true | ZK_Product_Tax_MappingCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZK_Product_Tax_MappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZK_Product_Tax_MappingAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZK_Product_Tax_MappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZK_Product_Tax_MappingSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZK_Product_Tax_MappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZK_Product_Tax_MappingMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZK_Product_Tax_MappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZK_Product_Tax_MappingMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZK_Product_Tax_MappingMaxAggregateInputType
  }

  export type GetZK_Product_Tax_MappingAggregateType<T extends ZK_Product_Tax_MappingAggregateArgs> = {
        [P in keyof T & keyof AggregateZK_Product_Tax_Mapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZK_Product_Tax_Mapping[P]>
      : GetScalarType<T[P], AggregateZK_Product_Tax_Mapping[P]>
  }


    
    
  export type ZK_Product_Tax_MappingGroupByArgs = {
    where?: ZK_Product_Tax_MappingWhereInput
    orderBy?: Enumerable<ZK_Product_Tax_MappingOrderByInput>
    by: Array<ZK_Product_Tax_MappingScalarFieldEnum>
    having?: ZK_Product_Tax_MappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZK_Product_Tax_MappingCountAggregateInputType | true
    _avg?: ZK_Product_Tax_MappingAvgAggregateInputType
    _sum?: ZK_Product_Tax_MappingSumAggregateInputType
    _min?: ZK_Product_Tax_MappingMinAggregateInputType
    _max?: ZK_Product_Tax_MappingMaxAggregateInputType
  }


  export type ZK_Product_Tax_MappingGroupByOutputType = {
    zkpid: bigint
    zk_tax_id: bigint
    zkcid: number
    _count: ZK_Product_Tax_MappingCountAggregateOutputType | null
    _avg: ZK_Product_Tax_MappingAvgAggregateOutputType | null
    _sum: ZK_Product_Tax_MappingSumAggregateOutputType | null
    _min: ZK_Product_Tax_MappingMinAggregateOutputType | null
    _max: ZK_Product_Tax_MappingMaxAggregateOutputType | null
  }

  type GetZK_Product_Tax_MappingGroupByPayload<T extends ZK_Product_Tax_MappingGroupByArgs> = Promise<
    Array<
      PickArray<ZK_Product_Tax_MappingGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZK_Product_Tax_MappingGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZK_Product_Tax_MappingGroupByOutputType[P]> 
            : GetScalarType<T[P], ZK_Product_Tax_MappingGroupByOutputType[P]>
        }
      > 
    >


  export type ZK_Product_Tax_MappingSelect = {
    zk_product_tax_mapping_product_fkey?: boolean | ZKProductArgs
    zkpid?: boolean
    zk_product_tax_mapping_tax_fkey?: boolean | ZK_TaxArgs
    zk_tax_id?: boolean
    zkcid?: boolean
  }

  export type ZK_Product_Tax_MappingInclude = {
    zk_product_tax_mapping_product_fkey?: boolean | ZKProductArgs
    zk_product_tax_mapping_tax_fkey?: boolean | ZK_TaxArgs
  }

  export type ZK_Product_Tax_MappingGetPayload<
    S extends boolean | null | undefined | ZK_Product_Tax_MappingArgs,
    U = keyof S
      > = S extends true
        ? ZK_Product_Tax_Mapping
    : S extends undefined
    ? never
    : S extends ZK_Product_Tax_MappingArgs | ZK_Product_Tax_MappingFindManyArgs
    ?'include' extends U
    ? ZK_Product_Tax_Mapping  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'zk_product_tax_mapping_product_fkey'
        ? ZKProductGetPayload<S['include'][P]> :
        P extends 'zk_product_tax_mapping_tax_fkey'
        ? ZK_TaxGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZK_Product_Tax_Mapping ?ZK_Product_Tax_Mapping [P]
  : 
          P extends 'zk_product_tax_mapping_product_fkey'
        ? ZKProductGetPayload<S['select'][P]> :
        P extends 'zk_product_tax_mapping_tax_fkey'
        ? ZK_TaxGetPayload<S['select'][P]> : never
  } 
    : ZK_Product_Tax_Mapping
  : ZK_Product_Tax_Mapping


  type ZK_Product_Tax_MappingCountArgs = Merge<
    Omit<ZK_Product_Tax_MappingFindManyArgs, 'select' | 'include'> & {
      select?: ZK_Product_Tax_MappingCountAggregateInputType | true
    }
  >

  export interface ZK_Product_Tax_MappingDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZK_Product_Tax_Mapping that matches the filter.
     * @param {ZK_Product_Tax_MappingFindUniqueArgs} args - Arguments to find a ZK_Product_Tax_Mapping
     * @example
     * // Get one ZK_Product_Tax_Mapping
     * const zK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZK_Product_Tax_MappingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZK_Product_Tax_MappingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZK_Product_Tax_Mapping'> extends True ? CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping>, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T>>> : CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping | null >, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T> | null >>

    /**
     * Find the first ZK_Product_Tax_Mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Product_Tax_MappingFindFirstArgs} args - Arguments to find a ZK_Product_Tax_Mapping
     * @example
     * // Get one ZK_Product_Tax_Mapping
     * const zK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZK_Product_Tax_MappingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZK_Product_Tax_MappingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZK_Product_Tax_Mapping'> extends True ? CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping>, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T>>> : CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping | null >, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T> | null >>

    /**
     * Find zero or more ZK_Product_Tax_Mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Product_Tax_MappingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZK_Product_Tax_Mappings
     * const zK_Product_Tax_Mappings = await prisma.zK_Product_Tax_Mapping.findMany()
     * 
     * // Get first 10 ZK_Product_Tax_Mappings
     * const zK_Product_Tax_Mappings = await prisma.zK_Product_Tax_Mapping.findMany({ take: 10 })
     * 
     * // Only select the `zkpid`
     * const zK_Product_Tax_MappingWithZkpidOnly = await prisma.zK_Product_Tax_Mapping.findMany({ select: { zkpid: true } })
     * 
    **/
    findMany<T extends ZK_Product_Tax_MappingFindManyArgs>(
      args?: SelectSubset<T, ZK_Product_Tax_MappingFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZK_Product_Tax_Mapping>>, PrismaPromise<Array<ZK_Product_Tax_MappingGetPayload<T>>>>

    /**
     * Create a ZK_Product_Tax_Mapping.
     * @param {ZK_Product_Tax_MappingCreateArgs} args - Arguments to create a ZK_Product_Tax_Mapping.
     * @example
     * // Create one ZK_Product_Tax_Mapping
     * const ZK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.create({
     *   data: {
     *     // ... data to create a ZK_Product_Tax_Mapping
     *   }
     * })
     * 
    **/
    create<T extends ZK_Product_Tax_MappingCreateArgs>(
      args: SelectSubset<T, ZK_Product_Tax_MappingCreateArgs>
    ): CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping>, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T>>>

    /**
     * Create many ZK_Product_Tax_Mappings.
     *     @param {ZK_Product_Tax_MappingCreateManyArgs} args - Arguments to create many ZK_Product_Tax_Mappings.
     *     @example
     *     // Create many ZK_Product_Tax_Mappings
     *     const zK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZK_Product_Tax_MappingCreateManyArgs>(
      args?: SelectSubset<T, ZK_Product_Tax_MappingCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZK_Product_Tax_Mapping.
     * @param {ZK_Product_Tax_MappingDeleteArgs} args - Arguments to delete one ZK_Product_Tax_Mapping.
     * @example
     * // Delete one ZK_Product_Tax_Mapping
     * const ZK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.delete({
     *   where: {
     *     // ... filter to delete one ZK_Product_Tax_Mapping
     *   }
     * })
     * 
    **/
    delete<T extends ZK_Product_Tax_MappingDeleteArgs>(
      args: SelectSubset<T, ZK_Product_Tax_MappingDeleteArgs>
    ): CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping>, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T>>>

    /**
     * Update one ZK_Product_Tax_Mapping.
     * @param {ZK_Product_Tax_MappingUpdateArgs} args - Arguments to update one ZK_Product_Tax_Mapping.
     * @example
     * // Update one ZK_Product_Tax_Mapping
     * const zK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZK_Product_Tax_MappingUpdateArgs>(
      args: SelectSubset<T, ZK_Product_Tax_MappingUpdateArgs>
    ): CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping>, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T>>>

    /**
     * Delete zero or more ZK_Product_Tax_Mappings.
     * @param {ZK_Product_Tax_MappingDeleteManyArgs} args - Arguments to filter ZK_Product_Tax_Mappings to delete.
     * @example
     * // Delete a few ZK_Product_Tax_Mappings
     * const { count } = await prisma.zK_Product_Tax_Mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZK_Product_Tax_MappingDeleteManyArgs>(
      args?: SelectSubset<T, ZK_Product_Tax_MappingDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZK_Product_Tax_Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Product_Tax_MappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZK_Product_Tax_Mappings
     * const zK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZK_Product_Tax_MappingUpdateManyArgs>(
      args: SelectSubset<T, ZK_Product_Tax_MappingUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZK_Product_Tax_Mapping.
     * @param {ZK_Product_Tax_MappingUpsertArgs} args - Arguments to update or create a ZK_Product_Tax_Mapping.
     * @example
     * // Update or create a ZK_Product_Tax_Mapping
     * const zK_Product_Tax_Mapping = await prisma.zK_Product_Tax_Mapping.upsert({
     *   create: {
     *     // ... data to create a ZK_Product_Tax_Mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZK_Product_Tax_Mapping we want to update
     *   }
     * })
    **/
    upsert<T extends ZK_Product_Tax_MappingUpsertArgs>(
      args: SelectSubset<T, ZK_Product_Tax_MappingUpsertArgs>
    ): CheckSelect<T, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_Mapping>, Prisma__ZK_Product_Tax_MappingClient<ZK_Product_Tax_MappingGetPayload<T>>>

    /**
     * Count the number of ZK_Product_Tax_Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Product_Tax_MappingCountArgs} args - Arguments to filter ZK_Product_Tax_Mappings to count.
     * @example
     * // Count the number of ZK_Product_Tax_Mappings
     * const count = await prisma.zK_Product_Tax_Mapping.count({
     *   where: {
     *     // ... the filter for the ZK_Product_Tax_Mappings we want to count
     *   }
     * })
    **/
    count<T extends ZK_Product_Tax_MappingCountArgs>(
      args?: Subset<T, ZK_Product_Tax_MappingCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZK_Product_Tax_MappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZK_Product_Tax_Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Product_Tax_MappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZK_Product_Tax_MappingAggregateArgs>(args: Subset<T, ZK_Product_Tax_MappingAggregateArgs>): PrismaPromise<GetZK_Product_Tax_MappingAggregateType<T>>

    /**
     * Group by ZK_Product_Tax_Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZK_Product_Tax_MappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZK_Product_Tax_MappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZK_Product_Tax_MappingGroupByArgs['orderBy'] }
        : { orderBy?: ZK_Product_Tax_MappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZK_Product_Tax_MappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZK_Product_Tax_MappingGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZK_Product_Tax_Mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZK_Product_Tax_MappingClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    zk_product_tax_mapping_product_fkey<T extends ZKProductArgs = {}>(args?: Subset<T, ZKProductArgs>): CheckSelect<T, Prisma__ZKProductClient<ZKProduct | null >, Prisma__ZKProductClient<ZKProductGetPayload<T> | null >>;

    zk_product_tax_mapping_tax_fkey<T extends ZK_TaxArgs = {}>(args?: Subset<T, ZK_TaxArgs>): CheckSelect<T, Prisma__ZK_TaxClient<ZK_Tax | null >, Prisma__ZK_TaxClient<ZK_TaxGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ZK_Product_Tax_Mapping findUnique
   */
  export type ZK_Product_Tax_MappingFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
    /**
     * Throw an Error if a ZK_Product_Tax_Mapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Product_Tax_Mapping to fetch.
     * 
    **/
    where: ZK_Product_Tax_MappingWhereUniqueInput
  }


  /**
   * ZK_Product_Tax_Mapping findFirst
   */
  export type ZK_Product_Tax_MappingFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
    /**
     * Throw an Error if a ZK_Product_Tax_Mapping can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZK_Product_Tax_Mapping to fetch.
     * 
    **/
    where?: ZK_Product_Tax_MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Product_Tax_Mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_Product_Tax_MappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZK_Product_Tax_Mappings.
     * 
    **/
    cursor?: ZK_Product_Tax_MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Product_Tax_Mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Product_Tax_Mappings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZK_Product_Tax_Mappings.
     * 
    **/
    distinct?: Enumerable<ZK_Product_Tax_MappingScalarFieldEnum>
  }


  /**
   * ZK_Product_Tax_Mapping findMany
   */
  export type ZK_Product_Tax_MappingFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
    /**
     * Filter, which ZK_Product_Tax_Mappings to fetch.
     * 
    **/
    where?: ZK_Product_Tax_MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZK_Product_Tax_Mappings to fetch.
     * 
    **/
    orderBy?: Enumerable<ZK_Product_Tax_MappingOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZK_Product_Tax_Mappings.
     * 
    **/
    cursor?: ZK_Product_Tax_MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZK_Product_Tax_Mappings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZK_Product_Tax_Mappings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZK_Product_Tax_MappingScalarFieldEnum>
  }


  /**
   * ZK_Product_Tax_Mapping create
   */
  export type ZK_Product_Tax_MappingCreateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
    /**
     * The data needed to create a ZK_Product_Tax_Mapping.
     * 
    **/
    data: XOR<ZK_Product_Tax_MappingCreateInput, ZK_Product_Tax_MappingUncheckedCreateInput>
  }


  /**
   * ZK_Product_Tax_Mapping createMany
   */
  export type ZK_Product_Tax_MappingCreateManyArgs = {
    data: Enumerable<ZK_Product_Tax_MappingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZK_Product_Tax_Mapping update
   */
  export type ZK_Product_Tax_MappingUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
    /**
     * The data needed to update a ZK_Product_Tax_Mapping.
     * 
    **/
    data: XOR<ZK_Product_Tax_MappingUpdateInput, ZK_Product_Tax_MappingUncheckedUpdateInput>
    /**
     * Choose, which ZK_Product_Tax_Mapping to update.
     * 
    **/
    where: ZK_Product_Tax_MappingWhereUniqueInput
  }


  /**
   * ZK_Product_Tax_Mapping updateMany
   */
  export type ZK_Product_Tax_MappingUpdateManyArgs = {
    data: XOR<ZK_Product_Tax_MappingUpdateManyMutationInput, ZK_Product_Tax_MappingUncheckedUpdateManyInput>
    where?: ZK_Product_Tax_MappingWhereInput
  }


  /**
   * ZK_Product_Tax_Mapping upsert
   */
  export type ZK_Product_Tax_MappingUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
    /**
     * The filter to search for the ZK_Product_Tax_Mapping to update in case it exists.
     * 
    **/
    where: ZK_Product_Tax_MappingWhereUniqueInput
    /**
     * In case the ZK_Product_Tax_Mapping found by the `where` argument doesn't exist, create a new ZK_Product_Tax_Mapping with this data.
     * 
    **/
    create: XOR<ZK_Product_Tax_MappingCreateInput, ZK_Product_Tax_MappingUncheckedCreateInput>
    /**
     * In case the ZK_Product_Tax_Mapping was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZK_Product_Tax_MappingUpdateInput, ZK_Product_Tax_MappingUncheckedUpdateInput>
  }


  /**
   * ZK_Product_Tax_Mapping delete
   */
  export type ZK_Product_Tax_MappingDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
    /**
     * Filter which ZK_Product_Tax_Mapping to delete.
     * 
    **/
    where: ZK_Product_Tax_MappingWhereUniqueInput
  }


  /**
   * ZK_Product_Tax_Mapping deleteMany
   */
  export type ZK_Product_Tax_MappingDeleteManyArgs = {
    where?: ZK_Product_Tax_MappingWhereInput
  }


  /**
   * ZK_Product_Tax_Mapping without action
   */
  export type ZK_Product_Tax_MappingArgs = {
    /**
     * Select specific fields to fetch from the ZK_Product_Tax_Mapping
     * 
    **/
    select?: ZK_Product_Tax_MappingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZK_Product_Tax_MappingInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ZKUserCompanyMappingScalarFieldEnum: {
    zkuid: 'zkuid',
    zkcid: 'zkcid',
    user_profile: 'user_profile',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type ZKUserCompanyMappingScalarFieldEnum = (typeof ZKUserCompanyMappingScalarFieldEnum)[keyof typeof ZKUserCompanyMappingScalarFieldEnum]


  export const ZKProductScalarFieldEnum: {
    zkcid: 'zkcid',
    zkpid: 'zkpid',
    zkp_type: 'zkp_type',
    zkp_code: 'zkp_code',
    zkp_name: 'zkp_name',
    zkp_description: 'zkp_description',
    zk_category_id: 'zk_category_id',
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
  };

  export type ZKProductScalarFieldEnum = (typeof ZKProductScalarFieldEnum)[keyof typeof ZKProductScalarFieldEnum]


  export const ZK_TaxScalarFieldEnum: {
    zkcid: 'zkcid',
    zk_tax_id: 'zk_tax_id',
    zk_tax_name: 'zk_tax_name',
    zk_tax_percentage: 'zk_tax_percentage'
  };

  export type ZK_TaxScalarFieldEnum = (typeof ZK_TaxScalarFieldEnum)[keyof typeof ZK_TaxScalarFieldEnum]


  export const ZK_UnitScalarFieldEnum: {
    zkcid: 'zkcid',
    zk_unit_id: 'zk_unit_id',
    zk_unit_name: 'zk_unit_name'
  };

  export type ZK_UnitScalarFieldEnum = (typeof ZK_UnitScalarFieldEnum)[keyof typeof ZK_UnitScalarFieldEnum]


  export const ZK_CategoryScalarFieldEnum: {
    zkcid: 'zkcid',
    zk_category_id: 'zk_category_id',
    zk_category_name: 'zk_category_name',
    zk_category_level: 'zk_category_level',
    zk_category_parentid: 'zk_category_parentid'
  };

  export type ZK_CategoryScalarFieldEnum = (typeof ZK_CategoryScalarFieldEnum)[keyof typeof ZK_CategoryScalarFieldEnum]


  export const ZK_CustomerScalarFieldEnum: {
    zkcid: 'zkcid',
    zk_customer_id: 'zk_customer_id',
    zk_customer_name: 'zk_customer_name',
    zk_customer_mobile: 'zk_customer_mobile',
    zk_customer_email: 'zk_customer_email',
    zk_customer_other_details: 'zk_customer_other_details'
  };

  export type ZK_CustomerScalarFieldEnum = (typeof ZK_CustomerScalarFieldEnum)[keyof typeof ZK_CustomerScalarFieldEnum]


  export const ZK_ShippingAddressScalarFieldEnum: {
    zkcid: 'zkcid',
    zk_customer_id: 'zk_customer_id',
    zk_shipping_id: 'zk_shipping_id',
    zk_name: 'zk_name',
    zk_contact_number: 'zk_contact_number',
    zk_addressline_1: 'zk_addressline_1',
    zk_addressline_2: 'zk_addressline_2',
    zk_state: 'zk_state',
    zk_country: 'zk_country',
    zk_pincode: 'zk_pincode'
  };

  export type ZK_ShippingAddressScalarFieldEnum = (typeof ZK_ShippingAddressScalarFieldEnum)[keyof typeof ZK_ShippingAddressScalarFieldEnum]


  export const ZK_OrderScalarFieldEnum: {
    zkcid: 'zkcid',
    zk_order_id: 'zk_order_id',
    zk_order_number: 'zk_order_number',
    zk_shipping_id: 'zk_shipping_id',
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
  };

  export type ZK_OrderScalarFieldEnum = (typeof ZK_OrderScalarFieldEnum)[keyof typeof ZK_OrderScalarFieldEnum]


  export const ZK_Order_MappingScalarFieldEnum: {
    zk_order_mapping_id: 'zk_order_mapping_id',
    zk_order_id: 'zk_order_id',
    zk_product_id: 'zk_product_id',
    zk_product_quantity: 'zk_product_quantity',
    zk_product_selling_price: 'zk_product_selling_price',
    zk_product_cost_price: 'zk_product_cost_price'
  };

  export type ZK_Order_MappingScalarFieldEnum = (typeof ZK_Order_MappingScalarFieldEnum)[keyof typeof ZK_Order_MappingScalarFieldEnum]


  export const ZK_Product_Tax_MappingScalarFieldEnum: {
    zkpid: 'zkpid',
    zk_tax_id: 'zk_tax_id',
    zkcid: 'zkcid'
  };

  export type ZK_Product_Tax_MappingScalarFieldEnum = (typeof ZK_Product_Tax_MappingScalarFieldEnum)[keyof typeof ZK_Product_Tax_MappingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type ZKUserCompanyMappingWhereInput = {
    AND?: Enumerable<ZKUserCompanyMappingWhereInput>
    OR?: Enumerable<ZKUserCompanyMappingWhereInput>
    NOT?: Enumerable<ZKUserCompanyMappingWhereInput>
    zkuid?: IntFilter | number
    zkcid?: IntFilter | number
    user_profile?: EnumUSER_PROFILEFilter | USER_PROFILE
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ZKUserCompanyMappingOrderByInput = {
    zkuid?: SortOrder
    zkcid?: SortOrder
    user_profile?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZKUserCompanyMappingWhereUniqueInput = {
    zkuid_zkcid?: ZKUserCompanyMappingZkuid_zkcidCompoundUniqueInput
  }

  export type ZKUserCompanyMappingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZKUserCompanyMappingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZKUserCompanyMappingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZKUserCompanyMappingScalarWhereWithAggregatesInput>
    zkuid?: IntWithAggregatesFilter | number
    zkcid?: IntWithAggregatesFilter | number
    user_profile?: EnumUSER_PROFILEWithAggregatesFilter | USER_PROFILE
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ZKProductWhereInput = {
    AND?: Enumerable<ZKProductWhereInput>
    OR?: Enumerable<ZKProductWhereInput>
    NOT?: Enumerable<ZKProductWhereInput>
    zkcid?: IntFilter | number
    zkpid?: BigIntFilter | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFilter | PRODUCT_TYPE
    zkp_code?: StringNullableFilter | string | null
    zkp_name?: StringFilter | string
    zkp_description?: StringNullableFilter | string | null
    zk_category_id?: BigIntFilter | bigint | number
    zkp_unit?: BigIntFilter | bigint | number
    zkp_unit_selling_price?: DecimalFilter | Decimal | number | string
    zkp_unit_cost_price?: DecimalFilter | Decimal | number | string
    zkp_product_img?: StringNullableFilter | string | null
    zkp_char1?: StringNullableFilter | string | null
    zkp_char2?: StringNullableFilter | string | null
    zkp_char3?: StringNullableFilter | string | null
    zkp_char4?: StringNullableFilter | string | null
    zkp_char5?: StringNullableFilter | string | null
    zkp_number1?: BigIntNullableFilter | bigint | number | null
    zkp_number2?: BigIntNullableFilter | bigint | number | null
    zkp_number3?: BigIntNullableFilter | bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingListRelationFilter
    ZK_Unit?: XOR<ZK_UnitRelationFilter, ZK_UnitWhereInput>
    ZK_Category?: XOR<ZK_CategoryRelationFilter, ZK_CategoryWhereInput>
  }

  export type ZKProductOrderByInput = {
    zkcid?: SortOrder
    zkpid?: SortOrder
    zkp_type?: SortOrder
    zkp_code?: SortOrder
    zkp_name?: SortOrder
    zkp_description?: SortOrder
    zk_category_id?: SortOrder
    zkp_unit?: SortOrder
    zkp_unit_selling_price?: SortOrder
    zkp_unit_cost_price?: SortOrder
    zkp_product_img?: SortOrder
    zkp_char1?: SortOrder
    zkp_char2?: SortOrder
    zkp_char3?: SortOrder
    zkp_char4?: SortOrder
    zkp_char5?: SortOrder
    zkp_number1?: SortOrder
    zkp_number2?: SortOrder
    zkp_number3?: SortOrder
  }

  export type ZKProductWhereUniqueInput = {
    zkpid?: bigint | number
    zkcid_zkp_name?: ZKProductZkcid_zkp_nameCompoundUniqueInput
  }

  export type ZKProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZKProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZKProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZKProductScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    zkpid?: BigIntWithAggregatesFilter | bigint | number
    zkp_type?: EnumPRODUCT_TYPEWithAggregatesFilter | PRODUCT_TYPE
    zkp_code?: StringNullableWithAggregatesFilter | string | null
    zkp_name?: StringWithAggregatesFilter | string
    zkp_description?: StringNullableWithAggregatesFilter | string | null
    zk_category_id?: BigIntWithAggregatesFilter | bigint | number
    zkp_unit?: BigIntWithAggregatesFilter | bigint | number
    zkp_unit_selling_price?: DecimalWithAggregatesFilter | Decimal | number | string
    zkp_unit_cost_price?: DecimalWithAggregatesFilter | Decimal | number | string
    zkp_product_img?: StringNullableWithAggregatesFilter | string | null
    zkp_char1?: StringNullableWithAggregatesFilter | string | null
    zkp_char2?: StringNullableWithAggregatesFilter | string | null
    zkp_char3?: StringNullableWithAggregatesFilter | string | null
    zkp_char4?: StringNullableWithAggregatesFilter | string | null
    zkp_char5?: StringNullableWithAggregatesFilter | string | null
    zkp_number1?: BigIntNullableWithAggregatesFilter | bigint | number | null
    zkp_number2?: BigIntNullableWithAggregatesFilter | bigint | number | null
    zkp_number3?: BigIntNullableWithAggregatesFilter | bigint | number | null
  }

  export type ZK_TaxWhereInput = {
    AND?: Enumerable<ZK_TaxWhereInput>
    OR?: Enumerable<ZK_TaxWhereInput>
    NOT?: Enumerable<ZK_TaxWhereInput>
    zkcid?: IntFilter | number
    zk_tax_id?: BigIntFilter | bigint | number
    zk_tax_name?: StringFilter | string
    zk_tax_percentage?: DecimalFilter | Decimal | number | string
    ZK_Products?: ZK_Product_Tax_MappingListRelationFilter
  }

  export type ZK_TaxOrderByInput = {
    zkcid?: SortOrder
    zk_tax_id?: SortOrder
    zk_tax_name?: SortOrder
    zk_tax_percentage?: SortOrder
  }

  export type ZK_TaxWhereUniqueInput = {
    zk_tax_id?: bigint | number
    zkcid_zk_tax_name?: ZK_TaxZkcidZk_tax_nameCompoundUniqueInput
  }

  export type ZK_TaxScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_TaxScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_TaxScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_TaxScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    zk_tax_id?: BigIntWithAggregatesFilter | bigint | number
    zk_tax_name?: StringWithAggregatesFilter | string
    zk_tax_percentage?: DecimalWithAggregatesFilter | Decimal | number | string
  }

  export type ZK_UnitWhereInput = {
    AND?: Enumerable<ZK_UnitWhereInput>
    OR?: Enumerable<ZK_UnitWhereInput>
    NOT?: Enumerable<ZK_UnitWhereInput>
    zkcid?: IntFilter | number
    zk_unit_id?: BigIntFilter | bigint | number
    zk_unit_name?: StringFilter | string
    ZK_Product?: XOR<ZKProductRelationFilter, ZKProductWhereInput> | null
  }

  export type ZK_UnitOrderByInput = {
    zkcid?: SortOrder
    zk_unit_id?: SortOrder
    zk_unit_name?: SortOrder
  }

  export type ZK_UnitWhereUniqueInput = {
    zk_unit_id?: bigint | number
    zkcid_zk_unit_name?: ZK_UnitZkcidZk_unit_nameCompoundUniqueInput
  }

  export type ZK_UnitScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_UnitScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_UnitScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_UnitScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    zk_unit_id?: BigIntWithAggregatesFilter | bigint | number
    zk_unit_name?: StringWithAggregatesFilter | string
  }

  export type ZK_CategoryWhereInput = {
    AND?: Enumerable<ZK_CategoryWhereInput>
    OR?: Enumerable<ZK_CategoryWhereInput>
    NOT?: Enumerable<ZK_CategoryWhereInput>
    zkcid?: IntFilter | number
    zk_category_id?: BigIntFilter | bigint | number
    zk_category_name?: StringFilter | string
    zk_category_level?: IntFilter | number
    zk_category_parentid?: BigIntNullableFilter | bigint | number | null
    ZKProduct?: XOR<ZKProductRelationFilter, ZKProductWhereInput> | null
  }

  export type ZK_CategoryOrderByInput = {
    zkcid?: SortOrder
    zk_category_id?: SortOrder
    zk_category_name?: SortOrder
    zk_category_level?: SortOrder
    zk_category_parentid?: SortOrder
  }

  export type ZK_CategoryWhereUniqueInput = {
    zk_category_id?: bigint | number
  }

  export type ZK_CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_CategoryScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    zk_category_id?: BigIntWithAggregatesFilter | bigint | number
    zk_category_name?: StringWithAggregatesFilter | string
    zk_category_level?: IntWithAggregatesFilter | number
    zk_category_parentid?: BigIntNullableWithAggregatesFilter | bigint | number | null
  }

  export type ZK_CustomerWhereInput = {
    AND?: Enumerable<ZK_CustomerWhereInput>
    OR?: Enumerable<ZK_CustomerWhereInput>
    NOT?: Enumerable<ZK_CustomerWhereInput>
    zkcid?: IntFilter | number
    zk_customer_id?: BigIntFilter | bigint | number
    zk_customer_name?: StringFilter | string
    zk_customer_mobile?: StringNullableFilter | string | null
    zk_customer_email?: StringNullableFilter | string | null
    zk_customer_other_details?: StringFilter | string
    ZK_Order?: ZK_OrderListRelationFilter
    ZK_ShippingAddress?: XOR<ZK_ShippingAddressRelationFilter, ZK_ShippingAddressWhereInput> | null
  }

  export type ZK_CustomerOrderByInput = {
    zkcid?: SortOrder
    zk_customer_id?: SortOrder
    zk_customer_name?: SortOrder
    zk_customer_mobile?: SortOrder
    zk_customer_email?: SortOrder
    zk_customer_other_details?: SortOrder
  }

  export type ZK_CustomerWhereUniqueInput = {
    zk_customer_id?: bigint | number
  }

  export type ZK_CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_CustomerScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    zk_customer_id?: BigIntWithAggregatesFilter | bigint | number
    zk_customer_name?: StringWithAggregatesFilter | string
    zk_customer_mobile?: StringNullableWithAggregatesFilter | string | null
    zk_customer_email?: StringNullableWithAggregatesFilter | string | null
    zk_customer_other_details?: StringWithAggregatesFilter | string
  }

  export type ZK_ShippingAddressWhereInput = {
    AND?: Enumerable<ZK_ShippingAddressWhereInput>
    OR?: Enumerable<ZK_ShippingAddressWhereInput>
    NOT?: Enumerable<ZK_ShippingAddressWhereInput>
    zkcid?: IntFilter | number
    zk_customer_id?: BigIntFilter | bigint | number
    zk_shipping_id?: BigIntFilter | bigint | number
    zk_name?: StringFilter | string
    zk_contact_number?: StringFilter | string
    zk_addressline_1?: StringFilter | string
    zk_addressline_2?: StringNullableFilter | string | null
    zk_state?: StringFilter | string
    zk_country?: StringFilter | string
    zk_pincode?: IntFilter | number
    ZK_Order?: XOR<ZK_OrderRelationFilter, ZK_OrderWhereInput> | null
    ZK_Customer?: XOR<ZK_CustomerRelationFilter, ZK_CustomerWhereInput>
  }

  export type ZK_ShippingAddressOrderByInput = {
    zkcid?: SortOrder
    zk_customer_id?: SortOrder
    zk_shipping_id?: SortOrder
    zk_name?: SortOrder
    zk_contact_number?: SortOrder
    zk_addressline_1?: SortOrder
    zk_addressline_2?: SortOrder
    zk_state?: SortOrder
    zk_country?: SortOrder
    zk_pincode?: SortOrder
  }

  export type ZK_ShippingAddressWhereUniqueInput = {
    zk_shipping_id?: bigint | number
  }

  export type ZK_ShippingAddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_ShippingAddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_ShippingAddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_ShippingAddressScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    zk_customer_id?: BigIntWithAggregatesFilter | bigint | number
    zk_shipping_id?: BigIntWithAggregatesFilter | bigint | number
    zk_name?: StringWithAggregatesFilter | string
    zk_contact_number?: StringWithAggregatesFilter | string
    zk_addressline_1?: StringWithAggregatesFilter | string
    zk_addressline_2?: StringNullableWithAggregatesFilter | string | null
    zk_state?: StringWithAggregatesFilter | string
    zk_country?: StringWithAggregatesFilter | string
    zk_pincode?: IntWithAggregatesFilter | number
  }

  export type ZK_OrderWhereInput = {
    AND?: Enumerable<ZK_OrderWhereInput>
    OR?: Enumerable<ZK_OrderWhereInput>
    NOT?: Enumerable<ZK_OrderWhereInput>
    zkcid?: IntFilter | number
    zk_order_id?: BigIntFilter | bigint | number
    zk_order_number?: StringFilter | string
    zk_shipping_id?: BigIntFilter | bigint | number
    zk_order_description?: StringNullableFilter | string | null
    zk_order_total_amount?: DecimalFilter | Decimal | number | string
    zk_order_total_tax?: JsonFilter
    zk_order_total_discount?: JsonFilter
    zk_order_createAt?: DateTimeFilter | Date | string
    zk_order_updatedAt?: DateTimeFilter | Date | string
    zk_order_createby?: IntFilter | number
    zk_order_customer_id?: BigIntNullableFilter | bigint | number | null
    zk_order_notes?: StringFilter | string
    zk_order_termscondition?: StringFilter | string
    ZK_Order_Mapping?: ZK_Order_MappingListRelationFilter
    zk_order_customer_id_fkey?: XOR<ZK_CustomerRelationFilter, ZK_CustomerWhereInput> | null
    ZK_ShippingAddress?: XOR<ZK_ShippingAddressRelationFilter, ZK_ShippingAddressWhereInput>
  }

  export type ZK_OrderOrderByInput = {
    zkcid?: SortOrder
    zk_order_id?: SortOrder
    zk_order_number?: SortOrder
    zk_shipping_id?: SortOrder
    zk_order_description?: SortOrder
    zk_order_total_amount?: SortOrder
    zk_order_total_tax?: SortOrder
    zk_order_total_discount?: SortOrder
    zk_order_createAt?: SortOrder
    zk_order_updatedAt?: SortOrder
    zk_order_createby?: SortOrder
    zk_order_customer_id?: SortOrder
    zk_order_notes?: SortOrder
    zk_order_termscondition?: SortOrder
  }

  export type ZK_OrderWhereUniqueInput = {
    zk_order_id?: bigint | number
  }

  export type ZK_OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_OrderScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    zk_order_id?: BigIntWithAggregatesFilter | bigint | number
    zk_order_number?: StringWithAggregatesFilter | string
    zk_shipping_id?: BigIntWithAggregatesFilter | bigint | number
    zk_order_description?: StringNullableWithAggregatesFilter | string | null
    zk_order_total_amount?: DecimalWithAggregatesFilter | Decimal | number | string
    zk_order_total_tax?: JsonWithAggregatesFilter
    zk_order_total_discount?: JsonWithAggregatesFilter
    zk_order_createAt?: DateTimeWithAggregatesFilter | Date | string
    zk_order_updatedAt?: DateTimeWithAggregatesFilter | Date | string
    zk_order_createby?: IntWithAggregatesFilter | number
    zk_order_customer_id?: BigIntNullableWithAggregatesFilter | bigint | number | null
    zk_order_notes?: StringWithAggregatesFilter | string
    zk_order_termscondition?: StringWithAggregatesFilter | string
  }

  export type ZK_Order_MappingWhereInput = {
    AND?: Enumerable<ZK_Order_MappingWhereInput>
    OR?: Enumerable<ZK_Order_MappingWhereInput>
    NOT?: Enumerable<ZK_Order_MappingWhereInput>
    zk_order_mapping_id?: BigIntFilter | bigint | number
    zk_order_id?: BigIntFilter | bigint | number
    zk_product_id?: BigIntFilter | bigint | number
    zk_product_quantity?: IntFilter | number
    zk_product_selling_price?: DecimalFilter | Decimal | number | string
    zk_product_cost_price?: DecimalFilter | Decimal | number | string
    zk_order_mapping_id_fkey?: XOR<ZK_OrderRelationFilter, ZK_OrderWhereInput>
  }

  export type ZK_Order_MappingOrderByInput = {
    zk_order_mapping_id?: SortOrder
    zk_order_id?: SortOrder
    zk_product_id?: SortOrder
    zk_product_quantity?: SortOrder
    zk_product_selling_price?: SortOrder
    zk_product_cost_price?: SortOrder
  }

  export type ZK_Order_MappingWhereUniqueInput = {
    zk_order_mapping_id?: bigint | number
  }

  export type ZK_Order_MappingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_Order_MappingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_Order_MappingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_Order_MappingScalarWhereWithAggregatesInput>
    zk_order_mapping_id?: BigIntWithAggregatesFilter | bigint | number
    zk_order_id?: BigIntWithAggregatesFilter | bigint | number
    zk_product_id?: BigIntWithAggregatesFilter | bigint | number
    zk_product_quantity?: IntWithAggregatesFilter | number
    zk_product_selling_price?: DecimalWithAggregatesFilter | Decimal | number | string
    zk_product_cost_price?: DecimalWithAggregatesFilter | Decimal | number | string
  }

  export type ZK_Product_Tax_MappingWhereInput = {
    AND?: Enumerable<ZK_Product_Tax_MappingWhereInput>
    OR?: Enumerable<ZK_Product_Tax_MappingWhereInput>
    NOT?: Enumerable<ZK_Product_Tax_MappingWhereInput>
    zk_product_tax_mapping_product_fkey?: XOR<ZKProductRelationFilter, ZKProductWhereInput>
    zkpid?: BigIntFilter | bigint | number
    zk_product_tax_mapping_tax_fkey?: XOR<ZK_TaxRelationFilter, ZK_TaxWhereInput>
    zk_tax_id?: BigIntFilter | bigint | number
    zkcid?: IntFilter | number
  }

  export type ZK_Product_Tax_MappingOrderByInput = {
    zkpid?: SortOrder
    zk_tax_id?: SortOrder
    zkcid?: SortOrder
  }

  export type ZK_Product_Tax_MappingWhereUniqueInput = {
    zkpid_zk_tax_id?: ZK_Product_Tax_MappingZkpidZk_tax_idCompoundUniqueInput
  }

  export type ZK_Product_Tax_MappingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZK_Product_Tax_MappingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZK_Product_Tax_MappingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZK_Product_Tax_MappingScalarWhereWithAggregatesInput>
    zkpid?: BigIntWithAggregatesFilter | bigint | number
    zk_tax_id?: BigIntWithAggregatesFilter | bigint | number
    zkcid?: IntWithAggregatesFilter | number
  }

  export type ZKUserCompanyMappingCreateInput = {
    zkuid: number
    zkcid: number
    user_profile?: USER_PROFILE
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZKUserCompanyMappingUncheckedCreateInput = {
    zkuid: number
    zkcid: number
    user_profile?: USER_PROFILE
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZKUserCompanyMappingUpdateInput = {
    zkuid?: IntFieldUpdateOperationsInput | number
    zkcid?: IntFieldUpdateOperationsInput | number
    user_profile?: EnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKUserCompanyMappingUncheckedUpdateInput = {
    zkuid?: IntFieldUpdateOperationsInput | number
    zkcid?: IntFieldUpdateOperationsInput | number
    user_profile?: EnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKUserCompanyMappingCreateManyInput = {
    zkuid: number
    zkcid: number
    user_profile?: USER_PROFILE
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZKUserCompanyMappingUpdateManyMutationInput = {
    zkuid?: IntFieldUpdateOperationsInput | number
    zkcid?: IntFieldUpdateOperationsInput | number
    user_profile?: EnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKUserCompanyMappingUncheckedUpdateManyInput = {
    zkuid?: IntFieldUpdateOperationsInput | number
    zkcid?: IntFieldUpdateOperationsInput | number
    user_profile?: EnumUSER_PROFILEFieldUpdateOperationsInput | USER_PROFILE
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKProductCreateInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput
    ZK_Unit: ZK_UnitCreateNestedOneWithoutZK_ProductInput
    ZK_Category?: ZK_CategoryCreateNestedOneWithoutZKProductInput
  }

  export type ZKProductUncheckedCreateInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zk_category_id?: bigint | number
    zkp_unit: bigint | number
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUncheckedCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput
  }

  export type ZKProductUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput
    ZK_Unit?: ZK_UnitUpdateOneRequiredWithoutZK_ProductInput
    ZK_Category?: ZK_CategoryUpdateOneRequiredWithoutZKProductInput
  }

  export type ZKProductUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput
  }

  export type ZKProductCreateManyInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zk_category_id?: bigint | number
    zkp_unit: bigint | number
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
  }

  export type ZKProductUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ZKProductUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ZK_TaxCreateInput = {
    zkcid: number
    zk_tax_id?: bigint | number
    zk_tax_name: string
    zk_tax_percentage?: Decimal | number | string
    ZK_Products?: ZK_Product_Tax_MappingCreateNestedManyWithoutZk_product_tax_mapping_tax_fkeyInput
  }

  export type ZK_TaxUncheckedCreateInput = {
    zkcid: number
    zk_tax_id?: bigint | number
    zk_tax_name: string
    zk_tax_percentage?: Decimal | number | string
    ZK_Products?: ZK_Product_Tax_MappingUncheckedCreateNestedManyWithoutZk_product_tax_mapping_tax_fkeyInput
  }

  export type ZK_TaxUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_name?: StringFieldUpdateOperationsInput | string
    zk_tax_percentage?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    ZK_Products?: ZK_Product_Tax_MappingUpdateManyWithoutZk_product_tax_mapping_tax_fkeyInput
  }

  export type ZK_TaxUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_name?: StringFieldUpdateOperationsInput | string
    zk_tax_percentage?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    ZK_Products?: ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZk_product_tax_mapping_tax_fkeyInput
  }

  export type ZK_TaxCreateManyInput = {
    zkcid: number
    zk_tax_id?: bigint | number
    zk_tax_name: string
    zk_tax_percentage?: Decimal | number | string
  }

  export type ZK_TaxUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_name?: StringFieldUpdateOperationsInput | string
    zk_tax_percentage?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_TaxUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_name?: StringFieldUpdateOperationsInput | string
    zk_tax_percentage?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_UnitCreateInput = {
    zkcid: number
    zk_unit_id?: bigint | number
    zk_unit_name: string
    ZK_Product?: ZKProductCreateNestedOneWithoutZK_UnitInput
  }

  export type ZK_UnitUncheckedCreateInput = {
    zkcid: number
    zk_unit_id?: bigint | number
    zk_unit_name: string
    ZK_Product?: ZKProductUncheckedCreateNestedOneWithoutZK_UnitInput
  }

  export type ZK_UnitUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_unit_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_unit_name?: StringFieldUpdateOperationsInput | string
    ZK_Product?: ZKProductUpdateOneWithoutZK_UnitInput
  }

  export type ZK_UnitUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_unit_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_unit_name?: StringFieldUpdateOperationsInput | string
    ZK_Product?: ZKProductUncheckedUpdateOneWithoutZK_UnitInput
  }

  export type ZK_UnitCreateManyInput = {
    zkcid: number
    zk_unit_id?: bigint | number
    zk_unit_name: string
  }

  export type ZK_UnitUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_unit_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_unit_name?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_UnitUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_unit_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_unit_name?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_CategoryCreateInput = {
    zkcid: number
    zk_category_id?: bigint | number
    zk_category_name: string
    zk_category_level?: number
    zk_category_parentid?: bigint | number | null
    ZKProduct?: ZKProductCreateNestedOneWithoutZK_CategoryInput
  }

  export type ZK_CategoryUncheckedCreateInput = {
    zkcid: number
    zk_category_id?: bigint | number
    zk_category_name: string
    zk_category_level?: number
    zk_category_parentid?: bigint | number | null
    ZKProduct?: ZKProductUncheckedCreateNestedOneWithoutZK_CategoryInput
  }

  export type ZK_CategoryUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_category_name?: StringFieldUpdateOperationsInput | string
    zk_category_level?: IntFieldUpdateOperationsInput | number
    zk_category_parentid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZKProduct?: ZKProductUpdateOneWithoutZK_CategoryInput
  }

  export type ZK_CategoryUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_category_name?: StringFieldUpdateOperationsInput | string
    zk_category_level?: IntFieldUpdateOperationsInput | number
    zk_category_parentid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZKProduct?: ZKProductUncheckedUpdateOneWithoutZK_CategoryInput
  }

  export type ZK_CategoryCreateManyInput = {
    zkcid: number
    zk_category_id?: bigint | number
    zk_category_name: string
    zk_category_level?: number
    zk_category_parentid?: bigint | number | null
  }

  export type ZK_CategoryUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_category_name?: StringFieldUpdateOperationsInput | string
    zk_category_level?: IntFieldUpdateOperationsInput | number
    zk_category_parentid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ZK_CategoryUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_category_name?: StringFieldUpdateOperationsInput | string
    zk_category_level?: IntFieldUpdateOperationsInput | number
    zk_category_parentid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ZK_CustomerCreateInput = {
    zkcid: number
    zk_customer_id?: bigint | number
    zk_customer_name: string
    zk_customer_mobile?: string | null
    zk_customer_email?: string | null
    zk_customer_other_details: string
    ZK_Order?: ZK_OrderCreateNestedManyWithoutZk_order_customer_id_fkeyInput
    ZK_ShippingAddress?: ZK_ShippingAddressCreateNestedOneWithoutZK_CustomerInput
  }

  export type ZK_CustomerUncheckedCreateInput = {
    zkcid: number
    zk_customer_id?: bigint | number
    zk_customer_name: string
    zk_customer_mobile?: string | null
    zk_customer_email?: string | null
    zk_customer_other_details: string
    ZK_Order?: ZK_OrderUncheckedCreateNestedManyWithoutZk_order_customer_id_fkeyInput
    ZK_ShippingAddress?: ZK_ShippingAddressUncheckedCreateNestedOneWithoutZK_CustomerInput
  }

  export type ZK_CustomerUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
    ZK_Order?: ZK_OrderUpdateManyWithoutZk_order_customer_id_fkeyInput
    ZK_ShippingAddress?: ZK_ShippingAddressUpdateOneWithoutZK_CustomerInput
  }

  export type ZK_CustomerUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
    ZK_Order?: ZK_OrderUncheckedUpdateManyWithoutZk_order_customer_id_fkeyInput
    ZK_ShippingAddress?: ZK_ShippingAddressUncheckedUpdateOneWithoutZK_CustomerInput
  }

  export type ZK_CustomerCreateManyInput = {
    zkcid: number
    zk_customer_id?: bigint | number
    zk_customer_name: string
    zk_customer_mobile?: string | null
    zk_customer_email?: string | null
    zk_customer_other_details: string
  }

  export type ZK_CustomerUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_CustomerUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_ShippingAddressCreateInput = {
    zkcid: number
    zk_shipping_id?: bigint | number
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2?: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
    ZK_Order?: ZK_OrderCreateNestedOneWithoutZK_ShippingAddressInput
    ZK_Customer: ZK_CustomerCreateNestedOneWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressUncheckedCreateInput = {
    zkcid: number
    zk_customer_id: bigint | number
    zk_shipping_id?: bigint | number
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2?: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
    ZK_Order?: ZK_OrderUncheckedCreateNestedOneWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
    ZK_Order?: ZK_OrderUpdateOneWithoutZK_ShippingAddressInput
    ZK_Customer?: ZK_CustomerUpdateOneRequiredWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
    ZK_Order?: ZK_OrderUncheckedUpdateOneWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressCreateManyInput = {
    zkcid: number
    zk_customer_id: bigint | number
    zk_shipping_id?: bigint | number
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2?: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
  }

  export type ZK_ShippingAddressUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_ShippingAddressUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_OrderCreateInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_notes: string
    zk_order_termscondition: string
    ZK_Order_Mapping?: ZK_Order_MappingCreateNestedManyWithoutZk_order_mapping_id_fkeyInput
    zk_order_customer_id_fkey?: ZK_CustomerCreateNestedOneWithoutZK_OrderInput
    ZK_ShippingAddress: ZK_ShippingAddressCreateNestedOneWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedCreateInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_shipping_id: bigint | number
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_customer_id?: bigint | number | null
    zk_order_notes: string
    zk_order_termscondition: string
    ZK_Order_Mapping?: ZK_Order_MappingUncheckedCreateNestedManyWithoutZk_order_mapping_id_fkeyInput
  }

  export type ZK_OrderUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
    ZK_Order_Mapping?: ZK_Order_MappingUpdateManyWithoutZk_order_mapping_id_fkeyInput
    zk_order_customer_id_fkey?: ZK_CustomerUpdateOneWithoutZK_OrderInput
    ZK_ShippingAddress?: ZK_ShippingAddressUpdateOneRequiredWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_customer_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
    ZK_Order_Mapping?: ZK_Order_MappingUncheckedUpdateManyWithoutZk_order_mapping_id_fkeyInput
  }

  export type ZK_OrderCreateManyInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_shipping_id: bigint | number
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_customer_id?: bigint | number | null
    zk_order_notes: string
    zk_order_termscondition: string
  }

  export type ZK_OrderUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_OrderUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_customer_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_Order_MappingCreateInput = {
    zk_order_mapping_id?: bigint | number
    zk_product_id: bigint | number
    zk_product_quantity: number
    zk_product_selling_price: Decimal | number | string
    zk_product_cost_price: Decimal | number | string
    zk_order_mapping_id_fkey: ZK_OrderCreateNestedOneWithoutZK_Order_MappingInput
  }

  export type ZK_Order_MappingUncheckedCreateInput = {
    zk_order_mapping_id?: bigint | number
    zk_order_id: bigint | number
    zk_product_id: bigint | number
    zk_product_quantity: number
    zk_product_selling_price: Decimal | number | string
    zk_product_cost_price: Decimal | number | string
  }

  export type ZK_Order_MappingUpdateInput = {
    zk_order_mapping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_quantity?: IntFieldUpdateOperationsInput | number
    zk_product_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_product_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_mapping_id_fkey?: ZK_OrderUpdateOneRequiredWithoutZK_Order_MappingInput
  }

  export type ZK_Order_MappingUncheckedUpdateInput = {
    zk_order_mapping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_quantity?: IntFieldUpdateOperationsInput | number
    zk_product_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_product_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_Order_MappingCreateManyInput = {
    zk_order_mapping_id?: bigint | number
    zk_order_id: bigint | number
    zk_product_id: bigint | number
    zk_product_quantity: number
    zk_product_selling_price: Decimal | number | string
    zk_product_cost_price: Decimal | number | string
  }

  export type ZK_Order_MappingUpdateManyMutationInput = {
    zk_order_mapping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_quantity?: IntFieldUpdateOperationsInput | number
    zk_product_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_product_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_Order_MappingUncheckedUpdateManyInput = {
    zk_order_mapping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_quantity?: IntFieldUpdateOperationsInput | number
    zk_product_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_product_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_Product_Tax_MappingCreateInput = {
    zkcid: number
    zk_product_tax_mapping_product_fkey: ZKProductCreateNestedOneWithoutZK_TaxesInput
    zk_product_tax_mapping_tax_fkey: ZK_TaxCreateNestedOneWithoutZK_ProductsInput
  }

  export type ZK_Product_Tax_MappingUncheckedCreateInput = {
    zkpid: bigint | number
    zk_tax_id: bigint | number
    zkcid: number
  }

  export type ZK_Product_Tax_MappingUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_product_tax_mapping_product_fkey?: ZKProductUpdateOneRequiredWithoutZK_TaxesInput
    zk_product_tax_mapping_tax_fkey?: ZK_TaxUpdateOneRequiredWithoutZK_ProductsInput
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateInput = {
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkcid?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_Product_Tax_MappingCreateManyInput = {
    zkpid: bigint | number
    zk_tax_id: bigint | number
    zkcid: number
  }

  export type ZK_Product_Tax_MappingUpdateManyMutationInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateManyInput = {
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkcid?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumUSER_PROFILEFilter = {
    equals?: USER_PROFILE
    in?: Enumerable<USER_PROFILE>
    notIn?: Enumerable<USER_PROFILE>
    not?: NestedEnumUSER_PROFILEFilter | USER_PROFILE
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ZKUserCompanyMappingZkuid_zkcidCompoundUniqueInput = {
    zkuid: number
    zkcid: number
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type EnumUSER_PROFILEWithAggregatesFilter = {
    equals?: USER_PROFILE
    in?: Enumerable<USER_PROFILE>
    notIn?: Enumerable<USER_PROFILE>
    not?: NestedEnumUSER_PROFILEWithAggregatesFilter | USER_PROFILE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumUSER_PROFILEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumUSER_PROFILEFilter
    _max?: NestedEnumUSER_PROFILEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumUSER_PROFILEFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type EnumPRODUCT_TYPEFilter = {
    equals?: PRODUCT_TYPE
    in?: Enumerable<PRODUCT_TYPE>
    notIn?: Enumerable<PRODUCT_TYPE>
    not?: NestedEnumPRODUCT_TYPEFilter | PRODUCT_TYPE
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type ZK_Product_Tax_MappingListRelationFilter = {
    every?: ZK_Product_Tax_MappingWhereInput
    some?: ZK_Product_Tax_MappingWhereInput
    none?: ZK_Product_Tax_MappingWhereInput
  }

  export type ZK_UnitRelationFilter = {
    is?: ZK_UnitWhereInput
    isNot?: ZK_UnitWhereInput
  }

  export type ZK_CategoryRelationFilter = {
    is?: ZK_CategoryWhereInput
    isNot?: ZK_CategoryWhereInput
  }

  export type ZKProductZkcid_zkp_nameCompoundUniqueInput = {
    zkcid: number
    zkp_name: string
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBigIntFilter
  }

  export type EnumPRODUCT_TYPEWithAggregatesFilter = {
    equals?: PRODUCT_TYPE
    in?: Enumerable<PRODUCT_TYPE>
    notIn?: Enumerable<PRODUCT_TYPE>
    not?: NestedEnumPRODUCT_TYPEWithAggregatesFilter | PRODUCT_TYPE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumPRODUCT_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumPRODUCT_TYPEFilter
    _max?: NestedEnumPRODUCT_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumPRODUCT_TYPEFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalFilter
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBigIntNullableFilter
  }

  export type ZK_TaxZkcidZk_tax_nameCompoundUniqueInput = {
    zkcid: number
    zk_tax_name: string
  }

  export type ZKProductRelationFilter = {
    is?: ZKProductWhereInput | null
    isNot?: ZKProductWhereInput | null
  }

  export type ZK_UnitZkcidZk_unit_nameCompoundUniqueInput = {
    zkcid: number
    zk_unit_name: string
  }

  export type ZK_OrderListRelationFilter = {
    every?: ZK_OrderWhereInput
    some?: ZK_OrderWhereInput
    none?: ZK_OrderWhereInput
  }

  export type ZK_ShippingAddressRelationFilter = {
    is?: ZK_ShippingAddressWhereInput | null
    isNot?: ZK_ShippingAddressWhereInput | null
  }

  export type ZK_OrderRelationFilter = {
    is?: ZK_OrderWhereInput
    isNot?: ZK_OrderWhereInput
  }

  export type ZK_CustomerRelationFilter = {
    is?: ZK_CustomerWhereInput
    isNot?: ZK_CustomerWhereInput
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type ZK_Order_MappingListRelationFilter = {
    every?: ZK_Order_MappingWhereInput
    some?: ZK_Order_MappingWhereInput
    none?: ZK_Order_MappingWhereInput
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedJsonFilter
    _max?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedJsonFilter
  }

  export type ZK_TaxRelationFilter = {
    is?: ZK_TaxWhereInput
    isNot?: ZK_TaxWhereInput
  }

  export type ZK_Product_Tax_MappingZkpidZk_tax_idCompoundUniqueInput = {
    zkpid: bigint | number
    zk_tax_id: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUSER_PROFILEFieldUpdateOperationsInput = {
    set?: USER_PROFILE
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ZK_Product_Tax_MappingCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_product_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_product_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_product_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_product_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
  }

  export type ZK_UnitCreateNestedOneWithoutZK_ProductInput = {
    create?: XOR<ZK_UnitCreateWithoutZK_ProductInput, ZK_UnitUncheckedCreateWithoutZK_ProductInput>
    connectOrCreate?: ZK_UnitCreateOrConnectWithoutZK_ProductInput
    connect?: ZK_UnitWhereUniqueInput
  }

  export type ZK_CategoryCreateNestedOneWithoutZKProductInput = {
    create?: XOR<ZK_CategoryCreateWithoutZKProductInput, ZK_CategoryUncheckedCreateWithoutZKProductInput>
    connectOrCreate?: ZK_CategoryCreateOrConnectWithoutZKProductInput
    connect?: ZK_CategoryWhereUniqueInput
  }

  export type ZK_Product_Tax_MappingUncheckedCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_product_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_product_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_product_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_product_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumPRODUCT_TYPEFieldUpdateOperationsInput = {
    set?: PRODUCT_TYPE
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ZK_Product_Tax_MappingUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_product_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_product_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_product_fkeyInput>
    upsert?: Enumerable<ZK_Product_Tax_MappingUpsertWithWhereUniqueWithoutZk_product_tax_mapping_product_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_product_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    set?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    disconnect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    delete?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    update?: Enumerable<ZK_Product_Tax_MappingUpdateWithWhereUniqueWithoutZk_product_tax_mapping_product_fkeyInput>
    updateMany?: Enumerable<ZK_Product_Tax_MappingUpdateManyWithWhereWithoutZk_product_tax_mapping_product_fkeyInput>
    deleteMany?: Enumerable<ZK_Product_Tax_MappingScalarWhereInput>
  }

  export type ZK_UnitUpdateOneRequiredWithoutZK_ProductInput = {
    create?: XOR<ZK_UnitCreateWithoutZK_ProductInput, ZK_UnitUncheckedCreateWithoutZK_ProductInput>
    connectOrCreate?: ZK_UnitCreateOrConnectWithoutZK_ProductInput
    upsert?: ZK_UnitUpsertWithoutZK_ProductInput
    connect?: ZK_UnitWhereUniqueInput
    update?: XOR<ZK_UnitUpdateWithoutZK_ProductInput, ZK_UnitUncheckedUpdateWithoutZK_ProductInput>
  }

  export type ZK_CategoryUpdateOneRequiredWithoutZKProductInput = {
    create?: XOR<ZK_CategoryCreateWithoutZKProductInput, ZK_CategoryUncheckedCreateWithoutZKProductInput>
    connectOrCreate?: ZK_CategoryCreateOrConnectWithoutZKProductInput
    upsert?: ZK_CategoryUpsertWithoutZKProductInput
    connect?: ZK_CategoryWhereUniqueInput
    update?: XOR<ZK_CategoryUpdateWithoutZKProductInput, ZK_CategoryUncheckedUpdateWithoutZKProductInput>
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_product_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_product_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_product_fkeyInput>
    upsert?: Enumerable<ZK_Product_Tax_MappingUpsertWithWhereUniqueWithoutZk_product_tax_mapping_product_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_product_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    set?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    disconnect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    delete?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    update?: Enumerable<ZK_Product_Tax_MappingUpdateWithWhereUniqueWithoutZk_product_tax_mapping_product_fkeyInput>
    updateMany?: Enumerable<ZK_Product_Tax_MappingUpdateManyWithWhereWithoutZk_product_tax_mapping_product_fkeyInput>
    deleteMany?: Enumerable<ZK_Product_Tax_MappingScalarWhereInput>
  }

  export type ZK_Product_Tax_MappingCreateNestedManyWithoutZk_product_tax_mapping_tax_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_tax_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_tax_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_tax_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_tax_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
  }

  export type ZK_Product_Tax_MappingUncheckedCreateNestedManyWithoutZk_product_tax_mapping_tax_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_tax_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_tax_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_tax_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_tax_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
  }

  export type ZK_Product_Tax_MappingUpdateManyWithoutZk_product_tax_mapping_tax_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_tax_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_tax_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_tax_fkeyInput>
    upsert?: Enumerable<ZK_Product_Tax_MappingUpsertWithWhereUniqueWithoutZk_product_tax_mapping_tax_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_tax_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    set?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    disconnect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    delete?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    update?: Enumerable<ZK_Product_Tax_MappingUpdateWithWhereUniqueWithoutZk_product_tax_mapping_tax_fkeyInput>
    updateMany?: Enumerable<ZK_Product_Tax_MappingUpdateManyWithWhereWithoutZk_product_tax_mapping_tax_fkeyInput>
    deleteMany?: Enumerable<ZK_Product_Tax_MappingScalarWhereInput>
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZk_product_tax_mapping_tax_fkeyInput = {
    create?: XOR<Enumerable<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_tax_fkeyInput>, Enumerable<ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_tax_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_tax_fkeyInput>
    upsert?: Enumerable<ZK_Product_Tax_MappingUpsertWithWhereUniqueWithoutZk_product_tax_mapping_tax_fkeyInput>
    createMany?: ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_tax_fkeyInputEnvelope
    connect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    set?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    disconnect?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    delete?: Enumerable<ZK_Product_Tax_MappingWhereUniqueInput>
    update?: Enumerable<ZK_Product_Tax_MappingUpdateWithWhereUniqueWithoutZk_product_tax_mapping_tax_fkeyInput>
    updateMany?: Enumerable<ZK_Product_Tax_MappingUpdateManyWithWhereWithoutZk_product_tax_mapping_tax_fkeyInput>
    deleteMany?: Enumerable<ZK_Product_Tax_MappingScalarWhereInput>
  }

  export type ZKProductCreateNestedOneWithoutZK_UnitInput = {
    create?: XOR<ZKProductCreateWithoutZK_UnitInput, ZKProductUncheckedCreateWithoutZK_UnitInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_UnitInput
    connect?: ZKProductWhereUniqueInput
  }

  export type ZKProductUncheckedCreateNestedOneWithoutZK_UnitInput = {
    create?: XOR<ZKProductCreateWithoutZK_UnitInput, ZKProductUncheckedCreateWithoutZK_UnitInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_UnitInput
    connect?: ZKProductWhereUniqueInput
  }

  export type ZKProductUpdateOneWithoutZK_UnitInput = {
    create?: XOR<ZKProductCreateWithoutZK_UnitInput, ZKProductUncheckedCreateWithoutZK_UnitInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_UnitInput
    upsert?: ZKProductUpsertWithoutZK_UnitInput
    connect?: ZKProductWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZKProductUpdateWithoutZK_UnitInput, ZKProductUncheckedUpdateWithoutZK_UnitInput>
  }

  export type ZKProductUncheckedUpdateOneWithoutZK_UnitInput = {
    create?: XOR<ZKProductCreateWithoutZK_UnitInput, ZKProductUncheckedCreateWithoutZK_UnitInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_UnitInput
    upsert?: ZKProductUpsertWithoutZK_UnitInput
    connect?: ZKProductWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZKProductUpdateWithoutZK_UnitInput, ZKProductUncheckedUpdateWithoutZK_UnitInput>
  }

  export type ZKProductCreateNestedOneWithoutZK_CategoryInput = {
    create?: XOR<ZKProductCreateWithoutZK_CategoryInput, ZKProductUncheckedCreateWithoutZK_CategoryInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_CategoryInput
    connect?: ZKProductWhereUniqueInput
  }

  export type ZKProductUncheckedCreateNestedOneWithoutZK_CategoryInput = {
    create?: XOR<ZKProductCreateWithoutZK_CategoryInput, ZKProductUncheckedCreateWithoutZK_CategoryInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_CategoryInput
    connect?: ZKProductWhereUniqueInput
  }

  export type ZKProductUpdateOneWithoutZK_CategoryInput = {
    create?: XOR<ZKProductCreateWithoutZK_CategoryInput, ZKProductUncheckedCreateWithoutZK_CategoryInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_CategoryInput
    upsert?: ZKProductUpsertWithoutZK_CategoryInput
    connect?: ZKProductWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZKProductUpdateWithoutZK_CategoryInput, ZKProductUncheckedUpdateWithoutZK_CategoryInput>
  }

  export type ZKProductUncheckedUpdateOneWithoutZK_CategoryInput = {
    create?: XOR<ZKProductCreateWithoutZK_CategoryInput, ZKProductUncheckedCreateWithoutZK_CategoryInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_CategoryInput
    upsert?: ZKProductUpsertWithoutZK_CategoryInput
    connect?: ZKProductWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZKProductUpdateWithoutZK_CategoryInput, ZKProductUncheckedUpdateWithoutZK_CategoryInput>
  }

  export type ZK_OrderCreateNestedManyWithoutZk_order_customer_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_OrderCreateWithoutZk_order_customer_id_fkeyInput>, Enumerable<ZK_OrderUncheckedCreateWithoutZk_order_customer_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_OrderCreateOrConnectWithoutZk_order_customer_id_fkeyInput>
    createMany?: ZK_OrderCreateManyZk_order_customer_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_OrderWhereUniqueInput>
  }

  export type ZK_ShippingAddressCreateNestedOneWithoutZK_CustomerInput = {
    create?: XOR<ZK_ShippingAddressCreateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedCreateWithoutZK_CustomerInput>
    connectOrCreate?: ZK_ShippingAddressCreateOrConnectWithoutZK_CustomerInput
    connect?: ZK_ShippingAddressWhereUniqueInput
  }

  export type ZK_OrderUncheckedCreateNestedManyWithoutZk_order_customer_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_OrderCreateWithoutZk_order_customer_id_fkeyInput>, Enumerable<ZK_OrderUncheckedCreateWithoutZk_order_customer_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_OrderCreateOrConnectWithoutZk_order_customer_id_fkeyInput>
    createMany?: ZK_OrderCreateManyZk_order_customer_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_OrderWhereUniqueInput>
  }

  export type ZK_ShippingAddressUncheckedCreateNestedOneWithoutZK_CustomerInput = {
    create?: XOR<ZK_ShippingAddressCreateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedCreateWithoutZK_CustomerInput>
    connectOrCreate?: ZK_ShippingAddressCreateOrConnectWithoutZK_CustomerInput
    connect?: ZK_ShippingAddressWhereUniqueInput
  }

  export type ZK_OrderUpdateManyWithoutZk_order_customer_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_OrderCreateWithoutZk_order_customer_id_fkeyInput>, Enumerable<ZK_OrderUncheckedCreateWithoutZk_order_customer_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_OrderCreateOrConnectWithoutZk_order_customer_id_fkeyInput>
    upsert?: Enumerable<ZK_OrderUpsertWithWhereUniqueWithoutZk_order_customer_id_fkeyInput>
    createMany?: ZK_OrderCreateManyZk_order_customer_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_OrderWhereUniqueInput>
    set?: Enumerable<ZK_OrderWhereUniqueInput>
    disconnect?: Enumerable<ZK_OrderWhereUniqueInput>
    delete?: Enumerable<ZK_OrderWhereUniqueInput>
    update?: Enumerable<ZK_OrderUpdateWithWhereUniqueWithoutZk_order_customer_id_fkeyInput>
    updateMany?: Enumerable<ZK_OrderUpdateManyWithWhereWithoutZk_order_customer_id_fkeyInput>
    deleteMany?: Enumerable<ZK_OrderScalarWhereInput>
  }

  export type ZK_ShippingAddressUpdateOneWithoutZK_CustomerInput = {
    create?: XOR<ZK_ShippingAddressCreateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedCreateWithoutZK_CustomerInput>
    connectOrCreate?: ZK_ShippingAddressCreateOrConnectWithoutZK_CustomerInput
    upsert?: ZK_ShippingAddressUpsertWithoutZK_CustomerInput
    connect?: ZK_ShippingAddressWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZK_ShippingAddressUpdateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedUpdateWithoutZK_CustomerInput>
  }

  export type ZK_OrderUncheckedUpdateManyWithoutZk_order_customer_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_OrderCreateWithoutZk_order_customer_id_fkeyInput>, Enumerable<ZK_OrderUncheckedCreateWithoutZk_order_customer_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_OrderCreateOrConnectWithoutZk_order_customer_id_fkeyInput>
    upsert?: Enumerable<ZK_OrderUpsertWithWhereUniqueWithoutZk_order_customer_id_fkeyInput>
    createMany?: ZK_OrderCreateManyZk_order_customer_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_OrderWhereUniqueInput>
    set?: Enumerable<ZK_OrderWhereUniqueInput>
    disconnect?: Enumerable<ZK_OrderWhereUniqueInput>
    delete?: Enumerable<ZK_OrderWhereUniqueInput>
    update?: Enumerable<ZK_OrderUpdateWithWhereUniqueWithoutZk_order_customer_id_fkeyInput>
    updateMany?: Enumerable<ZK_OrderUpdateManyWithWhereWithoutZk_order_customer_id_fkeyInput>
    deleteMany?: Enumerable<ZK_OrderScalarWhereInput>
  }

  export type ZK_ShippingAddressUncheckedUpdateOneWithoutZK_CustomerInput = {
    create?: XOR<ZK_ShippingAddressCreateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedCreateWithoutZK_CustomerInput>
    connectOrCreate?: ZK_ShippingAddressCreateOrConnectWithoutZK_CustomerInput
    upsert?: ZK_ShippingAddressUpsertWithoutZK_CustomerInput
    connect?: ZK_ShippingAddressWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZK_ShippingAddressUpdateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedUpdateWithoutZK_CustomerInput>
  }

  export type ZK_OrderCreateNestedOneWithoutZK_ShippingAddressInput = {
    create?: XOR<ZK_OrderCreateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedCreateWithoutZK_ShippingAddressInput>
    connectOrCreate?: ZK_OrderCreateOrConnectWithoutZK_ShippingAddressInput
    connect?: ZK_OrderWhereUniqueInput
  }

  export type ZK_CustomerCreateNestedOneWithoutZK_ShippingAddressInput = {
    create?: XOR<ZK_CustomerCreateWithoutZK_ShippingAddressInput, ZK_CustomerUncheckedCreateWithoutZK_ShippingAddressInput>
    connectOrCreate?: ZK_CustomerCreateOrConnectWithoutZK_ShippingAddressInput
    connect?: ZK_CustomerWhereUniqueInput
  }

  export type ZK_OrderUncheckedCreateNestedOneWithoutZK_ShippingAddressInput = {
    create?: XOR<ZK_OrderCreateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedCreateWithoutZK_ShippingAddressInput>
    connectOrCreate?: ZK_OrderCreateOrConnectWithoutZK_ShippingAddressInput
    connect?: ZK_OrderWhereUniqueInput
  }

  export type ZK_OrderUpdateOneWithoutZK_ShippingAddressInput = {
    create?: XOR<ZK_OrderCreateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedCreateWithoutZK_ShippingAddressInput>
    connectOrCreate?: ZK_OrderCreateOrConnectWithoutZK_ShippingAddressInput
    upsert?: ZK_OrderUpsertWithoutZK_ShippingAddressInput
    connect?: ZK_OrderWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZK_OrderUpdateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedUpdateWithoutZK_ShippingAddressInput>
  }

  export type ZK_CustomerUpdateOneRequiredWithoutZK_ShippingAddressInput = {
    create?: XOR<ZK_CustomerCreateWithoutZK_ShippingAddressInput, ZK_CustomerUncheckedCreateWithoutZK_ShippingAddressInput>
    connectOrCreate?: ZK_CustomerCreateOrConnectWithoutZK_ShippingAddressInput
    upsert?: ZK_CustomerUpsertWithoutZK_ShippingAddressInput
    connect?: ZK_CustomerWhereUniqueInput
    update?: XOR<ZK_CustomerUpdateWithoutZK_ShippingAddressInput, ZK_CustomerUncheckedUpdateWithoutZK_ShippingAddressInput>
  }

  export type ZK_OrderUncheckedUpdateOneWithoutZK_ShippingAddressInput = {
    create?: XOR<ZK_OrderCreateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedCreateWithoutZK_ShippingAddressInput>
    connectOrCreate?: ZK_OrderCreateOrConnectWithoutZK_ShippingAddressInput
    upsert?: ZK_OrderUpsertWithoutZK_ShippingAddressInput
    connect?: ZK_OrderWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZK_OrderUpdateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedUpdateWithoutZK_ShippingAddressInput>
  }

  export type ZK_Order_MappingCreateNestedManyWithoutZk_order_mapping_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_Order_MappingCreateWithoutZk_order_mapping_id_fkeyInput>, Enumerable<ZK_Order_MappingUncheckedCreateWithoutZk_order_mapping_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Order_MappingCreateOrConnectWithoutZk_order_mapping_id_fkeyInput>
    createMany?: ZK_Order_MappingCreateManyZk_order_mapping_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_Order_MappingWhereUniqueInput>
  }

  export type ZK_CustomerCreateNestedOneWithoutZK_OrderInput = {
    create?: XOR<ZK_CustomerCreateWithoutZK_OrderInput, ZK_CustomerUncheckedCreateWithoutZK_OrderInput>
    connectOrCreate?: ZK_CustomerCreateOrConnectWithoutZK_OrderInput
    connect?: ZK_CustomerWhereUniqueInput
  }

  export type ZK_ShippingAddressCreateNestedOneWithoutZK_OrderInput = {
    create?: XOR<ZK_ShippingAddressCreateWithoutZK_OrderInput, ZK_ShippingAddressUncheckedCreateWithoutZK_OrderInput>
    connectOrCreate?: ZK_ShippingAddressCreateOrConnectWithoutZK_OrderInput
    connect?: ZK_ShippingAddressWhereUniqueInput
  }

  export type ZK_Order_MappingUncheckedCreateNestedManyWithoutZk_order_mapping_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_Order_MappingCreateWithoutZk_order_mapping_id_fkeyInput>, Enumerable<ZK_Order_MappingUncheckedCreateWithoutZk_order_mapping_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Order_MappingCreateOrConnectWithoutZk_order_mapping_id_fkeyInput>
    createMany?: ZK_Order_MappingCreateManyZk_order_mapping_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_Order_MappingWhereUniqueInput>
  }

  export type ZK_Order_MappingUpdateManyWithoutZk_order_mapping_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_Order_MappingCreateWithoutZk_order_mapping_id_fkeyInput>, Enumerable<ZK_Order_MappingUncheckedCreateWithoutZk_order_mapping_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Order_MappingCreateOrConnectWithoutZk_order_mapping_id_fkeyInput>
    upsert?: Enumerable<ZK_Order_MappingUpsertWithWhereUniqueWithoutZk_order_mapping_id_fkeyInput>
    createMany?: ZK_Order_MappingCreateManyZk_order_mapping_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    set?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    disconnect?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    delete?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    update?: Enumerable<ZK_Order_MappingUpdateWithWhereUniqueWithoutZk_order_mapping_id_fkeyInput>
    updateMany?: Enumerable<ZK_Order_MappingUpdateManyWithWhereWithoutZk_order_mapping_id_fkeyInput>
    deleteMany?: Enumerable<ZK_Order_MappingScalarWhereInput>
  }

  export type ZK_CustomerUpdateOneWithoutZK_OrderInput = {
    create?: XOR<ZK_CustomerCreateWithoutZK_OrderInput, ZK_CustomerUncheckedCreateWithoutZK_OrderInput>
    connectOrCreate?: ZK_CustomerCreateOrConnectWithoutZK_OrderInput
    upsert?: ZK_CustomerUpsertWithoutZK_OrderInput
    connect?: ZK_CustomerWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<ZK_CustomerUpdateWithoutZK_OrderInput, ZK_CustomerUncheckedUpdateWithoutZK_OrderInput>
  }

  export type ZK_ShippingAddressUpdateOneRequiredWithoutZK_OrderInput = {
    create?: XOR<ZK_ShippingAddressCreateWithoutZK_OrderInput, ZK_ShippingAddressUncheckedCreateWithoutZK_OrderInput>
    connectOrCreate?: ZK_ShippingAddressCreateOrConnectWithoutZK_OrderInput
    upsert?: ZK_ShippingAddressUpsertWithoutZK_OrderInput
    connect?: ZK_ShippingAddressWhereUniqueInput
    update?: XOR<ZK_ShippingAddressUpdateWithoutZK_OrderInput, ZK_ShippingAddressUncheckedUpdateWithoutZK_OrderInput>
  }

  export type ZK_Order_MappingUncheckedUpdateManyWithoutZk_order_mapping_id_fkeyInput = {
    create?: XOR<Enumerable<ZK_Order_MappingCreateWithoutZk_order_mapping_id_fkeyInput>, Enumerable<ZK_Order_MappingUncheckedCreateWithoutZk_order_mapping_id_fkeyInput>>
    connectOrCreate?: Enumerable<ZK_Order_MappingCreateOrConnectWithoutZk_order_mapping_id_fkeyInput>
    upsert?: Enumerable<ZK_Order_MappingUpsertWithWhereUniqueWithoutZk_order_mapping_id_fkeyInput>
    createMany?: ZK_Order_MappingCreateManyZk_order_mapping_id_fkeyInputEnvelope
    connect?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    set?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    disconnect?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    delete?: Enumerable<ZK_Order_MappingWhereUniqueInput>
    update?: Enumerable<ZK_Order_MappingUpdateWithWhereUniqueWithoutZk_order_mapping_id_fkeyInput>
    updateMany?: Enumerable<ZK_Order_MappingUpdateManyWithWhereWithoutZk_order_mapping_id_fkeyInput>
    deleteMany?: Enumerable<ZK_Order_MappingScalarWhereInput>
  }

  export type ZK_OrderCreateNestedOneWithoutZK_Order_MappingInput = {
    create?: XOR<ZK_OrderCreateWithoutZK_Order_MappingInput, ZK_OrderUncheckedCreateWithoutZK_Order_MappingInput>
    connectOrCreate?: ZK_OrderCreateOrConnectWithoutZK_Order_MappingInput
    connect?: ZK_OrderWhereUniqueInput
  }

  export type ZK_OrderUpdateOneRequiredWithoutZK_Order_MappingInput = {
    create?: XOR<ZK_OrderCreateWithoutZK_Order_MappingInput, ZK_OrderUncheckedCreateWithoutZK_Order_MappingInput>
    connectOrCreate?: ZK_OrderCreateOrConnectWithoutZK_Order_MappingInput
    upsert?: ZK_OrderUpsertWithoutZK_Order_MappingInput
    connect?: ZK_OrderWhereUniqueInput
    update?: XOR<ZK_OrderUpdateWithoutZK_Order_MappingInput, ZK_OrderUncheckedUpdateWithoutZK_Order_MappingInput>
  }

  export type ZKProductCreateNestedOneWithoutZK_TaxesInput = {
    create?: XOR<ZKProductCreateWithoutZK_TaxesInput, ZKProductUncheckedCreateWithoutZK_TaxesInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_TaxesInput
    connect?: ZKProductWhereUniqueInput
  }

  export type ZK_TaxCreateNestedOneWithoutZK_ProductsInput = {
    create?: XOR<ZK_TaxCreateWithoutZK_ProductsInput, ZK_TaxUncheckedCreateWithoutZK_ProductsInput>
    connectOrCreate?: ZK_TaxCreateOrConnectWithoutZK_ProductsInput
    connect?: ZK_TaxWhereUniqueInput
  }

  export type ZKProductUpdateOneRequiredWithoutZK_TaxesInput = {
    create?: XOR<ZKProductCreateWithoutZK_TaxesInput, ZKProductUncheckedCreateWithoutZK_TaxesInput>
    connectOrCreate?: ZKProductCreateOrConnectWithoutZK_TaxesInput
    upsert?: ZKProductUpsertWithoutZK_TaxesInput
    connect?: ZKProductWhereUniqueInput
    update?: XOR<ZKProductUpdateWithoutZK_TaxesInput, ZKProductUncheckedUpdateWithoutZK_TaxesInput>
  }

  export type ZK_TaxUpdateOneRequiredWithoutZK_ProductsInput = {
    create?: XOR<ZK_TaxCreateWithoutZK_ProductsInput, ZK_TaxUncheckedCreateWithoutZK_ProductsInput>
    connectOrCreate?: ZK_TaxCreateOrConnectWithoutZK_ProductsInput
    upsert?: ZK_TaxUpsertWithoutZK_ProductsInput
    connect?: ZK_TaxWhereUniqueInput
    update?: XOR<ZK_TaxUpdateWithoutZK_ProductsInput, ZK_TaxUncheckedUpdateWithoutZK_ProductsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumUSER_PROFILEFilter = {
    equals?: USER_PROFILE
    in?: Enumerable<USER_PROFILE>
    notIn?: Enumerable<USER_PROFILE>
    not?: NestedEnumUSER_PROFILEFilter | USER_PROFILE
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumUSER_PROFILEWithAggregatesFilter = {
    equals?: USER_PROFILE
    in?: Enumerable<USER_PROFILE>
    notIn?: Enumerable<USER_PROFILE>
    not?: NestedEnumUSER_PROFILEWithAggregatesFilter | USER_PROFILE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumUSER_PROFILEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumUSER_PROFILEFilter
    _max?: NestedEnumUSER_PROFILEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumUSER_PROFILEFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedEnumPRODUCT_TYPEFilter = {
    equals?: PRODUCT_TYPE
    in?: Enumerable<PRODUCT_TYPE>
    notIn?: Enumerable<PRODUCT_TYPE>
    not?: NestedEnumPRODUCT_TYPEFilter | PRODUCT_TYPE
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBigIntFilter
  }

  export type NestedEnumPRODUCT_TYPEWithAggregatesFilter = {
    equals?: PRODUCT_TYPE
    in?: Enumerable<PRODUCT_TYPE>
    notIn?: Enumerable<PRODUCT_TYPE>
    not?: NestedEnumPRODUCT_TYPEWithAggregatesFilter | PRODUCT_TYPE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumPRODUCT_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumPRODUCT_TYPEFilter
    _max?: NestedEnumPRODUCT_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumPRODUCT_TYPEFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalFilter
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBigIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_product_fkeyInput = {
    zkcid: number
    zk_product_tax_mapping_tax_fkey: ZK_TaxCreateNestedOneWithoutZK_ProductsInput
  }

  export type ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_product_fkeyInput = {
    zk_tax_id: bigint | number
    zkcid: number
  }

  export type ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_product_fkeyInput = {
    where: ZK_Product_Tax_MappingWhereUniqueInput
    create: XOR<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_product_fkeyInput, ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_product_fkeyInput>
  }

  export type ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_product_fkeyInputEnvelope = {
    data: Enumerable<ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_product_fkeyInput>
    skipDuplicates?: boolean
  }

  export type ZK_UnitCreateWithoutZK_ProductInput = {
    zkcid: number
    zk_unit_id?: bigint | number
    zk_unit_name: string
  }

  export type ZK_UnitUncheckedCreateWithoutZK_ProductInput = {
    zkcid: number
    zk_unit_id?: bigint | number
    zk_unit_name: string
  }

  export type ZK_UnitCreateOrConnectWithoutZK_ProductInput = {
    where: ZK_UnitWhereUniqueInput
    create: XOR<ZK_UnitCreateWithoutZK_ProductInput, ZK_UnitUncheckedCreateWithoutZK_ProductInput>
  }

  export type ZK_CategoryCreateWithoutZKProductInput = {
    zkcid: number
    zk_category_id?: bigint | number
    zk_category_name: string
    zk_category_level?: number
    zk_category_parentid?: bigint | number | null
  }

  export type ZK_CategoryUncheckedCreateWithoutZKProductInput = {
    zkcid: number
    zk_category_id?: bigint | number
    zk_category_name: string
    zk_category_level?: number
    zk_category_parentid?: bigint | number | null
  }

  export type ZK_CategoryCreateOrConnectWithoutZKProductInput = {
    where: ZK_CategoryWhereUniqueInput
    create: XOR<ZK_CategoryCreateWithoutZKProductInput, ZK_CategoryUncheckedCreateWithoutZKProductInput>
  }

  export type ZK_Product_Tax_MappingUpsertWithWhereUniqueWithoutZk_product_tax_mapping_product_fkeyInput = {
    where: ZK_Product_Tax_MappingWhereUniqueInput
    update: XOR<ZK_Product_Tax_MappingUpdateWithoutZk_product_tax_mapping_product_fkeyInput, ZK_Product_Tax_MappingUncheckedUpdateWithoutZk_product_tax_mapping_product_fkeyInput>
    create: XOR<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_product_fkeyInput, ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_product_fkeyInput>
  }

  export type ZK_Product_Tax_MappingUpdateWithWhereUniqueWithoutZk_product_tax_mapping_product_fkeyInput = {
    where: ZK_Product_Tax_MappingWhereUniqueInput
    data: XOR<ZK_Product_Tax_MappingUpdateWithoutZk_product_tax_mapping_product_fkeyInput, ZK_Product_Tax_MappingUncheckedUpdateWithoutZk_product_tax_mapping_product_fkeyInput>
  }

  export type ZK_Product_Tax_MappingUpdateManyWithWhereWithoutZk_product_tax_mapping_product_fkeyInput = {
    where: ZK_Product_Tax_MappingScalarWhereInput
    data: XOR<ZK_Product_Tax_MappingUpdateManyMutationInput, ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZK_TaxesInput>
  }

  export type ZK_Product_Tax_MappingScalarWhereInput = {
    AND?: Enumerable<ZK_Product_Tax_MappingScalarWhereInput>
    OR?: Enumerable<ZK_Product_Tax_MappingScalarWhereInput>
    NOT?: Enumerable<ZK_Product_Tax_MappingScalarWhereInput>
    zkpid?: BigIntFilter | bigint | number
    zk_tax_id?: BigIntFilter | bigint | number
    zkcid?: IntFilter | number
  }

  export type ZK_UnitUpsertWithoutZK_ProductInput = {
    update: XOR<ZK_UnitUpdateWithoutZK_ProductInput, ZK_UnitUncheckedUpdateWithoutZK_ProductInput>
    create: XOR<ZK_UnitCreateWithoutZK_ProductInput, ZK_UnitUncheckedCreateWithoutZK_ProductInput>
  }

  export type ZK_UnitUpdateWithoutZK_ProductInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_unit_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_unit_name?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_UnitUncheckedUpdateWithoutZK_ProductInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_unit_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_unit_name?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_CategoryUpsertWithoutZKProductInput = {
    update: XOR<ZK_CategoryUpdateWithoutZKProductInput, ZK_CategoryUncheckedUpdateWithoutZKProductInput>
    create: XOR<ZK_CategoryCreateWithoutZKProductInput, ZK_CategoryUncheckedCreateWithoutZKProductInput>
  }

  export type ZK_CategoryUpdateWithoutZKProductInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_category_name?: StringFieldUpdateOperationsInput | string
    zk_category_level?: IntFieldUpdateOperationsInput | number
    zk_category_parentid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ZK_CategoryUncheckedUpdateWithoutZKProductInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_category_name?: StringFieldUpdateOperationsInput | string
    zk_category_level?: IntFieldUpdateOperationsInput | number
    zk_category_parentid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_tax_fkeyInput = {
    zkcid: number
    zk_product_tax_mapping_product_fkey: ZKProductCreateNestedOneWithoutZK_TaxesInput
  }

  export type ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_tax_fkeyInput = {
    zkpid: bigint | number
    zkcid: number
  }

  export type ZK_Product_Tax_MappingCreateOrConnectWithoutZk_product_tax_mapping_tax_fkeyInput = {
    where: ZK_Product_Tax_MappingWhereUniqueInput
    create: XOR<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_tax_fkeyInput, ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_tax_fkeyInput>
  }

  export type ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_tax_fkeyInputEnvelope = {
    data: Enumerable<ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_tax_fkeyInput>
    skipDuplicates?: boolean
  }

  export type ZK_Product_Tax_MappingUpsertWithWhereUniqueWithoutZk_product_tax_mapping_tax_fkeyInput = {
    where: ZK_Product_Tax_MappingWhereUniqueInput
    update: XOR<ZK_Product_Tax_MappingUpdateWithoutZk_product_tax_mapping_tax_fkeyInput, ZK_Product_Tax_MappingUncheckedUpdateWithoutZk_product_tax_mapping_tax_fkeyInput>
    create: XOR<ZK_Product_Tax_MappingCreateWithoutZk_product_tax_mapping_tax_fkeyInput, ZK_Product_Tax_MappingUncheckedCreateWithoutZk_product_tax_mapping_tax_fkeyInput>
  }

  export type ZK_Product_Tax_MappingUpdateWithWhereUniqueWithoutZk_product_tax_mapping_tax_fkeyInput = {
    where: ZK_Product_Tax_MappingWhereUniqueInput
    data: XOR<ZK_Product_Tax_MappingUpdateWithoutZk_product_tax_mapping_tax_fkeyInput, ZK_Product_Tax_MappingUncheckedUpdateWithoutZk_product_tax_mapping_tax_fkeyInput>
  }

  export type ZK_Product_Tax_MappingUpdateManyWithWhereWithoutZk_product_tax_mapping_tax_fkeyInput = {
    where: ZK_Product_Tax_MappingScalarWhereInput
    data: XOR<ZK_Product_Tax_MappingUpdateManyMutationInput, ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZK_ProductsInput>
  }

  export type ZKProductCreateWithoutZK_UnitInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput
    ZK_Category?: ZK_CategoryCreateNestedOneWithoutZKProductInput
  }

  export type ZKProductUncheckedCreateWithoutZK_UnitInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zk_category_id?: bigint | number
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUncheckedCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput
  }

  export type ZKProductCreateOrConnectWithoutZK_UnitInput = {
    where: ZKProductWhereUniqueInput
    create: XOR<ZKProductCreateWithoutZK_UnitInput, ZKProductUncheckedCreateWithoutZK_UnitInput>
  }

  export type ZKProductUpsertWithoutZK_UnitInput = {
    update: XOR<ZKProductUpdateWithoutZK_UnitInput, ZKProductUncheckedUpdateWithoutZK_UnitInput>
    create: XOR<ZKProductCreateWithoutZK_UnitInput, ZKProductUncheckedCreateWithoutZK_UnitInput>
  }

  export type ZKProductUpdateWithoutZK_UnitInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput
    ZK_Category?: ZK_CategoryUpdateOneRequiredWithoutZKProductInput
  }

  export type ZKProductUncheckedUpdateWithoutZK_UnitInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput
  }

  export type ZKProductCreateWithoutZK_CategoryInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput
    ZK_Unit: ZK_UnitCreateNestedOneWithoutZK_ProductInput
  }

  export type ZKProductUncheckedCreateWithoutZK_CategoryInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zkp_unit: bigint | number
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUncheckedCreateNestedManyWithoutZk_product_tax_mapping_product_fkeyInput
  }

  export type ZKProductCreateOrConnectWithoutZK_CategoryInput = {
    where: ZKProductWhereUniqueInput
    create: XOR<ZKProductCreateWithoutZK_CategoryInput, ZKProductUncheckedCreateWithoutZK_CategoryInput>
  }

  export type ZKProductUpsertWithoutZK_CategoryInput = {
    update: XOR<ZKProductUpdateWithoutZK_CategoryInput, ZKProductUncheckedUpdateWithoutZK_CategoryInput>
    create: XOR<ZKProductCreateWithoutZK_CategoryInput, ZKProductUncheckedCreateWithoutZK_CategoryInput>
  }

  export type ZKProductUpdateWithoutZK_CategoryInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput
    ZK_Unit?: ZK_UnitUpdateOneRequiredWithoutZK_ProductInput
  }

  export type ZKProductUncheckedUpdateWithoutZK_CategoryInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_unit?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZK_Taxes?: ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZk_product_tax_mapping_product_fkeyInput
  }

  export type ZK_OrderCreateWithoutZk_order_customer_id_fkeyInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_notes: string
    zk_order_termscondition: string
    ZK_Order_Mapping?: ZK_Order_MappingCreateNestedManyWithoutZk_order_mapping_id_fkeyInput
    ZK_ShippingAddress: ZK_ShippingAddressCreateNestedOneWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedCreateWithoutZk_order_customer_id_fkeyInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_shipping_id: bigint | number
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_notes: string
    zk_order_termscondition: string
    ZK_Order_Mapping?: ZK_Order_MappingUncheckedCreateNestedManyWithoutZk_order_mapping_id_fkeyInput
  }

  export type ZK_OrderCreateOrConnectWithoutZk_order_customer_id_fkeyInput = {
    where: ZK_OrderWhereUniqueInput
    create: XOR<ZK_OrderCreateWithoutZk_order_customer_id_fkeyInput, ZK_OrderUncheckedCreateWithoutZk_order_customer_id_fkeyInput>
  }

  export type ZK_OrderCreateManyZk_order_customer_id_fkeyInputEnvelope = {
    data: Enumerable<ZK_OrderCreateManyZk_order_customer_id_fkeyInput>
    skipDuplicates?: boolean
  }

  export type ZK_ShippingAddressCreateWithoutZK_CustomerInput = {
    zkcid: number
    zk_shipping_id?: bigint | number
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2?: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
    ZK_Order?: ZK_OrderCreateNestedOneWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressUncheckedCreateWithoutZK_CustomerInput = {
    zkcid: number
    zk_shipping_id?: bigint | number
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2?: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
    ZK_Order?: ZK_OrderUncheckedCreateNestedOneWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressCreateOrConnectWithoutZK_CustomerInput = {
    where: ZK_ShippingAddressWhereUniqueInput
    create: XOR<ZK_ShippingAddressCreateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedCreateWithoutZK_CustomerInput>
  }

  export type ZK_OrderUpsertWithWhereUniqueWithoutZk_order_customer_id_fkeyInput = {
    where: ZK_OrderWhereUniqueInput
    update: XOR<ZK_OrderUpdateWithoutZk_order_customer_id_fkeyInput, ZK_OrderUncheckedUpdateWithoutZk_order_customer_id_fkeyInput>
    create: XOR<ZK_OrderCreateWithoutZk_order_customer_id_fkeyInput, ZK_OrderUncheckedCreateWithoutZk_order_customer_id_fkeyInput>
  }

  export type ZK_OrderUpdateWithWhereUniqueWithoutZk_order_customer_id_fkeyInput = {
    where: ZK_OrderWhereUniqueInput
    data: XOR<ZK_OrderUpdateWithoutZk_order_customer_id_fkeyInput, ZK_OrderUncheckedUpdateWithoutZk_order_customer_id_fkeyInput>
  }

  export type ZK_OrderUpdateManyWithWhereWithoutZk_order_customer_id_fkeyInput = {
    where: ZK_OrderScalarWhereInput
    data: XOR<ZK_OrderUpdateManyMutationInput, ZK_OrderUncheckedUpdateManyWithoutZK_OrderInput>
  }

  export type ZK_OrderScalarWhereInput = {
    AND?: Enumerable<ZK_OrderScalarWhereInput>
    OR?: Enumerable<ZK_OrderScalarWhereInput>
    NOT?: Enumerable<ZK_OrderScalarWhereInput>
    zkcid?: IntFilter | number
    zk_order_id?: BigIntFilter | bigint | number
    zk_order_number?: StringFilter | string
    zk_shipping_id?: BigIntFilter | bigint | number
    zk_order_description?: StringNullableFilter | string | null
    zk_order_total_amount?: DecimalFilter | Decimal | number | string
    zk_order_total_tax?: JsonFilter
    zk_order_total_discount?: JsonFilter
    zk_order_createAt?: DateTimeFilter | Date | string
    zk_order_updatedAt?: DateTimeFilter | Date | string
    zk_order_createby?: IntFilter | number
    zk_order_customer_id?: BigIntNullableFilter | bigint | number | null
    zk_order_notes?: StringFilter | string
    zk_order_termscondition?: StringFilter | string
  }

  export type ZK_ShippingAddressUpsertWithoutZK_CustomerInput = {
    update: XOR<ZK_ShippingAddressUpdateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedUpdateWithoutZK_CustomerInput>
    create: XOR<ZK_ShippingAddressCreateWithoutZK_CustomerInput, ZK_ShippingAddressUncheckedCreateWithoutZK_CustomerInput>
  }

  export type ZK_ShippingAddressUpdateWithoutZK_CustomerInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
    ZK_Order?: ZK_OrderUpdateOneWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressUncheckedUpdateWithoutZK_CustomerInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
    ZK_Order?: ZK_OrderUncheckedUpdateOneWithoutZK_ShippingAddressInput
  }

  export type ZK_OrderCreateWithoutZK_ShippingAddressInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_notes: string
    zk_order_termscondition: string
    ZK_Order_Mapping?: ZK_Order_MappingCreateNestedManyWithoutZk_order_mapping_id_fkeyInput
    zk_order_customer_id_fkey?: ZK_CustomerCreateNestedOneWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedCreateWithoutZK_ShippingAddressInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_customer_id?: bigint | number | null
    zk_order_notes: string
    zk_order_termscondition: string
    ZK_Order_Mapping?: ZK_Order_MappingUncheckedCreateNestedManyWithoutZk_order_mapping_id_fkeyInput
  }

  export type ZK_OrderCreateOrConnectWithoutZK_ShippingAddressInput = {
    where: ZK_OrderWhereUniqueInput
    create: XOR<ZK_OrderCreateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedCreateWithoutZK_ShippingAddressInput>
  }

  export type ZK_CustomerCreateWithoutZK_ShippingAddressInput = {
    zkcid: number
    zk_customer_id?: bigint | number
    zk_customer_name: string
    zk_customer_mobile?: string | null
    zk_customer_email?: string | null
    zk_customer_other_details: string
    ZK_Order?: ZK_OrderCreateNestedManyWithoutZk_order_customer_id_fkeyInput
  }

  export type ZK_CustomerUncheckedCreateWithoutZK_ShippingAddressInput = {
    zkcid: number
    zk_customer_id?: bigint | number
    zk_customer_name: string
    zk_customer_mobile?: string | null
    zk_customer_email?: string | null
    zk_customer_other_details: string
    ZK_Order?: ZK_OrderUncheckedCreateNestedManyWithoutZk_order_customer_id_fkeyInput
  }

  export type ZK_CustomerCreateOrConnectWithoutZK_ShippingAddressInput = {
    where: ZK_CustomerWhereUniqueInput
    create: XOR<ZK_CustomerCreateWithoutZK_ShippingAddressInput, ZK_CustomerUncheckedCreateWithoutZK_ShippingAddressInput>
  }

  export type ZK_OrderUpsertWithoutZK_ShippingAddressInput = {
    update: XOR<ZK_OrderUpdateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedUpdateWithoutZK_ShippingAddressInput>
    create: XOR<ZK_OrderCreateWithoutZK_ShippingAddressInput, ZK_OrderUncheckedCreateWithoutZK_ShippingAddressInput>
  }

  export type ZK_OrderUpdateWithoutZK_ShippingAddressInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
    ZK_Order_Mapping?: ZK_Order_MappingUpdateManyWithoutZk_order_mapping_id_fkeyInput
    zk_order_customer_id_fkey?: ZK_CustomerUpdateOneWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedUpdateWithoutZK_ShippingAddressInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_customer_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
    ZK_Order_Mapping?: ZK_Order_MappingUncheckedUpdateManyWithoutZk_order_mapping_id_fkeyInput
  }

  export type ZK_CustomerUpsertWithoutZK_ShippingAddressInput = {
    update: XOR<ZK_CustomerUpdateWithoutZK_ShippingAddressInput, ZK_CustomerUncheckedUpdateWithoutZK_ShippingAddressInput>
    create: XOR<ZK_CustomerCreateWithoutZK_ShippingAddressInput, ZK_CustomerUncheckedCreateWithoutZK_ShippingAddressInput>
  }

  export type ZK_CustomerUpdateWithoutZK_ShippingAddressInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
    ZK_Order?: ZK_OrderUpdateManyWithoutZk_order_customer_id_fkeyInput
  }

  export type ZK_CustomerUncheckedUpdateWithoutZK_ShippingAddressInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
    ZK_Order?: ZK_OrderUncheckedUpdateManyWithoutZk_order_customer_id_fkeyInput
  }

  export type ZK_Order_MappingCreateWithoutZk_order_mapping_id_fkeyInput = {
    zk_order_mapping_id?: bigint | number
    zk_product_id: bigint | number
    zk_product_quantity: number
    zk_product_selling_price: Decimal | number | string
    zk_product_cost_price: Decimal | number | string
  }

  export type ZK_Order_MappingUncheckedCreateWithoutZk_order_mapping_id_fkeyInput = {
    zk_order_mapping_id?: bigint | number
    zk_product_id: bigint | number
    zk_product_quantity: number
    zk_product_selling_price: Decimal | number | string
    zk_product_cost_price: Decimal | number | string
  }

  export type ZK_Order_MappingCreateOrConnectWithoutZk_order_mapping_id_fkeyInput = {
    where: ZK_Order_MappingWhereUniqueInput
    create: XOR<ZK_Order_MappingCreateWithoutZk_order_mapping_id_fkeyInput, ZK_Order_MappingUncheckedCreateWithoutZk_order_mapping_id_fkeyInput>
  }

  export type ZK_Order_MappingCreateManyZk_order_mapping_id_fkeyInputEnvelope = {
    data: Enumerable<ZK_Order_MappingCreateManyZk_order_mapping_id_fkeyInput>
    skipDuplicates?: boolean
  }

  export type ZK_CustomerCreateWithoutZK_OrderInput = {
    zkcid: number
    zk_customer_id?: bigint | number
    zk_customer_name: string
    zk_customer_mobile?: string | null
    zk_customer_email?: string | null
    zk_customer_other_details: string
    ZK_ShippingAddress?: ZK_ShippingAddressCreateNestedOneWithoutZK_CustomerInput
  }

  export type ZK_CustomerUncheckedCreateWithoutZK_OrderInput = {
    zkcid: number
    zk_customer_id?: bigint | number
    zk_customer_name: string
    zk_customer_mobile?: string | null
    zk_customer_email?: string | null
    zk_customer_other_details: string
    ZK_ShippingAddress?: ZK_ShippingAddressUncheckedCreateNestedOneWithoutZK_CustomerInput
  }

  export type ZK_CustomerCreateOrConnectWithoutZK_OrderInput = {
    where: ZK_CustomerWhereUniqueInput
    create: XOR<ZK_CustomerCreateWithoutZK_OrderInput, ZK_CustomerUncheckedCreateWithoutZK_OrderInput>
  }

  export type ZK_ShippingAddressCreateWithoutZK_OrderInput = {
    zkcid: number
    zk_shipping_id?: bigint | number
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2?: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
    ZK_Customer: ZK_CustomerCreateNestedOneWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressUncheckedCreateWithoutZK_OrderInput = {
    zkcid: number
    zk_customer_id: bigint | number
    zk_shipping_id?: bigint | number
    zk_name: string
    zk_contact_number: string
    zk_addressline_1: string
    zk_addressline_2?: string | null
    zk_state: string
    zk_country: string
    zk_pincode: number
  }

  export type ZK_ShippingAddressCreateOrConnectWithoutZK_OrderInput = {
    where: ZK_ShippingAddressWhereUniqueInput
    create: XOR<ZK_ShippingAddressCreateWithoutZK_OrderInput, ZK_ShippingAddressUncheckedCreateWithoutZK_OrderInput>
  }

  export type ZK_Order_MappingUpsertWithWhereUniqueWithoutZk_order_mapping_id_fkeyInput = {
    where: ZK_Order_MappingWhereUniqueInput
    update: XOR<ZK_Order_MappingUpdateWithoutZk_order_mapping_id_fkeyInput, ZK_Order_MappingUncheckedUpdateWithoutZk_order_mapping_id_fkeyInput>
    create: XOR<ZK_Order_MappingCreateWithoutZk_order_mapping_id_fkeyInput, ZK_Order_MappingUncheckedCreateWithoutZk_order_mapping_id_fkeyInput>
  }

  export type ZK_Order_MappingUpdateWithWhereUniqueWithoutZk_order_mapping_id_fkeyInput = {
    where: ZK_Order_MappingWhereUniqueInput
    data: XOR<ZK_Order_MappingUpdateWithoutZk_order_mapping_id_fkeyInput, ZK_Order_MappingUncheckedUpdateWithoutZk_order_mapping_id_fkeyInput>
  }

  export type ZK_Order_MappingUpdateManyWithWhereWithoutZk_order_mapping_id_fkeyInput = {
    where: ZK_Order_MappingScalarWhereInput
    data: XOR<ZK_Order_MappingUpdateManyMutationInput, ZK_Order_MappingUncheckedUpdateManyWithoutZK_Order_MappingInput>
  }

  export type ZK_Order_MappingScalarWhereInput = {
    AND?: Enumerable<ZK_Order_MappingScalarWhereInput>
    OR?: Enumerable<ZK_Order_MappingScalarWhereInput>
    NOT?: Enumerable<ZK_Order_MappingScalarWhereInput>
    zk_order_mapping_id?: BigIntFilter | bigint | number
    zk_order_id?: BigIntFilter | bigint | number
    zk_product_id?: BigIntFilter | bigint | number
    zk_product_quantity?: IntFilter | number
    zk_product_selling_price?: DecimalFilter | Decimal | number | string
    zk_product_cost_price?: DecimalFilter | Decimal | number | string
  }

  export type ZK_CustomerUpsertWithoutZK_OrderInput = {
    update: XOR<ZK_CustomerUpdateWithoutZK_OrderInput, ZK_CustomerUncheckedUpdateWithoutZK_OrderInput>
    create: XOR<ZK_CustomerCreateWithoutZK_OrderInput, ZK_CustomerUncheckedCreateWithoutZK_OrderInput>
  }

  export type ZK_CustomerUpdateWithoutZK_OrderInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
    ZK_ShippingAddress?: ZK_ShippingAddressUpdateOneWithoutZK_CustomerInput
  }

  export type ZK_CustomerUncheckedUpdateWithoutZK_OrderInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_customer_name?: StringFieldUpdateOperationsInput | string
    zk_customer_mobile?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_email?: NullableStringFieldUpdateOperationsInput | string | null
    zk_customer_other_details?: StringFieldUpdateOperationsInput | string
    ZK_ShippingAddress?: ZK_ShippingAddressUncheckedUpdateOneWithoutZK_CustomerInput
  }

  export type ZK_ShippingAddressUpsertWithoutZK_OrderInput = {
    update: XOR<ZK_ShippingAddressUpdateWithoutZK_OrderInput, ZK_ShippingAddressUncheckedUpdateWithoutZK_OrderInput>
    create: XOR<ZK_ShippingAddressCreateWithoutZK_OrderInput, ZK_ShippingAddressUncheckedCreateWithoutZK_OrderInput>
  }

  export type ZK_ShippingAddressUpdateWithoutZK_OrderInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
    ZK_Customer?: ZK_CustomerUpdateOneRequiredWithoutZK_ShippingAddressInput
  }

  export type ZK_ShippingAddressUncheckedUpdateWithoutZK_OrderInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_customer_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_name?: StringFieldUpdateOperationsInput | string
    zk_contact_number?: StringFieldUpdateOperationsInput | string
    zk_addressline_1?: StringFieldUpdateOperationsInput | string
    zk_addressline_2?: NullableStringFieldUpdateOperationsInput | string | null
    zk_state?: StringFieldUpdateOperationsInput | string
    zk_country?: StringFieldUpdateOperationsInput | string
    zk_pincode?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_OrderCreateWithoutZK_Order_MappingInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_notes: string
    zk_order_termscondition: string
    zk_order_customer_id_fkey?: ZK_CustomerCreateNestedOneWithoutZK_OrderInput
    ZK_ShippingAddress: ZK_ShippingAddressCreateNestedOneWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedCreateWithoutZK_Order_MappingInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_shipping_id: bigint | number
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_customer_id?: bigint | number | null
    zk_order_notes: string
    zk_order_termscondition: string
  }

  export type ZK_OrderCreateOrConnectWithoutZK_Order_MappingInput = {
    where: ZK_OrderWhereUniqueInput
    create: XOR<ZK_OrderCreateWithoutZK_Order_MappingInput, ZK_OrderUncheckedCreateWithoutZK_Order_MappingInput>
  }

  export type ZK_OrderUpsertWithoutZK_Order_MappingInput = {
    update: XOR<ZK_OrderUpdateWithoutZK_Order_MappingInput, ZK_OrderUncheckedUpdateWithoutZK_Order_MappingInput>
    create: XOR<ZK_OrderCreateWithoutZK_Order_MappingInput, ZK_OrderUncheckedCreateWithoutZK_Order_MappingInput>
  }

  export type ZK_OrderUpdateWithoutZK_Order_MappingInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
    zk_order_customer_id_fkey?: ZK_CustomerUpdateOneWithoutZK_OrderInput
    ZK_ShippingAddress?: ZK_ShippingAddressUpdateOneRequiredWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedUpdateWithoutZK_Order_MappingInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_customer_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
  }

  export type ZKProductCreateWithoutZK_TaxesInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
    ZK_Unit: ZK_UnitCreateNestedOneWithoutZK_ProductInput
    ZK_Category?: ZK_CategoryCreateNestedOneWithoutZKProductInput
  }

  export type ZKProductUncheckedCreateWithoutZK_TaxesInput = {
    zkcid: number
    zkpid?: bigint | number
    zkp_type?: PRODUCT_TYPE
    zkp_code?: string | null
    zkp_name: string
    zkp_description?: string | null
    zk_category_id?: bigint | number
    zkp_unit: bigint | number
    zkp_unit_selling_price?: Decimal | number | string
    zkp_unit_cost_price?: Decimal | number | string
    zkp_product_img?: string | null
    zkp_char1?: string | null
    zkp_char2?: string | null
    zkp_char3?: string | null
    zkp_char4?: string | null
    zkp_char5?: string | null
    zkp_number1?: bigint | number | null
    zkp_number2?: bigint | number | null
    zkp_number3?: bigint | number | null
  }

  export type ZKProductCreateOrConnectWithoutZK_TaxesInput = {
    where: ZKProductWhereUniqueInput
    create: XOR<ZKProductCreateWithoutZK_TaxesInput, ZKProductUncheckedCreateWithoutZK_TaxesInput>
  }

  export type ZK_TaxCreateWithoutZK_ProductsInput = {
    zkcid: number
    zk_tax_id?: bigint | number
    zk_tax_name: string
    zk_tax_percentage?: Decimal | number | string
  }

  export type ZK_TaxUncheckedCreateWithoutZK_ProductsInput = {
    zkcid: number
    zk_tax_id?: bigint | number
    zk_tax_name: string
    zk_tax_percentage?: Decimal | number | string
  }

  export type ZK_TaxCreateOrConnectWithoutZK_ProductsInput = {
    where: ZK_TaxWhereUniqueInput
    create: XOR<ZK_TaxCreateWithoutZK_ProductsInput, ZK_TaxUncheckedCreateWithoutZK_ProductsInput>
  }

  export type ZKProductUpsertWithoutZK_TaxesInput = {
    update: XOR<ZKProductUpdateWithoutZK_TaxesInput, ZKProductUncheckedUpdateWithoutZK_TaxesInput>
    create: XOR<ZKProductCreateWithoutZK_TaxesInput, ZKProductUncheckedCreateWithoutZK_TaxesInput>
  }

  export type ZKProductUpdateWithoutZK_TaxesInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ZK_Unit?: ZK_UnitUpdateOneRequiredWithoutZK_ProductInput
    ZK_Category?: ZK_CategoryUpdateOneRequiredWithoutZKProductInput
  }

  export type ZKProductUncheckedUpdateWithoutZK_TaxesInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | PRODUCT_TYPE
    zkp_code?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_name?: StringFieldUpdateOperationsInput | string
    zkp_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_category_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit?: BigIntFieldUpdateOperationsInput | bigint | number
    zkp_unit_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_unit_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zkp_product_img?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char1?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char2?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char3?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char4?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_char5?: NullableStringFieldUpdateOperationsInput | string | null
    zkp_number1?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number2?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zkp_number3?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ZK_TaxUpsertWithoutZK_ProductsInput = {
    update: XOR<ZK_TaxUpdateWithoutZK_ProductsInput, ZK_TaxUncheckedUpdateWithoutZK_ProductsInput>
    create: XOR<ZK_TaxCreateWithoutZK_ProductsInput, ZK_TaxUncheckedCreateWithoutZK_ProductsInput>
  }

  export type ZK_TaxUpdateWithoutZK_ProductsInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_name?: StringFieldUpdateOperationsInput | string
    zk_tax_percentage?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_TaxUncheckedUpdateWithoutZK_ProductsInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_tax_name?: StringFieldUpdateOperationsInput | string
    zk_tax_percentage?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_product_fkeyInput = {
    zk_tax_id: bigint | number
    zkcid: number
  }

  export type ZK_Product_Tax_MappingUpdateWithoutZk_product_tax_mapping_product_fkeyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_product_tax_mapping_tax_fkey?: ZK_TaxUpdateOneRequiredWithoutZK_ProductsInput
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateWithoutZk_product_tax_mapping_product_fkeyInput = {
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkcid?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZK_TaxesInput = {
    zk_tax_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zkcid?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_Product_Tax_MappingCreateManyZk_product_tax_mapping_tax_fkeyInput = {
    zkpid: bigint | number
    zkcid: number
  }

  export type ZK_Product_Tax_MappingUpdateWithoutZk_product_tax_mapping_tax_fkeyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_product_tax_mapping_product_fkey?: ZKProductUpdateOneRequiredWithoutZK_TaxesInput
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateWithoutZk_product_tax_mapping_tax_fkeyInput = {
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkcid?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_Product_Tax_MappingUncheckedUpdateManyWithoutZK_ProductsInput = {
    zkpid?: BigIntFieldUpdateOperationsInput | bigint | number
    zkcid?: IntFieldUpdateOperationsInput | number
  }

  export type ZK_OrderCreateManyZk_order_customer_id_fkeyInput = {
    zkcid: number
    zk_order_id?: bigint | number
    zk_order_number: string
    zk_shipping_id: bigint | number
    zk_order_description?: string | null
    zk_order_total_amount: Decimal | number | string
    zk_order_total_tax: InputJsonValue
    zk_order_total_discount: InputJsonValue
    zk_order_createAt?: Date | string
    zk_order_updatedAt?: Date | string
    zk_order_createby: number
    zk_order_notes: string
    zk_order_termscondition: string
  }

  export type ZK_OrderUpdateWithoutZk_order_customer_id_fkeyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
    ZK_Order_Mapping?: ZK_Order_MappingUpdateManyWithoutZk_order_mapping_id_fkeyInput
    ZK_ShippingAddress?: ZK_ShippingAddressUpdateOneRequiredWithoutZK_OrderInput
  }

  export type ZK_OrderUncheckedUpdateWithoutZk_order_customer_id_fkeyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
    ZK_Order_Mapping?: ZK_Order_MappingUncheckedUpdateManyWithoutZk_order_mapping_id_fkeyInput
  }

  export type ZK_OrderUncheckedUpdateManyWithoutZK_OrderInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    zk_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_number?: StringFieldUpdateOperationsInput | string
    zk_shipping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_order_description?: NullableStringFieldUpdateOperationsInput | string | null
    zk_order_total_amount?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_order_total_tax?: InputJsonValue
    zk_order_total_discount?: InputJsonValue
    zk_order_createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zk_order_createby?: IntFieldUpdateOperationsInput | number
    zk_order_notes?: StringFieldUpdateOperationsInput | string
    zk_order_termscondition?: StringFieldUpdateOperationsInput | string
  }

  export type ZK_Order_MappingCreateManyZk_order_mapping_id_fkeyInput = {
    zk_order_mapping_id?: bigint | number
    zk_product_id: bigint | number
    zk_product_quantity: number
    zk_product_selling_price: Decimal | number | string
    zk_product_cost_price: Decimal | number | string
  }

  export type ZK_Order_MappingUpdateWithoutZk_order_mapping_id_fkeyInput = {
    zk_order_mapping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_quantity?: IntFieldUpdateOperationsInput | number
    zk_product_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_product_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_Order_MappingUncheckedUpdateWithoutZk_order_mapping_id_fkeyInput = {
    zk_order_mapping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_quantity?: IntFieldUpdateOperationsInput | number
    zk_product_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_product_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }

  export type ZK_Order_MappingUncheckedUpdateManyWithoutZK_Order_MappingInput = {
    zk_order_mapping_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_id?: BigIntFieldUpdateOperationsInput | bigint | number
    zk_product_quantity?: IntFieldUpdateOperationsInput | number
    zk_product_selling_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    zk_product_cost_price?: DecimalFieldUpdateOperationsInput | Decimal | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}