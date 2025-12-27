import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { prisma } from '@/db'
import { Loading } from '@/features/common/components/Loading'
import ApplicationTable from '../features/yourList/components/applicationTable'
import { useAuth } from '@/hooks/use-auth'
import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'

const getApplicationList = createServerFn({
  method: 'GET',
})
  .inputValidator((clerkId: string) => z.string().parse(clerkId))
  .handler(async ({ data: clerkId }) => {
    const user = await prisma.users.findUnique({
      where: { clerkId },
    })

    if (!user) return []

    const jobs = await prisma.applications.findMany({
      where: { userId: user.uuid },
      orderBy: { date_applied: 'desc' },
    })
    return jobs
  })

export type Application = Awaited<ReturnType<typeof getApplicationList>>[number]

export const Route = createFileRoute('/your-list')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user, isLoaded } = useAuth()

  const { data: applicationList, isLoading } = useQuery({
    queryKey: ['applications', user?.id],
    queryFn: () => getApplicationList({ data: user!.id }),
    enabled: !!user?.id,
  })

  if (!isLoaded || isLoading) return <Loading />

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Applications</h1>
      <ApplicationTable applicationList={applicationList || []} />
    </div>
  )
}
