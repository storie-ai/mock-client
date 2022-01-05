##################################################
## Server Build
##################################################
FROM node:17.2-alpine3.12 as builder
WORKDIR /code

COPY package.json /code
COPY package-lock.json /code

RUN npm install

COPY . /code

RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

##################################################
## Server Proper
##################################################
FROM nginx:1.21.5-alpine as server
WORKDIR /code

COPY --from=builder /code/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /code/build /usr/share/nginx/html
