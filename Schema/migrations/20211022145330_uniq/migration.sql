/*
  Warnings:

  - A unique constraint covering the columns `[zkp_unit]` on the table `ZKProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ZKProduct" ADD COLUMN     "zkp_product_img" TEXT,
ALTER COLUMN "zkp_unit" SET DATA TYPE BIGINT;

-- CreateIndex
CREATE UNIQUE INDEX "ZKProduct_zkp_unit_unique" ON "ZKProduct"("zkp_unit");

-- AddForeignKey
ALTER TABLE "ZKProduct" ADD FOREIGN KEY ("zkp_unit") REFERENCES "ZK_Unit"("zk_unit_id") ON DELETE CASCADE ON UPDATE CASCADE;
