/*
  Warnings:

  - You are about to drop the column `descountValue` on the `sales_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sales_items" DROP COLUMN "descountValue",
ADD COLUMN     "discountValue" DOUBLE PRECISION NOT NULL DEFAULT 0;
