/*
  Warnings:

  - You are about to drop the `ZKUserCompanyMapping` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LOGIN_TYPE" AS ENUM ('FACEBOOK', 'GOOGLE', 'APPLE', 'EMAIL');

-- CreateEnum
CREATE TYPE "LANGUAGE" AS ENUM ('en');

-- DropTable
DROP TABLE "ZKUserCompanyMapping";

-- DropEnum
DROP TYPE "USER_PROFILE";

-- CreateTable
CREATE TABLE "ZarkUser" (
    "zkuid" SERIAL NOT NULL,
    "firstname" VARCHAR(15) NOT NULL,
    "lastname" VARCHAR(15) NOT NULL,
    "email" VARCHAR(50),
    "mobile_number" VARCHAR(20),
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "isEmailValid" BOOLEAN NOT NULL DEFAULT false,
    "isMobileValid" BOOLEAN NOT NULL DEFAULT false,
    "password" VARCHAR(60),
    "loginType" "LOGIN_TYPE" NOT NULL DEFAULT E'EMAIL',
    "otherLoginDetails" JSONB,
    "country" VARCHAR(6) NOT NULL DEFAULT E'IN',
    "timezone" VARCHAR(6) NOT NULL DEFAULT E'GMT+5',
    "language" "LANGUAGE" NOT NULL DEFAULT E'en',
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("zkuid")
);

-- CreateTable
CREATE TABLE "Authtoken" (
    "authId" SERIAL NOT NULL,
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "expiration" INTEGER NOT NULL,
    "loginInfo" JSONB NOT NULL,
    "authToken" VARCHAR(255) NOT NULL,
    "accessToken" VARCHAR(255),
    "authUserId" INTEGER NOT NULL,

    PRIMARY KEY ("authId")
);

-- CreateTable
CREATE TABLE "ZarkCompany" (
    "zkcid" SERIAL NOT NULL,
    "companyName" VARCHAR(150) NOT NULL,
    "companyAddress" TEXT,
    "country" VARCHAR(6),
    "taxNumber" VARCHAR(25),
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "createdBy" INTEGER NOT NULL,

    PRIMARY KEY ("zkcid")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZarkUser.email_unique" ON "ZarkUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ZarkUser.mobile_number_unique" ON "ZarkUser"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "ZarkUser.email_mobile_number_unique" ON "ZarkUser"("email", "mobile_number");

-- AddForeignKey
ALTER TABLE "Authtoken" ADD FOREIGN KEY ("authUserId") REFERENCES "ZarkUser"("zkuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZarkCompany" ADD FOREIGN KEY ("createdBy") REFERENCES "ZarkUser"("zkuid") ON DELETE CASCADE ON UPDATE CASCADE;
