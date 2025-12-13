import { createFileRoute } from '@tanstack/react-router'
import { HomeLayout } from '../features/common/components/HomeLayout'
import { useAuth } from '../hooks/use-auth'

export const Route = createFileRoute('/')({ component: App })

function App() {
  useAuth()

  return (
    <HomeLayout>
      <div className="p-4">Home</div>
    </HomeLayout>
  )
}
