export function buildSvgLoader() {
    return {
      test: /\.svg?$/,
      oneOf: [
        {
          use: ['@svgr/webpack', 'file-loader'],
          issuer: /\.[jt]sx?$/,
        },
      ]
  }
}