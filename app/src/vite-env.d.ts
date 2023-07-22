/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_GRAPHQL_ENDPOINT: string;
  readonly VITE_GAPI_CLIENT_ID: string;
  readonly VITE_FT_OAUTH_CLIENT_ID: string;
  readonly VITE_FT_OAUTH_CLIENT_SECRET: string;
  readonly VITE_FT_OAUTH_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
