FROM node:24.19.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]