/*
  Warnings:

  - You are about to drop the `Authtoken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ZarkCompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ZarkUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "USER_PROFILE" AS ENUM ('PORTAL_OWNER', 'ADMIN', 'MANAGER', 'EMPLOYEE', 'CLIENT', 'CONTRACTOR', 'CUSTOMER');

-- DropForeignKey
ALTER TABLE "Authtoken" DROP CONSTRAINT "Authtoken_authUserId_fkey";

-- DropForeignKey
ALTER TABLE "ZarkCompany" DROP CONSTRAINT "ZarkCompany_createdBy_fkey";

-- DropTable
DROP TABLE "Authtoken";

-- DropTable
DROP TABLE "ZarkCompany";

-- DropTable
DROP TABLE "ZarkUser";

-- DropEnum
DROP TYPE "LANGUAGE";

-- DropEnum
DROP TYPE "LOGIN_TYPE";

-- CreateTable
CREATE TABLE "ZKUserCompanyMapping" (
    "zkucid" SERIAL NOT NULL,
    "zkuid" INTEGER NOT NULL,
    "zkcid" INTEGER NOT NULL,
    "user_profile" "USER_PROFILE" NOT NULL DEFAULT E'EMPLOYEE',
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    PRIMARY KEY ("zkucid")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZKUserCompanyMapping.zkuid_zkcid_unique" ON "ZKUserCompanyMapping"("zkuid", "zkcid");
