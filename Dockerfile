FROM caddy:alpine

# 安装工具并复制资源文件
RUN apk add --no-cache jq rsync && \
    mkdir -p /var/www/html

COPY ./resource/public /var/www/html
COPY ./resource/Caddyfile /etc/caddy/Caddyfile

ENV ASSET_PREFIX http://example.com

# 合并所有资源处理步骤
RUN cacheBuildId=$(jq -r '.cacheBuildId' /var/www/html/version.json) && \
    # 清理模板文件
    find /var/www/html/template -mindepth 1 -maxdepth 1 ! -name "$cacheBuildId" -exec rm -rf {} + && \
    # 处理资源文件
    mkdir -p /tmp/assets && \
    mv /var/www/html/assets /tmp/ && \
    mkdir -p /var/www/html/assets && \
    rsync -av /tmp/assets/$cacheBuildId/ /var/www/html/assets/ && \
    # 清理临时文件
    rm -rf /tmp/assets && \
    # 清理包管理器缓存
    rm -rf /var/cache/apk/*

CMD find /var/www/html -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" \) -exec sed -i "s|{{.assetPrefix}}|${ASSET_PREFIX}|g" {} + && caddy run --config /etc/caddy/Caddyfile