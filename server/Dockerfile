FROM node:15-alpine
WORKDIR /app/server
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start:prod"]    
