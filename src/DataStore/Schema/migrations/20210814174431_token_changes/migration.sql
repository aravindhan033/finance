/*
  Warnings:

  - You are about to drop the column `authtoken` on the `ZarkUser` table. All the data in the column will be lost.
  - You are about to drop the column `lastLoginAt` on the `ZarkUser` table. All the data in the column will be lost.
  - You are about to drop the column `salt` on the `ZarkUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ZarkUser" DROP COLUMN "authtoken",
DROP COLUMN "lastLoginAt",
DROP COLUMN "salt",
ADD COLUMN     "otherLoginDetails" JSONB;

-- CreateTable
CREATE TABLE "Authtoken" (
    "authid" SERIAL NOT NULL,
    "authType" "LOGIN_TYPE" NOT NULL DEFAULT E'EMAIL',
    "createAt" TIMESTAMPTZ NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "loginInfo" JSONB NOT NULL,
    "authUserId" INTEGER NOT NULL,

    PRIMARY KEY ("authid")
);

-- AddForeignKey
ALTER TABLE "Authtoken" ADD FOREIGN KEY ("authUserId") REFERENCES "ZarkUser"("zkuid") ON DELETE CASCADE ON UPDATE CASCADE;
