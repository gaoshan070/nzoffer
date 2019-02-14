# prepare the back-end
FROM node:10-alpine
RUN mkdir /offer111
WORKDIR /offer111
COPY package*.json /offer111/
RUN npm install --slient --production
COPY . .

# run this web-application
EXPOSE 3030
ENV NODE_ENV production

CMD [ "npm", "run", "start" ]