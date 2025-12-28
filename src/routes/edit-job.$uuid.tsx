import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/edit-job/$uuid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/edit-job/$uuid"!</div>
}
