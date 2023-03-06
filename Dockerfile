FROM node:19-alpine3.16
RUN npm install -g pnpm
EXPOSE 8080
WORKDIR /app
COPY entry.sh /tmp/
