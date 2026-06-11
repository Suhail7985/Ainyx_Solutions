import { useEffect } from 'react'
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useAppGraph } from '@/api/queries'
import { useAppStore } from '@/store/useAppStore'
import { ServiceNode } from './ServiceNode'

const nodeTypes = {
  service: ServiceNode
}

export const GraphCanvas = () => {
  const { selectedAppId, theme } = useAppStore()
  const { data: graphData, isLoading, isError } = useAppGraph(selectedAppId)

  const [nodes, setNodes, onNodesChange] = useNodesState<any>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>([])

  useEffect(() => {
    if (graphData) {
      setNodes(graphData.nodes)
      setEdges(graphData.edges)
    }
  }, [graphData, setNodes, setEdges])

  if (isLoading) return <div className="h-full flex items-center justify-center">Loading graph...</div>
  if (isError) return <div className="h-full flex items-center justify-center text-destructive">Failed to load graph</div>

  return (
    <div className="w-full h-full bg-transparent relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={24} 
          size={1} 
          color={theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)'}
        />
      </ReactFlow>
    </div>
  )
}
