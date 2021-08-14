/*
  Warnings:

  - The primary key for the `Authtoken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authType` on the `Authtoken` table. All the data in the column will be lost.
  - You are about to drop the column `authid` on the `Authtoken` table. All the data in the column will be lost.
  - Added the required column `authToken` to the `Authtoken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Authtoken" DROP CONSTRAINT "Authtoken_pkey",
DROP COLUMN "authType",
DROP COLUMN "authid",
ADD COLUMN     "authId" SERIAL NOT NULL,
ADD COLUMN     "authToken" VARCHAR(100) NOT NULL,
ADD PRIMARY KEY ("authId");
