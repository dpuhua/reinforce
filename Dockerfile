# 指定镜像和版本
FROM node:10.8.0
# 镜像创建者
LABEL name="dph"

# 将根目录下的文件都copy到container文件系统的app文件夹下
ADD . /app/
# cd app
WORKDIR /app

# 安装依赖
RUN npm i
RUN npm run build

# 配置环境变量
ENV HOST 0.0.0.0
ENV PORT 8687

# 容器对外暴露的端口号
EXPOSE 8687

# 容器启动是执行的命令，类似npm run start
CMD [ "npm", "run", "dist" ]
