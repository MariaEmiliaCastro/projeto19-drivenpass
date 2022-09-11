-- CreateTable
CREATE TABLE "SecureNotes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "SecureNotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WiFi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "WiFi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SecureNotes_userId_title_key" ON "SecureNotes"("userId", "title");

-- AddForeignKey
ALTER TABLE "SecureNotes" ADD CONSTRAINT "SecureNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WiFi" ADD CONSTRAINT "WiFi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
