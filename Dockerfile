FROM node:20

WORKDIR /app

COPY . .

RUN npm install -g http-server

RUN npm ci --force

COPY build/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN npm run build

EXPOSE 8080

ENV HOST 0.0.0.0

CMD [ "http-server", "dist", "--cors" ]