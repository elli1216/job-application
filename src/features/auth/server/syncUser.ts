import { createServerFn } from '@tanstack/react-start'
import { prisma } from '@/db'
import { z } from 'zod'

const userSchema = z.object({
  clerkId: z.string(),
  email: z.string().email(),
  fullName: z.string().optional(),
})

export const syncUser = createServerFn({
  method: 'POST',
})
  .validator((data: unknown) => userSchema.parse(data))
  .handler(async ({ data }) => {
    const { clerkId, email, fullName } = data

    const user = await prisma.users.upsert({
      where: { clerkId },
      update: {
        email,
        full_name: fullName || undefined,
      },
      create: {
        clerkId,
        email,
        full_name: fullName,
      },
    })

    return user
  })
