FROM node:14

COPY . /ping-pong-app/

WORKDIR /ping-pong-app

RUN yarn install

ENTRYPOINT ["yarn", "run", "start"]

HEALTHCHECK --interval=5s --timeout=3s CMD curl http://localhost:3000
