# cdn-oaistatic
静态资源CDN,适用于`ChatGpt-Mirror-Server`及`cockroachai`等项目。

最新静态资源已迁移发布至 [https://github.com/oaistatic/oaistatic.github.io](https://github.com/oaistatic/oaistatic.github.io)

## 部署方法

创建`docker-compose.yml`文件，内容如下：

```yaml
version: '3'
services:
  cdn-oaistatic:
    image: xyhelper/cdn-oaistatic
    restart: always
    ports:
      - 8642:80
```

然后执行`docker compose up -d`即可。

## 更新方法

执行`docker compose pull`拉取最新镜像，然后执行`docker compose up -d`重启容器即可。


## 配置参数

在 `chatgpt-share-server` `chatgpt-mirror-server` `cockroachai` 中配置环境变量

```
ASSET_PREFIX: https://oaistatic-cdn.closeai.biz
```