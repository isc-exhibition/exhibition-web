FROM nginx:1.19.8-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443   
CMD ["nginx", "-g", "daemon off;"]
