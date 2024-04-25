#  base image
FROM node:alpine

# SET workdirectory
WORKDIR /usr/app

# COPY package.json
COPY ./package.json ./

# Install some dependencies
RUN yarn

# Copy all files
COPY ./ ./

# Default command
CMD ["yarn", "start"]