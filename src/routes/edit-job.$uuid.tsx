import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getJobById } from '@/features/editJob/server/editJob.server'
import { useAuth } from '@/hooks/use-auth'
import { Loading } from '@/features/common/components/Loading'
import Error from '@/features/common/components/Error'
// import { Controller, useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'

export const Route = createFileRoute('/edit-job/$uuid')({
  component: RouteComponent,
})

function RouteComponent() {
  const { uuid } = Route.useParams()
  const { user } = useAuth()

  const { data, isLoading, error } = useQuery({
    queryKey: ['job', uuid],
    queryFn: async () => getJobById({ data: { applicationId: uuid, clerkId: user?.id! } }),
  })

  if (isLoading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <div>{JSON.stringify(data)}</div>
  )
}
