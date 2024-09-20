export function buildSvgLoader() {
    return {
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    resolve: {
      alias: {
        react: require.resolve('react'),
      }
    }
  }
}
