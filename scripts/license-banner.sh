#!/bin/bash
set -e

cat << EOF
/*
 * $(jq < package.json -r .name)
 * @copyright (c) 2022 hankei6km
 * @license MIT
 * Open Source Licenses: ${1}
 */
EOF