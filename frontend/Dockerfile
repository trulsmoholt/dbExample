FROM node:16

ARG BACKEND_PORT=80

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]