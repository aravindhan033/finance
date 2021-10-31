/*
  Warnings:

  - A unique constraint covering the columns `[zk_shipping_id]` on the table `ZK_Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `zk_shipping_id` to the `ZK_Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ZK_Order" ADD COLUMN     "zk_shipping_id" BIGINT NOT NULL;

-- CreateTable
CREATE TABLE "ZK_ShippingAddress" (
    "zkcid" INTEGER NOT NULL,
    "zk_customer_id" BIGINT NOT NULL,
    "zk_shipping_id" BIGSERIAL NOT NULL,
    "zk_name" TEXT NOT NULL,
    "zk_contact_number" TEXT NOT NULL,
    "zk_addressline_1" TEXT NOT NULL,
    "zk_addressline_2" TEXT,
    "zk_state" TEXT NOT NULL,
    "zk_country" TEXT NOT NULL,
    "zk_pincode" INTEGER NOT NULL,

    PRIMARY KEY ("zk_shipping_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZK_ShippingAddress_zk_customer_id_unique" ON "ZK_ShippingAddress"("zk_customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "ZK_Order_zk_shipping_id_unique" ON "ZK_Order"("zk_shipping_id");

-- AddForeignKey
ALTER TABLE "ZK_ShippingAddress" ADD FOREIGN KEY ("zk_customer_id") REFERENCES "ZK_Customer"("zk_customer_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZK_Order" ADD FOREIGN KEY ("zk_shipping_id") REFERENCES "ZK_ShippingAddress"("zk_shipping_id") ON DELETE CASCADE ON UPDATE CASCADE;
