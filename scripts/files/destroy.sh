#!/bin/bash

API="http://localhost:4741"
URL_PATH="/files"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo

# COMMAND LINE
# TOKEN="kjhdfghkljdgkjhl" ID="5fgsfgjdghj" sh scripts/files/destroy.sh
