# 第一阶段：用于处理资源文件
FROM alpine:latest as builder

RUN apk add --no-cache jq rsync
COPY ./resource/public /var/www/html
WORKDIR /var/www/html

# 处理资源文件
RUN cacheBuildId=$(jq -r '.cacheBuildId' version.json) && \
    mkdir -p /tmp/assets && \
    find template -mindepth 1 -maxdepth 1 ! -name "$cacheBuildId" -exec rm -rf {} +

# 第二阶段：最终镜像
FROM caddy:alpine

COPY --from=builder /var/www/html /var/www/html
COPY ./resource/Caddyfile /etc/caddy/Caddyfile

ENV ASSET_PREFIX http://example.com

CMD find /var/www/html -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" \) -exec sed -i "s|{{.assetPrefix}}|${ASSET_PREFIX}|g" {} + && caddy run --config /etc/caddy/Caddyfile