-- CreateTable
CREATE TABLE "ZK_Category" (
    "zkcid" INTEGER NOT NULL,
    "zk_category_id" BIGSERIAL NOT NULL,
    "zk_category_name" VARCHAR(200) NOT NULL,
    "zk_category_level" INTEGER NOT NULL DEFAULT 0,
    "zk_category_parentid" BIGINT,

    PRIMARY KEY ("zk_category_id")
);
