# I tried to deploy locally in Ubuntu 18.04.3 LTS, but it fails

## When I start the server with the npm run dev command, I get an error.

> events.js:187
      throw er; // Unhandled 'error' event
      ^

>Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (net.js:1300:14)
    at listenInCluster (net.js:1348:12)
    at Server.listen (net.js:1436:7)
    at Function.listen (/home/gourav/Desktop/Rest api/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/home/gourav/Desktop/Rest api/app.js:8:5)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1327:8)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) {
  code: 'EADDRINUSE',
  errno: 'EADDRINUSE',
  syscall: 'listen',
  address: '::',
  port: 3000
}
