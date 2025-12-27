import Header from './Header'
import { AppSidebar } from './AppSidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { useAuth } from '@/hooks/use-auth'

export function HomeLayout({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth()

  return (
    <SidebarProvider>
      {isSignedIn && <AppSidebar />}
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
