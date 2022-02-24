##################################################
## Server Proper
##################################################
FROM nginx:1.21.5-alpine as server
WORKDIR /

ARG VERSION="needs to be overwritten"

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY public/ /usr/share/nginx/html

RUN echo $VERSION > /usr/share/nginx/html/version.txt
