FROM node:12-alpine as builder
WORKDIR /app/frontend
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build 

FROM nginx:1.19.0
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
