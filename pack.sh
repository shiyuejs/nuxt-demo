#!/bin/bash
if [ $1 == "start" ]
then
    cnpm i
    npm run build
    pm2 start pm2.json
fi

if [ $1 == "restart" ]
then
    cnpm i
    npm run build
    pm2 restart pm2.json
fi

if [ $1 == "stop" ]
then
    pm2 stop nuxt-demo
fi