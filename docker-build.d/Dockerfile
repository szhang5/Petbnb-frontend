# base image
FROM node:8

ARG SERVER_PORT
EXPOSE $SERVER_PORT

WORKDIR /service
COPY package.json yarn.lock webpack.config.js ./
RUN yarn install --pure-lockfile
COPY src/ src/
COPY public/ public/

COPY .* nodemon.json ./

#RUN yarn

#CMD /bin/bash -c "yarn dev"


## PROD
RUN yarn build

CMD /bin/bash -c "yarn start"