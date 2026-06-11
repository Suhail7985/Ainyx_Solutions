import { Cloud, Database, Layers, Hexagon, Zap, Network } from 'lucide-react'

export const LeftRail = () => {
  return (
    <div className="w-[64px] border-r border-border flex flex-col items-center py-6 gap-8 bg-panel z-10 shrink-0">
      <Cloud className="w-6 h-6 text-foreground cursor-pointer hover:opacity-80" />
      <Database className="w-6 h-6 text-muted cursor-pointer hover:opacity-80" />
      <Layers className="w-6 h-6 text-red-500 cursor-pointer hover:opacity-80" />
      <Hexagon className="w-6 h-6 text-green-500 cursor-pointer hover:opacity-80" />
      <Zap className="w-6 h-6 text-yellow-500 cursor-pointer hover:opacity-80" />
      <Network className="w-6 h-6 text-green-400 cursor-pointer hover:opacity-80" />
    </div>
  )
}
