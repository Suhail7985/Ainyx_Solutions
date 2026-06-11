import { Share2, Moon, Sun, Menu } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'

export const Topbar = () => {
  const { setMobilePanelOpen, setTheme, theme } = useAppStore()

  return (
    <div className="h-[72px] border-b border-border bg-panel flex items-center justify-between px-4 sm:px-6 z-20 shrink-0">
      <div className="flex items-center gap-3 sm:gap-4">
        <button 
          onClick={() => setMobilePanelOpen(true)}
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-md shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="bg-foreground text-background p-1 rounded hidden sm:block">
          <div className="w-6 h-6 bg-background rounded-sm" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        </div>
        <div className="flex items-center gap-2 bg-muted/50 border border-border rounded-md px-3 py-1.5 text-sm cursor-pointer hover:bg-muted">
          <div className="w-5 h-5 rounded flex items-center justify-center bg-indigo-600 text-[10px] font-bold text-white">ST</div>
          <span className="text-foreground">supertokens-golang</span>
          <span className="text-muted-foreground mx-2">^</span>
          <span className="text-muted-foreground">...</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 border border-border bg-background rounded-md hover:bg-muted text-muted-foreground transition-colors"><Share2 className="w-4 h-4" /></button>
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className="p-2 border border-border bg-background rounded-md hover:bg-muted text-foreground transition-colors"
        >
          {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 ml-2" />
      </div>
    </div>
  )
}
