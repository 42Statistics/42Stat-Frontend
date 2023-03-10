/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_GRAPHQL_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
