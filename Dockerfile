FROM nginx:latest
COPY . /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
