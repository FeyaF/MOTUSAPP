#syntax=docker/dockerfile:1

FROM node:18.10.0
ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json /

RUN npm install 

COPY . .

EXPOSE 4000

CMD [ "node", "server.js" ]