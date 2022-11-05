/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SPACECRAFT_STORE_API: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }