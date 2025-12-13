import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from '../features/common/components/HomeLayout'

export const Route = createFileRoute('/add-job')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <HomeLayout>
      <div className='p-4'>Hello "/add-job"!</div>
    </HomeLayout>
  )
}
