
# Nginx

## 基础配置

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

```conf
# Nginx 启动时创建的 worker 进程的数量
worker_processes  1;

# 配置 Nginx 主进程的 PID 文件路径
#pid        logs/nginx.pid;

events {
    # 指定每个 worker 进程可以同时处理的最大连接数
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    # 提高文件传输的效率，特别是对于大文件来说
    sendfile        on;
    # 用于减少网络传输中的数据包数量，通过将多个小数据包合并成一个大数据包来提高网络传输的效率
    tcp_nopush     on;

    # 指定了空闲连接的超时时间，即客户端和服务器之间保持连接的最长时间
    # 在这里，连接在 65 秒内没有任何活动就会被关闭。通过调整此值，您可以控制服务器上空闲连接的数量，以及资源的有效利用程度
    keepalive_timeout  65;

    # 启用 HTTP 响应的压缩功能，以减少传输的数据量，提高网络传输效率
    gzip  on;

    server {
        # 端口
        listen       8099;
        server_name  localhost;
        
        location / {
            root html-vue;
            # hash 路由的重定向
            try_files $uri $uri/ /index.html;
            index index.html;
            # 跨域
            add_header 'Access-Control-Allow-Origin' '*';
            # 允许跨域请求的方法包括 GET、POST 和 OPTIONS
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            # 允许跨域请求携带的自定义请求头
            add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
            
            # 确保浏览器在使用缓存前必须与服务器确认资源是否被修改过
            if ($request_filename ~* ^.*?.(html|htm|js)$) {
              add_header Cache-Control no-cache;
            }
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # 跨域代理 - 作用是不在 vue 项目中写死 ip
        # 这样配置后，再也不用给前端里面写固定的 ip
        location /data {
            # 删除 url 中的 /data 但是目前貌似不生效
            # rewrite ^/data/(.*)$ /$1 break;
            proxy_pass http://192.168.31.214:3000;
        }
    }

    # 基础访问
    server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }
        # 错误页面
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # 跨域代理
        location /data {
            proxy_pass http://192.168.31.214:3000;
        }
    }
}
```

</details>