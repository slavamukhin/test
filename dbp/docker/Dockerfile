FROM nginx:1.20.1-alpine

ARG DIST_DIR="/dist"

COPY dbp/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY $DIST_DIR /app/nginx/api-management-ui

EXPOSE 80
