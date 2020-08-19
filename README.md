# Rewrites bug

This source code reproduces a bug that occurs when the rewrites option is used with basePath and public directory. I can't rewrite to the desired URL. If any of the conditions are not met, the bug will not occur.

First, build next server and run it.

```sh
npm install
npm run build
npm run start
```

Second, GET the url what should be rewritten.
`http://localhost:3000/todos`

## Expected Result

```
$ curl 'http://localhost:3000/todos'
HTTP/1.1 200 OK
...
```

## Actual Result

```
HTTP/1.1 404 Not Found
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
X-Powered-By: Next.js
ETag: "9b4-euJYEtH38aPbb6xrjZoe12UwZLA"
Content-Type: text/html; charset=utf-8
Content-Length: 2484
Vary: Accept-Encoding
Date: Wed, 19 Aug 2020 02:14:54 GMT
Connection: keep-alive
```
