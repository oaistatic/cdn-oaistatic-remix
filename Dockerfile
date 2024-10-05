FROM caddy

# 安装 jq 和 rsync 工具
RUN apk add --no-cache jq rsync

# 复制资源文件
COPY ./resource/public /var/www/html
COPY ./resource/Caddyfile /etc/caddy/Caddyfile

# 设置环境变量
ENV ASSET_PREFIX http://example.com

# 读取 version.json 中的 cacheBuildId
RUN cacheBuildId=$(jq -r '.cacheBuildId' /var/www/html/version.json) && \
    # 删除 /var/www/html/template 目录下除 cacheBuildId 同名目录外的所有目录
    find /var/www/html/template -mindepth 1 -maxdepth 1 ! -name "$cacheBuildId" -exec rm -rf {} + && \
    # 清空 /var/www/html/assets 目录
    rm -rf /var/www/html/assets/*

# 确保 assets 文件夹存在
RUN mkdir -p /tmp/assets && mkdir -p /var/www/html/assets

# 从宿主机复制 ./resource/public/assets 目录
COPY ./resource/public/assets /tmp/assets

# 确保文件不丢失，使用 rsync 复制
RUN cacheBuildId=$(jq -r '.cacheBuildId' /var/www/html/version.json) && \
    rsync -av /tmp/assets/$cacheBuildId/ /var/www/html/assets/ && \
    rm -rf /tmp/assets

# 替换占位符并启动 caddy
CMD find /var/www/html -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" \) -exec sed -i "s|{{.assetPrefix}}|${ASSET_PREFIX}|g" {} + && caddy run --config /etc/caddy/Caddyfile
