# ddl-sql

```
npm install electron --save-dev
npm i nodemon -D
 ```



# 问题

- npm install electron --save-dev 卡住或报错
```
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c node install.js
npm ERR! RequestError: read ECONNRESET
npm ERR!     at ClientRequest.<anonymous> (D:\work\self\ddl-sql\node_modules\got\dist\source\core\index.js:970:111)
npm ERR!     at Object.onceWrapper (node:events:628:26)
npm ERR!     at ClientRequest.emit (node:events:525:35)
npm ERR!     at ClientRequest.origin.emit (D:\work\self\ddl-sql\node_modules\@szmarczak\http-timer\dist\source\index.js:43:20)
npm ERR!     at TLSSocket.socketErrorListener (node:_http_client:494:9)
npm ERR!     at TLSSocket.emit (node:events:513:28)
npm ERR!     at emitErrorNT (node:internal/streams/destroy:157:8)
npm ERR!     at emitErrorCloseNT (node:internal/streams/destroy:122:3)
npm ERR!     at processTicksAndRejections (node:internal/process/task_queues:83:21)
npm ERR!     at TLSWrap.onStreamRead (node:internal/stream_base_commons:217:20)

npm ERR! A complete log of this run can be found in:
```
- 解决方案：更换electron下载源
```
npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
```
- 查看配置`npm config ls`
