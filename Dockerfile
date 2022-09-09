# stage1 - build react app first
FROM node:14
WORKDIR /app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]