# Rewrites bug

This source code reproduces a bug that occurs when the rewrites option is used with basePath and public directory. I can't rewirte to the desired URL. If any of the conditions are not met, the bug will not occur.

First, build next server and run it.

```sh
npm install
npm run build
npm run start
```

Second, GET the url what should be rewritten.
`http://localhost:3000/todos`
