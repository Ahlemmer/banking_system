FROM node:20-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts && npm install @sentry/nextjs

COPY  . .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]
