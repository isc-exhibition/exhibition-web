FROM node:12-alpine 
WORKDIR /app/server
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
EXPOSE 80
CMD ["node", "app.js"]    
