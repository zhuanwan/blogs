# linux一些命令

查看内存  
du -sh *  

查看当前目录文件大小  
sudo df -hl  

jdk链接  

ln -sf /app/java/jdk1.8.0_231/jre/bin/java /usr/bin/java

移动解压文件rar
* cd /mydata/nginx/html
* sudo mv /home/ubuntu/data/dist.rar /mydata/nginx/html
* sudo rm -rf dist
* sudo unrar x dist.rar
* sudo rm -rf dist.rar

移动解压文件zip
* cd /mydata/nginx/html
* sudo mv /home/ubuntu/data/dist.zip /mydata/nginx/html
* sudo rm -rf dist
* sudo unzip dist.zip
* sudo rm -rf dist.zip

刷新nginx  
sudo systemctl restart nginx
