import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
  documents: ['src/**/*'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        scalars: {
          DateTime: 'Date',
          URL: 'URL',
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
