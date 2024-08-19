FROM node:20-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install @sentry/nextjs

COPY  . .

EXPOSE 3000

CMD npm run dev