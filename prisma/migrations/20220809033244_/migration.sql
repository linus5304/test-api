/*
  Warnings:

  - You are about to drop the column `firsname` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "department" DROP NOT NULL,
ALTER COLUMN "salary" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firsname",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
