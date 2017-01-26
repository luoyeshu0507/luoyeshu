#!/bin/bash
user=luoyeshu
root=/home/luoyeshu/luoyeshu.com
host=luoyeshu.com

echo 'clean remote...'
ssh -l ${user} ${host} > /dev/null 2>&1 << eeooff
cd ${root}
rm -rf ./*
exit
eeooff
echo 'deploy...'
scp -r ./* ${user}@${host}:${root}
echo 'done.'