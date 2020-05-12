FROM node:latest

WORKDIR /app

COPY ./backend/package.json ./backend/package-lock.json /app/

RUN npm install -g typescript

RUN npm install

COPY ./compose/backend/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY ./compose/backend/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

COPY ./backend/ /app/

# ENTRYPOINT ["/entrypoint"]