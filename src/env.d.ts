/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POSTGRES_URL: string
  readonly MODE: string
  readonly PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
