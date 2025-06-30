/*
  Warnings:

  - You are about to drop the column `Status` on the `Wine` table. All the data in the column will be lost.
  - Added the required column `status` to the `Wine` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "vintage" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "bottleSize" TEXT NOT NULL,
    "pricePerUnit" DECIMAL NOT NULL DEFAULT 0.00,
    "imageSrcId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Wine_imageSrcId_fkey" FOREIGN KEY ("imageSrcId") REFERENCES "ImageSrc" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Wine" ("bottleSize", "createdAt", "id", "imageSrcId", "name", "pricePerUnit", "stock", "type", "updatedAt", "vintage") SELECT "bottleSize", "createdAt", "id", "imageSrcId", "name", "pricePerUnit", "stock", "type", "updatedAt", "vintage" FROM "Wine";
DROP TABLE "Wine";
ALTER TABLE "new_Wine" RENAME TO "Wine";
CREATE UNIQUE INDEX "Wine_name_key" ON "Wine"("name");
CREATE UNIQUE INDEX "Wine_imageSrcId_key" ON "Wine"("imageSrcId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
