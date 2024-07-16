FROM node:alpine AS development

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build