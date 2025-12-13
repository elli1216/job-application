import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from '../features/common/components/HomeLayout'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <HomeLayout>
      <div>Home</div>
    </HomeLayout>
  )
}
