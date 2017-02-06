#!/usr/bin/env bash

export SCRIPT_DIR=$( cd $( dirname $0 ) && pwd)
export PROJECT_DIR=$( dirname $SCRIPT_DIR )
export CONFIG_DIR=$PROJECT_DIR/config
export TEST_DIR=$PROJECT_DIR/test
export NODE_MODULES=$PROJECT_DIR/node_modules
export NODE_BIN=$NODE_MODULES/.bin
# Allows for project/src relative imports and require statements
export NODE_PATH=$PROJECT_DIR/src:$PROJECT_DIR/test

