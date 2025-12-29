-- CreateEnum
CREATE TYPE "ApplicationMethod" AS ENUM ('Walk_in', 'Online', 'Email', 'Refferal');

-- AlterTable
ALTER TABLE "Applications" ADD COLUMN     "application_method" "ApplicationMethod" NOT NULL DEFAULT 'Walk_in',
ADD COLUMN     "company_location" TEXT NOT NULL DEFAULT '';
