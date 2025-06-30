-- CreateTable
CREATE TABLE "Wine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "vintage" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "Status" TEXT NOT NULL,
    "bottleSize" TEXT NOT NULL,
    "pricePerUnit" DECIMAL NOT NULL DEFAULT 0.00,
    "imageSrcId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Wine_imageSrcId_fkey" FOREIGN KEY ("imageSrcId") REFERENCES "ImageSrc" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ImageSrc" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "small" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "large" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Wine_name_key" ON "Wine"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Wine_imageSrcId_key" ON "Wine"("imageSrcId");
