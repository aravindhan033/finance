/*
  Warnings:

  - A unique constraint covering the columns `[companyName]` on the table `ZarkCompany` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ZarkCompany.companyName_unique" ON "ZarkCompany"("companyName");
