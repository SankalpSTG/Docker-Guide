FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

ENV PORT 4000

CMD ["npm", "run", "start"]