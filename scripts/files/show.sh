#!/bin/sh

API="http://localhost:4741"
URL_PATH="/files"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo

# COMMAND LINE
# TOKEN="NST6KiIiLtQNkom0s2/WS4C/YImV41DnLLZvg22SA90=--MofgS+pHW36H+dQhRiq4Pb/yrQzpGd7MyFAHrCPO1AM=" ID="5a85b44e4af75fc4b976e272" sh scripts/files/show.sh
