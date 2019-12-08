#!/bin/bash
appName="nuxt-demo"

# 开启新服务
if [ $1 == "start" ]
then
    cnpm i
    npm run build		# 必须每次build，这是客户端构建过程
    pm2 start pm2.json	# npm start 是服务端运行，相当于用express开启一个服务
fi

# 重启服务
if [ $1 == "restart" ]
then
    cnpm i
    npm run build
    pm2 restart pm2.json
fi

# 停止服务, 需要删除服务
if [ $1 == "stop" ]
then
    pm2 stop ${appName}
	pm2 delete ${appName}
fi

# 初始化一个项目并启动, 用于要删除node_modules残留文件
if [ $1 == "init" ]
then
    rm -rf ./node_modules
	cnpm i
    npm run build
	pm2 stop ${appName}
	sleep 2
    pm2 start pm2.json
fi