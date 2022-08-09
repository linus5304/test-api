-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'ACCEPTED', 'REJECTED');

-- AlterTable
ALTER TABLE "Applications" ADD COLUMN     "status" "ApplicationStatus" NOT NULL DEFAULT 'APPLIED';
