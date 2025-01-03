# 计算机系统 Mac

## Mac 安装 Nginx

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

```shell
# 基于 brew 安装 Nginx

# 安装 Nginx
brew install nginx
```

![](/public/images/4_Nginx_20241231111116.png)

[常用指令](https://juejin.cn/post/6883018403641032712)

```shell

# 查看配置信息
brew info nginx

# 查看 Nginx 配置文件内容
cat /opt/homebrew/etc/nginx/nginx.conf

# 查看 Nginx 进程
ps -ef | grep nginx

# 查看 Nginx 进程数
ps -ef | grep nginx | wc -l

# 查看 Nginx 进程 ID
ps -ef | grep nginx | awk '{print $2}'

# 查看 Nginx 进程 ID 的个数
ps -ef | grep nginx | awk '{print $2}' | wc -l

```

![](/public/images/4_Nginx_20241231113535.png)

```shell
# 启动 Nginx
brew services start nginx

# 打开界面时，记得查看端口是否被占用
# 重启 Nginx
brew services restart nginx

# 停止 Nginx
brew services stop nginx

# 取消进程
sudo kill 进程 ID
```

</details>