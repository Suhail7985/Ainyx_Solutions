import { Handle, Position, useReactFlow } from '@xyflow/react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Settings, Cpu, HardDrive, Database, Globe } from 'lucide-react'

export const ServiceNode = ({ id, data }: any) => {
  const { setNodes } = useReactFlow()
  const { name, status, cpu, memory, disk, region, cost } = data

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    setNodes((nds) => 
      nds.map((n) => {
        if (n.id === id) {
          return { ...n, data: { ...n.data, cpu: val } }
        }
        return n
      })
    )
  }

  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} className="opacity-0" />
      
      <Card className="w-[420px] bg-card border-border rounded-3xl p-6 flex flex-col gap-6 text-foreground shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-muted p-2 rounded-xl">
              <Database className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-semibold text-xl">{name || 'Service'}</h3>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-success text-success bg-success/10 font-mono px-3 py-1">
              {cost || '$0.00/HR'}
            </Badge>
            <button className="p-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors border border-border">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 px-2 -mb-2">
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono">{cpu || '0.00'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono">{memory || '0.00'} GB</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono">{disk || '0.00'} GB</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono">{region || '1'}</span>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="cpu" className="w-full">
          <TabsList className="w-full justify-between bg-muted/50 p-1 rounded-xl h-[52px]">
            <TabsTrigger value="cpu" className="flex-1 flex items-center justify-center gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-sm py-2">
              <Cpu className="w-4 h-4" /> CPU
            </TabsTrigger>
            <TabsTrigger value="memory" className="flex-1 flex items-center justify-center gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-muted-foreground hover:text-foreground text-sm py-2">
              <Database className="w-4 h-4" /> Memory
            </TabsTrigger>
            <TabsTrigger value="disk" className="flex-1 flex items-center justify-center gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-muted-foreground hover:text-foreground text-sm py-2">
              <HardDrive className="w-4 h-4" /> Disk
            </TabsTrigger>
            <TabsTrigger value="region" className="flex-1 flex items-center justify-center gap-2 rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow text-muted-foreground hover:text-foreground text-sm py-2">
              <Globe className="w-4 h-4" /> Region
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Gradient Slider Area */}
        <div className="flex items-center gap-4 py-2">
          <div className="relative flex-1 h-3 flex items-center">
            {/* The gradient track */}
            <div className="absolute w-full h-2 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500 pointer-events-none" />
            <input 
              type="range" 
              min="0" max="1" step="0.01" 
              value={cpu || 0} 
              onChange={handleSliderChange}
              className="nodrag absolute w-full h-2 opacity-0 cursor-pointer z-10"
            />
            {/* Custom thumb */}
            <div 
              className="absolute h-4 w-4 bg-white rounded-full shadow-md border-2 border-zinc-200 z-0 pointer-events-none"
              style={{ left: `calc(${Math.min(100, Math.max(0, (cpu || 0) * 100))}% - 8px)` }}
            />
          </div>
          <div className="w-20">
            <input 
              type="number" 
              value={cpu || 0}
              onChange={handleSliderChange}
              className="nodrag w-full bg-background border border-border rounded-lg p-2 text-right text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Status */}
        <div className="mt-2">
          {status === 'Healthy' ? (
            <Badge className="bg-success/20 text-success hover:bg-success/20 border border-success/50 px-3 py-1.5 rounded-lg shadow-none flex inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              Success
            </Badge>
          ) : (
            <Badge className="bg-destructive/20 text-destructive hover:bg-destructive/20 border border-destructive/50 px-3 py-1.5 rounded-lg shadow-none flex inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              Error
            </Badge>
          )}
        </div>

        {/* AWS Logo */}
        <img src="/aws.svg" className="absolute bottom-6 right-6 w-14 opacity-90" alt="AWS" />
      </Card>

      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </div>
  )
}
