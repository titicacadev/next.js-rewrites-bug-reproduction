module.exports = {
  async rewrites() {
    return [
      {
        source: '/docs/:slug',
        destination: 'http://example.com/docs/:slug',
        basePath: false,
      },
    ]
  },
}
