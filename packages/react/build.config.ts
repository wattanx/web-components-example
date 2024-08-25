import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index.ts'],
  declaration: true,
  externals: ['react'],
  rollup: {
    emitCJS: true,
  },
});
