# build the React app
FROM node:10-alpine AS build-react

WORKDIR /home/temp/build-react

COPY ./client/package*.json ./

RUN npm install

COPY ./client/* ./

RUN npm run build-on-server

# build the back-end
FROM node:10-alpine

RUN mkdir /home/offer111

WORKDIR /home/offer111

COPY package*.json ./

RUN npm install

COPY . .

COPY --from=build-react /home/temp/build-react/build ./public

USER root

EXPOSE 3030

ENV NODE_ENV production

CMD [ "npm", "run", "start" ]