FROM node:10-alpine

WORKDIR /home/dokku/offer111app

COPY package*.json ./

RUN npm install

COPY . .

USER root

EXPOSE 3030

ENV NODE_ENV production

CMD [ "npm", "run", "start" ]