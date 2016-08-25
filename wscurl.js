#!/usr/bin/env node
var minimist = require('minimist')
  , readline = require('readline')
  , WebSocket = require('ws')
  ;


function main(args) {
  if (args._.length < 1) {
    console.error('Usage: wscurl <ws:// or wss:// endpoint>');
    return process.exit(-1);
  }
  var ws = new WebSocket(args._[0]);
  ws.once('open', function() {
    var rl = readline.createInterface({
      input: process.stdin,
    });
    rl.on('line', function(line) {
      ws.send(line);
    });
    rl.on('close', function() {
      if (!args.wait) {
        ws.close();
      }
    });
  });
  ws.on('message', console.log);
  ws.once('close', function() {
    return process.exit(0);
  });
}


if (require.main === module) {
  return main(minimist(process.argv.slice(2)));
}
