/*
  Warnings:

  - Added the required column `createdBy` to the `ZarkCompany` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ZarkCompany" ADD COLUMN     "createdBy" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ZarkCompany" ADD FOREIGN KEY ("createdBy") REFERENCES "ZarkUser"("zkuid") ON DELETE CASCADE ON UPDATE CASCADE;
