import { LayoutDashboard, Users, Server, Database } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Server, label: 'Compute', active: false },
  { icon: Database, label: 'Storage', active: false },
  { icon: Users, label: 'Access', active: false },
]

export const Sidebar = () => {
  return (
    <div className="w-16 border-r bg-muted/10 hidden md:flex flex-col items-center py-6 gap-4 shrink-0 h-[calc(100vh-3.5rem)]">
      {navItems.map((item, i) => (
        <div
          key={i}
          title={item.label}
          className={cn(
            "p-3 rounded-xl cursor-pointer transition-all duration-200 group relative",
            item.active 
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105" 
              : "text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
          )}
        >
          <item.icon className="w-5 h-5" />
        </div>
      ))}
    </div>
  )
}
