#!/usr/bin/env sh

source $( dirname $0 )/common.sh

MOCHA=$NODE_BIN/mocha
FILES=$@

if [ -z $FILES ]
then
  # Search for valid fles
  FILES=$(\
    find $TEST_DIR \
    -type f \
    -name '*.js' \
    ! -name '*-mock.js' \
    ! -name '*-setup.js' \
    ! -name '*-teardown.js'
  );
fi

cd $PROJECT_DIR;

$MOCHA --require babel-register --reporter spec --recursive $FILES
