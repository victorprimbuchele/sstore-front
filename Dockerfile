# Stage 1
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install --gloal yarn
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2
FROM nginx:1.21.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
