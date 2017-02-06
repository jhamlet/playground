#!/usr/bin/env sh

source $( dirname $0 )/common.sh

WEBPACK=$NODE_BIN/webpack-dev-server

node -r babel-register $WEBPACK --config $CONFIG_DIR/webpack.js
