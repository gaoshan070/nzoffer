# build the React app
FROM node:10-alpine AS build-react
RUN mkdir /home/temp-build
WORKDIR /home/temp-build
COPY client/package*.json /home/temp-build/
RUN npm install --silent
COPY client/src/ ./src/
COPY client/tsconfig.json client/.env ./
COPY client/public ./public/
RUN npm run build

# build the back-end
FROM node:10-alpine
RUN mkdir /home/offer111
WORKDIR /home/offer111
COPY package*.json /home/offer111/
RUN npm install --slient
COPY config/ ./config/
COPY server/ ./server/
COPY ./ecosystem.config.js /home/offer111/
COPY --from=build-react /home/temp-build/build/ /home/offer111/public/

USER root

EXPOSE 3030

ENV NODE_ENV production

CMD [ "npm", "run", "start" ]