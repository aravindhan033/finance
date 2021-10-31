/*
  Warnings:

  - A unique constraint covering the columns `[zk_category_id]` on the table `ZKProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ZKProduct" ADD COLUMN     "zk_category_id" BIGINT NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "ZKProduct_zk_category_id_unique" ON "ZKProduct"("zk_category_id");

-- AddForeignKey
ALTER TABLE "ZKProduct" ADD FOREIGN KEY ("zk_category_id") REFERENCES "ZK_Category"("zk_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
