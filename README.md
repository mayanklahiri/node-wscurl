# wscurl

No-frills netcat/curl-like tool to talk to a Websocket server.

### Install

    npm install -g wscurl

### Usage

    wscurl wss://echo.websocket.org

 * Standard input is piped to the server once connected.
 * Server response is piped to standard output without decoration.

### Similar Tools

  * `wscat` (Javascript) is currently not maintained and does not correctly accept pipe input.
  * `wsta` (Rust) https://github.com/esphen/wsta/
