#!/usr/bin/bashs

sudo systemctl stop nginx

cd resume/

git pull origin master

sudo cp -r /home/user/resume/dist/* /var/www/html/

sudo systemctl start nginx

ngrok http http://localhost:80