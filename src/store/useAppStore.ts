import { create } from 'zustand'

interface AppState {
  theme: 'dark' | 'light'
  selectedAppId: string | null
  selectedNodeId: string | null
  isMobilePanelOpen: boolean
  activeInspectorTab: string
  setTheme: (theme: 'dark' | 'light') => void
  setAppId: (id: string | null) => void
  setNodeId: (id: string | null) => void
  setMobilePanelOpen: (isOpen: boolean) => void
  setActiveTab: (tab: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'dark',
  selectedAppId: "supertokens-golang", // default selection
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeInspectorTab: 'config',
  setTheme: (theme) => set({ theme }),
  setAppId: (id) => set({ selectedAppId: id, selectedNodeId: null }),
  setNodeId: (id) => set({ selectedNodeId: id }),
  setMobilePanelOpen: (isOpen) => set({ isMobilePanelOpen: isOpen }),
  setActiveTab: (tab) => set({ activeInspectorTab: tab }),
}))
