-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_jobTypeId_fkey" FOREIGN KEY ("jobTypeId") REFERENCES "JobTypes"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
