FROM node:18.14-alpine

# Create app directory
WORKDIR /app

COPY . .

RUN npm ci --silent
RUN npm run build

# EXPOSE 5173
