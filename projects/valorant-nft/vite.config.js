export default {
  base: './',
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
  },
}