/*
  Warnings:

  - A unique constraint covering the columns `[zkcid,zkp_name]` on the table `ZKProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "zkcid_zkp_name" ON "ZKProduct"("zkcid", "zkp_name");
