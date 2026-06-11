import { useEffect } from 'react'
import { Topbar } from './Topbar'
import { LeftRail } from './LeftRail'
import { AppsPanel } from './AppsPanel'
import { GraphCanvas } from '../canvas/GraphCanvas'
import { useAppStore } from '@/store/useAppStore'
import { Sheet, SheetContent } from '@/components/ui/sheet'

export const AppLayout = () => {
  const { isMobilePanelOpen, setMobilePanelOpen, theme } = useAppStore()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light')
    root.classList.remove('dark')
    root.classList.add(theme)
    root.style.colorScheme = theme
  }, [theme])

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      <Topbar />
      <div className="flex h-[calc(100vh-72px)] relative">
        <LeftRail />
        
        {/* Desktop Panel */}
        <div className="hidden md:block">
          <AppsPanel />
        </div>

        {/* Mobile Panel Drawer */}
        <Sheet open={isMobilePanelOpen} onOpenChange={setMobilePanelOpen}>
          <SheetContent side="left" className="p-0 border-r-0 w-[412px] sm:max-w-[412px] bg-transparent">
            <AppsPanel />
          </SheetContent>
        </Sheet>

        <div className="flex-1 relative">
          <GraphCanvas />
        </div>
      </div>
    </div>
  )
}
