-- CreateEnum
CREATE TYPE "LOGIN_TYPE" AS ENUM ('FACEBOOK', 'GOOGLE', 'APPLE', 'EMAIL');

-- CreateEnum
CREATE TYPE "LANGUAGE" AS ENUM ('en');

-- CreateTable
CREATE TABLE "ZarkUser" (
    "zkuid" SERIAL NOT NULL,
    "firstname" VARCHAR(15) NOT NULL,
    "lastname" VARCHAR(15) NOT NULL,
    "email" VARCHAR(50),
    "mobile_number" VARCHAR(20),
    "createAt" TIMESTAMPTZ NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3) NOT NULL,
    "isEmailValid" BOOLEAN NOT NULL DEFAULT false,
    "isMobileValid" BOOLEAN NOT NULL DEFAULT false,
    "salt" VARCHAR(60),
    "password" VARCHAR(60),
    "loginType" "LOGIN_TYPE" NOT NULL DEFAULT E'EMAIL',
    "authtoken" JSONB,
    "country" VARCHAR(6) NOT NULL,
    "timezone" VARCHAR(6) NOT NULL,
    "language" "LANGUAGE" NOT NULL DEFAULT E'en',
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("zkuid")
);

-- CreateTable
CREATE TABLE "ZarkCompany" (
    "zkcid" SERIAL NOT NULL,
    "companyName" VARCHAR(150) NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "country" VARCHAR(6) NOT NULL,
    "taxNumber" VARCHAR(25) NOT NULL,

    PRIMARY KEY ("zkcid")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZarkUser.email_unique" ON "ZarkUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ZarkUser.mobile_number_unique" ON "ZarkUser"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "ZarkUser.email_mobile_number_unique" ON "ZarkUser"("email", "mobile_number");
