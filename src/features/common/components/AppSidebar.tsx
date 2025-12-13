import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Home, PlusCircleIcon, List } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Add New Job',
    url: '#',
    icon: PlusCircleIcon,
  },
  {
    title: 'Your List',
    url: '#',
    icon: List,
  },
]

export function AppSidebar() {
  const { user } = useAuth()

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarHeader>
          <h2 className="text-2xl font-bold">{user?.fullName}</h2>
        </SidebarHeader>
        <SidebarMenu className="pt-4 px-2 gap-4" aria-label="Main Menu">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton className='p-2' asChild variant="outline" size="default">
                <a href={item.url}>
                  <item.icon className="ml-1 h-8 w-8" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
