
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
 * Model ZarkUser
 */

export type ZarkUser = {
  zkuid: number
  firstname: string
  lastname: string
  email: string | null
  mobile_number: string | null
  createAt: Date
  updatedAt: Date
  isEmailValid: boolean
  isMobileValid: boolean
  password: string | null
  loginType: LOGIN_TYPE
  otherLoginDetails: Prisma.JsonValue | null
  country: string
  timezone: string
  language: LANGUAGE
  isActive: boolean
}

/**
 * Model Authtoken
 */

export type Authtoken = {
  authId: number
  createAt: Date
  updatedAt: Date
  expiration: Date
  loginInfo: Prisma.JsonValue
  authToken: string
  authUserId: number
}

/**
 * Model ZarkCompany
 */

export type ZarkCompany = {
  zkcid: number
  companyName: string
  companyAddress: string
  country: string
  taxNumber: string
  createAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const LOGIN_TYPE: {
  FACEBOOK: 'FACEBOOK',
  GOOGLE: 'GOOGLE',
  APPLE: 'APPLE',
  EMAIL: 'EMAIL'
};

export type LOGIN_TYPE = (typeof LOGIN_TYPE)[keyof typeof LOGIN_TYPE]


export const LANGUAGE: {
  en: 'en'
};

export type LANGUAGE = (typeof LANGUAGE)[keyof typeof LANGUAGE]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ZarkUsers
 * const zarkUsers = await prisma.zarkUser.findMany()
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
   * // Fetch zero or more ZarkUsers
   * const zarkUsers = await prisma.zarkUser.findMany()
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
   * `prisma.zarkUser`: Exposes CRUD operations for the **ZarkUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZarkUsers
    * const zarkUsers = await prisma.zarkUser.findMany()
    * ```
    */
  get zarkUser(): Prisma.ZarkUserDelegate<GlobalReject>;

  /**
   * `prisma.authtoken`: Exposes CRUD operations for the **Authtoken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authtokens
    * const authtokens = await prisma.authtoken.findMany()
    * ```
    */
  get authtoken(): Prisma.AuthtokenDelegate<GlobalReject>;

  /**
   * `prisma.zarkCompany`: Exposes CRUD operations for the **ZarkCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZarkCompanies
    * const zarkCompanies = await prisma.zarkCompany.findMany()
    * ```
    */
  get zarkCompany(): Prisma.ZarkCompanyDelegate<GlobalReject>;
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
   * Query Engine version: 1be4cd60b89afa04b192acb1ef47758a39810f3a
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
    ZarkUser: 'ZarkUser',
    Authtoken: 'Authtoken',
    ZarkCompany: 'ZarkCompany'
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
   * Model ZarkUser
   */


  export type AggregateZarkUser = {
    _count: ZarkUserCountAggregateOutputType | null
    count: ZarkUserCountAggregateOutputType | null
    _avg: ZarkUserAvgAggregateOutputType | null
    avg: ZarkUserAvgAggregateOutputType | null
    _sum: ZarkUserSumAggregateOutputType | null
    sum: ZarkUserSumAggregateOutputType | null
    _min: ZarkUserMinAggregateOutputType | null
    min: ZarkUserMinAggregateOutputType | null
    _max: ZarkUserMaxAggregateOutputType | null
    max: ZarkUserMaxAggregateOutputType | null
  }

  export type ZarkUserAvgAggregateOutputType = {
    zkuid: number | null
  }

  export type ZarkUserSumAggregateOutputType = {
    zkuid: number | null
  }

  export type ZarkUserMinAggregateOutputType = {
    zkuid: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    mobile_number: string | null
    createAt: Date | null
    updatedAt: Date | null
    isEmailValid: boolean | null
    isMobileValid: boolean | null
    password: string | null
    loginType: LOGIN_TYPE | null
    country: string | null
    timezone: string | null
    language: LANGUAGE | null
    isActive: boolean | null
  }

  export type ZarkUserMaxAggregateOutputType = {
    zkuid: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    mobile_number: string | null
    createAt: Date | null
    updatedAt: Date | null
    isEmailValid: boolean | null
    isMobileValid: boolean | null
    password: string | null
    loginType: LOGIN_TYPE | null
    country: string | null
    timezone: string | null
    language: LANGUAGE | null
    isActive: boolean | null
  }

  export type ZarkUserCountAggregateOutputType = {
    zkuid: number
    firstname: number
    lastname: number
    email: number
    mobile_number: number
    createAt: number
    updatedAt: number
    isEmailValid: number
    isMobileValid: number
    password: number
    loginType: number
    otherLoginDetails: number
    country: number
    timezone: number
    language: number
    isActive: number
    _all: number
  }


  export type ZarkUserAvgAggregateInputType = {
    zkuid?: true
  }

  export type ZarkUserSumAggregateInputType = {
    zkuid?: true
  }

  export type ZarkUserMinAggregateInputType = {
    zkuid?: true
    firstname?: true
    lastname?: true
    email?: true
    mobile_number?: true
    createAt?: true
    updatedAt?: true
    isEmailValid?: true
    isMobileValid?: true
    password?: true
    loginType?: true
    country?: true
    timezone?: true
    language?: true
    isActive?: true
  }

  export type ZarkUserMaxAggregateInputType = {
    zkuid?: true
    firstname?: true
    lastname?: true
    email?: true
    mobile_number?: true
    createAt?: true
    updatedAt?: true
    isEmailValid?: true
    isMobileValid?: true
    password?: true
    loginType?: true
    country?: true
    timezone?: true
    language?: true
    isActive?: true
  }

  export type ZarkUserCountAggregateInputType = {
    zkuid?: true
    firstname?: true
    lastname?: true
    email?: true
    mobile_number?: true
    createAt?: true
    updatedAt?: true
    isEmailValid?: true
    isMobileValid?: true
    password?: true
    loginType?: true
    otherLoginDetails?: true
    country?: true
    timezone?: true
    language?: true
    isActive?: true
    _all?: true
  }

  export type ZarkUserAggregateArgs = {
    /**
     * Filter which ZarkUser to aggregate.
     * 
    **/
    where?: ZarkUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZarkUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ZarkUserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZarkUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZarkUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZarkUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZarkUsers
    **/
    _count?: true | ZarkUserCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZarkUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZarkUserAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZarkUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZarkUserSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZarkUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZarkUserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZarkUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZarkUserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZarkUserMaxAggregateInputType
  }

  export type GetZarkUserAggregateType<T extends ZarkUserAggregateArgs> = {
        [P in keyof T & keyof AggregateZarkUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZarkUser[P]>
      : GetScalarType<T[P], AggregateZarkUser[P]>
  }


    
    
  export type ZarkUserGroupByArgs = {
    where?: ZarkUserWhereInput
    orderBy?: Enumerable<ZarkUserOrderByInput>
    by: Array<ZarkUserScalarFieldEnum>
    having?: ZarkUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZarkUserCountAggregateInputType | true
    _avg?: ZarkUserAvgAggregateInputType
    _sum?: ZarkUserSumAggregateInputType
    _min?: ZarkUserMinAggregateInputType
    _max?: ZarkUserMaxAggregateInputType
  }


  export type ZarkUserGroupByOutputType = {
    zkuid: number
    firstname: string
    lastname: string
    email: string | null
    mobile_number: string | null
    createAt: Date
    updatedAt: Date
    isEmailValid: boolean
    isMobileValid: boolean
    password: string | null
    loginType: LOGIN_TYPE
    otherLoginDetails: JsonValue | null
    country: string
    timezone: string
    language: LANGUAGE
    isActive: boolean
    _count: ZarkUserCountAggregateOutputType | null
    _avg: ZarkUserAvgAggregateOutputType | null
    _sum: ZarkUserSumAggregateOutputType | null
    _min: ZarkUserMinAggregateOutputType | null
    _max: ZarkUserMaxAggregateOutputType | null
  }

  type GetZarkUserGroupByPayload<T extends ZarkUserGroupByArgs> = Promise<
    Array<
      PickArray<ZarkUserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZarkUserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZarkUserGroupByOutputType[P]> 
            : GetScalarType<T[P], ZarkUserGroupByOutputType[P]>
        }
      > 
    >


  export type ZarkUserSelect = {
    zkuid?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    mobile_number?: boolean
    createAt?: boolean
    updatedAt?: boolean
    isEmailValid?: boolean
    isMobileValid?: boolean
    password?: boolean
    loginType?: boolean
    authToken?: boolean | AuthtokenFindManyArgs
    otherLoginDetails?: boolean
    country?: boolean
    timezone?: boolean
    language?: boolean
    isActive?: boolean
  }

  export type ZarkUserInclude = {
    authToken?: boolean | AuthtokenFindManyArgs
  }

  export type ZarkUserGetPayload<
    S extends boolean | null | undefined | ZarkUserArgs,
    U = keyof S
      > = S extends true
        ? ZarkUser
    : S extends undefined
    ? never
    : S extends ZarkUserArgs | ZarkUserFindManyArgs
    ?'include' extends U
    ? ZarkUser  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'authToken'
        ? Array < AuthtokenGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZarkUser ?ZarkUser [P]
  : 
          P extends 'authToken'
        ? Array < AuthtokenGetPayload<S['select'][P]>>  : never
  } 
    : ZarkUser
  : ZarkUser


  type ZarkUserCountArgs = Merge<
    Omit<ZarkUserFindManyArgs, 'select' | 'include'> & {
      select?: ZarkUserCountAggregateInputType | true
    }
  >

  export interface ZarkUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZarkUser that matches the filter.
     * @param {ZarkUserFindUniqueArgs} args - Arguments to find a ZarkUser
     * @example
     * // Get one ZarkUser
     * const zarkUser = await prisma.zarkUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZarkUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZarkUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZarkUser'> extends True ? CheckSelect<T, Prisma__ZarkUserClient<ZarkUser>, Prisma__ZarkUserClient<ZarkUserGetPayload<T>>> : CheckSelect<T, Prisma__ZarkUserClient<ZarkUser | null >, Prisma__ZarkUserClient<ZarkUserGetPayload<T> | null >>

    /**
     * Find the first ZarkUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkUserFindFirstArgs} args - Arguments to find a ZarkUser
     * @example
     * // Get one ZarkUser
     * const zarkUser = await prisma.zarkUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZarkUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZarkUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZarkUser'> extends True ? CheckSelect<T, Prisma__ZarkUserClient<ZarkUser>, Prisma__ZarkUserClient<ZarkUserGetPayload<T>>> : CheckSelect<T, Prisma__ZarkUserClient<ZarkUser | null >, Prisma__ZarkUserClient<ZarkUserGetPayload<T> | null >>

    /**
     * Find zero or more ZarkUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZarkUsers
     * const zarkUsers = await prisma.zarkUser.findMany()
     * 
     * // Get first 10 ZarkUsers
     * const zarkUsers = await prisma.zarkUser.findMany({ take: 10 })
     * 
     * // Only select the `zkuid`
     * const zarkUserWithZkuidOnly = await prisma.zarkUser.findMany({ select: { zkuid: true } })
     * 
    **/
    findMany<T extends ZarkUserFindManyArgs>(
      args?: SelectSubset<T, ZarkUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZarkUser>>, PrismaPromise<Array<ZarkUserGetPayload<T>>>>

    /**
     * Create a ZarkUser.
     * @param {ZarkUserCreateArgs} args - Arguments to create a ZarkUser.
     * @example
     * // Create one ZarkUser
     * const ZarkUser = await prisma.zarkUser.create({
     *   data: {
     *     // ... data to create a ZarkUser
     *   }
     * })
     * 
    **/
    create<T extends ZarkUserCreateArgs>(
      args: SelectSubset<T, ZarkUserCreateArgs>
    ): CheckSelect<T, Prisma__ZarkUserClient<ZarkUser>, Prisma__ZarkUserClient<ZarkUserGetPayload<T>>>

    /**
     * Create many ZarkUsers.
     *     @param {ZarkUserCreateManyArgs} args - Arguments to create many ZarkUsers.
     *     @example
     *     // Create many ZarkUsers
     *     const zarkUser = await prisma.zarkUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZarkUserCreateManyArgs>(
      args?: SelectSubset<T, ZarkUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZarkUser.
     * @param {ZarkUserDeleteArgs} args - Arguments to delete one ZarkUser.
     * @example
     * // Delete one ZarkUser
     * const ZarkUser = await prisma.zarkUser.delete({
     *   where: {
     *     // ... filter to delete one ZarkUser
     *   }
     * })
     * 
    **/
    delete<T extends ZarkUserDeleteArgs>(
      args: SelectSubset<T, ZarkUserDeleteArgs>
    ): CheckSelect<T, Prisma__ZarkUserClient<ZarkUser>, Prisma__ZarkUserClient<ZarkUserGetPayload<T>>>

    /**
     * Update one ZarkUser.
     * @param {ZarkUserUpdateArgs} args - Arguments to update one ZarkUser.
     * @example
     * // Update one ZarkUser
     * const zarkUser = await prisma.zarkUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZarkUserUpdateArgs>(
      args: SelectSubset<T, ZarkUserUpdateArgs>
    ): CheckSelect<T, Prisma__ZarkUserClient<ZarkUser>, Prisma__ZarkUserClient<ZarkUserGetPayload<T>>>

    /**
     * Delete zero or more ZarkUsers.
     * @param {ZarkUserDeleteManyArgs} args - Arguments to filter ZarkUsers to delete.
     * @example
     * // Delete a few ZarkUsers
     * const { count } = await prisma.zarkUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZarkUserDeleteManyArgs>(
      args?: SelectSubset<T, ZarkUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZarkUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZarkUsers
     * const zarkUser = await prisma.zarkUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZarkUserUpdateManyArgs>(
      args: SelectSubset<T, ZarkUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZarkUser.
     * @param {ZarkUserUpsertArgs} args - Arguments to update or create a ZarkUser.
     * @example
     * // Update or create a ZarkUser
     * const zarkUser = await prisma.zarkUser.upsert({
     *   create: {
     *     // ... data to create a ZarkUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZarkUser we want to update
     *   }
     * })
    **/
    upsert<T extends ZarkUserUpsertArgs>(
      args: SelectSubset<T, ZarkUserUpsertArgs>
    ): CheckSelect<T, Prisma__ZarkUserClient<ZarkUser>, Prisma__ZarkUserClient<ZarkUserGetPayload<T>>>

    /**
     * Count the number of ZarkUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkUserCountArgs} args - Arguments to filter ZarkUsers to count.
     * @example
     * // Count the number of ZarkUsers
     * const count = await prisma.zarkUser.count({
     *   where: {
     *     // ... the filter for the ZarkUsers we want to count
     *   }
     * })
    **/
    count<T extends ZarkUserCountArgs>(
      args?: Subset<T, ZarkUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZarkUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZarkUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZarkUserAggregateArgs>(args: Subset<T, ZarkUserAggregateArgs>): PrismaPromise<GetZarkUserAggregateType<T>>

    /**
     * Group by ZarkUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkUserGroupByArgs} args - Group by arguments.
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
      T extends ZarkUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZarkUserGroupByArgs['orderBy'] }
        : { orderBy?: ZarkUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZarkUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZarkUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZarkUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZarkUserClient<T> implements PrismaPromise<T> {
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

    authToken<T extends AuthtokenFindManyArgs = {}>(args?: Subset<T, AuthtokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Authtoken>>, PrismaPromise<Array<AuthtokenGetPayload<T>>>>;

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
   * ZarkUser findUnique
   */
  export type ZarkUserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
    /**
     * Throw an Error if a ZarkUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZarkUser to fetch.
     * 
    **/
    where: ZarkUserWhereUniqueInput
  }


  /**
   * ZarkUser findFirst
   */
  export type ZarkUserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
    /**
     * Throw an Error if a ZarkUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZarkUser to fetch.
     * 
    **/
    where?: ZarkUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZarkUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ZarkUserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZarkUsers.
     * 
    **/
    cursor?: ZarkUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZarkUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZarkUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZarkUsers.
     * 
    **/
    distinct?: Enumerable<ZarkUserScalarFieldEnum>
  }


  /**
   * ZarkUser findMany
   */
  export type ZarkUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
    /**
     * Filter, which ZarkUsers to fetch.
     * 
    **/
    where?: ZarkUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZarkUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<ZarkUserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZarkUsers.
     * 
    **/
    cursor?: ZarkUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZarkUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZarkUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZarkUserScalarFieldEnum>
  }


  /**
   * ZarkUser create
   */
  export type ZarkUserCreateArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
    /**
     * The data needed to create a ZarkUser.
     * 
    **/
    data: XOR<ZarkUserCreateInput, ZarkUserUncheckedCreateInput>
  }


  /**
   * ZarkUser createMany
   */
  export type ZarkUserCreateManyArgs = {
    data: Enumerable<ZarkUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZarkUser update
   */
  export type ZarkUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
    /**
     * The data needed to update a ZarkUser.
     * 
    **/
    data: XOR<ZarkUserUpdateInput, ZarkUserUncheckedUpdateInput>
    /**
     * Choose, which ZarkUser to update.
     * 
    **/
    where: ZarkUserWhereUniqueInput
  }


  /**
   * ZarkUser updateMany
   */
  export type ZarkUserUpdateManyArgs = {
    data: XOR<ZarkUserUpdateManyMutationInput, ZarkUserUncheckedUpdateManyInput>
    where?: ZarkUserWhereInput
  }


  /**
   * ZarkUser upsert
   */
  export type ZarkUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
    /**
     * The filter to search for the ZarkUser to update in case it exists.
     * 
    **/
    where: ZarkUserWhereUniqueInput
    /**
     * In case the ZarkUser found by the `where` argument doesn't exist, create a new ZarkUser with this data.
     * 
    **/
    create: XOR<ZarkUserCreateInput, ZarkUserUncheckedCreateInput>
    /**
     * In case the ZarkUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZarkUserUpdateInput, ZarkUserUncheckedUpdateInput>
  }


  /**
   * ZarkUser delete
   */
  export type ZarkUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
    /**
     * Filter which ZarkUser to delete.
     * 
    **/
    where: ZarkUserWhereUniqueInput
  }


  /**
   * ZarkUser deleteMany
   */
  export type ZarkUserDeleteManyArgs = {
    where?: ZarkUserWhereInput
  }


  /**
   * ZarkUser without action
   */
  export type ZarkUserArgs = {
    /**
     * Select specific fields to fetch from the ZarkUser
     * 
    **/
    select?: ZarkUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ZarkUserInclude | null
  }



  /**
   * Model Authtoken
   */


  export type AggregateAuthtoken = {
    _count: AuthtokenCountAggregateOutputType | null
    count: AuthtokenCountAggregateOutputType | null
    _avg: AuthtokenAvgAggregateOutputType | null
    avg: AuthtokenAvgAggregateOutputType | null
    _sum: AuthtokenSumAggregateOutputType | null
    sum: AuthtokenSumAggregateOutputType | null
    _min: AuthtokenMinAggregateOutputType | null
    min: AuthtokenMinAggregateOutputType | null
    _max: AuthtokenMaxAggregateOutputType | null
    max: AuthtokenMaxAggregateOutputType | null
  }

  export type AuthtokenAvgAggregateOutputType = {
    authId: number | null
    authUserId: number | null
  }

  export type AuthtokenSumAggregateOutputType = {
    authId: number | null
    authUserId: number | null
  }

  export type AuthtokenMinAggregateOutputType = {
    authId: number | null
    createAt: Date | null
    updatedAt: Date | null
    expiration: Date | null
    authToken: string | null
    authUserId: number | null
  }

  export type AuthtokenMaxAggregateOutputType = {
    authId: number | null
    createAt: Date | null
    updatedAt: Date | null
    expiration: Date | null
    authToken: string | null
    authUserId: number | null
  }

  export type AuthtokenCountAggregateOutputType = {
    authId: number
    createAt: number
    updatedAt: number
    expiration: number
    loginInfo: number
    authToken: number
    authUserId: number
    _all: number
  }


  export type AuthtokenAvgAggregateInputType = {
    authId?: true
    authUserId?: true
  }

  export type AuthtokenSumAggregateInputType = {
    authId?: true
    authUserId?: true
  }

  export type AuthtokenMinAggregateInputType = {
    authId?: true
    createAt?: true
    updatedAt?: true
    expiration?: true
    authToken?: true
    authUserId?: true
  }

  export type AuthtokenMaxAggregateInputType = {
    authId?: true
    createAt?: true
    updatedAt?: true
    expiration?: true
    authToken?: true
    authUserId?: true
  }

  export type AuthtokenCountAggregateInputType = {
    authId?: true
    createAt?: true
    updatedAt?: true
    expiration?: true
    loginInfo?: true
    authToken?: true
    authUserId?: true
    _all?: true
  }

  export type AuthtokenAggregateArgs = {
    /**
     * Filter which Authtoken to aggregate.
     * 
    **/
    where?: AuthtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authtokens to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthtokenOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AuthtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authtokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authtokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authtokens
    **/
    _count?: true | AuthtokenCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | AuthtokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthtokenAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: AuthtokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthtokenSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: AuthtokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthtokenMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: AuthtokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthtokenMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: AuthtokenMaxAggregateInputType
  }

  export type GetAuthtokenAggregateType<T extends AuthtokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthtoken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthtoken[P]>
      : GetScalarType<T[P], AggregateAuthtoken[P]>
  }


    
    
  export type AuthtokenGroupByArgs = {
    where?: AuthtokenWhereInput
    orderBy?: Enumerable<AuthtokenOrderByInput>
    by: Array<AuthtokenScalarFieldEnum>
    having?: AuthtokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthtokenCountAggregateInputType | true
    _avg?: AuthtokenAvgAggregateInputType
    _sum?: AuthtokenSumAggregateInputType
    _min?: AuthtokenMinAggregateInputType
    _max?: AuthtokenMaxAggregateInputType
  }


  export type AuthtokenGroupByOutputType = {
    authId: number
    createAt: Date
    updatedAt: Date
    expiration: Date
    loginInfo: JsonValue
    authToken: string
    authUserId: number
    _count: AuthtokenCountAggregateOutputType | null
    _avg: AuthtokenAvgAggregateOutputType | null
    _sum: AuthtokenSumAggregateOutputType | null
    _min: AuthtokenMinAggregateOutputType | null
    _max: AuthtokenMaxAggregateOutputType | null
  }

  type GetAuthtokenGroupByPayload<T extends AuthtokenGroupByArgs> = Promise<
    Array<
      PickArray<AuthtokenGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AuthtokenGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AuthtokenGroupByOutputType[P]> 
            : GetScalarType<T[P], AuthtokenGroupByOutputType[P]>
        }
      > 
    >


  export type AuthtokenSelect = {
    authId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    expiration?: boolean
    loginInfo?: boolean
    authToken?: boolean
    authUserKey?: boolean | ZarkUserArgs
    authUserId?: boolean
  }

  export type AuthtokenInclude = {
    authUserKey?: boolean | ZarkUserArgs
  }

  export type AuthtokenGetPayload<
    S extends boolean | null | undefined | AuthtokenArgs,
    U = keyof S
      > = S extends true
        ? Authtoken
    : S extends undefined
    ? never
    : S extends AuthtokenArgs | AuthtokenFindManyArgs
    ?'include' extends U
    ? Authtoken  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'authUserKey'
        ? ZarkUserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Authtoken ?Authtoken [P]
  : 
          P extends 'authUserKey'
        ? ZarkUserGetPayload<S['select'][P]> : never
  } 
    : Authtoken
  : Authtoken


  type AuthtokenCountArgs = Merge<
    Omit<AuthtokenFindManyArgs, 'select' | 'include'> & {
      select?: AuthtokenCountAggregateInputType | true
    }
  >

  export interface AuthtokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Authtoken that matches the filter.
     * @param {AuthtokenFindUniqueArgs} args - Arguments to find a Authtoken
     * @example
     * // Get one Authtoken
     * const authtoken = await prisma.authtoken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AuthtokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AuthtokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Authtoken'> extends True ? CheckSelect<T, Prisma__AuthtokenClient<Authtoken>, Prisma__AuthtokenClient<AuthtokenGetPayload<T>>> : CheckSelect<T, Prisma__AuthtokenClient<Authtoken | null >, Prisma__AuthtokenClient<AuthtokenGetPayload<T> | null >>

    /**
     * Find the first Authtoken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthtokenFindFirstArgs} args - Arguments to find a Authtoken
     * @example
     * // Get one Authtoken
     * const authtoken = await prisma.authtoken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AuthtokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AuthtokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Authtoken'> extends True ? CheckSelect<T, Prisma__AuthtokenClient<Authtoken>, Prisma__AuthtokenClient<AuthtokenGetPayload<T>>> : CheckSelect<T, Prisma__AuthtokenClient<Authtoken | null >, Prisma__AuthtokenClient<AuthtokenGetPayload<T> | null >>

    /**
     * Find zero or more Authtokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthtokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authtokens
     * const authtokens = await prisma.authtoken.findMany()
     * 
     * // Get first 10 Authtokens
     * const authtokens = await prisma.authtoken.findMany({ take: 10 })
     * 
     * // Only select the `authId`
     * const authtokenWithAuthIdOnly = await prisma.authtoken.findMany({ select: { authId: true } })
     * 
    **/
    findMany<T extends AuthtokenFindManyArgs>(
      args?: SelectSubset<T, AuthtokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Authtoken>>, PrismaPromise<Array<AuthtokenGetPayload<T>>>>

    /**
     * Create a Authtoken.
     * @param {AuthtokenCreateArgs} args - Arguments to create a Authtoken.
     * @example
     * // Create one Authtoken
     * const Authtoken = await prisma.authtoken.create({
     *   data: {
     *     // ... data to create a Authtoken
     *   }
     * })
     * 
    **/
    create<T extends AuthtokenCreateArgs>(
      args: SelectSubset<T, AuthtokenCreateArgs>
    ): CheckSelect<T, Prisma__AuthtokenClient<Authtoken>, Prisma__AuthtokenClient<AuthtokenGetPayload<T>>>

    /**
     * Create many Authtokens.
     *     @param {AuthtokenCreateManyArgs} args - Arguments to create many Authtokens.
     *     @example
     *     // Create many Authtokens
     *     const authtoken = await prisma.authtoken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AuthtokenCreateManyArgs>(
      args?: SelectSubset<T, AuthtokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Authtoken.
     * @param {AuthtokenDeleteArgs} args - Arguments to delete one Authtoken.
     * @example
     * // Delete one Authtoken
     * const Authtoken = await prisma.authtoken.delete({
     *   where: {
     *     // ... filter to delete one Authtoken
     *   }
     * })
     * 
    **/
    delete<T extends AuthtokenDeleteArgs>(
      args: SelectSubset<T, AuthtokenDeleteArgs>
    ): CheckSelect<T, Prisma__AuthtokenClient<Authtoken>, Prisma__AuthtokenClient<AuthtokenGetPayload<T>>>

    /**
     * Update one Authtoken.
     * @param {AuthtokenUpdateArgs} args - Arguments to update one Authtoken.
     * @example
     * // Update one Authtoken
     * const authtoken = await prisma.authtoken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AuthtokenUpdateArgs>(
      args: SelectSubset<T, AuthtokenUpdateArgs>
    ): CheckSelect<T, Prisma__AuthtokenClient<Authtoken>, Prisma__AuthtokenClient<AuthtokenGetPayload<T>>>

    /**
     * Delete zero or more Authtokens.
     * @param {AuthtokenDeleteManyArgs} args - Arguments to filter Authtokens to delete.
     * @example
     * // Delete a few Authtokens
     * const { count } = await prisma.authtoken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AuthtokenDeleteManyArgs>(
      args?: SelectSubset<T, AuthtokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authtokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthtokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authtokens
     * const authtoken = await prisma.authtoken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AuthtokenUpdateManyArgs>(
      args: SelectSubset<T, AuthtokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Authtoken.
     * @param {AuthtokenUpsertArgs} args - Arguments to update or create a Authtoken.
     * @example
     * // Update or create a Authtoken
     * const authtoken = await prisma.authtoken.upsert({
     *   create: {
     *     // ... data to create a Authtoken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authtoken we want to update
     *   }
     * })
    **/
    upsert<T extends AuthtokenUpsertArgs>(
      args: SelectSubset<T, AuthtokenUpsertArgs>
    ): CheckSelect<T, Prisma__AuthtokenClient<Authtoken>, Prisma__AuthtokenClient<AuthtokenGetPayload<T>>>

    /**
     * Count the number of Authtokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthtokenCountArgs} args - Arguments to filter Authtokens to count.
     * @example
     * // Count the number of Authtokens
     * const count = await prisma.authtoken.count({
     *   where: {
     *     // ... the filter for the Authtokens we want to count
     *   }
     * })
    **/
    count<T extends AuthtokenCountArgs>(
      args?: Subset<T, AuthtokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthtokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authtoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthtokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthtokenAggregateArgs>(args: Subset<T, AuthtokenAggregateArgs>): PrismaPromise<GetAuthtokenAggregateType<T>>

    /**
     * Group by Authtoken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthtokenGroupByArgs} args - Group by arguments.
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
      T extends AuthtokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthtokenGroupByArgs['orderBy'] }
        : { orderBy?: AuthtokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthtokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthtokenGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authtoken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthtokenClient<T> implements PrismaPromise<T> {
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

    authUserKey<T extends ZarkUserArgs = {}>(args?: Subset<T, ZarkUserArgs>): CheckSelect<T, Prisma__ZarkUserClient<ZarkUser | null >, Prisma__ZarkUserClient<ZarkUserGetPayload<T> | null >>;

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
   * Authtoken findUnique
   */
  export type AuthtokenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
    /**
     * Throw an Error if a Authtoken can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Authtoken to fetch.
     * 
    **/
    where: AuthtokenWhereUniqueInput
  }


  /**
   * Authtoken findFirst
   */
  export type AuthtokenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
    /**
     * Throw an Error if a Authtoken can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Authtoken to fetch.
     * 
    **/
    where?: AuthtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authtokens to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthtokenOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authtokens.
     * 
    **/
    cursor?: AuthtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authtokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authtokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authtokens.
     * 
    **/
    distinct?: Enumerable<AuthtokenScalarFieldEnum>
  }


  /**
   * Authtoken findMany
   */
  export type AuthtokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
    /**
     * Filter, which Authtokens to fetch.
     * 
    **/
    where?: AuthtokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authtokens to fetch.
     * 
    **/
    orderBy?: Enumerable<AuthtokenOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authtokens.
     * 
    **/
    cursor?: AuthtokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authtokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authtokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AuthtokenScalarFieldEnum>
  }


  /**
   * Authtoken create
   */
  export type AuthtokenCreateArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
    /**
     * The data needed to create a Authtoken.
     * 
    **/
    data: XOR<AuthtokenCreateInput, AuthtokenUncheckedCreateInput>
  }


  /**
   * Authtoken createMany
   */
  export type AuthtokenCreateManyArgs = {
    data: Enumerable<AuthtokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Authtoken update
   */
  export type AuthtokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
    /**
     * The data needed to update a Authtoken.
     * 
    **/
    data: XOR<AuthtokenUpdateInput, AuthtokenUncheckedUpdateInput>
    /**
     * Choose, which Authtoken to update.
     * 
    **/
    where: AuthtokenWhereUniqueInput
  }


  /**
   * Authtoken updateMany
   */
  export type AuthtokenUpdateManyArgs = {
    data: XOR<AuthtokenUpdateManyMutationInput, AuthtokenUncheckedUpdateManyInput>
    where?: AuthtokenWhereInput
  }


  /**
   * Authtoken upsert
   */
  export type AuthtokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
    /**
     * The filter to search for the Authtoken to update in case it exists.
     * 
    **/
    where: AuthtokenWhereUniqueInput
    /**
     * In case the Authtoken found by the `where` argument doesn't exist, create a new Authtoken with this data.
     * 
    **/
    create: XOR<AuthtokenCreateInput, AuthtokenUncheckedCreateInput>
    /**
     * In case the Authtoken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AuthtokenUpdateInput, AuthtokenUncheckedUpdateInput>
  }


  /**
   * Authtoken delete
   */
  export type AuthtokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
    /**
     * Filter which Authtoken to delete.
     * 
    **/
    where: AuthtokenWhereUniqueInput
  }


  /**
   * Authtoken deleteMany
   */
  export type AuthtokenDeleteManyArgs = {
    where?: AuthtokenWhereInput
  }


  /**
   * Authtoken without action
   */
  export type AuthtokenArgs = {
    /**
     * Select specific fields to fetch from the Authtoken
     * 
    **/
    select?: AuthtokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AuthtokenInclude | null
  }



  /**
   * Model ZarkCompany
   */


  export type AggregateZarkCompany = {
    _count: ZarkCompanyCountAggregateOutputType | null
    count: ZarkCompanyCountAggregateOutputType | null
    _avg: ZarkCompanyAvgAggregateOutputType | null
    avg: ZarkCompanyAvgAggregateOutputType | null
    _sum: ZarkCompanySumAggregateOutputType | null
    sum: ZarkCompanySumAggregateOutputType | null
    _min: ZarkCompanyMinAggregateOutputType | null
    min: ZarkCompanyMinAggregateOutputType | null
    _max: ZarkCompanyMaxAggregateOutputType | null
    max: ZarkCompanyMaxAggregateOutputType | null
  }

  export type ZarkCompanyAvgAggregateOutputType = {
    zkcid: number | null
  }

  export type ZarkCompanySumAggregateOutputType = {
    zkcid: number | null
  }

  export type ZarkCompanyMinAggregateOutputType = {
    zkcid: number | null
    companyName: string | null
    companyAddress: string | null
    country: string | null
    taxNumber: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ZarkCompanyMaxAggregateOutputType = {
    zkcid: number | null
    companyName: string | null
    companyAddress: string | null
    country: string | null
    taxNumber: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type ZarkCompanyCountAggregateOutputType = {
    zkcid: number
    companyName: number
    companyAddress: number
    country: number
    taxNumber: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type ZarkCompanyAvgAggregateInputType = {
    zkcid?: true
  }

  export type ZarkCompanySumAggregateInputType = {
    zkcid?: true
  }

  export type ZarkCompanyMinAggregateInputType = {
    zkcid?: true
    companyName?: true
    companyAddress?: true
    country?: true
    taxNumber?: true
    createAt?: true
    updatedAt?: true
  }

  export type ZarkCompanyMaxAggregateInputType = {
    zkcid?: true
    companyName?: true
    companyAddress?: true
    country?: true
    taxNumber?: true
    createAt?: true
    updatedAt?: true
  }

  export type ZarkCompanyCountAggregateInputType = {
    zkcid?: true
    companyName?: true
    companyAddress?: true
    country?: true
    taxNumber?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ZarkCompanyAggregateArgs = {
    /**
     * Filter which ZarkCompany to aggregate.
     * 
    **/
    where?: ZarkCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZarkCompanies to fetch.
     * 
    **/
    orderBy?: Enumerable<ZarkCompanyOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ZarkCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZarkCompanies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZarkCompanies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZarkCompanies
    **/
    _count?: true | ZarkCompanyCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ZarkCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZarkCompanyAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ZarkCompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZarkCompanySumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ZarkCompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZarkCompanyMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ZarkCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZarkCompanyMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ZarkCompanyMaxAggregateInputType
  }

  export type GetZarkCompanyAggregateType<T extends ZarkCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateZarkCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZarkCompany[P]>
      : GetScalarType<T[P], AggregateZarkCompany[P]>
  }


    
    
  export type ZarkCompanyGroupByArgs = {
    where?: ZarkCompanyWhereInput
    orderBy?: Enumerable<ZarkCompanyOrderByInput>
    by: Array<ZarkCompanyScalarFieldEnum>
    having?: ZarkCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZarkCompanyCountAggregateInputType | true
    _avg?: ZarkCompanyAvgAggregateInputType
    _sum?: ZarkCompanySumAggregateInputType
    _min?: ZarkCompanyMinAggregateInputType
    _max?: ZarkCompanyMaxAggregateInputType
  }


  export type ZarkCompanyGroupByOutputType = {
    zkcid: number
    companyName: string
    companyAddress: string
    country: string
    taxNumber: string
    createAt: Date
    updatedAt: Date
    _count: ZarkCompanyCountAggregateOutputType | null
    _avg: ZarkCompanyAvgAggregateOutputType | null
    _sum: ZarkCompanySumAggregateOutputType | null
    _min: ZarkCompanyMinAggregateOutputType | null
    _max: ZarkCompanyMaxAggregateOutputType | null
  }

  type GetZarkCompanyGroupByPayload<T extends ZarkCompanyGroupByArgs> = Promise<
    Array<
      PickArray<ZarkCompanyGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ZarkCompanyGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ZarkCompanyGroupByOutputType[P]> 
            : GetScalarType<T[P], ZarkCompanyGroupByOutputType[P]>
        }
      > 
    >


  export type ZarkCompanySelect = {
    zkcid?: boolean
    companyName?: boolean
    companyAddress?: boolean
    country?: boolean
    taxNumber?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type ZarkCompanyGetPayload<
    S extends boolean | null | undefined | ZarkCompanyArgs,
    U = keyof S
      > = S extends true
        ? ZarkCompany
    : S extends undefined
    ? never
    : S extends ZarkCompanyArgs | ZarkCompanyFindManyArgs
    ?'include' extends U
    ? ZarkCompany 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ZarkCompany ?ZarkCompany [P]
  : 
     never
  } 
    : ZarkCompany
  : ZarkCompany


  type ZarkCompanyCountArgs = Merge<
    Omit<ZarkCompanyFindManyArgs, 'select' | 'include'> & {
      select?: ZarkCompanyCountAggregateInputType | true
    }
  >

  export interface ZarkCompanyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ZarkCompany that matches the filter.
     * @param {ZarkCompanyFindUniqueArgs} args - Arguments to find a ZarkCompany
     * @example
     * // Get one ZarkCompany
     * const zarkCompany = await prisma.zarkCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ZarkCompanyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ZarkCompanyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ZarkCompany'> extends True ? CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany>, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T>>> : CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany | null >, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T> | null >>

    /**
     * Find the first ZarkCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkCompanyFindFirstArgs} args - Arguments to find a ZarkCompany
     * @example
     * // Get one ZarkCompany
     * const zarkCompany = await prisma.zarkCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ZarkCompanyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ZarkCompanyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ZarkCompany'> extends True ? CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany>, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T>>> : CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany | null >, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T> | null >>

    /**
     * Find zero or more ZarkCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkCompanyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZarkCompanies
     * const zarkCompanies = await prisma.zarkCompany.findMany()
     * 
     * // Get first 10 ZarkCompanies
     * const zarkCompanies = await prisma.zarkCompany.findMany({ take: 10 })
     * 
     * // Only select the `zkcid`
     * const zarkCompanyWithZkcidOnly = await prisma.zarkCompany.findMany({ select: { zkcid: true } })
     * 
    **/
    findMany<T extends ZarkCompanyFindManyArgs>(
      args?: SelectSubset<T, ZarkCompanyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ZarkCompany>>, PrismaPromise<Array<ZarkCompanyGetPayload<T>>>>

    /**
     * Create a ZarkCompany.
     * @param {ZarkCompanyCreateArgs} args - Arguments to create a ZarkCompany.
     * @example
     * // Create one ZarkCompany
     * const ZarkCompany = await prisma.zarkCompany.create({
     *   data: {
     *     // ... data to create a ZarkCompany
     *   }
     * })
     * 
    **/
    create<T extends ZarkCompanyCreateArgs>(
      args: SelectSubset<T, ZarkCompanyCreateArgs>
    ): CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany>, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T>>>

    /**
     * Create many ZarkCompanies.
     *     @param {ZarkCompanyCreateManyArgs} args - Arguments to create many ZarkCompanies.
     *     @example
     *     // Create many ZarkCompanies
     *     const zarkCompany = await prisma.zarkCompany.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ZarkCompanyCreateManyArgs>(
      args?: SelectSubset<T, ZarkCompanyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ZarkCompany.
     * @param {ZarkCompanyDeleteArgs} args - Arguments to delete one ZarkCompany.
     * @example
     * // Delete one ZarkCompany
     * const ZarkCompany = await prisma.zarkCompany.delete({
     *   where: {
     *     // ... filter to delete one ZarkCompany
     *   }
     * })
     * 
    **/
    delete<T extends ZarkCompanyDeleteArgs>(
      args: SelectSubset<T, ZarkCompanyDeleteArgs>
    ): CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany>, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T>>>

    /**
     * Update one ZarkCompany.
     * @param {ZarkCompanyUpdateArgs} args - Arguments to update one ZarkCompany.
     * @example
     * // Update one ZarkCompany
     * const zarkCompany = await prisma.zarkCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ZarkCompanyUpdateArgs>(
      args: SelectSubset<T, ZarkCompanyUpdateArgs>
    ): CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany>, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T>>>

    /**
     * Delete zero or more ZarkCompanies.
     * @param {ZarkCompanyDeleteManyArgs} args - Arguments to filter ZarkCompanies to delete.
     * @example
     * // Delete a few ZarkCompanies
     * const { count } = await prisma.zarkCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ZarkCompanyDeleteManyArgs>(
      args?: SelectSubset<T, ZarkCompanyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZarkCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZarkCompanies
     * const zarkCompany = await prisma.zarkCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ZarkCompanyUpdateManyArgs>(
      args: SelectSubset<T, ZarkCompanyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ZarkCompany.
     * @param {ZarkCompanyUpsertArgs} args - Arguments to update or create a ZarkCompany.
     * @example
     * // Update or create a ZarkCompany
     * const zarkCompany = await prisma.zarkCompany.upsert({
     *   create: {
     *     // ... data to create a ZarkCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZarkCompany we want to update
     *   }
     * })
    **/
    upsert<T extends ZarkCompanyUpsertArgs>(
      args: SelectSubset<T, ZarkCompanyUpsertArgs>
    ): CheckSelect<T, Prisma__ZarkCompanyClient<ZarkCompany>, Prisma__ZarkCompanyClient<ZarkCompanyGetPayload<T>>>

    /**
     * Count the number of ZarkCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkCompanyCountArgs} args - Arguments to filter ZarkCompanies to count.
     * @example
     * // Count the number of ZarkCompanies
     * const count = await prisma.zarkCompany.count({
     *   where: {
     *     // ... the filter for the ZarkCompanies we want to count
     *   }
     * })
    **/
    count<T extends ZarkCompanyCountArgs>(
      args?: Subset<T, ZarkCompanyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZarkCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZarkCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZarkCompanyAggregateArgs>(args: Subset<T, ZarkCompanyAggregateArgs>): PrismaPromise<GetZarkCompanyAggregateType<T>>

    /**
     * Group by ZarkCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZarkCompanyGroupByArgs} args - Group by arguments.
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
      T extends ZarkCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZarkCompanyGroupByArgs['orderBy'] }
        : { orderBy?: ZarkCompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZarkCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZarkCompanyGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZarkCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ZarkCompanyClient<T> implements PrismaPromise<T> {
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
   * ZarkCompany findUnique
   */
  export type ZarkCompanyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
    /**
     * Throw an Error if a ZarkCompany can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZarkCompany to fetch.
     * 
    **/
    where: ZarkCompanyWhereUniqueInput
  }


  /**
   * ZarkCompany findFirst
   */
  export type ZarkCompanyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
    /**
     * Throw an Error if a ZarkCompany can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ZarkCompany to fetch.
     * 
    **/
    where?: ZarkCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZarkCompanies to fetch.
     * 
    **/
    orderBy?: Enumerable<ZarkCompanyOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZarkCompanies.
     * 
    **/
    cursor?: ZarkCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZarkCompanies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZarkCompanies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZarkCompanies.
     * 
    **/
    distinct?: Enumerable<ZarkCompanyScalarFieldEnum>
  }


  /**
   * ZarkCompany findMany
   */
  export type ZarkCompanyFindManyArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
    /**
     * Filter, which ZarkCompanies to fetch.
     * 
    **/
    where?: ZarkCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZarkCompanies to fetch.
     * 
    **/
    orderBy?: Enumerable<ZarkCompanyOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZarkCompanies.
     * 
    **/
    cursor?: ZarkCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZarkCompanies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZarkCompanies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ZarkCompanyScalarFieldEnum>
  }


  /**
   * ZarkCompany create
   */
  export type ZarkCompanyCreateArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
    /**
     * The data needed to create a ZarkCompany.
     * 
    **/
    data: XOR<ZarkCompanyCreateInput, ZarkCompanyUncheckedCreateInput>
  }


  /**
   * ZarkCompany createMany
   */
  export type ZarkCompanyCreateManyArgs = {
    data: Enumerable<ZarkCompanyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ZarkCompany update
   */
  export type ZarkCompanyUpdateArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
    /**
     * The data needed to update a ZarkCompany.
     * 
    **/
    data: XOR<ZarkCompanyUpdateInput, ZarkCompanyUncheckedUpdateInput>
    /**
     * Choose, which ZarkCompany to update.
     * 
    **/
    where: ZarkCompanyWhereUniqueInput
  }


  /**
   * ZarkCompany updateMany
   */
  export type ZarkCompanyUpdateManyArgs = {
    data: XOR<ZarkCompanyUpdateManyMutationInput, ZarkCompanyUncheckedUpdateManyInput>
    where?: ZarkCompanyWhereInput
  }


  /**
   * ZarkCompany upsert
   */
  export type ZarkCompanyUpsertArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
    /**
     * The filter to search for the ZarkCompany to update in case it exists.
     * 
    **/
    where: ZarkCompanyWhereUniqueInput
    /**
     * In case the ZarkCompany found by the `where` argument doesn't exist, create a new ZarkCompany with this data.
     * 
    **/
    create: XOR<ZarkCompanyCreateInput, ZarkCompanyUncheckedCreateInput>
    /**
     * In case the ZarkCompany was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ZarkCompanyUpdateInput, ZarkCompanyUncheckedUpdateInput>
  }


  /**
   * ZarkCompany delete
   */
  export type ZarkCompanyDeleteArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
    /**
     * Filter which ZarkCompany to delete.
     * 
    **/
    where: ZarkCompanyWhereUniqueInput
  }


  /**
   * ZarkCompany deleteMany
   */
  export type ZarkCompanyDeleteManyArgs = {
    where?: ZarkCompanyWhereInput
  }


  /**
   * ZarkCompany without action
   */
  export type ZarkCompanyArgs = {
    /**
     * Select specific fields to fetch from the ZarkCompany
     * 
    **/
    select?: ZarkCompanySelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ZarkUserScalarFieldEnum: {
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
  };

  export type ZarkUserScalarFieldEnum = (typeof ZarkUserScalarFieldEnum)[keyof typeof ZarkUserScalarFieldEnum]


  export const AuthtokenScalarFieldEnum: {
    authId: 'authId',
    createAt: 'createAt',
    updatedAt: 'updatedAt',
    expiration: 'expiration',
    loginInfo: 'loginInfo',
    authToken: 'authToken',
    authUserId: 'authUserId'
  };

  export type AuthtokenScalarFieldEnum = (typeof AuthtokenScalarFieldEnum)[keyof typeof AuthtokenScalarFieldEnum]


  export const ZarkCompanyScalarFieldEnum: {
    zkcid: 'zkcid',
    companyName: 'companyName',
    companyAddress: 'companyAddress',
    country: 'country',
    taxNumber: 'taxNumber',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type ZarkCompanyScalarFieldEnum = (typeof ZarkCompanyScalarFieldEnum)[keyof typeof ZarkCompanyScalarFieldEnum]


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


  export type ZarkUserWhereInput = {
    AND?: Enumerable<ZarkUserWhereInput>
    OR?: Enumerable<ZarkUserWhereInput>
    NOT?: Enumerable<ZarkUserWhereInput>
    zkuid?: IntFilter | number
    firstname?: StringFilter | string
    lastname?: StringFilter | string
    email?: StringNullableFilter | string | null
    mobile_number?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    isEmailValid?: BoolFilter | boolean
    isMobileValid?: BoolFilter | boolean
    password?: StringNullableFilter | string | null
    loginType?: EnumLOGIN_TYPEFilter | LOGIN_TYPE
    authToken?: AuthtokenListRelationFilter
    otherLoginDetails?: JsonNullableFilter
    country?: StringFilter | string
    timezone?: StringFilter | string
    language?: EnumLANGUAGEFilter | LANGUAGE
    isActive?: BoolFilter | boolean
  }

  export type ZarkUserOrderByInput = {
    zkuid?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile_number?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    isEmailValid?: SortOrder
    isMobileValid?: SortOrder
    password?: SortOrder
    loginType?: SortOrder
    otherLoginDetails?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    language?: SortOrder
    isActive?: SortOrder
  }

  export type ZarkUserWhereUniqueInput = {
    zkuid?: number
    email?: string
    mobile_number?: string
    email_mobile_number?: ZarkUserEmailMobile_numberCompoundUniqueInput
  }

  export type ZarkUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZarkUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZarkUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZarkUserScalarWhereWithAggregatesInput>
    zkuid?: IntWithAggregatesFilter | number
    firstname?: StringWithAggregatesFilter | string
    lastname?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    mobile_number?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    isEmailValid?: BoolWithAggregatesFilter | boolean
    isMobileValid?: BoolWithAggregatesFilter | boolean
    password?: StringNullableWithAggregatesFilter | string | null
    loginType?: EnumLOGIN_TYPEWithAggregatesFilter | LOGIN_TYPE
    otherLoginDetails?: JsonNullableWithAggregatesFilter
    country?: StringWithAggregatesFilter | string
    timezone?: StringWithAggregatesFilter | string
    language?: EnumLANGUAGEWithAggregatesFilter | LANGUAGE
    isActive?: BoolWithAggregatesFilter | boolean
  }

  export type AuthtokenWhereInput = {
    AND?: Enumerable<AuthtokenWhereInput>
    OR?: Enumerable<AuthtokenWhereInput>
    NOT?: Enumerable<AuthtokenWhereInput>
    authId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    expiration?: DateTimeFilter | Date | string
    loginInfo?: JsonFilter
    authToken?: StringFilter | string
    authUserKey?: XOR<ZarkUserRelationFilter, ZarkUserWhereInput>
    authUserId?: IntFilter | number
  }

  export type AuthtokenOrderByInput = {
    authId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    expiration?: SortOrder
    loginInfo?: SortOrder
    authToken?: SortOrder
    authUserId?: SortOrder
  }

  export type AuthtokenWhereUniqueInput = {
    authId?: number
  }

  export type AuthtokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthtokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<AuthtokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AuthtokenScalarWhereWithAggregatesInput>
    authId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    expiration?: DateTimeWithAggregatesFilter | Date | string
    loginInfo?: JsonWithAggregatesFilter
    authToken?: StringWithAggregatesFilter | string
    authUserId?: IntWithAggregatesFilter | number
  }

  export type ZarkCompanyWhereInput = {
    AND?: Enumerable<ZarkCompanyWhereInput>
    OR?: Enumerable<ZarkCompanyWhereInput>
    NOT?: Enumerable<ZarkCompanyWhereInput>
    zkcid?: IntFilter | number
    companyName?: StringFilter | string
    companyAddress?: StringFilter | string
    country?: StringFilter | string
    taxNumber?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ZarkCompanyOrderByInput = {
    zkcid?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    country?: SortOrder
    taxNumber?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZarkCompanyWhereUniqueInput = {
    zkcid?: number
  }

  export type ZarkCompanyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ZarkCompanyScalarWhereWithAggregatesInput>
    OR?: Enumerable<ZarkCompanyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ZarkCompanyScalarWhereWithAggregatesInput>
    zkcid?: IntWithAggregatesFilter | number
    companyName?: StringWithAggregatesFilter | string
    companyAddress?: StringWithAggregatesFilter | string
    country?: StringWithAggregatesFilter | string
    taxNumber?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ZarkUserCreateInput = {
    firstname: string
    lastname: string
    email?: string | null
    mobile_number?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    isEmailValid?: boolean
    isMobileValid?: boolean
    password?: string | null
    loginType?: LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country: string
    timezone: string
    language?: LANGUAGE
    isActive?: boolean
    authToken?: AuthtokenCreateNestedManyWithoutAuthUserKeyInput
  }

  export type ZarkUserUncheckedCreateInput = {
    zkuid?: number
    firstname: string
    lastname: string
    email?: string | null
    mobile_number?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    isEmailValid?: boolean
    isMobileValid?: boolean
    password?: string | null
    loginType?: LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country: string
    timezone: string
    language?: LANGUAGE
    isActive?: boolean
    authToken?: AuthtokenUncheckedCreateNestedManyWithoutAuthUserKeyInput
  }

  export type ZarkUserUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailValid?: BoolFieldUpdateOperationsInput | boolean
    isMobileValid?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: EnumLOGIN_TYPEFieldUpdateOperationsInput | LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEFieldUpdateOperationsInput | LANGUAGE
    isActive?: BoolFieldUpdateOperationsInput | boolean
    authToken?: AuthtokenUpdateManyWithoutAuthUserKeyInput
  }

  export type ZarkUserUncheckedUpdateInput = {
    zkuid?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailValid?: BoolFieldUpdateOperationsInput | boolean
    isMobileValid?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: EnumLOGIN_TYPEFieldUpdateOperationsInput | LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEFieldUpdateOperationsInput | LANGUAGE
    isActive?: BoolFieldUpdateOperationsInput | boolean
    authToken?: AuthtokenUncheckedUpdateManyWithoutAuthUserKeyInput
  }

  export type ZarkUserCreateManyInput = {
    zkuid?: number
    firstname: string
    lastname: string
    email?: string | null
    mobile_number?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    isEmailValid?: boolean
    isMobileValid?: boolean
    password?: string | null
    loginType?: LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country: string
    timezone: string
    language?: LANGUAGE
    isActive?: boolean
  }

  export type ZarkUserUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailValid?: BoolFieldUpdateOperationsInput | boolean
    isMobileValid?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: EnumLOGIN_TYPEFieldUpdateOperationsInput | LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEFieldUpdateOperationsInput | LANGUAGE
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ZarkUserUncheckedUpdateManyInput = {
    zkuid?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailValid?: BoolFieldUpdateOperationsInput | boolean
    isMobileValid?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: EnumLOGIN_TYPEFieldUpdateOperationsInput | LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEFieldUpdateOperationsInput | LANGUAGE
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthtokenCreateInput = {
    createAt?: Date | string
    updatedAt?: Date | string
    expiration: Date | string
    loginInfo: InputJsonValue
    authToken: string
    authUserKey: ZarkUserCreateNestedOneWithoutAuthTokenInput
  }

  export type AuthtokenUncheckedCreateInput = {
    authId?: number
    createAt?: Date | string
    updatedAt?: Date | string
    expiration: Date | string
    loginInfo: InputJsonValue
    authToken: string
    authUserId: number
  }

  export type AuthtokenUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    loginInfo?: InputJsonValue
    authToken?: StringFieldUpdateOperationsInput | string
    authUserKey?: ZarkUserUpdateOneRequiredWithoutAuthTokenInput
  }

  export type AuthtokenUncheckedUpdateInput = {
    authId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    loginInfo?: InputJsonValue
    authToken?: StringFieldUpdateOperationsInput | string
    authUserId?: IntFieldUpdateOperationsInput | number
  }

  export type AuthtokenCreateManyInput = {
    authId?: number
    createAt?: Date | string
    updatedAt?: Date | string
    expiration: Date | string
    loginInfo: InputJsonValue
    authToken: string
    authUserId: number
  }

  export type AuthtokenUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    loginInfo?: InputJsonValue
    authToken?: StringFieldUpdateOperationsInput | string
  }

  export type AuthtokenUncheckedUpdateManyInput = {
    authId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    loginInfo?: InputJsonValue
    authToken?: StringFieldUpdateOperationsInput | string
    authUserId?: IntFieldUpdateOperationsInput | number
  }

  export type ZarkCompanyCreateInput = {
    companyName: string
    companyAddress: string
    country: string
    taxNumber: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZarkCompanyUncheckedCreateInput = {
    zkcid?: number
    companyName: string
    companyAddress: string
    country: string
    taxNumber: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZarkCompanyUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZarkCompanyUncheckedUpdateInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZarkCompanyCreateManyInput = {
    zkcid?: number
    companyName: string
    companyAddress: string
    country: string
    taxNumber: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZarkCompanyUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZarkCompanyUncheckedUpdateManyInput = {
    zkcid?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    taxNumber?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumLOGIN_TYPEFilter = {
    equals?: LOGIN_TYPE
    in?: Enumerable<LOGIN_TYPE>
    notIn?: Enumerable<LOGIN_TYPE>
    not?: NestedEnumLOGIN_TYPEFilter | LOGIN_TYPE
  }

  export type AuthtokenListRelationFilter = {
    every?: AuthtokenWhereInput
    some?: AuthtokenWhereInput
    none?: AuthtokenWhereInput
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
  }

  export type EnumLANGUAGEFilter = {
    equals?: LANGUAGE
    in?: Enumerable<LANGUAGE>
    notIn?: Enumerable<LANGUAGE>
    not?: NestedEnumLANGUAGEFilter | LANGUAGE
  }

  export type ZarkUserEmailMobile_numberCompoundUniqueInput = {
    email: string
    mobile_number: string
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type EnumLOGIN_TYPEWithAggregatesFilter = {
    equals?: LOGIN_TYPE
    in?: Enumerable<LOGIN_TYPE>
    notIn?: Enumerable<LOGIN_TYPE>
    not?: NestedEnumLOGIN_TYPEWithAggregatesFilter | LOGIN_TYPE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumLOGIN_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumLOGIN_TYPEFilter
    _max?: NestedEnumLOGIN_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumLOGIN_TYPEFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedJsonNullableFilter
  }

  export type EnumLANGUAGEWithAggregatesFilter = {
    equals?: LANGUAGE
    in?: Enumerable<LANGUAGE>
    notIn?: Enumerable<LANGUAGE>
    not?: NestedEnumLANGUAGEWithAggregatesFilter | LANGUAGE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumLANGUAGEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumLANGUAGEFilter
    _max?: NestedEnumLANGUAGEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumLANGUAGEFilter
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

  export type ZarkUserRelationFilter = {
    is?: ZarkUserWhereInput
    isNot?: ZarkUserWhereInput
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

  export type AuthtokenCreateNestedManyWithoutAuthUserKeyInput = {
    create?: XOR<Enumerable<AuthtokenCreateWithoutAuthUserKeyInput>, Enumerable<AuthtokenUncheckedCreateWithoutAuthUserKeyInput>>
    connectOrCreate?: Enumerable<AuthtokenCreateOrConnectWithoutAuthUserKeyInput>
    createMany?: AuthtokenCreateManyAuthUserKeyInputEnvelope
    connect?: Enumerable<AuthtokenWhereUniqueInput>
  }

  export type AuthtokenUncheckedCreateNestedManyWithoutAuthUserKeyInput = {
    create?: XOR<Enumerable<AuthtokenCreateWithoutAuthUserKeyInput>, Enumerable<AuthtokenUncheckedCreateWithoutAuthUserKeyInput>>
    connectOrCreate?: Enumerable<AuthtokenCreateOrConnectWithoutAuthUserKeyInput>
    createMany?: AuthtokenCreateManyAuthUserKeyInputEnvelope
    connect?: Enumerable<AuthtokenWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumLOGIN_TYPEFieldUpdateOperationsInput = {
    set?: LOGIN_TYPE
  }

  export type EnumLANGUAGEFieldUpdateOperationsInput = {
    set?: LANGUAGE
  }

  export type AuthtokenUpdateManyWithoutAuthUserKeyInput = {
    create?: XOR<Enumerable<AuthtokenCreateWithoutAuthUserKeyInput>, Enumerable<AuthtokenUncheckedCreateWithoutAuthUserKeyInput>>
    connectOrCreate?: Enumerable<AuthtokenCreateOrConnectWithoutAuthUserKeyInput>
    upsert?: Enumerable<AuthtokenUpsertWithWhereUniqueWithoutAuthUserKeyInput>
    createMany?: AuthtokenCreateManyAuthUserKeyInputEnvelope
    connect?: Enumerable<AuthtokenWhereUniqueInput>
    set?: Enumerable<AuthtokenWhereUniqueInput>
    disconnect?: Enumerable<AuthtokenWhereUniqueInput>
    delete?: Enumerable<AuthtokenWhereUniqueInput>
    update?: Enumerable<AuthtokenUpdateWithWhereUniqueWithoutAuthUserKeyInput>
    updateMany?: Enumerable<AuthtokenUpdateManyWithWhereWithoutAuthUserKeyInput>
    deleteMany?: Enumerable<AuthtokenScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuthtokenUncheckedUpdateManyWithoutAuthUserKeyInput = {
    create?: XOR<Enumerable<AuthtokenCreateWithoutAuthUserKeyInput>, Enumerable<AuthtokenUncheckedCreateWithoutAuthUserKeyInput>>
    connectOrCreate?: Enumerable<AuthtokenCreateOrConnectWithoutAuthUserKeyInput>
    upsert?: Enumerable<AuthtokenUpsertWithWhereUniqueWithoutAuthUserKeyInput>
    createMany?: AuthtokenCreateManyAuthUserKeyInputEnvelope
    connect?: Enumerable<AuthtokenWhereUniqueInput>
    set?: Enumerable<AuthtokenWhereUniqueInput>
    disconnect?: Enumerable<AuthtokenWhereUniqueInput>
    delete?: Enumerable<AuthtokenWhereUniqueInput>
    update?: Enumerable<AuthtokenUpdateWithWhereUniqueWithoutAuthUserKeyInput>
    updateMany?: Enumerable<AuthtokenUpdateManyWithWhereWithoutAuthUserKeyInput>
    deleteMany?: Enumerable<AuthtokenScalarWhereInput>
  }

  export type ZarkUserCreateNestedOneWithoutAuthTokenInput = {
    create?: XOR<ZarkUserCreateWithoutAuthTokenInput, ZarkUserUncheckedCreateWithoutAuthTokenInput>
    connectOrCreate?: ZarkUserCreateOrConnectWithoutAuthTokenInput
    connect?: ZarkUserWhereUniqueInput
  }

  export type ZarkUserUpdateOneRequiredWithoutAuthTokenInput = {
    create?: XOR<ZarkUserCreateWithoutAuthTokenInput, ZarkUserUncheckedCreateWithoutAuthTokenInput>
    connectOrCreate?: ZarkUserCreateOrConnectWithoutAuthTokenInput
    upsert?: ZarkUserUpsertWithoutAuthTokenInput
    connect?: ZarkUserWhereUniqueInput
    update?: XOR<ZarkUserUpdateWithoutAuthTokenInput, ZarkUserUncheckedUpdateWithoutAuthTokenInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumLOGIN_TYPEFilter = {
    equals?: LOGIN_TYPE
    in?: Enumerable<LOGIN_TYPE>
    notIn?: Enumerable<LOGIN_TYPE>
    not?: NestedEnumLOGIN_TYPEFilter | LOGIN_TYPE
  }

  export type NestedEnumLANGUAGEFilter = {
    equals?: LANGUAGE
    in?: Enumerable<LANGUAGE>
    notIn?: Enumerable<LANGUAGE>
    not?: NestedEnumLANGUAGEFilter | LANGUAGE
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type NestedEnumLOGIN_TYPEWithAggregatesFilter = {
    equals?: LOGIN_TYPE
    in?: Enumerable<LOGIN_TYPE>
    notIn?: Enumerable<LOGIN_TYPE>
    not?: NestedEnumLOGIN_TYPEWithAggregatesFilter | LOGIN_TYPE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumLOGIN_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumLOGIN_TYPEFilter
    _max?: NestedEnumLOGIN_TYPEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumLOGIN_TYPEFilter
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | null
    not?: InputJsonValue | null
  }

  export type NestedEnumLANGUAGEWithAggregatesFilter = {
    equals?: LANGUAGE
    in?: Enumerable<LANGUAGE>
    notIn?: Enumerable<LANGUAGE>
    not?: NestedEnumLANGUAGEWithAggregatesFilter | LANGUAGE
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumLANGUAGEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumLANGUAGEFilter
    _max?: NestedEnumLANGUAGEFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumLANGUAGEFilter
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

  export type AuthtokenCreateWithoutAuthUserKeyInput = {
    createAt?: Date | string
    updatedAt?: Date | string
    expiration: Date | string
    loginInfo: InputJsonValue
    authToken: string
  }

  export type AuthtokenUncheckedCreateWithoutAuthUserKeyInput = {
    authId?: number
    createAt?: Date | string
    updatedAt?: Date | string
    expiration: Date | string
    loginInfo: InputJsonValue
    authToken: string
  }

  export type AuthtokenCreateOrConnectWithoutAuthUserKeyInput = {
    where: AuthtokenWhereUniqueInput
    create: XOR<AuthtokenCreateWithoutAuthUserKeyInput, AuthtokenUncheckedCreateWithoutAuthUserKeyInput>
  }

  export type AuthtokenCreateManyAuthUserKeyInputEnvelope = {
    data: Enumerable<AuthtokenCreateManyAuthUserKeyInput>
    skipDuplicates?: boolean
  }

  export type AuthtokenUpsertWithWhereUniqueWithoutAuthUserKeyInput = {
    where: AuthtokenWhereUniqueInput
    update: XOR<AuthtokenUpdateWithoutAuthUserKeyInput, AuthtokenUncheckedUpdateWithoutAuthUserKeyInput>
    create: XOR<AuthtokenCreateWithoutAuthUserKeyInput, AuthtokenUncheckedCreateWithoutAuthUserKeyInput>
  }

  export type AuthtokenUpdateWithWhereUniqueWithoutAuthUserKeyInput = {
    where: AuthtokenWhereUniqueInput
    data: XOR<AuthtokenUpdateWithoutAuthUserKeyInput, AuthtokenUncheckedUpdateWithoutAuthUserKeyInput>
  }

  export type AuthtokenUpdateManyWithWhereWithoutAuthUserKeyInput = {
    where: AuthtokenScalarWhereInput
    data: XOR<AuthtokenUpdateManyMutationInput, AuthtokenUncheckedUpdateManyWithoutAuthTokenInput>
  }

  export type AuthtokenScalarWhereInput = {
    AND?: Enumerable<AuthtokenScalarWhereInput>
    OR?: Enumerable<AuthtokenScalarWhereInput>
    NOT?: Enumerable<AuthtokenScalarWhereInput>
    authId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    expiration?: DateTimeFilter | Date | string
    loginInfo?: JsonFilter
    authToken?: StringFilter | string
    authUserId?: IntFilter | number
  }

  export type ZarkUserCreateWithoutAuthTokenInput = {
    firstname: string
    lastname: string
    email?: string | null
    mobile_number?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    isEmailValid?: boolean
    isMobileValid?: boolean
    password?: string | null
    loginType?: LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country: string
    timezone: string
    language?: LANGUAGE
    isActive?: boolean
  }

  export type ZarkUserUncheckedCreateWithoutAuthTokenInput = {
    zkuid?: number
    firstname: string
    lastname: string
    email?: string | null
    mobile_number?: string | null
    createAt?: Date | string
    updatedAt?: Date | string
    isEmailValid?: boolean
    isMobileValid?: boolean
    password?: string | null
    loginType?: LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country: string
    timezone: string
    language?: LANGUAGE
    isActive?: boolean
  }

  export type ZarkUserCreateOrConnectWithoutAuthTokenInput = {
    where: ZarkUserWhereUniqueInput
    create: XOR<ZarkUserCreateWithoutAuthTokenInput, ZarkUserUncheckedCreateWithoutAuthTokenInput>
  }

  export type ZarkUserUpsertWithoutAuthTokenInput = {
    update: XOR<ZarkUserUpdateWithoutAuthTokenInput, ZarkUserUncheckedUpdateWithoutAuthTokenInput>
    create: XOR<ZarkUserCreateWithoutAuthTokenInput, ZarkUserUncheckedCreateWithoutAuthTokenInput>
  }

  export type ZarkUserUpdateWithoutAuthTokenInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailValid?: BoolFieldUpdateOperationsInput | boolean
    isMobileValid?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: EnumLOGIN_TYPEFieldUpdateOperationsInput | LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEFieldUpdateOperationsInput | LANGUAGE
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ZarkUserUncheckedUpdateWithoutAuthTokenInput = {
    zkuid?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile_number?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailValid?: BoolFieldUpdateOperationsInput | boolean
    isMobileValid?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    loginType?: EnumLOGIN_TYPEFieldUpdateOperationsInput | LOGIN_TYPE
    otherLoginDetails?: InputJsonValue | null
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    language?: EnumLANGUAGEFieldUpdateOperationsInput | LANGUAGE
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthtokenCreateManyAuthUserKeyInput = {
    authId?: number
    createAt?: Date | string
    updatedAt?: Date | string
    expiration: Date | string
    loginInfo: InputJsonValue
    authToken: string
  }

  export type AuthtokenUpdateWithoutAuthUserKeyInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    loginInfo?: InputJsonValue
    authToken?: StringFieldUpdateOperationsInput | string
  }

  export type AuthtokenUncheckedUpdateWithoutAuthUserKeyInput = {
    authId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    loginInfo?: InputJsonValue
    authToken?: StringFieldUpdateOperationsInput | string
  }

  export type AuthtokenUncheckedUpdateManyWithoutAuthTokenInput = {
    authId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    loginInfo?: InputJsonValue
    authToken?: StringFieldUpdateOperationsInput | string
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