/*
  Warnings:

  - Added the required column `updatedAt` to the `ZarkCompany` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Authtoken" ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ZarkCompany" ADD COLUMN     "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ZarkUser" ALTER COLUMN "createAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" DROP DEFAULT;
