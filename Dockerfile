FROM node:20.12.2-alpine3.18

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

RUN npm i

COPY . .

EXPOSE 5173 

CMD ["npm","run","dev"]