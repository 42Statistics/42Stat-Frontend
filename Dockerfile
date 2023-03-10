FROM node:19-alpine3.16
RUN npm install -g pnpm
RUN apk add python3 make g++
EXPOSE 8080
WORKDIR /app
COPY entry.sh /tmp/
