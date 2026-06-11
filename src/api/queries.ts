import { useQuery } from '@tanstack/react-query'

export interface App {
  id: string
  name: string
  status: string
}

export interface GraphData {
  nodes: any[]
  edges: any[]
}

export const useApps = () => {
  return useQuery({
    queryKey: ['apps'],
    queryFn: async (): Promise<App[]> => {
      const res = await fetch('/api/apps')
      if (!res.ok) throw new Error('Failed to fetch apps')
      return res.json()
    }
  })
}

export const useAppGraph = (appId: string | null) => {
  return useQuery({
    queryKey: ['appGraph', appId],
    queryFn: async (): Promise<GraphData> => {
      const res = await fetch(`/api/apps/${appId}/graph`)
      if (!res.ok) throw new Error('Failed to fetch app graph')
      return res.json()
    },
    enabled: !!appId
  })
}
