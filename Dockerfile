#Official Nginx image from DockerHub
FROM nginix:latest

COPY index.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/
COPY images /usr/share/nginx/html/
COPY JavaScript /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

