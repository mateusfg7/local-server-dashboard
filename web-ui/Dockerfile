FROM node:latest

WORKDIR /usr/src/app/web-ui

COPY package*.json ./

RUN yarn install

EXPOSE 3000

CMD "yarn build && yarn start"
