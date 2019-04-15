# build the front-end
FROM node:10-alpine AS build-react
RUN mkdir /temp-build
WORKDIR /temp-build
COPY client/package*.json ./
RUN npm install --silent
COPY client/. ./
RUN npm run build

# prepare the back-end
FROM node:10-alpine
RUN mkdir /offer111
WORKDIR /offer111
COPY package*.json /offer111/
RUN npm install --slient
COPY . .
COPY --from=build-react /temp-build/build/ /offer111/public/

# run this web-application
EXPOSE 3030
ENV NODE_ENV production

CMD [ "npm", "run", "start" ]