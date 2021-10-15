/*
  Warnings:

  - You are about to drop the `Authtoken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ZarkCompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ZarkUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PRODUCT_TYPE" AS ENUM ('GOODS', 'SERVICE');

-- CreateEnum
CREATE TYPE "USER_PROFILE" AS ENUM ('PORTAL_OWNER', 'ADMIN', 'MANAGER', 'EMPLOYEE', 'CLIENT', 'CONTRACTOR', 'CUSTOMER');

-- DropForeignKey
ALTER TABLE "Authtoken" DROP CONSTRAINT "Authtoken_authUserId_fkey";

-- DropForeignKey
ALTER TABLE "ZarkCompany" DROP CONSTRAINT "ZarkCompany_createdBy_fkey";

-- DropTable
DROP TABLE "Authtoken";

-- DropTable
DROP TABLE "ZarkCompany";

-- DropTable
DROP TABLE "ZarkUser";

-- DropEnum
DROP TYPE "LANGUAGE";

-- DropEnum
DROP TYPE "LOGIN_TYPE";

-- CreateTable
CREATE TABLE "ZKUserCompanyMapping" (
    "zkuid" INTEGER NOT NULL,
    "zkcid" INTEGER NOT NULL,
    "user_profile" "USER_PROFILE" NOT NULL DEFAULT E'EMPLOYEE',
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL
);

-- CreateTable
CREATE TABLE "ZKProduct" (
    "zkcid" INTEGER NOT NULL,
    "zkpid" BIGSERIAL NOT NULL,
    "zkp_type" "PRODUCT_TYPE" NOT NULL DEFAULT E'GOODS',
    "zkp_code" TEXT,
    "zkp_name" VARCHAR(255) NOT NULL,
    "zkp_description" TEXT,
    "zkp_unit" INTEGER NOT NULL,
    "zkp_unit_selling_price" DECIMAL(17,3) NOT NULL DEFAULT 0.000,
    "zkp_unit_cost_price" DECIMAL(17,3) NOT NULL DEFAULT 0.000,
    "zkp_char1" TEXT,
    "zkp_char2" TEXT,
    "zkp_char3" TEXT,
    "zkp_char4" TEXT,
    "zkp_char5" TEXT,
    "zkp_number1" BIGINT,
    "zkp_number2" BIGINT,
    "zkp_number3" BIGINT,

    PRIMARY KEY ("zkpid")
);

-- CreateTable
CREATE TABLE "ZK_Tax" (
    "zkcid" INTEGER NOT NULL,
    "zk_tax_id" BIGSERIAL NOT NULL,
    "zk_tax_name" VARCHAR(100) NOT NULL,
    "zk_tax_percentage" DECIMAL(17,3) NOT NULL DEFAULT 0.000,

    PRIMARY KEY ("zk_tax_id")
);

-- CreateTable
CREATE TABLE "ZK_Unit" (
    "zkcid" INTEGER NOT NULL,
    "zk_unit_id" BIGSERIAL NOT NULL,
    "zk_unit_name" VARCHAR(100) NOT NULL,

    PRIMARY KEY ("zk_unit_id")
);

-- CreateTable
CREATE TABLE "ZK_Customer" (
    "zkcid" INTEGER NOT NULL,
    "zk_customer_id" BIGSERIAL NOT NULL,
    "zk_customer_name" VARCHAR(200) NOT NULL,
    "zk_customer_mobile" VARCHAR(25),
    "zk_customer_email" VARCHAR(50),
    "zk_customer_other_details" TEXT NOT NULL,

    PRIMARY KEY ("zk_customer_id")
);

-- CreateTable
CREATE TABLE "ZK_Order" (
    "zkcid" INTEGER NOT NULL,
    "zk_order_id" BIGSERIAL NOT NULL,
    "zk_order_number" VARCHAR(150) NOT NULL,
    "zk_order_description" TEXT,
    "zk_order_total_amount" DECIMAL(17,3) NOT NULL,
    "zk_order_total_tax" JSONB NOT NULL,
    "zk_order_total_discount" JSONB NOT NULL,
    "zk_order_createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "zk_order_updatedAt" TIMESTAMPTZ NOT NULL,
    "zk_order_createby" INTEGER NOT NULL,
    "zk_order_customer_id" BIGINT,
    "zk_order_notes" TEXT NOT NULL,
    "zk_order_termscondition" TEXT NOT NULL,

    PRIMARY KEY ("zk_order_id")
);

-- CreateTable
CREATE TABLE "ZK_Order_Mapping" (
    "zk_order_mapping_id" BIGSERIAL NOT NULL,
    "zk_order_id" BIGINT NOT NULL,
    "zk_product_id" BIGINT NOT NULL,
    "zk_product_quantity" INTEGER NOT NULL,
    "zk_product_selling_price" DECIMAL(17,3) NOT NULL,
    "zk_product_cost_price" DECIMAL(17,3) NOT NULL,

    PRIMARY KEY ("zk_order_mapping_id")
);

-- CreateTable
CREATE TABLE "ZK_Product_Tax_Mapping" (
    "zkpid" BIGINT NOT NULL,
    "zk_tax_id" BIGINT NOT NULL,
    "zkcid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ZKUserCompanyMapping.zkuid_zkcid_unique" ON "ZKUserCompanyMapping"("zkuid", "zkcid");

-- CreateIndex
CREATE UNIQUE INDEX "ZK_Tax.zkcid_zk_tax_name_unique" ON "ZK_Tax"("zkcid", "zk_tax_name");

-- CreateIndex
CREATE UNIQUE INDEX "ZK_Unit.zkcid_zk_unit_name_unique" ON "ZK_Unit"("zkcid", "zk_unit_name");

-- CreateIndex
CREATE UNIQUE INDEX "ZK_Product_Tax_Mapping.zkpid_zk_tax_id_unique" ON "ZK_Product_Tax_Mapping"("zkpid", "zk_tax_id");

-- AddForeignKey
ALTER TABLE "ZK_Order" ADD FOREIGN KEY ("zk_order_customer_id") REFERENCES "ZK_Customer"("zk_customer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZK_Order_Mapping" ADD FOREIGN KEY ("zk_order_id") REFERENCES "ZK_Order"("zk_order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZK_Product_Tax_Mapping" ADD FOREIGN KEY ("zkpid") REFERENCES "ZKProduct"("zkpid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZK_Product_Tax_Mapping" ADD FOREIGN KEY ("zk_tax_id") REFERENCES "ZK_Tax"("zk_tax_id") ON DELETE CASCADE ON UPDATE CASCADE;
