import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
  documents: ['src/**/*'],
  generates: {
    './src/shared/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
      config: {
        scalars: {
          DateTime: 'string', // TODO: convert to Date type
          URL: 'string', // TODO: convert to URL type
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
