# Stage 1: Build Stage
FROM node:20-alpine3.18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production Stage
FROM node:20-alpine3.18

WORKDIR /app

COPY --from=build /app/package*.json ./

RUN npm install --production

COPY --from=build /app/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]
