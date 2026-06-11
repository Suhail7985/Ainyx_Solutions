import { http, HttpResponse, delay } from 'msw'

const MOCK_APPS = [
  { id: 'supertokens-golang', name: 'supertokens-golang' },
  { id: 'supertokens-java', name: 'supertokens-java' },
  { id: 'supertokens-python', name: 'supertokens-python' },
  { id: 'supertokens-ruby', name: 'supertokens-ruby' },
  { id: 'supertokens-go', name: 'supertokens-go' },
]

const MOCK_GRAPHS: Record<string, any> = {
  'supertokens-golang': {
    nodes: [
      { 
        id: 'node-1', 
        type: 'service', 
        position: { x: 400, y: 150 }, 
        data: { 
          name: 'Postgres', 
          status: 'Healthy', 
          cpu: 0.02, 
          memory: 0.05, 
          disk: 10.00, 
          region: '1', 
          cost: '$0.03/HR' 
        } 
      },
      { 
        id: 'node-2', 
        type: 'service', 
        position: { x: 50, y: 400 }, 
        data: { 
          name: 'Redis', 
          status: 'Down', 
          cpu: 0.02, 
          memory: 0.05, 
          disk: 10.00, 
          region: '1', 
          cost: '$0.03/HR' 
        } 
      },
      { 
        id: 'node-3', 
        type: 'service', 
        position: { x: 550, y: 550 }, 
        data: { 
          name: 'Mongodb', 
          status: 'Down', 
          cpu: 0.02, 
          memory: 0.05, 
          disk: 10.00, 
          region: '1', 
          cost: '$0.03/HR' 
        } 
      },
    ],
    edges: [
      { id: 'e1-2', source: 'node-1', target: 'node-2', animated: true, style: { stroke: '#94A3B8' } },
      { id: 'e1-3', source: 'node-1', target: 'node-3', animated: true, style: { stroke: '#94A3B8' } },
    ],
  }
}

export const handlers = [
  http.get('/api/apps', async () => {
    await delay(300)
    return HttpResponse.json(MOCK_APPS)
  }),
  
  http.get('/api/apps/:appId/graph', async ({ params }) => {
    await delay(300)
    const { appId } = params
    
    const graph = MOCK_GRAPHS[appId as string] || MOCK_GRAPHS['supertokens-golang']
    return HttpResponse.json(graph)
  })
]
