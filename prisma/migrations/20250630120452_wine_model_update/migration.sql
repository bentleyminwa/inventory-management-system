/*
  Warnings:

  - You are about to drop the column `imageSrcId` on the `Wine` table. All the data in the column will be lost.
  - Added the required column `wineId` to the `ImageSrc` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ImageSrc" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "small" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "large" TEXT NOT NULL,
    "wineId" TEXT NOT NULL,
    CONSTRAINT "ImageSrc_wineId_fkey" FOREIGN KEY ("wineId") REFERENCES "Wine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ImageSrc" ("id", "large", "medium", "small") SELECT "id", "large", "medium", "small" FROM "ImageSrc";
DROP TABLE "ImageSrc";
ALTER TABLE "new_ImageSrc" RENAME TO "ImageSrc";
CREATE UNIQUE INDEX "ImageSrc_wineId_key" ON "ImageSrc"("wineId");
CREATE TABLE "new_Wine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "vintage" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "bottleSize" TEXT NOT NULL,
    "pricePerUnit" DECIMAL NOT NULL DEFAULT 0.00,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Wine" ("bottleSize", "createdAt", "id", "name", "pricePerUnit", "status", "stock", "type", "updatedAt", "vintage") SELECT "bottleSize", "createdAt", "id", "name", "pricePerUnit", "status", "stock", "type", "updatedAt", "vintage" FROM "Wine";
DROP TABLE "Wine";
ALTER TABLE "new_Wine" RENAME TO "Wine";
CREATE UNIQUE INDEX "Wine_name_key" ON "Wine"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
