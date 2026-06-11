import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import { ChevronRight, Lightbulb, Settings, Rocket, ClipboardList, Puzzle } from 'lucide-react'
import { useApps } from '@/api/queries'
import { useAppStore } from '@/store/useAppStore'

const ICONS: Record<string, React.ReactNode> = {
  'supertokens-golang': <Lightbulb className="w-5 h-5 text-white" />,
  'supertokens-java': <Settings className="w-5 h-5 text-white" />,
  'supertokens-python': <Rocket className="w-5 h-5 text-white" />,
  'supertokens-ruby': <ClipboardList className="w-5 h-5 text-white" />,
  'supertokens-go': <Puzzle className="w-5 h-5 text-white" />,
}

const COLORS: Record<string, string> = {
  'supertokens-golang': 'bg-indigo-600',
  'supertokens-java': 'bg-purple-600',
  'supertokens-python': 'bg-red-600',
  'supertokens-ruby': 'bg-pink-600',
  'supertokens-go': 'bg-purple-600',
}

export const AppsPanel = () => {
  const { data: apps, isLoading, isError } = useApps()
  const { selectedAppId, setAppId } = useAppStore()

  return (
    <div className="w-[412px] bg-panel border-r border-border p-4 flex flex-col z-10 h-full shrink-0">
      <Card className="w-[380px] bg-card border-border flex flex-col h-full overflow-hidden shadow-xl rounded-2xl">
        <div className="p-5 flex flex-col gap-4">
          <h2 className="font-semibold text-lg text-foreground">Application</h2>
          <div className="flex gap-2">
            <Input 
              placeholder="Search..." 
              className="bg-muted border-none text-foreground h-10 placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-border" 
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-10 p-0 shrink-0 rounded-md">
              +
            </Button>
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="flex flex-col p-3 pt-0 gap-1">
            {isLoading && (
              <div className="space-y-3 p-2">
                <Skeleton className="h-16 w-full bg-muted rounded-xl" />
                <Skeleton className="h-16 w-full bg-muted rounded-xl" />
                <Skeleton className="h-16 w-full bg-muted rounded-xl" />
              </div>
            )}
            {isError && (
              <div className="text-destructive p-4 text-sm text-center">Failed to load applications.</div>
            )}
            {apps?.map(app => (
              <div 
                key={app.id} 
                onClick={() => setAppId(app.id)}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors hover:bg-muted ${selectedAppId === app.id ? 'bg-muted' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${COLORS[app.id] || 'bg-blue-600'}`}>
                    {ICONS[app.id] || <span className="text-white font-bold">{app.name.charAt(0)}</span>}
                  </div>
                  <span className="text-sm font-medium text-foreground">{app.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  )
}
