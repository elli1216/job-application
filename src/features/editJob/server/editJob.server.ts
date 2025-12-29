import { createServerFn } from '@tanstack/react-start'
import { prisma } from '@/db'
import { Applications } from '@/generated/prisma/client'

export const getJobById = createServerFn({ method: 'GET' })
  .inputValidator((data: { applicationId: string; clerkId: string }) => data)
  .handler(async ({ data }) => {
    const user = await prisma.users.findUnique({
      where: { clerkId: data.clerkId },
    })

    if (!user) {
      throw new Error('User not found')
    }

    return await prisma.applications.findFirst({
      where: { uuid: data.applicationId, userId: user.uuid },
    })
  })

export const editJob = createServerFn({ method: 'POST' })
  .inputValidator(
    (data: { applicationData: Applications; clerkId: string }) => data,
  )
  .handler(async ({ data }) => {
    const user = await prisma.users.findUnique({
      where: { clerkId: data.clerkId },
    })

    const application = await prisma.applications.updateMany({
      where: {
        uuid: data.applicationData.uuid,
        userId: user?.uuid,
      },
      data: {
        company_name: data.applicationData.company_name,
        job_title: data.applicationData.job_title,
        date_applied: new Date(data.applicationData.date_applied),
        status: data.applicationData.status,
        job_link: data.applicationData.job_link,
        notes: data.applicationData.notes,
        jobTypeId: data.applicationData.jobTypeId,
      },
    })

    if (!user) {
      throw new Error('User not found')
    }

    return {
      success: true,
      message: 'Job application edited successfully',
      data: application,
    }
  })
