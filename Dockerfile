# base image
FROM node:8

ARG SERVER_PORT
EXPOSE $SERVER_PORT

WORKDIR /service
COPY package.json yarn.lock webpack.config.prod.js Procfile ./
RUN yarn install --pure-lockfile
COPY src/ src/
COPY public/ public/

COPY .* nodemon.json ./

## PROD
RUN yarn build
