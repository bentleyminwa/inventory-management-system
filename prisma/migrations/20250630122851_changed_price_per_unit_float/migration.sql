/*
  Warnings:

  - You are about to alter the column `pricePerUnit` on the `Wine` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

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
    "pricePerUnit" REAL NOT NULL DEFAULT 0.00,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Wine" ("bottleSize", "createdAt", "id", "name", "pricePerUnit", "status", "stock", "type", "updatedAt", "vintage") SELECT "bottleSize", "createdAt", "id", "name", "pricePerUnit", "status", "stock", "type", "updatedAt", "vintage" FROM "Wine";
DROP TABLE "Wine";
ALTER TABLE "new_Wine" RENAME TO "Wine";
CREATE UNIQUE INDEX "Wine_name_key" ON "Wine"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
