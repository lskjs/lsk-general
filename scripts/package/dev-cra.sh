#!/usr/bin/env bash
rm -rf cra/src && \
rm -rf cra/public/assets && \
cd cra && \
ln -s ../src src && \
cp -R ../public/assets public/assets  || : && \
SKIP_PREFLIGHT_CHECK=true npm start