module.exports = {
  basePath: '/test',
  async rewrites() {
    return [
      {
        source: '/todos',
        destination: `https://jsonplaceholder.typicode.com/todos`,
        basePath: false,
      },
    ]
  },
}
