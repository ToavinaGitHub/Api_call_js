FROM node:21-alpine3.18

COPY back /app/

COPY package.json /app/

COPY index.html /app/

COPY index.js /app/

WORKDIR /app

RUN npm install

CMD [ "node","server.js" ]