# stage1 - build react app first
FROM node:current-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./package-lock.json /app/
RUN npm install --silent
RUN npm install -g serve
COPY . /app
RUN npm run build
CMD ["serve", "-s", "build"]