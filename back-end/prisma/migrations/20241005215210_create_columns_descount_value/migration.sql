/*
  Warnings:

  - Made the column `total` on table `sales` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discount` on table `sales` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discount` on table `sales_items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "discountValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "total" SET NOT NULL,
ALTER COLUMN "total" SET DEFAULT 0,
ALTER COLUMN "discount" SET NOT NULL,
ALTER COLUMN "discount" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "sales_items" ADD COLUMN     "descountValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "discount" SET NOT NULL,
ALTER COLUMN "discount" SET DEFAULT 0;
