/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_GRAPHQL_ENDPOINT: string;
  readonly VITE_GAPI_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
