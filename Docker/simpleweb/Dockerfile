# from base image
FROM node:alpine

# set working directory
WORKDIR /usr/app

# copy package.json to working directory
COPY ./package.json ./

# install dependencies
RUN yarn

# copy all files to working directory
COPY ./ ./

# default command
CMD ["yarn", "start"]