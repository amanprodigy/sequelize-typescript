# base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install -g typescript
RUN npm install

# start app
COPY ./start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

# add app
COPY . /app/