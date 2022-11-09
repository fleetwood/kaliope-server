
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql",
  generates: {
    "src/server/": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
