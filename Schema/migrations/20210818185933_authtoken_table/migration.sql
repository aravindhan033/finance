/*
  Warnings:

  - Changed the type of `expiration` on the `Authtoken` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Authtoken" DROP COLUMN "expiration",
ADD COLUMN     "expiration" BIGINT NOT NULL;
