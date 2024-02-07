FROM --platform=linux/amd64 node:18-alpine as build

LABEL author "Dawn Sheedy"

LABEL version="0.1.0"

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM nginx:stable-alpine as host

COPY --from=build /app/build/ /usr/share/nginx/html